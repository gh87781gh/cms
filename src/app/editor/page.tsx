import Article from 'layout/Article'
import Link from 'next/link'

import { BtnPrimary } from 'components/Button'

export default function Page() {
  return (
    <Article>
      <h1>You are in Editor mode</h1>
      <p>
        Editor mode is a cms for this website.
        <br />
        You can change this website's UI in the left panel.
        <br />
        Remember to save the setting or everything are just temporary changed,
        will automatically reset when you refresh the page.
      </p>
      <BtnPrimary>
        <Link href='/'>Back to home</Link>
      </BtnPrimary>
    </Article>
  )
}
