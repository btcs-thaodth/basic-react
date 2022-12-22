import { useEffect, useState } from 'react'
import { isAxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { ApiError, ErrorCode, UseQueryOptions } from '../types/hook'
import { notificationState } from '../store/notification'
import { API_ERROR_CODES } from '../constants/apiErrorCodes'
import api from '../services/api'

function useQuery<T>(url: string, options?: UseQueryOptions) {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const [isRefetch, setIsRefetch] = useState<boolean>(false)

  const apiParamsJsonString = JSON.stringify(options?.params)

  const setToastMessage = useSetRecoilState(notificationState)

  const refetch = () => setIsRefetch((prev) => !prev)

  useEffect(() => {
    if (!url) return

    let cancelRequest = false

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await api.get<T>(url, options?.params)
        if (cancelRequest) return
        setData(data)
        setIsLoading(false)
        setIsFetched(true)
      } catch (error) {
        if (!isAxiosError<ApiError>(error)) {
          console.log('Unexpected error: ', error)
          setToastMessage({ error: 'error.default' })
          return
        }

        const errorCode = error.response?.data?.error?.errorCode
        const errorMessage =
          errorCode && API_ERROR_CODES[errorCode as ErrorCode]
            ? API_ERROR_CODES[errorCode as ErrorCode]
            : options?.errorMessage || 'error.fetchDataError'

        setToastMessage({ error: errorMessage })

        if (cancelRequest) return
        setError(error as Error)
        setIsLoading(false)
        setIsFetched(false)
      }
    }

    fetchData()

    return () => {
      cancelRequest = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, isRefetch, options?.errorMessage, apiParamsJsonString])

  return {
    isLoading,
    isFetched,
    data,
    error,
    refetch,
  }
}

export default useQuery
