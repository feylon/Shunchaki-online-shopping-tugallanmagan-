import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const router = Router();

router.get("/login",(req, res)=>{
    res.render("login",{
        title:"login"
    });
    });


router.post("/login",async (req, res)=>{
    const existUser = await User.findOne(
        {
            email:req.body.email 
        }
    );
    if(!existUser) {console.log("User not found");return ;}
    const isPassEqual = await bcrypt.compare(req.body.password, existUser.password);
    if(!isPassEqual){console.log("Parol xato");
    return; 
}

    console.log(existUser);
    console.log(req.body);

res.redirect("/")
});

router.get("/registr",(req, res)=>{
res.render("registr",{
    title:"Login"
});
});


router.post("/registr", async (req, res)=>{
  const  hashedPassword = await bcrypt.hash(req.body.password, 10);  
    const UserData = 
{
firstName : req.body.firstname,
lastName : req.body.lastname,
email : req.body.email,
password : hashedPassword
};
console.log(UserData);
const user = await User.create(UserData)
    res.redirect("/login")
    });

export default router;
