import React from 'react'
import { connect } from 'react-redux'

import { changeTabs, tabValue } from '../../store/ticketsSlice'

import classes from './Tabs.module.scss'

function Tabs({ activeTab, changeTabsValue }) {
  const isActive = (tab) => {
    return tab === activeTab ? `${classes.tab} ${classes['tab-active']}` : classes.tab
  }
  const onButtonClick = (event) => {
    changeTabsValue(event.target.name)
  }

  return (
    <div className={classes['tabs-group']} role="toolbar" aria-label="Tabs">
      <button
        type="button"
        name={tabValue.SHOW_THE_CHEAPEST}
        className={isActive(tabValue.SHOW_THE_CHEAPEST)}
        onClick={onButtonClick}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        name={tabValue.SHOW_THE_FASTEST}
        className={isActive(tabValue.SHOW_THE_FASTEST)}
        onClick={onButtonClick}
      >
        Самый быстрый
      </button>
      <button type="button" name={tabValue.OPTIMAL} className={isActive(tabValue.OPTIMAL)} onClick={onButtonClick}>
        Оптимальный
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({ activeTab: state.tabsValue })

const mapDispatchToProps = (dispatch) => ({ changeTabsValue: (tab) => dispatch(changeTabs(tab)) })

const TabsContainer = connect(mapStateToProps, mapDispatchToProps)(Tabs)
export default TabsContainer
