import { connect } from 'react-redux'
import Filters from '../components/Filters'
import { changeStopsCount } from '../actions'

const mapStateToProps = state => ({
    stopsCount: state.stopsCount
})

const mapDispatchToProps = dispatch => ({
    changeStopsCount: (count) => dispatch(changeStopsCount(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)