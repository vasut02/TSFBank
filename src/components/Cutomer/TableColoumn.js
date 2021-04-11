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
        <td>{data.sender}</td>
        <td>{data.receiver}</td>
        <td>{data.transamount}</td>
    </tr> 
    )
}

export default TableColoumn
