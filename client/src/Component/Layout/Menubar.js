import React, {
    useEffect, useState
} from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
import { connect } from 'react-redux'
import { getBranches, getColleges, getDriveFilter } from '../../Redux/actions/filters'
import Backdrop from './Backdrop'
const Menubar = (props) => {
    useEffect(() => {
        props.getBranches()
    }, [props.getBranches])
    useEffect(() => {
        props.getColleges()
    }, [props.getColleges])
    useEffect(() => {
        props.getDriveFilter()
    }, [props.getDriveFilter])
    // const submitFilter = (e) => {
    //     e.preventDefault();
    //     console.log(filterData)
    // }
    return (
        <div>
            <div className='second'>

                <form div id="mySidepanel" className="sidepanel" onSubmit={e => props.submitFilter(e)} >
                    <a href="#" className="closebtn" onClick={props.close}>×</a>
                    <div className="filters">
                        <Multiselect style={{
                            alignItems: 'centre',
                            searchBox: {
                                fontSize: 'large', height: '3rem',
                                overflowY: 'scroll', border: 'none', overflowX: 'hidden',
                            },
                            chips: { marginBottom: '0.5rem' }
                        }} options={props.college}
                            displayValue="label"
                            placeholder="College"
                            singleSelect={true}
                            showArrow
                            onSelect={(selectedList, selectedItem) => props.selectCollege(selectedList, selectedItem)}
                            onRemove={(selectedList, selectedItem) => props.removeCollege(selectedList, selectedItem)}
                        />
                        <br />
                        <Multiselect
                            style={{
                                searchBox: {
                                    fontSize: 'large', height: '3rem',
                                    overflowY: 'scroll', border: 'none', overflowX: 'hidden',
                                },
                                chips: { marginBottom: '0.5rem' }
                            }} options={props.branch}
                            displayValue="label"
                            singleSelect={true}
                            loading={!props.branch}
                            placeholder="Branch"
                            name='branch'
                            showArrow
                            onSelect={(selectedList, selectedItem) => props.selectBranch(selectedList, selectedItem)}
                            onRemove={(selectedList, selectedItem) => props.removeBranch(selectedList, selectedItem)}
                        />
                        <br />
                        <Multiselect style={{
                            searchBox: {
                                fontSize: 'large', height: '3rem',
                                overflowY: 'scroll', border: 'none', overflowX: 'hidden',
                            },
                            chips: { marginBottom: '0.5rem' }
                        }} options={props.drives}
                            singleSelect={true}
                            displayValue="label"
                            showArrow
                            hidePlaceHolder
                            placeholder="Already place In"
                            onSelect={(selectedList, selectedItem) => props.selectDrive(selectedList, selectedItem)}
                            onRemove={(selectedList, selectedItem) => props.removeDrive(selectedList, selectedItem)}
                        />
                        <div className="checkbox">
                            <input type="checkbox" id="unplaced" name="unplaced" value={props.check}
                                onChange={(e) => props.placemenStatus(e)}
                            />
                            <label >PLACED</label></div>
                    </div>
                    <button className="apply" >APPLY</button>
                </form>
            </div >
            <Backdrop show={true} />
        </div>
    )
}
const mapStateToProps = state => ({
    branch: state.filters.branch,
    college: state.filters.college,
    drives: state.filters.drives
})
export default connect(mapStateToProps, { getBranches, getColleges, getDriveFilter })(Menubar)
