import './index.scss'

export default function Section({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section className='section'>{children}</section>
}
