import { LayoutModule, LayoutSettingType } from 'layout/LayoutTemplate/types'

const config: LayoutSettingType = {
  layout: LayoutModule.a,
  theme: 'dark',
  isShowThemeSwitch: true,
  primaryColor: '#ffa947',
  btnTextColor: '#fff',
  borderRadius: 6, //Border radius of base components
  borderRadiusSM: 4, //SM size border radius, used in small size components, such as Button, Input, Select and other input components in small size
  borderRadiusLG: 8, //LG size border radius, used in some large border radius components, such as Card, Modal and other components.
}
export default config