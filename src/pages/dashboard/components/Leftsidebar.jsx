import React ,{useContext} from 'react';



const LeftSidebar = ({display,signOut}) => {

  return (
    <div className="left_sec" style={display && {display:'block'}}>
      <div className="tp60 w_box">
        <input type="text" className="search-box" placeholder="Search" />
        <span className="search-icon" />
      </div>
      <div className="left_menu">
        <ul id="side-menu">
          <li className="menu_tap menu_tap_act">
            {' '}
            <i className="home home_blu"></i>
            <span className="menu_txt">Home</span>
          </li>
          <li className="menu_tap">
            {' '}
            <i className="myhealth"></i>
            <span className="menu_txt">Myhealth</span>
          </li>
          <li className="menu_tap">
            {' '}
            <i className="resources"></i>
            <span className="menu_txt">IHealthOX Resources </span>
          </li>
          <li className="menu_tap">
            {' '}
            <i className="account"></i>
            <span className="menu_txt">Profile </span>
          </li>
          <li className="menu_tap">
            {' '}
            <i className="contact"></i>
            <span className="menu_txt">Community </span>
          </li>
          {/* <li className="menu_tap absbtm" onClick={signOut}>
            {' '}
            <i className="logout"></i>
            <span className="menu_txt">Logout </span>
          </li> */}
          <li  onClick={signOut}>
            {' '}
            <i ></i>
            <span className="menu_txt">Logout </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;