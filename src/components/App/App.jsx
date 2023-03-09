import React from 'react'

import Filters from '../../containers/Filters'
import Tabs from '../../containers/Tabs'
import TicketsList from '../../containers/TicketsList'
import ButtonShowMore from '../../containers/ButtonShowMore'

import classes from './App.module.scss'
import img from './Logo.png'

export default function App() {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={img} alt="aviasales logotype" />
        </div>
      </header>
      <div className={classes.main}>
        <Filters />
        <div className={classes['tabs-and-tickets']}>
          <Tabs />
          <TicketsList />
          <ButtonShowMore />
        </div>
      </div>
    </div>
  )
}
