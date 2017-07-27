import React from 'react';
import AboutWidget from 'front/widgets/About';
import ProjectsWidget from 'front/widgets/Projects';
import SkillsWidget from 'front/widgets/Skills';
import TwitterWidget from 'front/widgets/Twitter';
import BulldogWidget from 'front/widgets/Bulldog';
import GithubStreamWidget from 'front/widgets/GithubStream';

const Sidebar = () => (
  <div className="sidebar">
    <AboutWidget />
    <ProjectsWidget />
    <SkillsWidget />
    <TwitterWidget />
    <GithubStreamWidget />
    <BulldogWidget />
  </div>
);

export default Sidebar;
