import { useContext, useMemo } from 'react'
import {
  BannerViewType,
  LayoutSettingType,
  BannerMode,
  ViewTypeMap,
  ViewType
} from 'layout/LayoutTemplate/types'
import { FormGroup, Select } from 'components/editor/Form'
import { MyContext } from 'storage'
import Upload from 'components/editor/Upload'

type PropsType = {
  view: BannerViewType
  activeId: number
}

export default function EditorHomeView(props: PropsType) {
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }

  const setViews = (views: ViewTypeMap[ViewType][]) => {
    setLayoutSetting((prev: LayoutSettingType) => ({
      ...prev,
      homepageViews: views
    }))
  }

  const onChange = (key: keyof BannerViewType, value: string | number) => {
    const oldViews = [...layoutSetting.homepageViews]
    const viewIndex = oldViews.findIndex((view) => view.id === props.activeId)
    if (viewIndex === -1) return
    oldViews[viewIndex] = { ...oldViews[viewIndex], [key]: value }
    setViews(oldViews as BannerViewType[])
  }

  const setSrc = (index: number, src: string) => {
    const oldViews = [...layoutSetting.homepageViews]
    const viewIndex = oldViews.findIndex((view) => view.id === props.activeId)
    if (viewIndex === -1) return
    ;(oldViews[viewIndex] as BannerViewType).images[index] = src
    setViews(oldViews as BannerViewType[])
  }

  const fullImages = useMemo(() => {
    const needAddImages =
      props.view.mode === BannerMode.a
        ? 3 - props.view.images.length
        : BannerMode.b
        ? 5 - props.view.images.length
        : 0
    return [...props.view.images, ...Array(needAddImages).fill('')]
  }, [props])

  return (
    <>
      <FormGroup>
        <label>Banner Mode</label>
        <Select
          value={props.view.mode}
          onChange={(value) => onChange('mode', value)}
          options={Object.keys(BannerMode).map((key) => ({
            label: key,
            value: BannerMode[key as keyof typeof BannerMode]
          }))}
        />
      </FormGroup>
      <FormGroup>
        <label>Banner Images</label>
        {fullImages.map((src: string, index: number) => (
          <Upload
            key={index}
            src={src}
            setSrc={(src: string) => setSrc(index, src)}
          />
        ))}
      </FormGroup>
    </>
  )
}
