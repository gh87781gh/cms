'use client'
import { useContext } from 'react'

import { MyContext } from 'storage'

import Article from 'layout/Article'
import Games from 'views/Games'

export default function Page() {
  const { layoutSetting } = useContext(MyContext)
  const games = layoutSetting?.homepageViews[0]

  return <Article>123</Article>
}
