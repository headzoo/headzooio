import React from 'react';
import ProfileWidget from 'components/widgets/Profile';
import Projects from 'components/widgets/Projects';
import SkillsWidget from 'components/widgets/Skills';

const Sidebar = () => (
  <div className="sidebar">
    <ProfileWidget />
    <Projects />
    <SkillsWidget />
    <div className="entry-widget">
      <img
        style={{ width: '100%' }}
        alt="Marine Corps Bulldog"
        src="/images/marine-corps-bulldog.jpg"
      />
    </div>
  </div>
);

export default Sidebar;
