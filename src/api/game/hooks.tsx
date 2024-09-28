import useSWR from 'swr'
import { fetcherGET } from 'api/fetcher'

export const useGames = (queries: string) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `/game/list${queries}`,
    fetcherGET
  )

  return {
    data,
    isLoading,
    error,
    isValidating,
    mutate
  }
}
