import React, {Fragment, Component} from 'react';
import {Route} from 'react-router-dom';
import MenuCyberbugs from '../../component/Cyberbugs/ModalCyberbugs/MenuCyberbugs';
import Header from '../../component/Home/Header/Header';
import SidebarCyberbugs from '../../component/Cyberbugs/ModalCyberbugs/SidebarCyberbugs'

export const CyberbugsTemplate = (props)=>{
    const {Components, ...restParam} =  props;
    return <Route {...restParam} render={(propsRoute)=>{
        return <>
        <Header/>
        <div className="jira"></div>
        
            <SidebarCyberbugs/>
            <MenuCyberbugs />
                <Component {...propsRoute}/>
            {/* <ModalCyberbugs/> */}
        </>
    }} />
}