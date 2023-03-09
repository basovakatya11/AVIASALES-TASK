import React from 'react'

import classes from './ButtonShowMore.module.scss'

export default function ButtonShowMore({ addTickets, tickets }) {
  return tickets.length !== 0 ? (
    <button type="button" className={classes['btn-show-more']} onClick={addTickets}>
      показать еще 5 билетов!
    </button>
  ) : null
}
