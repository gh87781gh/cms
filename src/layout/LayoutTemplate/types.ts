export enum LayoutModule {
  'a',
  'b'
}

export enum GameMode {
  'a',
  'b'
}

export type GamesViewType = {
  views: 'games'
  title: string
  mode: GameMode
  queries: string
}
export type BannerViewType = {
  views: 'banner'
  title: string
  mode: GameMode
  image: string
}
type ViewTypeMap = {
  'games': GamesViewType
  'banner': BannerViewType
}
export type ViewType = keyof ViewTypeMap

export type LayoutSettingType = {
  layout: LayoutModule
  theme: 'dark' | 'light'
  isShowThemeSwitch: boolean
  primaryColor: string
  btnTextColor: string
  borderRadius: number
  borderRadiusSM: number
  borderRadiusLG: number
  homepageViews: ViewTypeMap[ViewType][],
}

