const Customer = require('../Models/Customer');
const Transaction = require('../Models/Transaction');

module.exports.getTransaction = async (req, res) => {
    try {
        const sender = "afa@vg.com"
        const receiver = "deww@cf.com"
        const transamount = 79

        // console.log(data);
        Transaction.create({ sender, receiver, transamount }).then(
            (newTransaction) => {
                console.log(newTransaction);
            }).catch((error) => {
                console.log('error', error);
            })

        Transaction.find({}).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(200).json({ error });
        })
    } catch (error) {
        res.status(200).json({ error });
    }
}

module.exports.getCustomer = async (req, res) => {
    console.log('req reciveed from year',)
    try {

        // Transaction.deleteMany({}).then((res) =>
        //     res.send(' DELETE DELETE DELETE')
        // )

        // to add temp customer 

        // const name = "Vasu Tiwari"
        // const email = "VasuTiwar69ijk@gamil.com"
        // const mobileNo = "9876543210"
        // const balance = "120000"
        // Customer.create({ name, email, mobileNo, balance } ).then(
        //     (newCustomer) => {
        //         console.log(newCustomer);
        //     }).catch((error) => {
        //         console.log('error', error);
        //     })

        Customer.find({}).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(200).json({ error });
        })
    } catch (error) {
        res.status(200).json({ error });
    }
}


module.exports.sendMoney = async (req, res) => {
    const { sender, amountToSend, reciever } = req.body
    console.log(sender, amountToSend, reciever);

    const senderCustomer = await Customer.findOne({ email: sender })
        .catch((err) => {
            console.log('error occured while making transaction', err)
            res.send("error occured while making transaction")
        });

    console.log(senderCustomer);

    const recieverCustomer = await Customer.findOne({ email: reciever })
        .catch((err) => {
            console.log('error occured while making transaction', err)
            res.send("error occured while making transaction")
            
        });

    if (senderCustomer && recieverCustomer) {

        //deduct amount from sender
        senderCustomer.balance -= parseInt(amountToSend);
        const transaction1 = await senderCustomer.save();

        // add amount to reciever
        recieverCustomer.balance += parseInt(amountToSend);
        const transaction2 = await recieverCustomer.save();

        // const sender = "afa"
        // const receiver = "deww"
        // const trans_amount = 79

        // console.log(data);
        // Transaction.create({ sender , receiver , trans_amount }).then(
        //     (newTransaction) => {
        //         console.log(newTransaction);
        //     }).catch((error) => {
        //         console.log('error', error);
        //     })

        res.send("Transaction Done Succesfully");
    } else {
        res.send("error occured while making transaction")
    }

}

module.exports.addCustomer = async (req, res) => {
    const { name, email, mobileNo, balance } = req.body

    try {
        Customer.create({ name, email, mobileNo, balance }).then(
            (newCustomer) => {
                console.log(newCustomer);
                res.status(200).send({ newCustomer });
            }).catch((error) => {
                const errors = alertError(error);
                console.log('error', errors);
                res.status(200).json({ errors });
            })
    } catch (error) {

    }
}