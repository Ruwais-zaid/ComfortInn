import express, { Request, Response } from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import { HotelTypes } from '../models/hotels';
import Hotel from '../models/hotels';
import verifyToken from '../middleware/auth';

import {body }from "express-validator"
const router = express.Router();

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

router.post('/',verifyToken,[
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel Types is required"),
    body("priceperNight").notEmpty().withMessage("Price per Night is required and All must be a number").isNumeric(),
    body("facilities").notEmpty().isArray().withMessage("Facilities are required ")
] , upload.array("imageFiles", 6), async (req: Request, res: Response) => {
  try {
    // Validate if user ID is available
    if (!req.userId) {
      return res.status(400).json({ message: "User ID is missing" });
    }

    const imageFiles = req.files as Express.Multer.File[];
    const newHotel: HotelTypes = req.body;

    // Validate required hotel details
    if (!newHotel.name || !newHotel.description) {
      return res.status(400).json({ message: "Required hotel details are missing" });
    }

    // Upload images to Cloudinary
    const uploadPromises = imageFiles.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURL = `data:${image.mimetype};base64,${b64}`;
      const result = await cloudinary.v2.uploader.upload(dataURL);
      return result.url;
    });

    const imageURLs = await Promise.all(uploadPromises);
    newHotel.imageURL = imageURLs;
    newHotel.lastupdated = new Date();
    newHotel.userid = req.userId;

    // Save the new hotel to the database
    const hotel = new Hotel(newHotel);
    await hotel.save();

    // Return the created hotel with a 201 status
    res.status(201).send(hotel);

  } catch (e) {
    console.error("Error creating hotel:", e);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;