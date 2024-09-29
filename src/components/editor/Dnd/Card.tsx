import type { FC } from 'react'
import { memo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import './index.scss'
import { MenuOutlined } from '@ant-design/icons'
import cx from 'utils/cx'

import { ItemTypes } from './types'

export interface CardProps {
  id: string
  text: string
  moveCard: (id: string, to: number) => void
  findCard: (id: string) => { index: number }
  activeId: number | null
  setActiveId: React.Dispatch<React.SetStateAction<number | null>>
}

interface Item {
  id: string
  originalIndex: number
}

export const Card: FC<CardProps> = memo(function Card({
  id,
  text,
  moveCard,
  findCard,
  activeId,
  setActiveId
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
      className={cx('dnd-item', String(activeId) === id && 'active')}
      ref={(node) => drag(drop(node)) as any}
      style={{ opacity }}
      onClick={() => setActiveId(Number(id))}
    >
      <div className='dnd-item-drag'>
        <MenuOutlined />
      </div>
      <div className='dnd-item-content'>{text}</div>
    </div>
  )
})
