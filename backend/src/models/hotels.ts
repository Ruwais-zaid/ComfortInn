import mongoose from "mongoose";

export type HotelTypes={
    _id:string;
    userid:string;
    name:string;
    city:string;
    country:string,
    description:string;
    type:string;
    adultCount:number;
    childCount:number;
    facilities:string[];
    pricePerNight:number;
    starRating:number;
    imageURL:string[];
    lastupdated:Date;


}

const hotelSchema=new mongoose.Schema<HotelTypes>({

    userid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    adultCount:{
        type:Number,
        required:true,

    },
    childCount:{
        type:Number,
        required:true,
    },
    facilities:[
        {
            type:String,
            required:true
        }
    ],
    pricePerNight:{
      type:Number,
        required:true,
    },
    starRating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    imageURL:[
        {
            type:String,
            required:true
        }


    ],
    lastupdated:{
        type:Date,
        required:true
    }

})

const Hotel = mongoose.model<HotelTypes>("Hotel",hotelSchema)
export default Hotel