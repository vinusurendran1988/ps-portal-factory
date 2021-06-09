/**
 * Calendar Date Picker Component
 * A wrapper component of primereact Calendar
 * ```html
 * <PSCalendar />
 * ```
 */
import React from 'react'
import { Calendar } from 'primereact/calendar'

const PSCalendar = () => {
  const date = ''
  const setDate = (value) => console.log(value)
  return <Calendar value={date} onChange={(e) => setDate(e.value)} />
}

export {PSCalendar}
