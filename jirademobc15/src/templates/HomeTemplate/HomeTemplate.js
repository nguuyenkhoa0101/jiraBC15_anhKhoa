import React from "react";
import { useSelector,} from "react-redux";
import { NavLink, Redirect, Route } from "react-router-dom";
// import Header from "../../components/Header";
// import "./HomeTemplate.css";
import logoBrand from "../../assets/img/jira-logo-2.svg";
import { Components } from "antd/lib/date-picker/generatePicker";

export const HomeTemplate = (props) => {
  let { Components, ...restParams } = props;

  const renderComponentHomeTempt = (propsRoute) => {
    return (
      <section id="jira">
        <div className="jira">
          <div className="jira-sidebar">
            <div className="jira-sidebar-top">
              <div className="brand">
                <div className="brand-logo">
                  <img src={logoBrand} alt="logo-brand" />
                </div>
                <div className="brand-text">
                  <h2 className="h2-title primary-text-color">Jira System</h2>{" "}
                  <p className="text-default primary-text-color">
                    Project Software
                  </p>
                </div>
              </div>
            </div>
            <div className="jira-sidebar-control">
              <button className="left-sidebar-menu-item-active">
                <div className="icon">
                  <i class="fa-solid fa-border-all"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/home">
                    Board
                  </NavLink>
                </div>
              </button>
              <button className="left-sidebar-menu-item">
                <div className="icon">
                  <i class="fa-solid fa-folder"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/home">
                    Project Management
                  </NavLink>
                </div>
              </button>
              <button className="left-sidebar-menu-item">
                <div className="icon">
                  <i class="fa-solid fa-folder-plus"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/home">
                    Create Project
                  </NavLink>
                </div>
              </button>
              <button className="left-sidebar-menu-item">
                <div className="icon">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/usermanagement">
                    User Management
                  </NavLink>
                </div>
              </button>
            </div>
            <div className="jira-sidebar-features">
              <button className="left-sidebar-menu-item">
                <div className="icon">
                  <i class="fa-solid fa-border-all"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/home">
                    Release
                  </NavLink>
                </div>
              </button>
              <button className="left-sidebar-menu-item">
                <div className="icon">
                  <i class="fa-solid fa-folder"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/home">
                    Issues and Filter
                  </NavLink>
                </div>
              </button>
              <button className="left-sidebar-menu-item">
                <div className="icon">
                  <i class="fa-solid fa-folder-plus"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/home">
                    Pages
                  </NavLink>
                </div>
              </button>
              <button className="left-sidebar-menu-item">
                <div className="icon">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/home">
                    Reports
                  </NavLink>
                </div>
              </button>
              <button className="left-sidebar-menu-item">
                <div className="icon">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div className="control">
                  <NavLink className="primary-text-color" to="/home">
                    Components
                  </NavLink>
                </div>
              </button>
            </div>
          </div>
          <div className="jira-content">
            <Components {...propsRoute} />
          </div>
        </div>
      </section>
    );
  };
  //
  //get user data from Redux
  const { userSignin } = useSelector(
    (rootReducer) => rootReducer.UserManagementReducer
  );
  // console.log("UserData: ", userSignin);

  // if user signed in => return homepage else => return signinpage
  if (userSignin) {
    return (
      <Route
        {...restParams}
        render={(propsRoute) => {
          return (
            <div>
              {/* <Header /> */}
              {renderComponentHomeTempt(propsRoute)}
            </div>
          );
        }}
      />
    );
  } else {
    return <Redirect to="/signin" />;
  }
};