import { LayoutModule, LayoutSettingType, GameMode } from 'layout/LayoutTemplate/types'

const config: LayoutSettingType = {
  layout: LayoutModule.a,
  theme: 'dark',
  isShowThemeSwitch: true,
  primaryColor: '#ffa947',
  btnTextColor: '#fff',
  borderRadius: 6, //Border radius of base components
  borderRadiusSM: 4, //SM size border radius, used in small size components, such as Button, Input, Select and other input components in small size
  borderRadiusLG: 8, //LG size border radius, used in some large border radius components, such as Card, Modal and other components.
  homepageViews: [
    {
      views: 'games',
      title: 'Top',
      mode: GameMode.a,
      queries: '?gameTags%5B0%5D=top&pcEnable=true&sizePerPage=28&pageNumber=1',
    },
    {
      views: 'games',
      title: 'Recommend',
      mode: GameMode.a,
      queries: '?gameTags%5B0%5D=recommend&pcEnable=true&sizePerPage=28&pageNumber=1'
    },
  ],
}
export default config