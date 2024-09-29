import update from 'immutability-helper'
import type { FC } from 'react'
import { memo, useCallback, useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { Card } from './Card'
import { ItemTypes } from './types'

const style = {
  width: '100%'
}

export interface ContainerState {
  cards: any[]
}

export const Container: FC<{
  items: any[]
  setItems: React.Dispatch<React.SetStateAction<any[]>>
  activeId: number | null
  setActiveId: React.Dispatch<React.SetStateAction<number | null>>
}> = memo(function Container({ items, setItems, activeId, setActiveId }) {
  const [cards, setCards] = useState(items)

  const findCard = useCallback(
    (id: string) => {
      const card = cards.filter((c: any) => `${c.id}` === id)[0] as {
        id: number
        text: string
      }
      return {
        card,
        index: cards.indexOf(card)
      }
    },
    [cards]
  )

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { card, index } = findCard(id)
      setActiveId(card.id)
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card]
          ]
        })
      )
    },
    [findCard, cards, setCards, setActiveId]
  )

  useEffect(() => {
    if (!setItems) return
    setItems(cards)
  }, [cards, setItems])

  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }))
  return (
    <div ref={drop as any} style={style}>
      {cards.map((card: any) => (
        <Card
          key={card.id}
          id={`${card.id}`}
          text={`${card.viewType}-${card.title}`}
          moveCard={moveCard}
          findCard={findCard}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  )
})
