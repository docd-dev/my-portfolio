import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'
import { CITY, COUNTRY, COUNTRY_FLAG } from '@/lib/constants'

type Props = {
  timezone: string
}

const Timezone = ({ timezone }: Props) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone)
      setDateTime(now.format('dddd, DD MMMM YYYY [a] h:mm:ss A'))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">
        {COUNTRY_FLAG} {CITY}, {COUNTRY} {COUNTRY_FLAG}
      </p>
    </div>
  )
}

export default Timezone
