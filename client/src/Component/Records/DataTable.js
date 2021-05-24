import React from 'react'
import { Link } from 'react-router-dom'
const DataTable = (props) => {
    return (
        <tr>
            <td><Link to={`/records/${props.value._id}`}>{props.value.Student_Name}</Link></td>
            <td>{props.value.Enrollment_No}</td>
            <td>{props.value.Email_Address}</td>
            <td>{props.value.Branch}</td>
            <td>{props.value.Contact_Number}</td>
            <td>{props.value.isPlaced ? 'Placed' : 'Unplaced'}</td>
            <td>{props.value.placedIn.map(placedIn => placedIn.companyName + " ")}</td>
            <td>{props.value.placedIn.map(placedIn => placedIn.package)}</td>
        </tr >
    )
}

export default DataTable
