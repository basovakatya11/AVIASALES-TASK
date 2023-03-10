import React from 'react'

import Filters from '../Filters/FiltersContainer'
import Tabs from '../Tabs/TabsContainer'
import TicketsList from '../TicketsList/TicketsListContainer'
import ButtonShowMore from '../ButtonShowMore/ButtonShowMoreContainer'
import img from '../../assets/images/Logo.png'

import classes from './App.module.scss'

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
