/* eslint-disable react/jsx-wrap-multilines */
import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import template from '@demo/store/template';
import { useAppSelector } from '@demo/hooks/useAppSelector';
import { useLoading } from '@demo/hooks/useLoading';
import { Button, Message, PageHeader, Select } from '@arco-design/web-react';
import { useQuery } from '@demo/hooks/useQuery';
import { useHistory } from 'react-router-dom';
import { cloneDeep, set, isEqual } from 'lodash';
import { Loading } from '@demo/components/loading';
import mjml from 'mjml-browser';
import { copy } from '@demo/utils/clipboard';
import { useEmailModal } from './components/useEmailModal';
import services from '@demo/services';
import { IconGithub, IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';
import { Liquid } from 'liquidjs';
import {
  BlockAvatarWrapper,
  EmailEditor,
  EmailEditorProvider,
  EmailEditorProviderProps,
  IEmailTemplate,
} from 'easy-email-editor';

import { Stack } from '@demo/components/Stack';
import { pushEvent } from '@demo/utils/pushEvent';
import { FormApi } from 'final-form';
import { UserStorage } from '@demo/utils/user-storage';
import { merge } from 'lodash';
import { useCollection } from './components/useCollection';
import {
  AdvancedType,
  BasicType,
  BlockManager,
  getPageIdx,
  IBlockData,
  JsonToMjml,
  components,
  getChildIdx,
} from 'easy-email-core';
const { BlockRenderer } = components;
import {
  BlockAttributeConfigurationManager,
  BlockMarketManager,
  ExtensionProps,
  StandardLayout,
} from 'easy-email-extensions';
import { AutoSaveAndRestoreEmail } from '@demo/components/AutoSaveAndRestoreEmail';

// Register external blocks
import './components/CustomBlocks';

import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
import blueTheme from '@arco-themes/react-easy-email-theme/css/arco.css?inline';
import purpleTheme from '@arco-themes/react-easy-email-theme-purple/css/arco.css?inline';
import greenTheme from '@arco-themes/react-easy-email-theme-green/css/arco.css?inline';
import { useState } from 'react';
import { testMergeTags } from './testMergeTags';
import { useMergeTagsModal } from './components/useMergeTagsModal';

import { useWindowSize } from 'react-use';
import { CustomBlocksType } from './components/CustomBlocks/constants';
import localesData from 'easy-email-editor/lib/locales.json';
console.log(localesData);

const defaultCategories: ExtensionProps['categories'] = [
  {
    label: 'Content',
    active: true,
    blocks: [
      {
        type: BasicType.CUSTOM_TEXT,
        payload: { attributes: { padding: '10px 10px 10px 10px' } },
      },
      {
        type: BasicType.IMAGE,
        payload: { attributes: { padding: '0px 0px 0px 0px' } },
      },
      {
        type: BasicType.BUTTON,
        payload: {
          attributes: { 'inner-padding': '8px 16px', 'background-color': '#5F55D0' },
        },
      },
      {
        type: BasicType.NEWS,
      },
      {
        type: BasicType.HEADING,
      },
      {
        type: BasicType.ROUNDED_BUTTON,
      },
      {
        type: BasicType.POST_CARD,
      },
      {
        type: BasicType.THANKYOU_CARD,
      },
      {
        type: BasicType.SPACER,
      },
      {
        type: BasicType.DIVIDER,
      },
      {
        type: BasicType.QUOTE_CARD,
      },
    ],
  },
];

const imageCompression = import('browser-image-compression');

const fontList = [
  'Arial',
  'Tahoma',
  'Verdana',
  'Times New Roman',
  'Courier New',
  'Georgia',
  'Lato',
  'Montserrat',
  '黑体',
  '仿宋',
  '楷体',
  '标楷体',
  '华文仿宋',
  '华文楷体',
  '宋体',
  '微软雅黑',
].map(item => ({ value: item, label: item }));

export default function Editor() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<'blue' | 'green' | 'purple'>('blue');
  const dispatch = useDispatch();
  const history = useHistory();
  const templateData = useAppSelector('template');
  const [locale, setLocale] = useState('en');
  const [t1, setT1] = useState(false);
  const { addCollection, removeCollection, collectionCategory } = useCollection();

  const { width } = useWindowSize();

  const smallScene = width < 1400;

  const { openModal, modal } = useEmailModal();
  const { id, userId } = useQuery();
  const loading = useLoading(template.loadings.fetchById);
  const {
    modal: mergeTagsModal,
    openModal: openMergeTagsModal,
    mergeTags,
    setMergeTags,
  } = useMergeTagsModal(testMergeTags);

  const isSubmitting = useLoading([
    template.loadings.create,
    template.loadings.updateById,
  ]);

  useEffect(() => {
    if (collectionCategory) {
      BlockMarketManager.addCategories([collectionCategory]);
      return () => {
        BlockMarketManager.removeCategories([collectionCategory]);
      };
    }
  }, [collectionCategory]);

  useEffect(() => {
    BlockManager.registerBlocks({
      [BasicType.POD_CUSTOM_PAGE]: {
        name: 'Page',
        type: BasicType.POD_CUSTOM_PAGE,
        create: payload => {
          const defaultData = {
            type: BasicType.POD_CUSTOM_PAGE,
            data: {},
            attributes: {
              'background-color': '#efeeea',
              width: '600px',
            },
            children: [],
          };
          return merge(defaultData, payload);
        },
        validParentType: [],
        render(params) {
          const { data } = params;
          return (
            <>
              {`<mjml>\n <mj-head>\n <mj-attributes>\n <!-- Resets -->\n<mj-section padding="0"></mj-section>\n<mj-column padding="0"></mj-column>\n<mj-text padding="0"></mj-text>\n<mj-image font-size="0" padding="0"></mj-image>\n<mj-social-element padding="0"></mj-social-element>\n<mj-social padding="0"></mj-social>\n<mj-hero padding="0"></mj-hero>\n<mj-wrapper padding="0"></mj-wrapper>\n<mj-divider padding="0"></mj-divider>\n<mj-table padding="0"></mj-table>\n<mj-button padding="0"></mj-button>\n\n \n </mj-attributes>\n <mj-style inline="inline">\n body {\n margin: 0;\n padding: 0;\n word-spacing: normal;\n mso-line-height-rule: exactly;\n font-family: Arial, Helvetica, sans-serif;\n letter-spacing: normal;\n }\n\n a {\n text-decoration: none;\n }\n\n p {\n margin: 0;\n }\n\n .width-auto table {\n width: auto;\n }\n\n .ml-auto table {\n margin-left: auto;\n }\n\n .container {\n max-width: 450px !important;\n }\n\n .mw-52 {\n max-width: 52px;\n }\n\n .btn-block a {\n display: block !important;padding: 6px 12px\n }\n\n\n </mj-style>\n <mj-style>\n .divider {\n border-top: 1px dashed #DEDEDE;\n }\n .confetti-image > table {\n background-color: #2A61F0;\n background-image: url("https://notification-dev-static.s3.amazonaws.com/Calyx/images/confetti.png") !important;\n background-size: 100% 130px !important;\n background-repeat: no-repeat !important;\n background-position: center top !important;\n }\n\n @media only screen and (max-width: 360px) {\n .text-center-sm {\n width: 100% !important;\n text-align: center !important;\n }\n }\n </mj-style>\n
 </mj-head>\n <mj-body>\n <mj-section text-align="left" background-color="#F6F6F6">\n <mj-raw>\n <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" ><tr><td style="font-size: 0px; padding: 12px 16px;background-color:#F4F4F3" ><![endif]-->\n <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size: 0;background-color:#F4F4F3">\n <div style="padding: 12px 16px">\n <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="568" ><tr><td width="284" style="vertical-align:middle;" ><![endif]-->\n <div class="mj-column-per-50 mj-outlook-group-fix text-center-sm" style="min-width: 146px;font-size: 0; display: inline-block; vertical-align: middle; width: 49.9%;">\n <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="284" style="width:100%">\n <tr><td>\n <p style="margin: 0; word-break: break-word; font-size: 14px; font-weight: 400; line-height: 20px; color: #333333;">\n \n\n \n </p>\n </td></tr>\n </table>\n </div>\n <!--[if mso | IE]></td><td width="284" style="vertical-align:middle;" align="right" ><![endif]-->\n <div class="mj-column-per-50 mj-outlook-group-fix text-center-sm" style="min-width: 131px;font-size: 0; text-align: right; display: inline-block; vertical-align: middle; width: 50%;">\n <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="display: inline-table;">\n <tr>\n <td style="vertical-align:middle;" valign="middle">\n <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="13" style="width:100%;">\n <tr>\n <td style="font-size:0;height:13px;vertical-align:middle;width:12px;">\n <img alt="calendar" height="13" src="https://notification-dev-static.s3.amazonaws.com/Calyx/images/calendar.png" style="display:block;" width="12">\n </td>\n </tr>\n </table>\n </td>\n <td style="padding: 0 0 0 5px;vertical-align: middle;" valign="middle">\n <span style="word-break: break-word; color: #000000; opacity: 0.6; font-size: 12px; font-weight: 400;line-height: 20px;">Thursday 06 Apr 2023</span>\n </td>\n </tr>\n </table>\n </div>\n <!--[if mso | IE]></td></tr></table><![endif]-->\n </div>\n </div>\n <!--[if mso | IE]></td></tr></table><![endif]-->\n </mj-raw>\n </mj-section>\n\n <mj-section text-align="left" background-color="#F6F6F6">\n <mj-raw>\n <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td style="background-color: #FFFFFF;" ><![endif]-->\n <div class="mj-column-per-100 mj-outlook-group-fix" style="background-color: #FFFFFF; font-size: 0px">\n <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="padding: 0 0 24px;vertical-align:top;width:507px;" ><![endif]-->\n <div class="mj-outlook-group-fix" style="padding: 30px 0 24px; font-size: 0; display: inline-block; vertical-align: top; width: 83.4%">\n <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td style="padding-top: 30px;" align="left"><![endif]-->\n <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="507" style="width: 100%;">\n <tr>\n <td style="width:72px;vertical-align: top;padding: 0px 16px;" valign="middle">\n <p style="width: 72px; height: 72px; margin: 0px">\n <span style="display:inline-block;height:72px;line-height:72px;vertical-align:middle"></span>\n <img alt="company-logo" height="auto" src="https://test-bucket-calyx.s3.amazonaws.com/thumbnails/college_logos/cc79f340-ca3a-11ed-ac53-f9b48f0ab15f..0x150_q85_pad_image_size_ratio_const-dashboard_and_mail.png" style="border: 0;vertical-align: middle; outline: none; text-decoration: none; height: auto; width: 99.5%; font-size: 0" width="72" />\n </p>\n </td>\n <td valign="middle">\n <p style="margin: 0; word-break: break-word; font-size: 24px; font-weight: 500; line-height: 32px; color: #111111">Robert Bosch Engineering &amp; Business Solutions PVT</p>\n </td>\n </tr>\n </table>\n <!--[if mso | IE]></td></tr></table><![endif]-->\n </div>\n <!--[if mso | IE]></td><td style="vertical-align:top;width:93px;" ><![endif]-->\n <div class="mj-outlook-group-fix" style="font-size: 0; display: inline-block; vertical-align: top; width: 16.5%">\n <table cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; border-collapse: collapse; border-spacing: 0" width="93" border="0">\n <tr>\n <td align="right">\n <img height="auto" src="https://notification-dev-static.s3.amazonaws.com/Calyx/images/header-curve.png" style="border: 0; display: block; outline: none; text-decoration: none; height: auto; width: 100%; font-size: 0" width="74" />\n </td>\n </tr>\n </table>\n </div>\n <!--[if mso | IE]></td></tr></table><![endif]-->\n </div>\n <!--[if mso | IE]></td></tr></table><![endif]-->\n </mj-raw>\n</mj-section>\n\n\n <!-- Main Area-->\n \n \n <mj-section background-color="#F6F6F6">\n <mj-column>\n <mj-spacer height="20px" />\n </mj-column>\n </mj-section>\n\n \n`}
              {data.children.map((child, index) => (
                <BlockRenderer
                  {...params}
                  idx={getChildIdx(getPageIdx(), index)}
                  key={index}
                  data={child}
                />
              ))}
              {
                '\n \n\n \n\n <!-- Button Area starts-->\n \n\n \n \n\n \n \n\n <mj-raw></mj-raw>\n \n <mj-section background-color="#F6F6F6">\n <mj-column>\n <mj-spacer height="40px" />\n </mj-column>\n </mj-section>\n\n <mj-raw></mj-raw>\n <mj-wrapper padding="16px 16px 12px" background-color="#F6F6F6">\n <mj-section>\n <mj-column vertical-align="middle">\n <mj-image alt="POD logo" align="center" src="https://notification-dev-static.s3.amazonaws.com/Calyx/images/pod-logo.png" width="132px" height="32px"></mj-image>\n </mj-column>\n </mj-section>\n </mj-wrapper>\n <mj-raw></mj-raw>\n\n <mj-section padding="16px" background-color="#EDEDE9">\n <mj-column>\n <mj-text font-size="10px" line-height="14px" font-weight="400" color="#666666" padding-bottom="12px">\n <span style="font-weight: 700;">Confidentiality Notice:</span>\n This communication is intended solely for the person or organization to whom it is addressed and may be confidential and/or legally privileged.\n If you are not the intended recipient, you must not show it to anyone, copy, distribute, or take any action in reliance on it.\n If you have received this message in error, please inform us at <a href="mailto:" style="text-decoration: none; color: #0A71D1"></a> and delete this email from your system.\n </mj-text>\n <mj-text font-size="10px" line-height="14px" font-weight="400" color="#666666" padding-bottom="12px">\n <span style="font-weight: 700;">Prevent Unauthorized Access Notice:</span>\n We have enabled auto-login for your convenience, you are strongly advised not to forward this email or share links provided in the email to protect your account from unauthorized access.\n Click here to read our Privacy Policy. <a href="" style="color:#0A71D1">Click here to read our Privacy Policy.</a>\n </mj-text>\n </mj-column>\n </mj-section>\n </mj-body>\n</mjml>'
              }
            </>
          );
        },
      },
    });
    // BlockAttributeConfigurationManager.add({
    // [BasicType.NEWSLETTER_PAGE]: () => <></>,
    // });

    setTimeout(() => {
      setT1(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (id) {
      if (!userId) {
        UserStorage.getAccount().then(account => {
          dispatch(template.actions.fetchById({ id: +id, userId: account.user_id }));
        });
      } else {
        dispatch(template.actions.fetchById({ id: +id, userId: +userId }));
      }
    } else {
      dispatch(template.actions.fetchDefaultTemplate(undefined));
    }

    return () => {
      dispatch(template.actions.set(null));
    };
  }, [dispatch, id, userId]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.removeAttribute('arco-theme');
    }
  }, [isDarkMode]);

  const onUploadImage = async (blob: Blob) => {
    const compressionFile = await (
      await imageCompression
    ).default(blob as File, {
      maxWidthOrHeight: 1440,
    });
    return services.common.uploadByQiniu(compressionFile);
  };

  const onChangeTheme = useCallback(t => {
    setTheme(t);
  }, []);

  const onChangeMergeTag = useCallback((path: string, val: any) => {
    setMergeTags(old => {
      const newObj = cloneDeep(old);
      set(newObj, path, val);
      return newObj;
    });
  }, []);

  const onExportHtml = (values: IEmailTemplate) => {
    pushEvent({ event: 'HtmlExport' });
    const html = mjml(
      JsonToMjml({
        data: values.content,
        mode: 'production',
        context: values.content,
        dataSource: mergeTags,
      }),
      {
        beautify: true,
        validationLevel: 'soft',
      },
    ).html;

    copy(html);
    Message.success('Copied to pasteboard!');
  };

  const onExportMJML = (values: IEmailTemplate) => {
    values.content.type = BasicType.EMPTY_PAGE;
    const html = JsonToMjml({
      data: values.content,
      mode: 'production',
      context: values.content,
      dataSource: mergeTags,
    });

    copy(html);
    pushEvent({ event: 'MJMLExport', payload: { values, mergeTags } });
    Message.success('Copied to pasteboard!');
  };

  const initialValues: IEmailTemplate | null = useMemo(() => {
    if (!templateData || !t1) return null;
    const sourceData = cloneDeep(templateData.content) as IBlockData;
    return {
      ...templateData,
      content: sourceData, // replace standard block
    };
  }, [t1, templateData]);

  const onSubmit = useCallback(
    async (
      values: IEmailTemplate,
      form: FormApi<IEmailTemplate, Partial<IEmailTemplate>>,
    ) => {
      pushEvent({ event: 'EmailSave' });
      if (id) {
        const isChanged = !(
          isEqual(initialValues?.content, values.content) &&
          isEqual(initialValues?.subTitle, values?.subTitle) &&
          isEqual(initialValues?.subject, values?.subject)
        );

        if (!isChanged) {
          Message.success('Updated success!');
          form.restart(values);
          return;
        }
        dispatch(
          template.actions.updateById({
            id: +id,
            template: values,
            success() {
              Message.success('Updated success!');
              form.restart(values);
            },
          }),
        );
      } else {
        dispatch(
          template.actions.create({
            template: values,
            success(id, newTemplate) {
              Message.success('Saved success!');
              form.restart(newTemplate);
              history.replace(`/editor?id=${id}`);
            },
          }),
        );
      }
    },
    [dispatch, history, id, initialValues],
  );

  const onBeforePreview: EmailEditorProviderProps['onBeforePreview'] = useCallback(
    (html: string, mergeTags) => {
      const engine = new Liquid();
      const tpl = engine.parse(html);
      return engine.renderSync(tpl, mergeTags);
    },
    [],
  );

  const themeStyleText = useMemo(() => {
    if (theme === 'green') return greenTheme;
    if (theme === 'purple') return purpleTheme;
    return blueTheme;
  }, [theme]);

  if (!templateData && loading) {
    return (
      <Loading loading={loading}>
        <div style={{ height: '100vh' }} />
      </Loading>
    );
  }

  if (!initialValues) return null;

  return (
    <div>
      <style>{themeStyleText}</style>
      <EmailEditorProvider
        key={id}
        height={'calc(100vh - 68px)'}
        data={initialValues}
        // interactiveStyle={{
        // hoverColor: '#78A349',
        // selectedColor: '#1890ff',
        // }}
        // onAddCollection={addCollection}
        // onRemoveCollection={({ id }) => removeCollection(id)}
        onUploadImage={onUploadImage}
        fontList={fontList}
        onSubmit={onSubmit}
        onChangeMergeTag={onChangeMergeTag}
        autoComplete
        // enabledLogic
        // enabledMergeTagsBadge
        dashed={false}
        mergeTags={mergeTags}
        mergeTagGenerate={tag => `{{${tag}}}`}
        onBeforePreview={onBeforePreview}
        socialIcons={[]}
        locale={localesData[locale]}
        disableBlockOptions={false}
      >
        {({ values }, { submit }) => {
          return (
            <>
              <PageHeader
                style={{ background: 'var(--color-bg-2)' }}
                backIcon
                title='Edit'
                onBack={() => history.push('/')}
                extra={
                  <Stack alignment='center'>
                    <Button
                      onClick={() => setIsDarkMode(v => !v)}
                      shape='circle'
                      type='text'
                      icon={isDarkMode ? <IconMoonFill /> : <IconSunFill />}
                    ></Button>

                    <Select
                      onChange={onChangeTheme}
                      value={theme}
                    >
                      <Select.Option value='blue'>Blue</Select.Option>
                      <Select.Option value='green'>Green</Select.Option>
                      <Select.Option value='purple'>Purple</Select.Option>
                    </Select>
                    <Select
                      onChange={setLocale}
                      value={locale}
                    >
                      <Select.Option value='en'>English</Select.Option>
                      <Select.Option value='zh-Hans'>中文简体</Select.Option>
                      <Select.Option value='ja'>Japanese</Select.Option>
                      <Select.Option value='it'>Italian</Select.Option>
                    </Select>

                    <Button onClick={openMergeTagsModal}>Update mergeTags</Button>

                    <Button onClick={() => onExportMJML(values)}>Export MJML</Button>

                    <Button onClick={() => onExportHtml(values)}>Export html</Button>

                    <Button onClick={() => openModal(values, mergeTags)}>
                      Send test email
                    </Button>
                    <Button
                      loading={isSubmitting}
                      type='primary'
                      onClick={() => submit()}
                    >
                      Save
                    </Button>
                    <a
                      target='_blank'
                      href='https://github.com/m-Ryan/easy-email'
                      style={{
                        color: '#000',
                        fontSize: 28,
                        width: 33,
                        height: 33,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                      }}
                      onClick={() => pushEvent({ event: 'Github' })}
                    >
                      <IconGithub />
                    </a>
                  </Stack>
                }
              />
              <StandardLayout
                showEditPanel={true}
                showBlocksTab={true}
                showLayersTab={true}
                compact={false}
                categories={defaultCategories}
                showConfigurationsPanel={true}
              >
                <EmailEditor />
              </StandardLayout>
              <AutoSaveAndRestoreEmail />
            </>
          );
        }}
      </EmailEditorProvider>
      {modal}
      {mergeTagsModal}
    </div>
  );
}

function replaceStandardBlockToAdvancedBlock(blockData: IBlockData) {
  const map = {
    [BasicType.TEXT]: AdvancedType.TEXT,
    [BasicType.BUTTON]: AdvancedType.BUTTON,
    [BasicType.IMAGE]: AdvancedType.IMAGE,
    [BasicType.DIVIDER]: AdvancedType.DIVIDER,
    [BasicType.SPACER]: AdvancedType.SPACER,
    [BasicType.SOCIAL]: AdvancedType.SOCIAL,
    [BasicType.ACCORDION]: AdvancedType.ACCORDION,
    [BasicType.CAROUSEL]: AdvancedType.CAROUSEL,
    [BasicType.NAVBAR]: AdvancedType.NAVBAR,
    [BasicType.WRAPPER]: AdvancedType.WRAPPER,
    [BasicType.SECTION]: AdvancedType.SECTION,
    [BasicType.GROUP]: AdvancedType.GROUP,
    [BasicType.COLUMN]: AdvancedType.COLUMN,
  };

  if (map[blockData.type]) {
    blockData.type = map[blockData.type];
  }
  blockData.children.forEach(replaceStandardBlockToAdvancedBlock);
  return blockData;
}
