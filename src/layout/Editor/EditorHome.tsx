'use client'

import { useContext, useState } from 'react'
import './index.scss'
import { generate } from '@ant-design/colors'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { match } from 'ts-pattern'
import {
  GamesViewType,
  BannerViewType,
  BannerMode
} from 'layout/LayoutTemplate/types'
import { MyContext } from 'storage'
import {
  FormGroup,
  FormGroupContent,
  Select,
  Checkbox,
  InputNumber,
  Input
} from 'components/editor/Form'
import ColorPicker from 'components/editor/ColorPicker'
import Switch from 'components/Switch'
import {
  LayoutSettingType,
  ViewTypeMap,
  ViewType
} from 'layout/LayoutTemplate/types'

import { Container } from 'components/editor/Dnd'

export default function EditorHome() {
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }
  const [activeId, setActiveId] = useState<number | null>(null)

  const setViews = (views: ViewTypeMap[ViewType][]) => {
    setLayoutSetting((prev: LayoutSettingType) => ({
      ...prev,
      homepageViews: views
    }))
  }

  const renderEditorViewBanner = (view: BannerViewType) => {
    const { title, mode, images } = view

    const onChange = (key: keyof BannerViewType, value: string | number) => {
      const oldViews = [...layoutSetting.homepageViews]
      const viewIndex = oldViews.findIndex((view) => view.id === activeId)
      if (viewIndex === -1) return
      oldViews[viewIndex] = { ...oldViews[viewIndex], [key]: value }
      setViews(oldViews)
    }
    return (
      <>
        <FormGroup>
          <label>Banner Mode</label>
          <Select
            value={mode}
            onChange={(value) => onChange('mode', value)}
            options={[
              {
                label: 'Banner a',
                value: BannerMode.a
              },
              {
                label: 'Banner b',
                value: BannerMode.b
              }
            ]}
          />
        </FormGroup>
      </>
    )
  }
  const renderEditorViewGames = (view: GamesViewType) => {
    return null
  }

  const renderEditorView = (activeId: number) => {
    const view = layoutSetting.homepageViews.find(
      (view) => view.id === activeId
    )
    if (!view) return null

    return match(view.viewType)
      .with('banner', () => renderEditorViewBanner(view as BannerViewType))
      .with('games', () => renderEditorViewGames(view as GamesViewType))
      .exhaustive()
  }

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
      <div style={{ marginTop: '2rem' }}>
        {activeId !== null && renderEditorView(activeId)}
      </div>
    </>
  )
}
