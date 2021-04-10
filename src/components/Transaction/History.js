import React from 'react'

const History = ({ transaction }) => {
    return (
        <div>
            <div>
                Transaction: {transaction.sender} payed {transaction.reciever} amount {transaction.amount} DogeCoin
            </div>
            <div>
                {/* Hash: {Sha256.hash('abc')} */}
            </div>
        </div>
    )
}

export default History
