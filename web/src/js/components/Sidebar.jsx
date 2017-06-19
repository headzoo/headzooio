'use strict';

import React from 'react';
import ProfileWidget from './widgets/Profile';
import Projects from './widgets/Projects';
import CategoriesWidget from './widgets/Categories';
import ArchiveWidget from './widgets/Archive';
import MetaWidget from './widgets/Meta';
import SkillsWidget from './widgets/Skills'

const Sidebar = () => (
  <div className="sidebar">
    <ProfileWidget />
    <Projects />
    <div className="entry-widget">
      <img
        style={{width: "100%"}}
        src="/images/marine-corps-bulldog.jpg" />
    </div>
    <SkillsWidget />
  </div>
);

export default Sidebar;