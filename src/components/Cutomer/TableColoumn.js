import React from 'react'

const TableColoumn = ({ data , page}) => {
    return page === 'customer' ? (
        <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.mobileNo}</td>
            <td>{data.balance}</td>
        </tr>

    ) : (
        <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.subject}</td>
        <td>{data.message}</td>
    </tr> 
    )
}

export default TableColoumn
