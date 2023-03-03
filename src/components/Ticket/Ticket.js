import React from 'react'
import classes from './Ticket.module.scss'
import { addMinutes } from 'date-fns'

export default function Ticket ({price, directFlight, returnFlight, carrier}) {
    const stopsCountCondition = (value) => {
        if (value === 1 ) return 'пересадка'
        if (value < 5 && value !== 0) return 'пересадки'
        return 'пересадок'
    }

    const formDurationTime = (time) => {
        return `${Math.floor(time/60)}ч ${time % 60}м`
    }

    const formatValue = (value) => {
        return value < 10 ? `0${value}` : value
    }

    const formRouteTime = (time, duration) => {
        const takeoffTime = new Date(time)
        const landingTime = addMinutes(takeoffTime, duration)
        return `${formatValue(takeoffTime.getHours())}:${formatValue(takeoffTime.getMinutes())} - ${formatValue(landingTime.getHours())}:${formatValue(landingTime.getMinutes())}`
    }

    return (
        <div className={classes.ticket}>
            <header>
                <div className={classes.price}>{price} P</div>
                <div className={classes.logo}><img alt="logotype" src={`https://pics.avs.io/99/36/${carrier}.png`} /></div>
            </header>
            <div className={classes['direct-flight-field']}>
                <div className={classes.route}>
                    <div className={classes.title}>{directFlight.origin} - {directFlight.destination}</div>
                    <div className={classes.value}>{formRouteTime(directFlight.date, directFlight.duration)}</div>
                </div>
                <div className={classes.duration}>
                    <div className={classes.title}>В пути</div>
                    <div className={classes.value}>{formDurationTime(directFlight.duration)}</div>
                </div>
                <div className={classes.stops}>
                    <div className={classes.title}>{directFlight.stops.length === 0 ? 'без' : directFlight.stops.length} {stopsCountCondition(directFlight.stops.length)}</div>
                    <div className={classes.value}>{directFlight.stops.join(', ')}</div>
                </div>
            </div>
            <div className={classes['return-flight-field']}>
            <div className={classes.route}>
                    <div className={classes.title}>{returnFlight.origin} - {returnFlight.destination}</div>
                    <div className={classes.value}>{formRouteTime(returnFlight.date, returnFlight.duration)}</div>
                </div>
                <div className={classes.duration}>
                    <div className={classes.title}>В пути</div>
                    <div className={classes.value}>{formDurationTime(returnFlight.duration)}</div>
                </div>
                <div className={classes.stops}>
                    <div className={classes.title}>{returnFlight.stops.length === 0 ? 'без' : returnFlight.stops.length} {stopsCountCondition(returnFlight.stops.length)}</div>
                    <div className={classes.value}>{returnFlight.stops.join(', ')}</div>
                </div>
            </div>
        </div>
    )
}