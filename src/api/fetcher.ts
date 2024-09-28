
export const fetcherGET = (url: string) => {
  return fetch(process.env.NEXT_PUBLIC_API + url).then((res) => res.json())
}

export const fetcherPOST = <T>(url: string, payload: T) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}