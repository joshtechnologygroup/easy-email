import { Card, ConfigProvider, Layout, Message, Tabs } from '@arco-design/web-react';
import { getShadowRoot, useEditorContext, useEditorProps, useFocusIdx } from 'easy-email-editor';
import React, { useEffect } from 'react';
import { InteractivePrompt } from '../InteractivePrompt';
import styles from './index.module.scss';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { MergeTagBadgePrompt } from '@extensions/MergeTagBadgePrompt';
import { EditPanel } from '../EditPanel';
import { ConfigurationPanel } from '@extensions/ConfigurationPanel';
import {
  ExtensionProps,
  ExtensionProvider,
} from '@extensions/components/Providers/ExtensionProvider';
import { AdvancedType } from 'easy-email-core';
import { RichTextField } from '../components/Form/RichTextField';
import { SelectionRangeProvider } from '@extensions/AttributePanel/components/provider/SelectionRangeProvider';
import { PresetColorsProvider } from '@extensions/AttributePanel/components/provider/PresetColorsProvider';
import ReactDOM from 'react-dom';

const defaultCategories: ExtensionProps['categories'] = [
  {
    label: 'Content',
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: '0px 0px 0px 0px' } },
      },
      {
        type: AdvancedType.BUTTON,
      },
      {
        type: AdvancedType.SOCIAL,
      },
      {
        type: AdvancedType.DIVIDER,
      },
      {
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
      },
    ],
  },
  {
    label: 'Layout',
    active: true,
    displayType: 'column',
    blocks: [
      {
        title: '2 columns',
        payload: [
          ['50%', '50%'],
          ['33%', '67%'],
          ['67%', '33%'],
          ['25%', '75%'],
          ['75%', '25%'],
        ],
      },
      {
        title: '3 columns',
        payload: [
          ['33.33%', '33.33%', '33.33%'],
          ['25%', '25%', '50%'],
          ['50%', '25%', '25%'],
        ],
      },
      {
        title: '4 columns',
        payload: [[['25%', '25%', '25%', '25%']]],
      },
    ],
  },
];

export const StandardLayout: React.FC<ExtensionProps> = props => {
  const { height: containerHeight } = useEditorProps();
  const {
    showSourceCode = true,
    compact = true,
    showEditPanel = true,
    showConfigurationsPanel = true,
    categories = defaultCategories
  } = props;

  const { focusIdx, setFocusIdx } = useFocusIdx();
  const { initialized } = useEditorContext();
  const shadowRoot = getShadowRoot();

  useEffect(() => {
    if (!compact) {
      setFocusIdx('');
    }
  }, [compact, setFocusIdx]);

  return (
    <ExtensionProvider
      {...props}
      categories={categories}
    >
      <ConfigProvider locale={enUS}>
        <Card
          style={{ padding: 0 }}
          bodyStyle={{
            padding: 0,
            height: containerHeight,
            overflow: 'hidden',
          }}
        >
          <Layout
            className={styles.StandardLayout}
            style={{
              display: 'flex',
              width: '100%',
              overflow: 'hidden',
              flexDirection: 'row',
            }}
          >
            {compact && showEditPanel && <EditPanel />}
            <Layout style={{ height: containerHeight, flex: 1 }}>{props.children}</Layout>
            {!compact && showEditPanel && <EditPanel />}
            {initialized && !showConfigurationsPanel && (
              <SelectionRangeProvider>
                <PresetColorsProvider>
                  <div style={{ position: 'absolute' }}>
                    <RichTextField idx={focusIdx} />
                  </div>
                  {!!shadowRoot &&
                    ReactDOM.createPortal(
                      <style>
                        {`
                        .email-block [contentEditable="true"],
                        .email-block [contentEditable="true"] * {
                          outline: none;
                          cursor: text;
                        }
                        `}
                      </style>,
                      shadowRoot as any,
                    )}
                </PresetColorsProvider>
              </SelectionRangeProvider>
            )}
            {showConfigurationsPanel && (compact ? (
              <Layout.Sider
                style={{
                  height: containerHeight,
                  minWidth: 300,
                  maxWidth: 350,
                  width: 350,
                }}
              >
                <ConfigurationPanel
                  compact={compact}
                  height={containerHeight}
                  showSourceCode={showSourceCode}
                />
              </Layout.Sider>
            ) : (
              <Layout.Sider style={{ width: 0, overflow: 'hidden' }} />
            ))}
          </Layout>
        </Card>
        <InteractivePrompt />
        <MergeTagBadgePrompt />
      </ConfigProvider>
    </ExtensionProvider>
  );
};
