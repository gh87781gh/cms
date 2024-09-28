import useSWR from 'swr'
import { fetcherPOST } from 'api/fetcher'

export const useGames = (queries: string) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `/game/list${queries}`,
    fetcherPOST
  )

  return {
    data,
    isLoading,
    error,
    isValidating,
    mutate
  }
}
