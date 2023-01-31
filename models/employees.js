const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Names Roles level age 
//timeStamps- createdAt- updatedAt
const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
}, 
{timestamps: true});

module.exports = mongoose.model("Employee", employeeSchema);