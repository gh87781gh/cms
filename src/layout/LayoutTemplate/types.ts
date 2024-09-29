export enum LayoutModule {
  a = '0',
  b = '1'
}
export enum BannerMode {
  a = '0',
  b = '1',
}
export enum GamesMode {
  a = '0',
  b = '1'
}

export type GamesViewType = {
  viewType: 'games'
  id: number
  title: string
  mode: GamesMode
  queries: string
}
export type BannerViewType = {
  viewType: 'banner'
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

