import React from 'react';
import Search from './Search';

const Sidebar = (props) => {
  return (
    <aside className="c-sidebar">
      <h1 className="c-sidebar__title">Find user</h1>
      <Search onChange={props.onChange} />
    </aside>
  );
}

export default Sidebar;
