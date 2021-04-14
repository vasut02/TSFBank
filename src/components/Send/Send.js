import React, { useState } from 'react'
import axios from 'axios'
import Dropdown from './Dropdown'
import './Send.css'
import serverURL from '../../serverURL'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Send = () => {

    const [amountToSend, setAmountToSend] = useState('')
    const [reciever, setReciever] = useState('')
    const [sender, setSender] = useState('')

    const [loading, setLoading] = useState(false)
    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const SendCoins = (e) => {
        e.preventDefault();

        if (amountToSend && reciever !== "--Select--" && sender !== "--Select--" && reciever !== sender) {
            setLoading(true);
            const data = {
                sender,
                amountToSend,
                reciever
            }
            console.log(data);
            axios.post(`http://${serverURL}/sendMoney`, data)
                .then((req) => {
                    console.log(req.data);
                    toast.dark(req.data, toastOptions);
                    setLoading(false);
                }).catch((err) => {
                    toast.error("some error occured", toastOptions);
                    console.log(err);
                    setLoading(false);
                })
            setAmountToSend('');
            setReciever('');
            setSender('');

        } else
            toast.info('Fill the Details properly', toastOptions);

    }
    return (
        <div className='Login' id='Login'>
            <p>
                <h1>Send Money</h1>
            </p>
            <form className='Login-form' onSubmit={SendCoins}>
                <label htmlFor="exampleInputPassword1" className="form-label">Select Sender</label>
                <select
                    value={sender}
                    onChange={e => { setSender(e.target.value) }}
                    placeholder="Enter Reciever's Name">
                    <option>--Select--</option>
                    <Dropdown />
                </select>
                <label htmlFor="exampleInputEmail1" className="form-label">Amount</label>
                <input
                    value={amountToSend}
                    type="number"
                    onChange={e => { setAmountToSend(e.target.value) }}
                    placeholder="Enter amount to send"
                    aria-describedby="amountHelp"
                ></input>
                <label htmlFor="exampleInputPassword1" className="form-label">Select Reciever</label>
                <select
                    value={reciever}
                    onChange={e => { setReciever(e.target.value) }}
                    placeholder="Enter Reciever's Name">
                    <option>--Select--</option>
                    <Dropdown />
                </select>
                <button type='submit' disabled={loading}>
                    {loading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                    {!loading && <span>Send</span>}
                </button>
            </form>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div >

    )
}

export default Send
