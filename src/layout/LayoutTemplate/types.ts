export enum LayoutModule {
  'a',
  'b'
}

export enum BannerMode {
  'a',
  'b',
  'c'
}
export enum GamesMode {
  'a',
  'b'
}

export type GamesViewType = {
  views: 'games'
  id: number
  title: string
  mode: GamesMode
  queries: string
}
export type BannerViewType = {
  views: 'banner'
  id: number
  title: string
  mode: BannerMode
  images: string[]
}
export type ViewTypeMap = {
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

