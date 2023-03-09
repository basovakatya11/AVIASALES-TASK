import { connect } from 'react-redux'

import Tabs from '../components/Tabs'
import { changeTabs } from '../actions'

const mapStateToProps = (state) => ({
  activeTab: state.tabsValue,
})

const mapDispatchToProps = (dispatch) => ({
  changeTabsValue: (tab) => dispatch(changeTabs(tab)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
