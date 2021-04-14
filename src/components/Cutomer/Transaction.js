import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import serverURL from '../../serverURL'
import TableRow from './TableRow'
import './Table.css'

const Transaction = () => {

    const ENDPT = `http://${serverURL}`
    const [data, setData] = useState();

    const getTransaction  = ()=>{
        axios.get(`${ENDPT}/get/transaction`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    useEffect(() => {
        getTransaction();
    }, [])


    return data ? (
        <div className='customer' >
            <h2>Transaction </h2>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>sender</th>
                            <th>Receiver</th>
                            <th>Transaction Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow customer={data} page='transaction' />
                    </tbody><tbody>
                    </tbody></table>
            </div>

        </div>
    )
        : (
            <div className='customer loader-conatiner'>
                <div class="loader"></div>
                
            </div>
        )
}

export default Transaction;
