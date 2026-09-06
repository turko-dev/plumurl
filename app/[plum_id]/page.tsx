'use client'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'


type Data = {
    ok: boolean,
    headers: ApiResponse | null,
    ip: {ok: boolean, ipv4: Response} | null,
    geolocation: {ok: boolean, data: Response} | null
}
type ApiResponse = {
  ok: true
  networkHints: {
    ip: string | null
    ipSource: string
    usedIpifyFallback: boolean
  }
  clientData: unknown
}
function collectClientData() {
  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: {
      effectiveType?: string
      downlink?: number
      rtt?: number
      saveData?: boolean
    }
  }
  return {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? null,
    language: nav.language ?? null,
    languages: nav.languages ?? [],
    userAgent: nav.userAgent ?? null,
    platform: nav.platform ?? null,
    cookieEnabled: nav.cookieEnabled,
    onLine: nav.onLine,
    hardwareConcurrency: nav.hardwareConcurrency ?? null,
    deviceMemory: nav.deviceMemory ?? null,
    viewport: {width: window.innerWidth, height: window.innerHeight,},
    screen: { width: window.screen.width, height: window.screen.height, colorDepth: window.screen.colorDepth, pixelDepth: window.screen.pixelDepth,},
    connection: nav.connection
      ? {
          effectiveType: nav.connection.effectiveType ?? null,
          downlink: nav.connection.downlink ?? null,
          rtt: nav.connection.rtt ?? null,
          saveData: nav.connection.saveData ?? null,
        }
      : null,
  }
}

export default function PlumURL() {
  const [data, setData] = useState<Data>({
    ok:false,
    headers: null,
    ip:null, 
    geolocation: null
  })
  
  useEffect(() => {
    const run = async () => {
        const payload = collectClientData()
        const headersResponse = await fetch('/api/headers', {method: 'POST', headers: {'Content-Type': 'application/json',}, cache: 'no-store', body: JSON.stringify(payload),})
        const headersResult: ApiResponse = await headersResponse.json()
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        let geoData;
        if(!ipData.error){
            const geoResponse = await fetch(`http://ip-api.com/json/${ipData.ip}`)
            geoData = await geoResponse.json()
        }
        setData({ok: true, headers: headersResult, ip: {ok: !ipData.error, ipv4: ipData.ip}, geolocation: {ok: geoData.status == "success", data: geoData}})
    }
    run()
    
  }, [])
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}