'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

type IpDataResponse = {
  ip: string
}
import { headers } from 'next/headers'


export default function PlumURLSuspense() {
  const params = useParams()

  useEffect(() => {
    async function getIp(): Promise<void> {
    try {
        const response = await fetch('https://api.ipify.org?format=json')

        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
        }

        const data = (await response.json()) as IpDataResponse
        console.log(data.ip)
    } catch (error) {
        console.error(error)
    }
}

getIp()
  }, [])

  
   return params.plum_id && (
    <div>
        {params.plum_id}
    </div>

  )
}