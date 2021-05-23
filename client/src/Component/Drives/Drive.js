import React, { Fragment, useState } from 'react'
import Moment from 'react-moment'
const Drive = (props) => {
    const [toggle, setToggle] = useState(false)
    const [enrollment, setEnrollment] = useState(null);
    // console.log(props)
    const changeHandler = e => {
        setEnrollment([e.target.name] = e.target.value)
    }
    const saveHandler = e => {
        e.preventDefault();
        let id = props.drive._id;
        props.enroll(id, enrollment);
        setEnrollment(null);
        setToggle(false);
    }
    const deleteHandler = e => {
        e.preventDefault();
        let id = props.drive._id;
        props.delete(id);
    }
    return (
        <div className="CardHolder-card">
            <h4>{props.drive.companyName}</h4>
            <article>{props.drive.desc}</article>
            <div className="Flex Flex-aligned ContentHead">
                <div className="Flex Flex-aligned">
                    <span>Package: </span>
                    <p>{props.drive.package}</p>
                </div>
                <div className="Flex Flex-aligned">
                    <span>Date:</span>
                    <Moment format='YYYY/MM/DD'>{props.drive.Date}</Moment>
                </div>
            </div>
            <div className="Flex Flex-aligned ContentHead">
                <div className="Flex Flex-aligned">
                    <span>Courses: </span>
                    {props.drive.course.map(course => <p>{course}</p>)}
                </div>
                <div className="Flex Flex-aligned">
                    <span>Branch:</span>
                    {props.drive.branch.map(branch => <p>{`${branch}`}.</p>)}
                </div>
            </div>
            <div className="Flex Flex-aligned ContentHead">
                <div className="Flex Flex-aligned">
                    <span>HSC: </span>
                    <p>{props.drive.eligibility.hsc ? props.drive.eligibility.hsc : <p>None</p>}</p>
                </div>
                <div className="Flex Flex-aligned">
                    <span>SSC: </span>
                    <p>{props.drive.eligibility.ssc ? props.drive.eligibility.ssc : <p>None</p>}</p>
                </div>
                <div className="Flex Flex-aligned">
                    <span>Aggregate CGPA UG: </span>
                    <p>{props.drive.eligibility.graduation ? props.drive.eligibility.graduation : <p>None</p>}</p>
                </div>
            </div>
            <div className="Flex Flex-aligned Flex-center">
                <button className="Btn Btn-success" onClick={() => setToggle(!toggle)}>Add Enrollment Number</button>
                <button className="Btn Btn-danger" onClick={e => deleteHandler(e)}>Delete Drive</button>
            </div>
            {toggle ? (
                <div className="Enroll">
                    <textarea type="text" name="enrollment" value={enrollment} onChange={e => changeHandler(e)} />
                    <button onClick={(e) => saveHandler(e)}>Save</button>
                </div>
            ) : ' '}
        </div >
    )
}

export default Drive
