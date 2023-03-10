import { connect } from 'react-redux'

import { changeTabs } from '../../store/actions'

import Tabs from './Tabs'

const mapStateToProps = (state) => ({
  activeTab: state.tabsValue,
})

const mapDispatchToProps = (dispatch) => ({
  changeTabsValue: (tab) => dispatch(changeTabs(tab)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
