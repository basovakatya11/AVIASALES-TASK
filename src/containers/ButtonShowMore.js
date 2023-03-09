import { connect } from 'react-redux'

import ButtonShowMore from '../components/ButtonShowMore'
import { addTicketsInList } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addTickets: () => {
      dispatch(addTicketsInList())
    },
  }
}

const mapStateToProps = (state) => ({
  tickets: state.shownTickets,
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore)
