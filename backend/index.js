import express, { urlencoded } from "express";
import pg from "pg";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";


env.config();

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set('views', './views');
app.set('view engine', 'ejs');

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

db.connect()

let people = []

app.get('/people', (req, res) => {

    db.query("SELECT * FROM people_invited", async (err, res) => {
        if (err) {
            console.error("Error executing query", err.stack);
        } else {
            people = res.rows;
        }
    })
    res.json(people);
})

app.get('/people/:id', async (req, res) => {
    const id = req.params.id;
    const result = await db.query("SELECT * FROM people_invited WHERE id = $1", [id])
    console.log(result)
    res.json(result.rows);
})

// app.post(){}

app.put("/people/:id", async (req, res) => {
    const { id } = req.params;
    const {name, age, present} = req.body;
    try{
        await db.query(`UPDATE people_invited SET name=$1, age=$2, present=$3  WHERE id=$4`, [name, age, present, id])
    res.status(200).json({
        message: "Person updated successfully",
        data: {id, name, age, present}
    });
    } catch (err) {
        console.error("Error updating register", err);
        res.status(500).json({message: 'Server error'});
    }
     
    
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
