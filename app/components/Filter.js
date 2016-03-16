import React from 'react'
import FilterLink from '../containers/FilterLink'

require('../styles/filter.scss');

const Filter = () => (
	<div>
	  <p className="filters">
	    <FilterLink filter="SHOW_ALL">
	      All
	    </FilterLink>
	    <FilterLink filter="SHOW_ACTIVE">
	      Active
	    </FilterLink>
	    <FilterLink filter="SHOW_COMPLETED">
	      Completed
	    </FilterLink>
	  </p>
  </div>
)

export default Filter
