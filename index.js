import express from 'express'
import pg from 'pg'

const app = express()
const port = 3000
const {Pool} = pg

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: '230605',
    port: 5432,
})

app.get('/', (req, res, next) => {
    console.log("TEST DATA:");
    pool.query('SELECT * FROM biodata')
        .then(testDdata => {
            console.log(testDdata);
            res.json(testDdata.rows);
        })