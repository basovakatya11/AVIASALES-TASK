import { connect } from 'react-redux'

import { addTicketsInList } from '../../store/actions'

import ButtonShowMore from './ButtonShowMore'

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
