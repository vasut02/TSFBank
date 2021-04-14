import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import serverURL from '../../serverURL'

const AddCustomer = (getCustomer) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [balance, setBalance] = useState('');


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

    const addCustomer = (e) => {
        e.preventDefault();

        if (name && email && mobileNo && balance) {
            setLoading(true);

            const data = {
                name,
                email,
                mobileNo,
                balance
            }

            axios.post(`http://${serverURL}/addCustomer`, data)
                .then((req) => {
                    console.log(req.data);
                    if (req.data.newCustomer)
                        toast.dark('New Customer Created Succesfully', toastOptions);
                    else
                        toast.error('Error Creating New Customer', toastOptions);
                    getCustomer.getCustomer();
                    setLoading(false);
                }).catch((err) => {
                    setLoading(false);
                    console.log("add cutomer error", err);
                })
            setName('')
            setBalance('')
            setEmail('')
            setMobileNo('')
        }else{
            toast.warn('Fill the Details properly', toastOptions);
        }
    }

    return (
        <div>
            <button className="add-user" type="button" data-toggle="modal" data-target="#exampleModalCenter" >Add Customer</button>

            <div>
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form className='Login-form' onSubmit={addCustomer}>
                                    <label htmlFor="exampleInputEmail1" className="form-label" onSubmit={addCustomer}>Name</label>
                                    <input
                                        value={name}
                                        type="text"
                                        onChange={e => { setName(e.target.value) }}
                                        placeholder="Enter you name"
                                        aria-describedby="amountHelp"
                                    ></input>
                                    <label htmlFor="exampleInputEmail1" className="form-label">E-Mail</label>
                                    <input
                                        value={email}
                                        type="email"
                                        onChange={e => { setEmail(e.target.value) }}
                                        placeholder="Enter you E-Mail"
                                        aria-describedby="amountHelp"
                                    ></input>
                                    <label htmlFor="exampleInputEmail1" className="form-label">Contact Number</label>
                                    <input
                                        value={mobileNo}
                                        type="number"
                                        onChange={e => { setMobileNo(e.target.value) }}
                                        placeholder="Enter you Contact Number"
                                        aria-describedby="amountHelp"
                                    ></input>
                                    <label htmlFor="exampleInputEmail1" className="form-label">Balance</label>
                                    <input
                                        value={balance}
                                        type="number"
                                        onChange={e => { setBalance(e.target.value) }}
                                        placeholder="Enter you Balance"
                                        aria-describedby="amountHelp"
                                    ></input>
                                    <button type='submit' disabled={loading}>
                                        {loading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                        {!loading && <span>Add Customer</span>}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer
