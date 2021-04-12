const Customer = require('../Models/Customer');
const Transaction = require('../Models/Transaction');

const alertError = (err) => {
    let errors = { name: '', email: '', mobileNo: '', balance: '' }

    console.log('error msg', err.message);

    if (err.message === 'Incorrect Email') {
        errors.email = 'Incorrect Email';
    }
    if (err.message === 'Incorrect Password') {
        errors.password = 'Incorrect Password';
    }

    if (err.code === 11000) {
        errors.email = 'This Email-id Already Exists';
        return errors;
    }
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}


module.exports.getTransaction = async (req, res) => {
    try {
        // const sender = "afaa@vg.com"
        // const receiver = "dewws@cf.com"
        // const transamount = 79

        // // console.log(data);
        // Transaction.create({ sender, receiver, transamount }).then(
        //     (newTransaction) => {
        //         console.log(newTransaction);
        //     }).catch((error) => {
        //         console.log('error', error);
        //     })

        // var schemaObj = Transaction.findOne();
        // console.log(schemaObj);
        
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

        // Customer.deleteMany({}).then((res) =>
        //     res.send(' DELETE DELETE DELETE')
        // )

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

        const sender = senderCustomer.email
        const receiver = recieverCustomer.email
        const transamount = amountToSend

        // console.log(data);
        Transaction.create({ sender , receiver , transamount }).then(
            (newTransaction) => {
                console.log(newTransaction);
            }).catch((error) => {
                console.log('error', error);
            })

        res.send("Transaction Done Succesfully");
    } else {
        res.send("error occured while making transaction")
    }

}

module.exports.addCustomer = async (req, res) => {
    var { name, email, mobileNo, balance } = req.body

    console.log(req.body , mobileNo);
    Customer.create({ name, email, mobileNo, balance }).then(
        (newCustomer) => {
            console.log(newCustomer);
            res.status(200).send({ newCustomer });
        }).catch((error) => {
            // const errors = alertError(error);
            console.log('error', error);
            res.status(200).json({ error });
        })

}