const express = require("express");
const Connectdb = require("./helpers/Connectdb");
const cors=require('cors')
const app = express();

const userRoutes = require("./route/userRoutes/user.routes");
const profileRoutes = require("./route/profilRoutes/pofile.routes");


app.use(cors())

//connect to data base
Connectdb();

// middleware


app.use(express.json());

// define route

userRoutes(app);
profileRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on PORT :${PORT}`));
