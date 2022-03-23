import React from 'react'

export default function SidebarCyberbugs() {
  return (
    <div className='sidebar'>
      <div className="sideBar-top">
        <i className="fab fa-jira" />
      </div>
      <div className='sideBar-icon' data-toggle="modal" data-target="#searchModal" style={{cursor:'pointer'}}>
        <i className='fa fa-search'/>
        <span className='title'>SEARCH ISSUES</span>  
      </div>
      <div className='sideBar-icon' >
        <i className='fa fa-plus'/>
        <span className='title'>CREATE ISSUES</span>  
      </div>
      <div className='sideBar-Bottom'>
        <div className='sideBar-icon'>
          <i className='fa fa-search'/>
          <span className='title'>ABOUT</span>  
        </div>
        
      </div>
      
    </div>
  )
}
