'use client'

import { useContext, useState, useCallback, useMemo } from 'react'
import './index.scss'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { match } from 'ts-pattern'

import { MyContext } from 'storage'
import {
  GamesViewType,
  BannerViewType,
  LayoutSettingType,
  ViewTypeMap,
  ViewType
} from 'layout/LayoutTemplate/types'
import { Container } from 'components/editor/Dnd'
import EditorHomeView from './EditorHomeView'

export default function EditorHome() {
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }
  const [activeId, setActiveId] = useState<number | null>(null)
  const activeView = useMemo(() => {
    return layoutSetting.homepageViews.find((view) => view.id === activeId)
  }, [layoutSetting, activeId])

  const setViews = (views: ViewTypeMap[ViewType][]) => {
    setLayoutSetting((prev: LayoutSettingType) => ({
      ...prev,
      homepageViews: views
    }))
  }

  const renderEditorViewGames = (view: GamesViewType) => {
    console.log('view', view)
    return null
  }

  const renderEditorView = useCallback(() => {
    if (!activeView || activeId === null) return null

    return match(activeView.viewType)
      .with('banner', () => (
        <EditorHomeView
          view={activeView as BannerViewType}
          activeId={activeId as number}
        />
      ))
      .with('games', () => renderEditorViewGames(activeView as GamesViewType))
      .exhaustive()
  }, [activeView, activeId])

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Container
          items={layoutSetting.homepageViews}
          setItems={setViews as React.Dispatch<React.SetStateAction<any[]>>}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </DndProvider>
      <div style={{ marginTop: '2rem' }}>{renderEditorView()}</div>
    </>
  )
}
