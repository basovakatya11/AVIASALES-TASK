import { connect } from 'react-redux'
import Tabs from '../components/Tabs'
import { changeTabValue } from '../actions'

const mapStateToProps = state => ({
    activeTab: state.tabsValue
})

const mapDispatchToProps = dispatch => ({
    changeTabsValue: tab => dispatch(changeTabValue(tab))
})


export default connect(mapStateToProps, mapDispatchToProps)(Tabs)