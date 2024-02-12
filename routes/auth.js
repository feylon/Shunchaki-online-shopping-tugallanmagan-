import { Router } from "express";
const router = Router();

router.get("/login",(req, res)=>{
    res.render("login");
    });

router.get("/registr",(req, res)=>{
res.render("registr");
});


export default router;