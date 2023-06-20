import * as usersDao from "./users-dao.js";


const AuthController = (app) => {
  const register = async (req, res) => {
    const user = await usersDao.findUserByUsername(req.body.username);
    if (user) {
      res.sendStatus(403);
      return;
    }
    const newUser = await usersDao.createUser(req.body);
    req.session["currentUser"] = newUser;
    res.json(newUser);
  };
  

  const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      const user = await usersDao.findUserByCredentials(username, password);
      if (user) {
        req.session["currentUser"] = user;
        console.log(user);
        res.json(user);
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  };
  

  const profile = (req, res) => {
    const currentUser = req.session["currentUser"];
    console.log(currentUser);
    if (!currentUser) {
      res.sendStatus(404);
      return;
    }
    res.json(currentUser);
  };
 
  const logout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };
 
 const update   = async (req, res) => { 
    console.log('update', req.body)
    // const username = req.body.username;
    const id = req.params.uid;
    console.log("\n\n\n ", id, req.body);
    const newUser = await usersDao.updateUser(id,req.body.user);
    // user = usersDao.findUserByUsername(username);
    // newUser = usersDao.findUserByCredentials(req.body.username, req.body.password);
    console.log(newUser);
    req.session["currentUser"] = newUser;
    res.json(newUser);};


 app.post("/api/users/register", register);
 app.post("/api/users/login",    login);
 app.post("/api/users/profile",  profile);
 app.post("/api/users/logout",   logout);
 app.put ("/api/users/update/:uid",   update);
}
export default AuthController;