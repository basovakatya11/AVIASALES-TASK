import React from 'react'
import classes from './TicketsList.module.scss'
import Ticket from '../Ticket'


export default function TicketsList ({tickets}) {
    return (
        <div className={classes['tickets-list']}>
            <ul>
                <li><Ticket /></li>
                <li><Ticket /></li>
                <li><Ticket /></li>
                <li><Ticket /></li>
                <li><Ticket /></li>
            </ul>
        </div>
    )
}