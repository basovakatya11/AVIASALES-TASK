import React from 'react'
import classes from './Ticket.module.scss'
import logo from './S7 Logo.png'

export default function Ticket () {
    return (
        <div className={classes.ticket}>
            <header>
                <div className={classes.price}>13 400 P</div>
                <div className={classes.logo}><img alt="logotype" src={logo} /></div>
            </header>
            <div className={classes['direct-flight-field']}>
                <div className={classes.route}>
                    <div className={classes.title}>MOW - HKT</div>
                    <div className={classes.value}>10:45 - 08:00</div>
                </div>
                <div className={classes.duration}>
                    <div className={classes.title}>В пути</div>
                    <div className={classes.value}>21ч 15м</div>
                </div>
                <div className={classes.stops}>
                    <div className={classes.title}>2 пересадки</div>
                    <div className={classes.value}>HKG, JNB</div>
                </div>
            </div>
            <div className={classes['return-flight-field']}>
            <div className={classes.route}>
                    <div className={classes.title}>MOW - HKT</div>
                    <div className={classes.value}>11:20 - 00:50</div>
                </div>
                <div className={classes.duration}>
                    <div className={classes.title}>В пути</div>
                    <div className={classes.value}>13ч 30м</div>
                </div>
                <div className={classes.stops}>
                    <div className={classes.title}>1 пересадка</div>
                    <div className={classes.value}>HKG</div>
                </div>
            </div>
        </div>
    )
}