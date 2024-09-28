export type LayoutSettingType = {
  layout: LayoutModule
  theme: 'dark' | 'light'
  isShowThemeSwitch: boolean
  primaryColor: string
}

export enum LayoutModule {
  'a',
  'b'
}
