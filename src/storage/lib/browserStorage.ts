import { getWindow } from "ssr-window"

const window = getWindow()

export enum BrowserStorageType {
  TOKEN = 'npc_access_token',
}

export const useLocalStorage = () => {
  const setStorage = <T>(key: string, data: T) => {
    window.localStorage?.setItem(key, JSON.stringify(data))
  }
  const getStorage = (key: string) => {
    const data = window.localStorage?.getItem(key)
    return data && data !== 'undefined' ? JSON.parse(data) : null
  }
  const removeStorage = (key: string) => {
    window.localStorage?.removeItem(key)
  }

  return { setStorage, getStorage, removeStorage }
}
export const useSessionStorage = () => {
  const setStorage = <T>(key: string, data: T) => {
    window.sessionStorage?.setItem(key, JSON.stringify(data))
  }
  const getStorage = (key: string) => {
    const data = window.sessionStorage?.getItem(key)
    return data && data !== 'undefined' ? JSON.parse(data) : null
  }
  const removeStorage = (key: string) => {
    window.sessionStorage?.removeItem(key)
  }

  return { setStorage, getStorage, removeStorage }
}
