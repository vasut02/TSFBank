import React, { useEffect ,useState  } from 'react'
import axios from 'axios'
import serverURL from '../../serverURL'

const Dropdown = () => {

    const ENDPT = `http://${serverURL}`
    const [data, setData] = useState();

    const getCustomer  = ()=>{
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
        <>
            { data.data.map((value, i) => (
                <option key={i}>{value.email}</option>
            ))}
        </>
    ) 
    : 
    (
        <>
            <option>can't Load</option>
        </>
    )
}

export default Dropdown
