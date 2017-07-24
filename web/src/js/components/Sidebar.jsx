import React from 'react';
import ProfileWidget from 'components/widgets/Profile';
import Projects from 'components/widgets/Projects';
import CategoriesWidget from 'components/widgets/Categories';
import ArchiveWidget from 'components/widgets/Archive';
import MetaWidget from 'components/widgets/Meta';
import SkillsWidget from 'components/widgets/Skills'

const Sidebar = () => (
  <div className="sidebar">
    <ProfileWidget />
    <Projects />
    <SkillsWidget />
    <div className="entry-widget">
      <img
        style={{width: "100%"}}
        src="/images/marine-corps-bulldog.jpg" />
    </div>
  </div>
);

export default Sidebar;