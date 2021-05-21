import React, { useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import DataTable from './DataTable'
import { connect } from 'react-redux'
import { getRecords } from '../../Redux/actions/records'

const Records = (props) => {
    useEffect(() => {
        props.getRecords();
    }, [])
    const clickHandler = e => {

    }
    return (
        <div>
            <Navbar />
            <button onClick={e => clickHandler(e)} >Click</button>
            <div class="second">
                <button class="openbtn" >☰</button>
                <a href="AddNew.html" class="addNew">ADD STUDENT</a>
            </div>
            <div class="search">
                <div class="searchBox">
                    <input type="text" placeholder="Search.." />
                    <button type="submit" class="submitBtn"><i class="fa fa-search"></i></button>
                </div>
                <select name="search" id="search">
                    <option value="name">Name</option>
                    <option value="enrollment">Enrollment</option>
                    <option value="email">EMail</option>
                </select>
            </div>

            <div class="records">
                <table class="recordsTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Enrollment Number</th>
                            <th>Email</th>
                            <th>Branch</th>
                            <th>Contact Number</th>
                            <th>Placement Status</th>
                            <th>PlacedIn</th>
                            <th>Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.records.map(record => <DataTable value={record} />)}

                    </tbody>


                </table>
            </div>

            <div class="pagination">
                <a href="#" class="previous">&laquo; Previous</a>
                <a href="#" class="next">Next &raquo;</a>

            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    records: state.records.records
})
export default connect(mapStateToProps, { getRecords })(Records)
