import express  from "express";
import bodyParser from "body-parser"; 
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
dotenv.config()
app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));
app.use(cors());
app.use('/posts',postRoutes);
app.use('/user',userRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const staticPath = path.join(__dirname, "../client/build");
app.use(express.static(staticPath));

// Serve React app on all routes not handled above
app.get("*", (req, res) => {
  res.sendFile(path.resolve(staticPath, "index.html"));
});

app.get('/',(req,res) => {
  res.send("Hello world")
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,() => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error.message))

