export type LayoutSettingType = {
  layout: LayoutModule
  theme: 'dark' | 'light'
  isShowThemeSwitch: boolean
  primaryColor: string
  btnTextColor: string
  borderRadius: number
  borderRadiusSM: number
  borderRadiusLG: number
}

export enum LayoutModule {
  'a',
  'b'
}
