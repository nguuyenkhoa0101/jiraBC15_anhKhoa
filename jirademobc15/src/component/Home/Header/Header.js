// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Header.css'
// export default function Header() {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
//       <NavLink className="navbar-brand" to="/">
//         Cyberlearn
//       </NavLink>
//       <button
//         className="navbar-toggler d-lg-none"
//         type="button"
//         data-toggle="collapse"
//         data-target="#collapsibleNavId"
//         aria-controls="collapsibleNavId"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       />
//       <div className="collapse navbar-collapse" id="collapsibleNavId">
//         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//           <li className="nav-item active">
//             <NavLink
//               activeStyle={{ color: 'red', fontWeight: 'bold' }}
//               activeClassName="activeNavItem"
//               className="nav-link"
//               to="/home"
//             >
//               Home <span className="sr-only">(current)</span>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               activeStyle={{ color: 'red', fontWeight: 'bold' }}
//               className="nav-link"
//               to="/about"
//             >
//               About
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               activeStyle={{ color: 'red', fontWeight: 'bold' }}
//               className="nav-link"
//               to="/contact"
//             >
//               Contact
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               activeStyle={{ color: 'red', fontWeight: 'bold' }}
//               className="nav-link"
//               to="/detail"
//             >
//               Detail
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               activeStyle={{ color: 'red', fontWeight: 'bold' }}
//               className="nav-link"
//               to="/login"
//             >
//               Login
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               activeStyle={{ color: 'red', fontWeight: 'bold' }}
//               className="nav-link"
//               to="/profile"
//             >
//               Profile
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               activeStyle={{ color: 'red', fontWeight: 'bold' }}
//               className="nav-link"
//               to="/todolistrfc"
//             >
//               To Do List RFC
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               activeStyle={{ color: 'red', fontWeight: 'bold' }}
//               className="nav-link"
//               to="/todolist"
//             >
//               To Do List
//             </NavLink>
//           </li>
          
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="dropdownId"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Bai Tap
//             </a>
//             <div className="dropdown-menu" aria-labelledby="dropdownId">
//               <NavLink className="dropdown-item" to="/todolistrfc">
//               To Do List RFC 
//               </NavLink>
//               <NavLink className="dropdown-item" to="/todolist">
//               To Do List
//               </NavLink>
//             </div>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2"
//             type="text"
//             placeholder="Search"
//           />
//           <button
//             className="btn btn-outline-success my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   )
// }
    ////////////////////////////////
// import React from "react";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/img/jira-logobrand-name.png";

// export default function Header() {
//   //Get data from reducer
//   const { userSignin, userArray } = useSelector(
//     (rootReducer) => rootReducer.UserManagementReducer
//   );
//   let { avatar } = userSignin;
//   useEffect(() => {
//     console.log("Header: ", userSignin);
//     console.log("UserArray: ", userArray);
//   }, []);

//   return (
//     // Header section
//     <header id="header" className="custom-header">
//       {/* Navbar portion */}
//       <nav className="custom-navbar-menu">
//         <div
//           style={{ marginRight: 16 }}
//           className="custom-logon-brand custom-navbar-menu-item"
//         >
//           <a
//             className="custom-navbar-menu-item-btn brand-name"
//             href
//             target="blank"
//           >
//             {/* <img
//               style={{ width: 160, padding: "4px 0px" }}
//               src={logo}
//               alt="Logo brand"
//             /> */}
//           </a>
//         </div>
//         <div className="custom-navbar-menu-item">
//           <button className="custom-navbar-menu-item-btn">
//             <span className="custom-navbar-menu-item-text">
//               Your work <i className="fa-solid fa-angle-down"> </i>
//             </span>
//           </button>
//         </div>
//         <div className="custom-navbar-menu-item">
//           <button className="custom-navbar-menu-item-btn">
//             <span className="custom-navbar-menu-item-text">
//               Projects <i className="fa-solid fa-angle-down"> </i>
//             </span>
//           </button>
//         </div>
//         <div className="custom-navbar-menu-item">
//           <button className="custom-navbar-menu-item-btn">
//             <span className="custom-navbar-menu-item-text">
//               Filters <i className="fa-solid fa-angle-down"> </i>
//             </span>
//           </button>
//         </div>
//         <div className="custom-navbar-menu-item">
//           <button className="custom-navbar-menu-item-btn">
//             <span className="custom-navbar-menu-item-text">
//               Dashboards <i className="fa-solid fa-angle-down"> </i>
//             </span>
//           </button>
//         </div>
//         <div className="custom-navbar-menu-item">
//           <button className="custom-navbar-menu-item-btn">
//             <span className="custom-navbar-menu-item-text">
//               People <i className="fa-solid fa-angle-down"> </i>
//             </span>
//           </button>
//         </div>
//         <div className="custom-navbar-menu-item">
//           <button className="custom-navbar-menu-item-btn">
//             <span className="custom-navbar-menu-item-text">
//               Apps <i className="fa-solid fa-angle-down"> </i>
//             </span>
//           </button>
//         </div>
//         <div className="custom-navbar-menu-item ml-3">
//           <button className="custom-btn-primary">
//             <NavLink
//               to={""}
//               className="custom-navbar-menu-item-text default-color"
//             >
//               Create
//             </NavLink>
//           </button>
//         </div>
//       </nav>
//       {/* End navbar portion */}
//       {/* Midle portion */}
//       <div className="midle-portion" />
//       {/* End Midle portion */}
//       {/* Function portion */}
//       <div className="custom-navbar-menu custom-function">
//         <div className="custom-search-bar">
//           <input
//             className="custom-search-bar-input"
//             type="text"
//             placeholder="Search"
//           />
//           <i className="fa-solid fa-magnifying-glass" />
//         </div>
//         <div className="ic custom-function-noti custom-navbar-menu-item-btn">
//           <i className="fa-solid fa-bell" />
//         </div>
//         <div className="ic custom-function-help custom-navbar-menu-item-btn">
//           <i className="fa-solid fa-circle-question" />
//         </div>
//         <div className="ic custom-function-settings custom-navbar-menu-item-btn">
//           <i className="fa-solid fa-gear" />
//         </div>
//         <div className="ic custom-function-userInfo custom-navbar-menu-item-btn">
//           <img src={avatar} alt="user-avar" />
//         </div>
//       </div>
//       {/* End Function portion */}
//     </header>
//     // End Header section
//   );
// }
