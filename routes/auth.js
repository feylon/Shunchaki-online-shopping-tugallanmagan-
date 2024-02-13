import { Router } from "express";
const router = Router();

router.get("/login",(req, res)=>{
    res.render("login",{
        title:"login"
    });
    });


router.post("/login",(req, res)=>{
console.log(req.body);
res.redirect("/")
});

router.get("/registr",(req, res)=>{
res.render("registr",{
    title:"Login"
});
});


router.post("/registr",(req, res)=>{
    console.log(req.body);
    res.redirect("/login")
    });

export default router;