import React from 'react';

import {default as FilterLink} from './filterlink.component.js';

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter='all'> All </FilterLink>
        {', '}
        <FilterLink filter='active'> Active </FilterLink>
        {', '}
        <FilterLink filter='completed'> Completed </FilterLink>
    </p>
);

export default Footer;