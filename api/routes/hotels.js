import express from 'express';
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel
} from '../controllers/hotel.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post("/", verifyToken, createHotel);

//UPDATE
router.put("/:id", verifyToken, updateHotel);

//DELETE
router.delete("/:id", verifyToken, deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

//COUNT BY CITY
router.get("/countByCity", countByCity);

//COUNT BY TYPE
router.get("/countByType", countByType);

//GET HOTEL ROOMS
router.get("/room/:id", getHotelRooms);


export default router;