import  express  from "express";
import {create} from "express-handlebars";

const app = express();

const hbs = create({
    defaultLayout:'main',
    extname:"hbs"
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.get("/",(req, res)=>{
res.render("index")
});

app.get("/about",(req, res)=>{
    res.render("about")
    });

app.get("/products",(req, res)=>{
res.render("products");
});

app.get("/add",(req, res)=>{
res.render("add");
});

app.get("/login",(req, res)=>{
    res.render("login");
    });

app.get("/registr",(req, res)=>{
res.render("registr");
});
        
    
    
    

    const PORT =  4100;

app.listen(PORT, ()=>{
    console.log("Server is running  ",PORT)
})