/***************** Server setup *****************/

// Import required packages
const express = require('express')
const bodyParser = require('body-parser')

// Initiate an express app instance
const app = express()

// Define the server port
const port = 3000

// Serve static website files
app.use(express.static('../webapp/public'));

// Parse application/json
app.use(bodyParser.json())



/*************** API Endpoints ******************/

// GET all sights
app.get('/sights', (req, res) => {
    // Database operation will be performed here
    res.status(200).json(sights)
})

// POST a new sight 
app.post('/sights', (req, res) => {
    // Database operation will be performed here
    res.status(201).json({ message: 'Created new sight!' })
})

// PATCH a sight by its id
app.patch('/sights/:id', (req, res) => {
    // Database operation will be performed here
    res.status(200).json({ message: 'Updated sight!' })
})

// DELETE a sight by its id
app.patch('/sights/:id', (req, res) => {
    // Database operation will be performed here
    res.json({ message: 'Deleted sight!' }).status(204)
})



/****************** Start server *****************/

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})



/**************** Mock sight data ****************/

let sights = {
    data: [{
            id: 1,
            name: 'Schlossplatz',
            location: {
                lat: 9.23421342,
                lon: 40.12242134
            }
        },
        {
            id: 2,
            name: 'Mercedes-Benz Museum',
            location: {
                lat: 9.23421342,
                lon: 40.12242134
            }
        },
        {
            id: 3,
            name: 'Mercedes-Benz Museum',
            location: {
                lat: 9.23421342,
                lon: 40.12242134
            }
        }
    ]
}