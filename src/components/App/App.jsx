import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Filters from '../Filters/FiltersContainer'
import Tabs from '../Tabs/TabsContainer'
import TicketsList from '../TicketsList/TicketsListContainer'
import ButtonShowMore from '../ButtonShowMore/ButtonShowMoreContainer'
import img from '../../assets/images/Logo.png'
import { getTickets, getSearchId } from '../../store/ticketsSlicer'

import classes from './App.module.scss'

export default function App() {
  const tickets = useSelector((state) => state.tickets)
  const fetchStatus500 = useSelector((state) => state.fetchStatus500)
  const stopFetch = useSelector((state) => state.stopFetch)
  const searchId = useSelector((state) => state.searchId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchId())

    return () => localStorage.removeItem('searchId')
  }, [dispatch])

  useEffect(() => {
    if (!stopFetch && searchId) dispatch(getTickets())
  }, [dispatch, tickets, fetchStatus500, stopFetch, searchId])

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
