// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//      email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     avatar:{
//         type: String,
//         // public_id: String,
//         default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
//     },
//      password: {
//         type: String,
//         required: true,
//     },
//     list:[
//     {
//         type:mongoose.Types.ObjectId,
//         ref:"Image",
//     },
// ],
// });


// const User = mongoose.model('User', userSchema);
// // module.exports = mongoose.model("List", listSchema);{}
// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
    },
  
    list: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Image",
        },
    ],
});

const User = mongoose.model("User", userSchema);

export default User;
