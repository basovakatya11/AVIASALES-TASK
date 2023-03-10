import { connect } from 'react-redux'

import { changeFilters } from '../../store/actions'

import Filters from './Filters'

const mapStateToProps = (state) => ({
  stopsCount: state.stopsCount,
})

const mapDispatchToProps = (dispatch) => ({
  changeStopsCount: (count) => dispatch(changeFilters(count)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
