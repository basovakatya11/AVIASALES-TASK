import React, { useRef } from 'react'
import { Spin, Alert } from 'antd'
import { connect } from 'react-redux'

import Ticket from '../Ticket'

import classes from './TicketsList.module.scss'

function TicketsList({ tickets, isLoading, error }) {
  const minKeyValue = useRef(6)
  const loader = isLoading ? (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Spin tip="Loading tickets..." />
    </div>
  ) : null
  const noTicketsMessage =
    tickets.length === 0 && !isLoading && !error ? (
      <div className={classes.message}>Рейсов, подходящих под заданные фильтры, не найдено</div>
    ) : null
  const errorMessage = error ? (
    <div>
      <Alert message="Error" description={`This is an error message: ${error}`} type="info" showIcon />
    </div>
  ) : null

  return (
    <div className={classes['tickets-list']}>
      {loader}
      {noTicketsMessage}
      {errorMessage}
      <ul>
        {tickets.map((ticket) => (
          <li key={minKeyValue.current++}>
            <Ticket
              price={ticket.price}
              carrier={ticket.carrier}
              directFlight={ticket.segments[0]}
              returnFlight={ticket.segments[1]}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tickets: state.shownTickets,
  isLoading: state.isLoading,
  error: state.error,
})

const TicketsListContainer = connect(mapStateToProps)(TicketsList)
export default TicketsListContainer
