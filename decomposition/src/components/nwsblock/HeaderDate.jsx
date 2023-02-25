import React from 'react'

export default function HeaderDate() {
    const ruDate = new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric", weekday: "long"}).format(new Date()).replace(/(\s?\г\.?)/, "")
  return (
    <div className='HeaderDate'>
      {ruDate}
    </div>
  )
}

/**
 * Элемент отбражает дату и время 
 */
