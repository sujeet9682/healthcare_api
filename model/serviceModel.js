import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: [true, 'Service name is required.'],
        validate: {
            validator: function (value) {
                return value && value.trim().length > 1;
            },
            message: 'Service name must not be empty and atleast 2 character',
        },
    },
    description: {
        type: String,
        required: [true, 'First add description'],
        validate: {
            validator: function (value) {
                return value && value.trim().length > 0;
            },
            message: 'description must not be empty or whitespace.',
        },
    },
    price: {
        type: Number,
        required: [true, 'Price is required and must be a number.'],
    },
});

const Service = mongoose.model("services", serviceSchema);
export default Service;