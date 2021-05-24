import React, { useEffect, useState } from 'react'
import Navbar from '../Layout/Navbar'
import DataTable from './DataTable'
import { connect } from 'react-redux'
import { getRecords } from '../../Redux/actions/records'
import Menubar from '../Layout/Menubar'
import Backdrop from '../Layout/Backdrop'
import Loader from '../Layout/Loader'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
const Records = (props) => {
    const [filterData, setFilterData] = useState({
        college: '',
        branch: '',
        placedIn: '',
        placed: false,
        ipp: null,
        pageNo: 1,
        filtertype: ''
    })
    const { placed, pageNo } = filterData;
    const [toggleMenu, setToggle] = useState(false)
    const [searchType, setSearchType] = useState('name')
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        props.getRecords();
    }, [])
    const toggleHandler = (e) => {
        setData();
        setToggle(!toggleMenu)
    }
    const closeHandler = e => {
        setToggle(false)
    }
    const changeHandler = e => {
        setSearchValue(e.target.value)
    }
    const changeType = e => {
        setSearchType(e.target.value)
    }
    const selectBranch = (selectedList, selectedItem) => {
        setFilterData({ ...filterData, ['branch']: selectedItem.label })
    }
    const selectCollege = (selectedList, selectedItem) => {
        setFilterData({ ...filterData, ['college']: selectedItem.label })
    }
    const selectDrive = (selectedList, selectedItem) => {
        setFilterData({ ...filterData, ['placedIn']: selectedItem._id })
    }
    const removeBranch = (selectedList, selectedItem) => {
        // setFilterData({ ...filterData, ['branch']: filterData.branch.filter(branch => selectedItem.label !== branch) })
        setFilterData({ ...filterData, ['branch']: null })
    }
    const removeCollege = (selectedList, selectedItem) => {
        setFilterData({ ...filterData, ['college']: null })
    }
    const removeDrive = (selectedList, selectedItem) => {
        setFilterData({ ...filterData, ['placedIn']: null })
    }
    const setPlacementStatus = (e) => {
        setFilterData({ ...filterData, ['placed']: !filterData.placed })
    }
    let data = '';
    if (searchType == 'enrollment') {
        data = searchValue + ",,";
    }
    else if (searchType == 'name') {
        data = "," + searchValue + ","
    }
    else if (searchType == 'email') {
        data = ",," + searchValue
    }
    const setData = e => {
        setFilterData({ ...filterData, ['filtertype']: data });
    }
    const submitFilter = (e) => {
        e.preventDefault();
        setFilterData({ ...filterData, ['filtertype']: data });
        props.getRecords(filterData);
        setToggle(false);
        setFilterData({
            college: '',
            branch: '',
            placedIn: '',
            placed: false,
            ipp: null,
            pageNo: 1,
            filtertype: ''
        })
    }
    const next = e => {
        if (pageNo <= props.totalPage)
            filterData.pageNo++;
        e.preventDefault();
        setFilterData({ ...filterData, ['filtertype']: data });
        props.getRecords(filterData);
        setToggle(false);
    }
    const prev = e => {
        if (pageNo > 0)
            filterData.pageNo--;
        e.preventDefault();
        setFilterData({ ...filterData, ['filtertype']: data });
        props.getRecords(filterData);
        setToggle(false);
    }
    return (
        <div>
            <Navbar />
            <div className="second">
                <button className="openbtn" onClick={(e) => toggleHandler(e)}>☰</button>
                <Link to="/add-new-record" className="addNew">ADD STUDENT</Link>
            </div>
            {toggleMenu === true ? <Fragment>
                {/* <Backdrop /> */}
                <Menubar
                    close={e => closeHandler(e)}
                    selectCollege={(i, j) => selectCollege(i, j)}
                    removeCollege={(i, j) => removeCollege(i, j)}
                    selectBranch={(i, j) => selectBranch(i, j)}
                    removeBranch={(i, j) => removeBranch(i, j)}
                    selectDrive={(i, j) => selectDrive(i, j)}
                    removeDrive={(i, j) => removeDrive(i, j)}
                    check={placed}
                    placemenStatus={(e) => setPlacementStatus(e)}
                    submitFilter={(e) => submitFilter(e)}
                />

            </Fragment> : null}
            <div className="search">
                <div className="searchBox">
                    <input type="text" name="searchValue" value={searchValue}
                        onChange={e => changeHandler(e)} placeholder="Search.." />
                    <button type="submit" className="submitBtn"><i className="fa fa-search"></i></button>
                </div>
                <select name="searchType" id="search" value={searchType} onChange={e => changeType(e)}>
                    <option value="name">Name</option>
                    <option value="enrollment">Enrollment</option>
                    <option value="email">EMail</option>
                </select>
            </div>

            <div className="records">
                {props.loading ? <Loader /> :
                    <table className="recordsTable">
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
                            {props.records ? props.records.map(record =>
                                <DataTable key={record._id} value={record} />) : <Loader />}
                        </tbody>


                    </table>
                }

            </div>

            <div className="pagination">
                <button className="previous" onClick={(e) => prev(e)} >&laquo; Previous</button>
                <button className="next" onClick={(e) => next(e)}>Next &raquo;</button>

            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    records: state.records.records,
    loading: state.records.loading,
    totalPage: state.records.totalPage
})
export default connect(mapStateToProps, { getRecords })(Records)
