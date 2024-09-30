import './index.scss'
import { match } from 'ts-pattern'

import { BannerViewType, BannerMode } from 'config/types'

import BannerA from './Banner.A'
import BannerB from './Banner.B'

type PropsType = {
  view: BannerViewType
}

export default function Banner(props: PropsType) {
  // const { data, isLoading } = useBanner(game.queries)

  return match(props.view.mode)
    .with(BannerMode.a, () => <BannerA view={props.view} />)
    .with(BannerMode.b, () => <BannerB view={props.view} />)
    .otherwise(() => null)
}
