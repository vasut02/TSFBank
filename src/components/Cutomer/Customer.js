import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import serverURL from '../../serverURL'
import TableRow from './TableRow'
import './Table.css'
import AddCustomer from './AddCustomer'

const Customer = () => {

    const ENDPT = `http://${serverURL}`
    const [data, setData] = useState();

    const getCustomer = ()=>{
        axios.get(`${ENDPT}/get/customer`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getCustomer();
    }, [])


    return data ? (
        <div className='customer' >
            <h2>Customers </h2>
            <div className="table-wrapper">
            <AddCustomer getCustomer={getCustomer} />
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Mobile Number</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow customer={data} page='customer' />
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

export default Customer
