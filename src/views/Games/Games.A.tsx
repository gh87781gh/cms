import { useContext } from 'react'
import './index.scss'

import { MyContext } from 'storage'

type PropsType = {
  data: any[] | null
}

export default function Games(props: PropsType) {
  const { layoutSetting } = useContext(MyContext)
  const borderRadiusLG = layoutSetting?.borderRadiusLG

  return (
    <ul className='games'>
      {!Array.isArray(props.data)
        ? Array(8)
            .fill(null)
            .map((item: any, index: number) => (
              <li
                key={index}
                className='games-empty-card'
                style={{ borderRadius: borderRadiusLG }}
              />
            ))
        : props.data?.map((item: any) => (
            <li key={item.id}>
              <a href=''>
                {item.title}
                {/* TODO: add game image */}
              </a>
            </li>
          ))}
    </ul>
  )
}
