import React, {useState} from 'react'

import { PSCalendar } from 'ps-portal-factory'
import 'ps-portal-factory/dist/index.css'

const App = () => {
  const [date8, setDate8] = useState(null);
  return (
    <>
      {/* <PSCalendar inline></PSCalendar> */}
      <PSCalendar id="time24" hourFormat="12" value={date8} onChange={(e) => setDate8(e.value)} showTime showSeconds />
    </>
  )
}

export default App
