import { connect } from 'react-redux'
import TicketsList from '../components/TicketsList'
// import { tabValue } from '../actions'

const mapStateToProps = state => ({
    tickets: state.tickets
})

export default connect(mapStateToProps)(TicketsList)