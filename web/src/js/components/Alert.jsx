'use strict';

import React from 'react';

const Alert = ({children, priority, visible}) => {
  if (!visible) {
    return null;
  }
  return (
    <div className={`alert alert-${priority}`} role="alert">
      {children}
    </div>
  );
};

Alert.defaultProps = {
  priority: "success",
  visible:  true
};

export default Alert;