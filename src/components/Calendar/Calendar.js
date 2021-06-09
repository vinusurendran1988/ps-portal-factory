/**
 * Calendar Date Picker Component
 * A wrapper component of primereact Calendar
 * ```html
 * <PSCalendar />
 * ```
 */
import React from 'react'
import { Calendar } from 'primereact/calendar'

import styles from '../../styles.module.css'

const PSCalendar = (props) => {
  console.log(props);
  const date = ''
  const setDate = (value) => console.log(value)
  return (
    <Calendar className={styles.test} {...props} showTime hourFormat="24" />
    
  )
}

export {PSCalendar}
