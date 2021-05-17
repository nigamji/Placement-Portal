import React from 'react'
import img from '../assets/456.jpg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../Redux/actions/auth'
const Home = (props) => {
    const logoutHandler = (e) => {
        e.preventDefault();
        props.logout();
    }
    return (
        <body className="homeClass">
            <header className='topHome'>
                <div className="logo">
                    <img src={img} width="50" height="50" />
                    <p>Oriental Group of <br />Institutes</p>
                </div>
            </header>
            <div className="bottom">
                <p>Training & Placement <br /> Cell</p>
                <div className="menu">
                    <h4>MENU</h4>
                    <ul>
                        <Link to='/records'>
                            <li>Records</li>
                        </Link>
                        <Link to='/drives'>
                            <li>Drives</li>
                        </Link>
                        <Link to='/volAttendance'>
                            <li>Volunteer Attendance</li>
                        </Link>
                    </ul>
                    <a onClick={e => logoutHandler(e)} className='logoutbtn'>LOGOUT</a>
                </div>
            </div>
        </body>
    )
}

export default connect(null, { logout })(Home)
