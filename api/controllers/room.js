import Room from '../models/room.js';
import Hotel from '../models/hotel.js';
import { createError } from '../utils/error.js';

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error)
    }
}

export const updateRoomAvailability = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}

export const deleteRoom = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}

export const getRomm = async (req, res, next ) => {
    try {
        
    } catch (error) {
        next(error)
    }
}

export const getRooms = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}