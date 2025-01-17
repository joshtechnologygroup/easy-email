import React, { useMemo, useEffect } from 'react';
import { Stack } from '../UI/Stack';
import { ToolsPanel } from './components/ToolsPanel';
import { createPortal } from 'react-dom';
import { EASY_EMAIL_EDITOR_ID, FIXED_CONTAINER_ID } from '@/constants';
import { useActiveTab } from '@/hooks/useActiveTab';
import { useEditorContext } from '@/hooks/useEditorContext';
import { ActiveTabKeys } from '../Provider/BlocksProvider';
import { DesktopEmailPreview } from './components/DesktopEmailPreview';
import { MobileEmailPreview } from './components/MobileEmailPreview';
import { EditEmailPreview } from './components/EditEmailPreview';
import { IconFont } from '../IconFont';
import { TabPane, Tabs } from '@/components/UI/Tabs';
import { useEditorProps } from '@/hooks/useEditorProps';
import './index.scss';
import '@/assets/font/iconfont.css';
import { useCallback } from 'react';
import { EventManager, EventType } from '@/utils/EventManager';
(window as any).global = window; // react-codemirror

export const EmailEditor = () => {
  const { height: containerHeight, hideEditMode, hideUndoRedo, headerNode } = useEditorProps();
  const { setActiveTab, activeTab } = useActiveTab();
  const { formState, formHelpers } = useEditorContext();

  const fixedContainer = useMemo(() => {
    return createPortal(<div id={FIXED_CONTAINER_ID} />, document.body);
  }, []);

  const onBeforeChangeTab = useCallback((currentTab: any, nextTab: any) => {
    return EventManager.exec(EventType.ACTIVE_TAB_CHANGE, { currentTab, nextTab });
  }, []);

  const onChangeTab = useCallback((nextTab: string) => {
    setActiveTab(nextTab as any);
  }, [setActiveTab]);

  const headerNodeCallback = useCallback((values, form) => headerNode?.(values, form), [headerNode]);

  useEffect(() => {
    if (hideEditMode) {
      setActiveTab(ActiveTabKeys.PC);
    }
  }, [hideEditMode, setActiveTab]);

  const tabPanelList = useMemo(() => [
    ...!hideEditMode ? [
      <TabPane
        style={{ height: 'calc(100% - 50px)' }}
        tab={(
          <Stack spacing='tight'>
            <IconFont iconName='icon-editor' />
          </Stack>
        )}
        key={ActiveTabKeys.EDIT}
      >
        <EditEmailPreview />
      </TabPane>]
      : [],
    <TabPane
      style={{ height: 'calc(100% - 50px)' }}
      tab={(
        <Stack spacing='tight'>
          <IconFont iconName='icon-desktop' />
        </Stack>
      )}
      key={ActiveTabKeys.PC}
    >
      <DesktopEmailPreview />
    </TabPane>,
    <TabPane
      style={{ height: 'calc(100% - 50px)' }}
      tab={(
        <Stack spacing='tight'>
          <IconFont iconName='icon-mobile' />
        </Stack>
      )}
      key={ActiveTabKeys.MOBILE}
    >
      <MobileEmailPreview />
    </TabPane>], [hideEditMode]);

  return useMemo(
    () => (
      <div
        id={EASY_EMAIL_EDITOR_ID}
        style={{
          display: 'flex',
          flex: '1',
          overflow: 'hidden',
          justifyContent: 'center',
          minWidth: 640,
          height: containerHeight,
        }}
      >
        <Tabs
          activeTab={activeTab}
          onBeforeChange={onBeforeChangeTab}
          onChange={onChangeTab}
          style={{ height: '100%', width: '100%' }}
          tabBarMiddleContent={headerNodeCallback(formState, formHelpers)}
          tabBarExtraContent={(hideEditMode || hideUndoRedo) ? <div style={{ visibility: 'hidden' }}><ToolsPanel /></div> : <ToolsPanel />}
        >
          {tabPanelList}
        </Tabs>

        {fixedContainer}
      </div>
    ),
    [activeTab, containerHeight, fixedContainer, onBeforeChangeTab, onChangeTab, tabPanelList, hideEditMode, hideUndoRedo, headerNodeCallback, formHelpers, formState]
  );
};
