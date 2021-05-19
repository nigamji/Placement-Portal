import React, { useEffect, Fragment } from 'react'
import Drive from './Drive'
import { connect } from 'react-redux'
import { getDrives, saveEnroll, deleteDrive } from '../../Redux/actions/drives'
import NavBar from '../Layout/Navbar'
import { Link } from 'react-router-dom'
const Drives = ({ getDrives, saveEnroll, deleteDrive, drives: { drives, loading }, location }) => {
    useEffect(() => {
        getDrives();
    }, [])
    return (
        <div>
            <NavBar />
            { loading ? <p>LOADING...</p> : (
                <Fragment>
                    <div class="MainBody">
                        <h2>Drives</h2>
                        <br />
                        <div class="New">
                            <h4>New Drive? <Link to="new-drive">CREATE ONE</Link></h4>
                        </div>
                        <br />
                    </div>
                    <div class="CardHolder">
                        {drives.map(drive =>
                            <Drive key={drive._id} drive={drive} enroll={saveEnroll} delete={deleteDrive} />
                        )}
                    </div>
                </Fragment>
            )}
        </div>

    )
}
const mapStateToProps = state => ({
    drives: state.drives
})
export default connect(mapStateToProps, { getDrives, saveEnroll, deleteDrive })(Drives)
