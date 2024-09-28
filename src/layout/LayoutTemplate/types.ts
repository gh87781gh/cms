export type LayoutSettingType = {
  theme: 'dark' | 'light'
  layout: LayoutModule
}

export enum LayoutModule {
  'headerFirst',
  'sidebarFirst'
}
