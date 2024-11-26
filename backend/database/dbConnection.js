import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect("mongodb+srv://shivam25kumar04:D8YyXFgFAB6.xLR@cluster0.98fks.mongodb.net/Mini_Proj_DB")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
