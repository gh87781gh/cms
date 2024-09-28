'use client'

import { useState } from 'react'
import './index.scss'
import Header from 'layout/Header'
import Sidebar from 'layout/Sidebar'
import { match } from 'ts-pattern'

import { MyContext } from 'storage'
import { LayoutSettingType, LayoutModule } from './types'

export default function LayoutTemplate({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [layoutSetting, setLayoutSetting] = useState<LayoutSettingType>({
    theme: 'dark',
    layout: LayoutModule.headerFirst
  })

  return (
    <MyContext.Provider value={{ layoutSetting, setLayoutSetting }}>
      <main className='main'>
        {match(layoutSetting.layout)
          .with(LayoutModule.headerFirst, () => (
            <>
              <Header />
              <Sidebar />
              {children}
            </>
          ))
          .with(LayoutModule.sidebarFirst, () => <>sidebarFirst</>)
          .otherwise(() => null)}
      </main>
    </MyContext.Provider>

    // TODO just for example
    // import Image from 'next/image'
    //   <Image
    //   className={styles.logo}
    //   src='https://nextjs.org/icons/next.svg'
    //   alt='Next.js logo'
    //   width={180}
    //   height={38}
    //   priority
    // />
  )
}
