import { useEffect } from 'react'
import { LayoutModule, LayoutSettingType, GamesMode, BannerMode } from 'layout/LayoutTemplate/types'

export const config: LayoutSettingType = {
  layout: LayoutModule.a,
  theme: 'dark',
  isShowThemeSwitch: true,
  cssVars: {
    primaryColor: '#ffa947',
    btnTextColor: '#fff',
    borderRadius: 10,
    borderRadiusSM: 6,
    borderRadiusLG: 12,
  },
  homepageViews: [
    {
      id: 0,
      viewType: 'banner',
      title: 'hero',
      mode: BannerMode.b,
      images: [],
    },
    {
      id: 1,
      viewType: 'games',
      title: 'Top',
      mode: GamesMode.a,
      queries: '',
    },
    {
      id: 2,
      viewType: 'games',
      title: 'Recommend',
      mode: GamesMode.a,
      queries: ''
    },
  ],
}

export const SetCSSVars = ({ config }: { config: LayoutSettingType }) => {
  useEffect(() => {
    if (!config) return

    const setRootVar = (key: string, value: string | number) => {
      if (!value) return
      const r = document.querySelector(':root') as HTMLElement;
      r?.style.setProperty(key, value.toString());
    }

    const { cssVars } = config
    Object.entries(cssVars).forEach(([key, value]) => {
      setRootVar(`--npc-${key}`, value)
    })

  }, [config])

  return null
}
