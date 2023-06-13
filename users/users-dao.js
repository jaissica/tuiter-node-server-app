let users = [];


export const findAllUsers = () => users;


export const findUserById = (uid) => {
 const index = users.findIndex((u) => u._id === uid);
 if (index !== -1) return users[index];
 return null;
};


export const findUserByUsername = (username) => {
 const index = users.findIndex((u) => u.username === username);
 if (index !== -1) return users[index];
 return null;
};


export const findUserByCredentials = (username, password) => {
 const index = users.findIndex((u) => u.username === username && u.password === password);
 console.log(users[index]);
 if (index !== -1) return users[index];
 return null;
};


export const createUser = (user) => {
    user = {_id : (new Date()).getTime() + '',  ...user};
    users.push(user)
    return user;
};


export const updateUser = (user) => {
    // console.log(user, users);
 const index = users.findIndex((u) => u._id === user.user._id);
 
 console.log("\n\n\nupdate : " ,user.user, index)
 users[index] = user.user;
 console.log("final : ", users)
 return {status: 'ok'}
};


export const deleteUser = (uid) => {
 const index = users.findIndex((u) => u._id === uid);
 users.splice(index, 1);
 return {status: 'ok'}
};
