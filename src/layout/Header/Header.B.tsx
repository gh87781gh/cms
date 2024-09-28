import './index.scss'
import cx from 'utils/cx'
import { IconLogo } from 'utils/icons'

type Props = {
  theme: string | undefined
}

export default function Header(props: Props) {
  return (
    <header className={cx('header', props.theme)}>
      <IconLogo className='header-logo' />
    </header>
  )
}
