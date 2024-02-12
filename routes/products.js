import { Router } from "express";
const router = Router();
router.get("/",(req, res)=>{
    res.render("index",{
        title:"products"
    })
    });
    
    router.get("/about",(req, res)=>{
        res.render("about",{
            title:"about"
        })
        });
     
    router.get("/products",(req, res)=>{
    res.render("products",{
        title:"products",
        isProduct:true
    });
    });
    
    router.get("/add",(req, res)=>{
    res.render("add",{
        title:"Add",
        isAdd:true
    });
    });
export default router;    