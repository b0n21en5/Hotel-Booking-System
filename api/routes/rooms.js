import express from "express";
import {
  createRoom,
  deleteRoom,
  findHotelByRoom,
  getAllRooms,
  getSingleRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getSingleRoom);

// GET ALL
router.get("/", getAllRooms);

// FIND HOTEL BY ROOM
router.get("/findhotel/:roomid", findHotelByRoom);

export default router;
