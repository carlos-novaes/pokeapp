import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  return (
    <div>
      <input
        type='text'
        onChange={props.search}
        placeholder='Search your favorite pokemon...'
      />
    </div>
  );
};

Filter.propTypes = {
  search: PropTypes.func
};

export default Filter;
