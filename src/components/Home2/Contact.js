import React, { useState } from 'react'
import serverURL from '../../serverURL'
import axios from 'axios'

const Contact = () => {

    const ENDPT = `http://${serverURL}`
    const [name, setName] = useState('Vasu')
    const [email, setEmail] = useState('Vasu@gmail.com')
    const [subject, setSubject] = useState(963)
    const [message, setMessage] = useState('Vasu send a message')

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            subject,
            message
        }

        axios.post(`${ENDPT}/contact` , data ).then((res)=>{
            console.log('Appointment booking Done\n\n' ,res);

            if (res.data.newContact){
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }else if (res.data.errors) {
                console.log('a');
                //handle error
            }
        })
        .catch(error=>{
            console.log('Appointment booking error\n\n', error);
        })
    }

    return (
        <div>
            {/* contact section start */}
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                                corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?
                            </p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user" />
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Vaishnavi Tiwari </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt" />
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">Jabalpur, Madhya Pradesh</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope" />
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">abc@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form onSubmit={handleSubmit} >
                                <div className="fields">
                                    <div className="field name">
                                        <input value={name} onChange={e => { setName(e.target.value) }} type="text" placeholder="Name" required />
                                    </div>
                                    <div className="field email">
                                        <input value={email} onChange={e => { setEmail(e.target.value) }} type="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <input value={subject} onChange={e => { setSubject(e.target.value) }} type="text" placeholder="Subject" required />
                                </div>
                                <div className="field textarea">
                                    <textarea value={message} onChange={e => { setMessage(e.target.value) }} cols={30} rows={10} placeholder="Message.." required defaultValue={""} />
                                </div>
                                <div className="button">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact
