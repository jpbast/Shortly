import React from 'react';
/* eslint react/prop-types: 0 */
function Container(props) {
  console.log(props.children, 'ahsuashuas');
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

export default Container;
