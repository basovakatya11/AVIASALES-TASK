import { connect } from 'react-redux'
import ButtonShowMore from '../components/ButtonShowMore'
import { addTickets } from '../actions'

const mapDispatchToProps = dispatch => {
    // Здесь используем fetch-запрос - получить еше 5 билетов
    const tickets = []
    return {
        addTickets: () => {
            dispatch(addTickets(tickets))
        }
    }
}

export default connect(null, mapDispatchToProps)(ButtonShowMore)