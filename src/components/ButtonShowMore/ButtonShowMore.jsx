import React from 'react'
import { connect } from 'react-redux'

import { addTicketsInList } from '../../store/ticketsSlice'

import classes from './ButtonShowMore.module.scss'

function ButtonShowMore({ addTickets, tickets }) {
  return tickets.length !== 0 ? (
    <button type="button" className={classes['btn-show-more']} onClick={addTickets}>
      показать еще 5 билетов!
    </button>
  ) : null
}

const mapDispatchToProps = (dispatch) => ({ addTickets: () => dispatch(addTicketsInList()) })

const mapStateToProps = (state) => ({ tickets: state.shownTickets })

const ButtonShowMoreContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore)
export default ButtonShowMoreContainer
