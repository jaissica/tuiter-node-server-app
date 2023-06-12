import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import AuthController from "./users/auth-controller.js";
const app = express()
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
   );   
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
 )
TuitsController(app);
HelloController(app)
UserController(app);
AuthController(app);
app.listen(4000)