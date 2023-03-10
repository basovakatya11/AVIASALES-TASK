import { connect } from 'react-redux'

import TicketsList from './TicketsList'

const mapStateToProps = (state) => {
  return {
    tickets: state.shownTickets,
    isLoading: state.isLoading,
    error: state.error,
  }
}

export default connect(mapStateToProps)(TicketsList)