import React from 'react'
import TableColoumn from './TableColoumn'

const TableRow = ({ customer , page }) => {
    return customer.data ? (
        <>
            { customer.data.slice(0).reverse().map((value, i) => (
                <TableColoumn key={i} data={value} page={page} />
            ))}
        </>

    ) : (
        <div></div>
    )
}

export default TableRow
