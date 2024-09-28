import React from 'react'
import { LayoutSettingType } from 'layout/LayoutTemplate/types'
type IContext = {
  layoutSetting: LayoutSettingType | null
  setLayoutSetting: (layoutSetting: LayoutSettingType) => void
}
const MyContext = React.createContext<IContext>({
  layoutSetting: null,
  setLayoutSetting: () => { }
})
export default MyContext
