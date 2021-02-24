import React , {useState} from 'react'
import axios from 'axios'


const Send = () => {

    const [CoinsToSend, setCoinsToSend] = useState('')
    const [CoinReciever, setCoinReciever] = useState('')

    const SendCoins = (e)=>{
        e.preventDefault();

        if (CoinsToSend && CoinReciever){
            const data = {
                CoinsToSend,
                CoinReciever
            }
            console.log(data);
            axios.post('http://localhost:8000/send' , data )
            .then((req)=>{
                console.log(req.data);
            })
            setCoinsToSend('');
            setCoinReciever('');
        }
    }

    return (
        <div>
            <form onSubmit={SendCoins}>
                <input  value={CoinsToSend} type="number" onChange={e=>{setCoinsToSend(e.target.value)}} placeholder="Enter amount to send"></input>
                <input  value={CoinReciever} onChange={e=>{setCoinReciever(e.target.value)}} placeholder="Enter Reciever's Name"></input>
                <button type="submit" >Send</button>
            </form>
        </div>
    )
}

export default Send
