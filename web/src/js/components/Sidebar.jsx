import React from 'react';
import AboutWidget from 'components/widgets/About';
import ProjectsWidget from 'components/widgets/Projects';
import SkillsWidget from 'components/widgets/Skills';
import TwitterWidget from 'components/widgets/Twitter';
import BulldogWidget from 'components/widgets/Bulldog';

const Sidebar = () => (
  <div className="sidebar">
    <AboutWidget />
    <ProjectsWidget />
    <SkillsWidget />
    <TwitterWidget />
    <BulldogWidget />
  </div>
);

export default Sidebar;
