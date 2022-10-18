const EntitySchema = require('typeorm').EntitySchema;

const employees = new EntitySchema({
    name: 'Payment',
    columns:{
        id: {
            primary: true,
            type:'varchar',
            generated: 'uuid'
        },
        txn_type :{
            type:'varchar'  // Cr or Dr
        },
        txn_amount: {
            type:'float'
        }
    }
})

module.exports = {employees};