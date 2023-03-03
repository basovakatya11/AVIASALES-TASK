import React, { useRef } from 'react'
import classes from './TicketsList.module.scss'
import Ticket from '../Ticket'


export default function TicketsList ({tickets}) {
    let minKeyValue = useRef(6)

    return (
        <div className={classes['tickets-list']}>
            <ul>
                {tickets.map((ticket) => <li key={minKeyValue.current++}><Ticket price={ticket.price} carrier={ticket.carrier} directFlight={ticket.segments[0]} returnFlight={ticket.segments[1]} /></li>)}
            </ul>
        </div>
    )
}