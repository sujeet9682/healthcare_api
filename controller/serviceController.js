import Service from "../model/serviceModel.js";
import mongoose from "mongoose";

export const addService = async (req, res) => {
    const { serviceName, description, price } = req.body;

    // Validating fields
    if (!serviceName || !price) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const service = new Service({ serviceName, description, price });
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateService = async (req, res) => {
    const { id } = req.params;
    const { serviceName, description, price } = req.body;

    if (!serviceName || !price) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the id is a valid .....
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID." });
    }

    try {
        const updatedService = await Service.findByIdAndUpdate(
            id,
            { serviceName, description, price },
            { new: true, runValidators: true }
        );
        
        if (!updatedService) {
            return res.status(404).json({ message: "Something gone wrong" });
        }
        
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a service by id
export const deleteService = async (req, res) => {
    const { id } = req.params;

    // Check if the id is a valid...
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID." });
    }

    try {
        const deletedService = await Service.findByIdAndDelete(id);
        
        if (!deletedService) {
            return res.status(404).json({ message: "Something gone wrong" });
        }
        
        res.status(204).send(); // No content response on deletion
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const fetch = async (req, res) => {  //only checking on browser
    try {
        res.status(200).json({ message: "Hello! Ram Ram Ji!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
