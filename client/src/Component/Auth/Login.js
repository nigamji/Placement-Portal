import React, { useState } from 'react'
import { connect } from 'react-redux'
import img from '../assets/456.jpg'
import { login } from '../../Redux/actions/auth'
import { Redirect } from 'react-router-dom'
const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.login(email, password);
    }
    if (props.isAuthenticated) {
        return <Redirect to='/home' />
    }
    return (
        <body className="loginClass">
            <br></br>
            <br />
            <br />
            <div className="box">
                <div className="logo">
                    <img src={img} alt="" width="100" height="123" />
                    <h1>Oriental Group of <br></br>Institutes</h1>
                </div>
                <div className="loginBox">
                    <h1 >Admin Portal</h1>
                    <form className="login" onSubmit={e => submitHandler(e)}>
                        <input type="email" name='email' value={email}
                            onChange={e => handleChange(e)} id="user" placeholder="Email" />
                        <input type="password" name='password'
                            id="password" placeholder="Password"
                            value={password} onChange={e => handleChange(e)}
                        />
                        <button className="loginbtn">LOGIN</button>
                    </form>
                </div>
            </div>
        </body>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login);
