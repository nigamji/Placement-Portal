import React from 'react'
import img from '../assets/456.jpg'
import { Link } from 'react-router-dom'
import { logout } from '../../Redux/actions/auth'
import { connect } from 'react-redux'
const Navbar = (props) => {
    const logoutHandler = (e) => {
        e.preventDefault();
        props.logout();
    }
    return (
        <header class="top">
            <div class="navbar">
                <img src={img} width="45" height="50" />
                <ul style={{ alignItems: 'center' }}>
                    <li><Link to="/records">RECORDS</Link></li>
                    <li><Link to="/drives">DRIVES</Link></li>
                    <li><Link to="/home">HOME</Link></li>
                </ul>
            </div>
            <a onClick={e => logoutHandler(e)} class='logoutbtn'>LOGOUT</a>
        </header>
    )
}

export default connect(null, { logout })(Navbar)
