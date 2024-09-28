'use client'

import './index.scss'
import cx from 'utils/cx'

type Props = {
  theme: string | undefined
  renderMenu: () => React.ReactNode
  renderSwitchTheme: () => React.ReactNode
}

export default function Sidebar(props: Props) {
  return (
    <aside className={cx('sidebar sidebar-a', props.theme)}>
      {props.renderMenu()}
      <div className={cx('sidebar-footer', props.theme)}>
        {props.renderSwitchTheme()}
      </div>
    </aside>
  )
}
