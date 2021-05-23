import React from 'react'

const DataTable = (props) => {
    return (
        <tr>
            <td><a href="StudentDetails.html">{props.value.Student_Name}</a></td>
            <td>{props.value.Enrollment_No}</td>
            <td>{props.value.Email_Address}</td>
            <td>{props.value.Branch}</td>
            <td>{props.value.Contact_Number}</td>
            <td>{props.value.isPlaced ? 'Placed' : 'Unplaced'}</td>
            <td>{props.value.placedIn.map(placedIn => placedIn.companyName + " ")}</td>
            <td>{props.value.placedIn.map(placedIn => placedIn.package)}</td>
        </tr>
    )
}

export default DataTable
