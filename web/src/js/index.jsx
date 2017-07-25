import 'utils/fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import FrontApp from 'front/App';
import AdminApp from 'admin/App';

if (document.location.pathname.indexOf('/admin') === 0) {
  ReactDOM.render(
    <AdminApp />,
    document.getElementById('mount')
  );
} else {
  ReactDOM.render(
    <FrontApp />,
    document.getElementById('mount')
  );
}
