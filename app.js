import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import AuthController from "./users/auth-controller.js";
import cors from 'cors'
const app = express();

 
// app.use(cors());

// app.use((req, res, next) => {
//     const allowedOrigins = ["http://localhost:3000", "https://a5--stellular-malasada-11cc12.netlify.app"];
//     const origin = req.headers.origin;

//     if (allowedOrigins.includes(origin)) {
//         res.header("Access-Control-Allow-Origin", origin);
//     }

//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Credentials", true);
//     // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     // res.setHeader("Access-Control-Allow-Credentials", "true");
//     // res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     // res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     next();
// });

app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
   );
   
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
   );
   
app.use(express.json());
const port = process.env.PORT || 4000;
TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

app.listen(port);