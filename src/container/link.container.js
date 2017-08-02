import {connect} from 'react-redux';

import {setVisibilityFilter} from '../action/action.js';
import {default as Link} from '../component/link.component.js';

const mapStateToLinkProps = (state, ownProps) => {
  return {
     active:ownProps.filter === state.visibilityFilter
  }
}
const mapDispatchToLinkProps = (dispatch,ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}

const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

export default FilterLink;