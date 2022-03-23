import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuCyberbugs() {
  return (
    <div className='menu'>
        <div className='account'>
            <div className='avartar'>
                {/* <img src={require("../../assets/img/download.jfif")} alt="" /> */}
            </div>
            <div className="account-info">
                <p>CyberLearn.vn</p>
                <p>Report bugs</p>
            </div>
        </div>
        <div className="control">
            <div>
                <i className='fa fa-credit-card mr-1'></i>
                <NavLink to="cyberbugs" activeStyle={{color:'blue'}} className="text-dark" activeClassName='active font-weight-bold text-primary' >Cyber Board</NavLink>
            </div>
            <div>
                <i className='fa fa-credit-card mr-1'></i>
                <NavLink to="projecmanagemant" activeStyle={{color:'blue'}} className="text-dark" activeClassName='active font-weight-bold text-primary'>Project Management</NavLink>
            </div>
            <div>
                <i className='fa fa-cog mr-1'></i>
                <NavLink to='/createproject' activeStyle={{color:'blue'}} className="text-dark" activeClassName='active font-weight-bold text-primary'>Project Settings(change Create Project)</NavLink>
            </div>
        </div>
        <div className="feature ">
            <div>
                <i className='fa fa-truck mr-1'></i>
                <span>Replease</span>
            </div>
            <div>
                <i className='fa fa-equals mr-1'></i>
                <span>Issues and Filters</span>
            </div>
            <div>
                <i className='fa fa-paste mr-1'></i>
                <span>Pages</span>
            </div>
            <div>
                <i className='fa fa-location-arrow'></i>
                <span>Reports</span>
            </div>
            <div>
                <i className='fa fa-box'></i>
                <span>Components</span>
            </div>
        </div>
    </div>
  )
}
