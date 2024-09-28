import './index.scss'
import { match } from 'ts-pattern'

import { GameType, GameMode } from 'layout/LayoutTemplate/types'
import { useGames } from 'api/game/hooks'

import GamesA from './Games.A'
import GamesB from './Games.B'

export default function Games(game: GameType) {
  const { data, isLoading } = useGames(game.queries)

  return match(game.mode)
    .with(GameMode.a, () => <GamesA title={game.title} data={data} />)
    .with(GameMode.b, () => <GamesB />)
    .otherwise(() => null)
}
