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
              <i className="ico-keyboard_arrow_right" />
              Classic Interface
            </a>
          </h4>
          <div className="panel-collapse collapse" id="collapse-1">
            <div className="panel-body">
              <ul className="cat-menu-list">
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
                    Web Tech
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
                    Robotics
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
                    Application
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
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
              <i className="ico-keyboard_arrow_right" />
              Modern
            </a>
          </h4>
          <div className="panel-collapse collapse" id="collapse-2">
            <div className="panel-body">
              <ul className="cat-menu-list">
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
                    Web Tech
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
                    Robotics
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
                    Application
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ico-keyboard_arrow_right" />
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
