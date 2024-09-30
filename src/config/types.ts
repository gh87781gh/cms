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

export type CSSVarsType = {
  primaryColor: string
  btnTextColor: string
  borderRadius: string //Border radius of base components
  borderRadiusSM: string //Border radius of small size components like Button, Input, Select
  borderRadiusLG: string //Border radius of large size components like Card, Modal, Drawer
  layoutHeaderBgcDark: string
  layoutHeaderBgcLight: string
  layoutSidebarBgcDark: string
  layoutSidebarBgcLight: string
  layoutArticleBgcDark: string
  layoutArticleBgcLight: string
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
  cssVars: CSSVarsType
  homepageViews: ViewTypeMap[ViewType][]
}

