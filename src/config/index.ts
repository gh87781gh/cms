import styles from 'app/variablesExport.module.scss'
import { LayoutModule, LayoutSettingType } from 'layout/LayoutTemplate/types'

const config: LayoutSettingType = {
  layout: LayoutModule.a,
  theme: 'dark',
  isShowThemeSwitch: true,
  primaryColor: styles.colorPrimary
}
export default config