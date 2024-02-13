import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateJWTToken } from "../services/token.js";
const router = Router();

router.get("/login",(req, res)=>{
    res.render("login",{
        title:"login",
        isLogin:"true",
        loginError: req.flash("loginError")
    });
    });


router.post("/login",async (req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        req.flash("loginError","All field should be is required");
        res.redirect("/login");
        return;
    }
    const existUser = await User.findOne({email});
    if(!existUser) {console.log("User not found");
    req.flash("loginError","User not found");
        res.redirect("/login");
    return ;}
    const isPassEqual = await bcrypt.compare(password, existUser.password);
    if(!isPassEqual){console.log("Parol xato");
    req.flash("loginError","PArol xato");
        res.redirect("/login");
    return; 
}

    console.log(existUser);
    console.log(req.body);
    const token = generateJWTToken(existUser._id);
    console.log(token);
    res.cookie('token',token,{httpOnly:true,secure:true});
    
res.redirect("/")
});




router.get("/registr",(req, res)=>{
res.render("registr",{
    title:"Login",
    isRegistr:true,
    registrError:req.flash("RegistrError")
});
});


router.post("/registr", async (req, res)=>{
    const {firstname, lastname, email, password} = req.body;
  if(!firstname || !lastname || !email || !password){
    req.flash("RegistrError","Hamma inputlar required");
        res.redirect("/registr");
    return;
  }

  const candidate =  await User.findOne({email});
  if(candidate){
    req.flash("RegistrError",`${email} ro'yxatdan o'tgan`);
    res.redirect("/registr");

    return;
  }
    const  hashedPassword = await bcrypt.hash(password, 10);  
    const UserData = 
{
firstName : firstname,
lastName : lastname,
email : email,
password : hashedPassword
};
console.log(UserData);
const user = await User.create(UserData)
const token = generateJWTToken(user._id);
console.log(token);
res.cookie('token',token,{httpOnly:true,secure:true});
res.redirect("/login")
    });

export default router;
