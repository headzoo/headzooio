'use strict';

import React from 'react';
import ProfileWidget from './widgets/Profile';
import CategoriesWidget from './widgets/Categories';
import ArchiveWidget from './widgets/Archive';
import MetaWidget from './widgets/Meta';

const Sidebar = () => (
  <div className="sidebar">
    <ProfileWidget />
    <CategoriesWidget />
    <ArchiveWidget />
    <MetaWidget />
  </div>
);

export default Sidebar;