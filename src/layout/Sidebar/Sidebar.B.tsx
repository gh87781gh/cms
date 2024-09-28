'use client'

import './index.scss'

import cx from 'utils/cx'

import Logo from 'layout/Logo'

type Props = {
  theme: string | undefined
  renderMenu: () => React.ReactNode
  renderSwitchTheme: () => React.ReactNode
}

export default function Sidebar(props: Props) {
  return (
    <aside className={cx('sidebar sidebar-b', props.theme)}>
      <Logo />
      {props.renderMenu()}
      {props.renderSwitchTheme()}
    </aside>
  )
}
