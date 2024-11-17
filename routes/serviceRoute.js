import express from "express";
import {
    addService,
    getAllServices,
    updateService,
    deleteService,
    fetch,
} from "../controller/serviceController.js";

const router = express.Router();

// Defining routes
router.post("/addService", addService); // POST to /api/services
router.get("/getAllServices", getAllServices); // GET all services from /api/services
router.put("/updateService/:id", updateService); // PUT to /api/services/:id
router.delete("/updateService/:id", deleteService); // DELETE from /api/services/:id
router.get("/fetch", fetch); // Unused endpoint example

export default router;