import  express  from "express";
import {create} from "express-handlebars";
import mongoose from "mongoose";
import AuthRoutes from "./routes/auth.js";
import ProductRoutes from "./routes/products.js"
import * as dotenv from "dotenv" ;
import flash from "connect-flash";
import session from "express-session";
dotenv.config();

const app = express();

const hbs = create({
    defaultLayout:'main',
    extname:"hbs"
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.json());

app.use(session({secret:"Jamshid", resave:false, saveUninitialized:false}));
// app.use(express.cookieParser('keyboard cat'));
// app.use(express.session({ cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))

app.use(AuthRoutes);
app.use(ProductRoutes);

        
    
    
const startAplication = function(){


try {
    
console.log(process.env.MONGO_URL)
const PORT =  4100;

mongoose.set('strictQuery',false)

mongoose.connect(process.env.MONGO_URL,{});
app.listen(PORT, ()=>{
console.log("Server is running  ",PORT)
});
} catch (error) {
    console.log(error)
}
};
startAplication();