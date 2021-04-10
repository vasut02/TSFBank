import React, { useState } from 'react'
import axios from 'axios'
import Dropdown from './Dropdown'


const Send = () => {

    const [amountToSend, setAmountToSend] = useState('')
    const [reciever, setReciever] = useState('')

    const SendCoins = (e) => {
        e.preventDefault();

        if (amountToSend && reciever !== "--Select--") {
            const data = {
                amountToSend,
                reciever
            }
            console.log(data);
            // axios.post('http://localhost:8000/send', data)
            //     .then((req) => {
            //         console.log(req.data);
            //     })
            setAmountToSend('');
            setReciever('');
        }
    }

    return (
        <div>
            <form onSubmit={SendCoins}>
                <input value={amountToSend} type="number" class="form-control" onChange={e => { setAmountToSend(e.target.value) }} placeholder="Enter amount to send"></input>
                <label for="sel1">Select list:</label>
                <select 
                    value={reciever} 
                    onChange={e => { setReciever(e.target.value) }}  
                    placeholder="Enter Reciever's Name" 
                    class="form-control">
                        <option>--Select--</option>
                    <Dropdown/>
                </select>
                <button type="submit" >Send</button>
            </form>
        </div>
    )
}

export default Send
