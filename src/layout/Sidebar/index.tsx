'use client'

import { useContext } from 'react'
import './index.scss'
import cx from 'utils/cx'
import Link from 'next/link'
import { match } from 'ts-pattern'

import { LayoutModule, LayoutSettingType } from 'layout/LayoutTemplate/types'
import { MyContext } from 'storage'
import Switch from 'components/Switch'
import SidebarA from './Sidebar.A'
import SidebarB from './Sidebar.B'

export default function Sidebar() {
  const { layoutSetting, setLayoutSetting } = useContext(MyContext) as {
    layoutSetting: LayoutSettingType
    setLayoutSetting: React.Dispatch<React.SetStateAction<LayoutSettingType>>
  }
  const theme = layoutSetting?.theme
  const layout = layoutSetting?.layout

  const renderMenu = () => {
    return (
      <ul className='sidebar-list'>
        <li>
          <Link href='/' className={theme}>
            Sports
          </Link>
        </li>
        <li>
          <Link href='/' className={theme}>
            Casino
          </Link>
        </li>
        <li>
          <Link href='/' className={theme}>
            Promotions
          </Link>
        </li>
        <li>
          <Link href='/' className={theme}>
            VIP
          </Link>
        </li>
      </ul>
    )
  }
  const renderSwitchTheme = () => {
    return (
      <>
        Light{' '}
        <Switch
          checked={theme === 'dark'}
          onChange={(checked) =>
            setLayoutSetting((prev) => ({
              ...prev,
              theme: checked ? 'dark' : 'light'
            }))
          }
        />{' '}
        Dark
      </>
    )
  }
  return match(layout)
    .with(LayoutModule.a, () => (
      <SidebarA
        theme={theme}
        renderMenu={renderMenu}
        renderSwitchTheme={renderSwitchTheme}
      />
    ))
    .with(LayoutModule.b, () => (
      <SidebarB
        theme={theme}
        renderMenu={renderMenu}
        renderSwitchTheme={renderSwitchTheme}
      />
    ))
    .otherwise(() => null)
}
