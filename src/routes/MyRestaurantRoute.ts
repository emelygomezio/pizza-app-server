import express from "express";
import multer from "multer";

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer ({
    storage: storage, 
    limits: {
        fileSize: 5 * 1024 * 1024, //5mb
    }, 
}),

// /api/my/restaurant 

router.post("/", MyRestaurantController.createMyRestaurant)