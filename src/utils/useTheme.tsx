'use client'

import { useState } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  return { theme, setTheme }
}
