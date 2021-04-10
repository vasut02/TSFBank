import React, { useState, useEffect } from 'react'
import History from './History'

const Transaction = () => {

    const dummyData = {
        sender: 'Vasu',
        reciever: 'Elon Musk',
        amount: '5000'
    }

    const [transactions, setTransaction] = useState([])
    useEffect(() => {
        //method to pass objects in use state
        setTransaction([...transactions, dummyData]);
        // eslint-disable-next-line react-hooks/exhaustive-deps      
    }, [])

    return (
        <div>
            {transactions.map((transaction, i) => {
                return <History key={i} transaction={transaction} />
            })}
        </div>
    )
}

export default Transaction;
