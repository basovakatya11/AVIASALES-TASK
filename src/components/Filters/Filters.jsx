import React from 'react'

import classes from './Filters.module.scss'

export default function Filters({ stopsCount, changeStopsCount }) {
  const onCheck = (event) => changeStopsCount(event.target.id)

  const isChecked = (id) => {
    if (id === 'all') {
      return stopsCount.includes('all')
    }
    return stopsCount.includes(id) || stopsCount.includes('all')
  }

  return (
    <div className={classes.filters}>
      <h3>количество пересадок</h3>
      <div className={classes['checkboxes-group']}>
        <div>
          <input
            type="checkbox"
            className={classes['custom-checkbox']}
            id="all"
            name="all"
            value="all"
            onChange={onCheck}
            checked={isChecked('all')}
          />
          <label htmlFor="all">Все</label>
        </div>
        <div>
          <input
            type="checkbox"
            className={classes['custom-checkbox']}
            id="0"
            name="no-transfer"
            value="no-transfer"
            onChange={onCheck}
            checked={isChecked('0')}
          />
          <label htmlFor="0">Без</label>
        </div>
        <div>
          <input
            type="checkbox"
            className={classes['custom-checkbox']}
            id="1"
            name="one-transfer"
            value="one-transfer"
            onChange={onCheck}
            checked={isChecked('1')}
          />
          <label htmlFor="1">1</label>
        </div>
        <div>
          <input
            type="checkbox"
            className={classes['custom-checkbox']}
            id="2"
            name="two-transfers"
            value="two-transfers"
            onChange={onCheck}
            checked={isChecked('2')}
          />
          <label htmlFor="2">2</label>
        </div>
        <div>
          <input
            type="checkbox"
            className={classes['custom-checkbox']}
            id="3"
            name="three-transfers"
            value="three-transfers"
            onChange={onCheck}
            checked={isChecked('3')}
          />
          <label htmlFor="3">3</label>
        </div>
      </div>
    </div>
  )
}
