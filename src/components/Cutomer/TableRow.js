import React from 'react'
import TableColoumn from './TableColoumn'

const TableRow = ({ customer , page }) => {
    return customer.data ? (
        <>
            { customer.data.map((value, i) => (
                <TableColoumn key={i} data={value} page={page} />
            ))}
        </>

    ) : (
        <div></div>
    )
}

export default TableRow
