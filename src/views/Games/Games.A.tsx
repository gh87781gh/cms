import './index.scss'

type PropsType = {
  title: string
  data: any
}

export default function Games(props: PropsType) {
  const { title } = props
  return (
    <section className='games'>
      <h2>{title}</h2>
      <ul>
        {props.data.map((item: any) => (
          <li key={item.id}>
            <a href=''>{item.title}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
