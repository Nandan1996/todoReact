import React from 'react';

import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from '../constant/actiontype.js';
import {default as FilterLink} from '../container/link.container.js';

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter={SHOW_ALL}> All </FilterLink>
        {', '}
        <FilterLink filter={SHOW_ACTIVE}> Active </FilterLink>
        {', '}
        <FilterLink filter={SHOW_COMPLETED}> Completed </FilterLink>
    </p>
);

export default Footer;