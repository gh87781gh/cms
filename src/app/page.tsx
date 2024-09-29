'use client'
import { useContext } from 'react'
import { match } from 'ts-pattern'
import { MyContext } from 'storage'

import { GamesViewType, BannerViewType } from 'layout/LayoutTemplate/types'
import Article from 'layout/Article'
import Section from 'layout/Section'
import Games from 'views/Games'
import Banner from 'views/Banner'

export default function Page() {
  const { layoutSetting } = useContext(MyContext)
  const views = layoutSetting?.homepageViews

  return (
    <Article>
      {views?.map((view, index: number) => (
        <Section key={index}>
          {match(view.viewType)
            .with('games', () => (
              <>
                {'title' in view && view.title && <h2>{view.title}</h2>}
                <Games key={index} view={view as GamesViewType} />
              </>
            ))
            .with('banner', () => (
              <Banner key={index} view={view as BannerViewType} />
            ))
            .exhaustive()}
        </Section>
      ))}
    </Article>
  )
}
