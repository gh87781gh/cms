import type { CSSProperties, FC } from 'react'
import { memo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import './index.scss'
import { MenuOutlined } from '@ant-design/icons'

import { ItemTypes } from './types'

export interface CardProps {
  id: string
  text: string
  moveCard: (id: string, to: number) => void
  findCard: (id: string) => { index: number }
}

interface Item {
  id: string
  originalIndex: number
}

export const Card: FC<CardProps> = memo(function Card({
  id,
  text,
  moveCard,
  findCard
}) {
  const originalIndex = findCard(id).index
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(droppedId, originalIndex)
        }
      }
    }),
    [id, originalIndex, moveCard]
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id)
          moveCard(draggedId, overIndex)
        }
      }
    }),
    [findCard, moveCard]
  )

  const opacity = isDragging ? 0 : 1
  return (
    <div
      className='dnd-item'
      ref={(node) => drag(drop(node)) as any}
      style={{ opacity }}
    >
      <div className='dnd-item-drag'>
        <MenuOutlined />
      </div>
      <div className='dnd-item-content'>{text}</div>
    </div>
  )
})
