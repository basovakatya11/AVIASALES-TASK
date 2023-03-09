import { connect } from 'react-redux'

import Filters from '../components/Filters'
import { changeFilters } from '../actions'

const mapStateToProps = (state) => ({
  stopsCount: state.stopsCount,
})

const mapDispatchToProps = (dispatch) => ({
  changeStopsCount: (count) => dispatch(changeFilters(count)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
