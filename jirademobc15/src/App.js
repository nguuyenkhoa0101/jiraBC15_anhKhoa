import React from "react";
import {BrowserRouter,NavLink , Route, Switch} from 'react-router-dom'
import Header from "./component/Home/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs'
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Profile from "./pages/Profile/Profile";
import ToDoListRFC from "./pages/ToDoList/ToDoListRFC";
import ToDoList from "./pages/ToDoList/ToDoList";
import { CyberbugsTemplate } from "./templates/HomeTemplate/CyberbugsTemplate";
import CreateProject from "./pages/CyberBugs/CreateProject/CreateProject";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { UserLoginTemplate } from "./templates/HomeTemplate/UserLoginTemplate";
import ProjectManagement from "./pages/CyberBugs/CreateProject/ProjectManagement/ProjectManagement";


function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        helo
      </div> */}
      <Header/>
      <Switch>
        
        <HomeTemplate exact path='/home' Component={Home}/> 
        <HomeTemplate exact path='/contact' Component={Contact}/> 
        <HomeTemplate exact path='/about' Component={About}/> 
        
        {/* <Route exact path='/contact' component={Contact}/> //thẻ Route sẽ có thêm 3 thuộc tính props mặc định: history, match, location
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/detaili/:id' component={Detail}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/todolistrfc' component={ToDoListRFC}/>
        <Route exact path='/todolist' component={ToDoList}/>
        <Route exact path='/todolist' component={ToDoList}/> */}
        <UserLoginTemplate exact path='login' Component={LoginCyberBugs} />
        <CyberbugsTemplate exact  path='/createproject' component={CreateProject}/>
        <CyberbugsTemplate exact  path='/projectmanagement' component={ProjectManagement}/>

        <Route exact path='/' Component={Home}/>
        <Route exact path='*' />//để bắt lỗi khi người dùng nhập sai url
      </Switch>
    </BrowserRouter>
  );
}

export default App;
