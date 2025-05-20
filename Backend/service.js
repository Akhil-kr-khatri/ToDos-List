const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
//connecting to mongoDB
mongoose.connect(process.env.MONGO_URL, {
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/todos', require('./routes/todos'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));