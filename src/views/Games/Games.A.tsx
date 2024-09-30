import './index.scss'

type PropsType = {
  data: any[] | null
}

export default function Games(props: PropsType) {
  return (
    <ul className='games games-a'>
      {!Array.isArray(props.data)
        ? Array(8)
            .fill(null)
            .map((item: any, index: number) => (
              <li key={index} className='games-empty-card' />
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
