import './index.scss'
import { match } from 'ts-pattern'

import { GamesViewType, GamesMode } from 'config/types'
import { useGames } from 'api/game/hooks'

import GamesA from './Games.A'
import GamesB from './Games.B'

type PropsType = {
  view: GamesViewType
}

export default function Games(props: PropsType) {
  const { data, isLoading } = useGames(props.view.queries)

  return match(props.view.mode)
    .with(GamesMode.a, () => <GamesA data={isLoading ? null : data} />)
    .with(GamesMode.b, () => <GamesB data={isLoading ? null : data} />)
    .otherwise(() => null)
}
