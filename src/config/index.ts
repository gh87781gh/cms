import { LayoutModule, LayoutSettingType, GamesMode, BannerMode } from 'layout/LayoutTemplate/types'

const config: LayoutSettingType = {
  layout: LayoutModule.a,
  theme: 'dark',
  isShowThemeSwitch: true,
  primaryColor: '#ffa947',
  btnTextColor: '#fff',
  borderRadius: 10, //Border radius of base components
  borderRadiusSM: 4, //SM size border radius, used in small size components, such as Button, Input, Select and other input components in small size
  borderRadiusLG: 16, //LG size border radius, used in some large border radius components, such as Card, Modal and other components.
  homepageViews: [
    {
      id: 0,
      views: 'banner',
      title: 'hero',
      mode: BannerMode.b,
      images: [],
    },
    {
      id: 1,
      views: 'games',
      title: 'Top',
      mode: GamesMode.a,
      queries: '',
    },
    {
      id: 2,
      views: 'games',
      title: 'Recommend',
      mode: GamesMode.a,
      queries: ''
    },
  ],
}
export default config