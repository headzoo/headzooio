'use strict';

import React from 'react';

const CategoriesWidget = () => (
  <div className="entry-widget">
    <h5 className="widget-title">Categories</h5>
    <div className="accordion">
      <div className="panel-group" id="accordion">
        
        {/* Panel Start */}
        <div className="panel panel-default">
          <h4 className="panel-title">
            <a data-parent="#accordion" data-toggle="collapse" href="#collapse-1">
              <i className="ico-keyboard_arrow_right"></i>
              Classic Interface
            </a>
          </h4>
          <div className="panel-collapse collapse" id="collapse-1">
            <div className="panel-body">
              <ul className="cat-menu-list">
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Web Tech
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Robotics
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Application
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Software
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Panel End */}
        
        {/* Panel Start */}
        <div className="panel panel-default">
          <h4 className="panel-title">
            <a data-parent="#accordion" data-toggle="collapse" href="#collapse-2">
              <i className="ico-keyboard_arrow_right"></i>
              Modern
            </a>
          </h4>
          <div className="panel-collapse collapse" id="collapse-2">
            <div className="panel-body">
              <ul className="cat-menu-list">
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Web Tech
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Robotics
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Application
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right"></i>
                    Software
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Panel End */}
      
      </div>
    </div>
  </div>
);

export default CategoriesWidget;