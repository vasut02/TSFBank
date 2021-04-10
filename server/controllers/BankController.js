const Customer = require('../Models/Customer');

module.exports.getCustomer = async (req, res) => {
    console.log('req reciveed from year',)
    try {
        
        // Customer.deleteMany({}).then((res)=>
        //     res.send(' DELETE DELETE DELETE')
        // )

        // const name = "Vasu Tiwari"
        // const email = "VasuTiwari409@gamil.com"
        // const mobileNo = "9876543210"
        // const balance = "120000"
        // Customer.create({ name, email, mobileNo, balance } ).then(
        //     (newCustomer) => {
        //         console.log(newCustomer);
        //     }).catch((error) => {
        //         const errors = alertError(error);
        //         console.log('error', errors);
        //     })

        Customer.find({}).then((data)=>{
            res.status(200).json({data});
        }).catch((error)=>{
            res.status(200).json({error});
        })
    } catch (error) {
        res.status(200).json({error});
    }
}

module.exports.addCustomer = async (req , res) => {
    const { name, email, mobileNo, balance } = req.body

    try {
        Customer.create({ name, email, mobileNo, balance } ).then(
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