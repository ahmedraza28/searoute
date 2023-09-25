const express = require('express');
const searoute = require('./index')

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

console.log("welcome")

// Define origin and destination GeoJSON points:
var origin = {
    "type": "Feature",
    "properties": {},
    "geometry": {
    "type": "Point",
    "coordinates": [
        24.8359,
        66.9832
    ]
    }
}

var destination = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Point",
        "coordinates": [
            51.4448, 0.3744
        ]
    }
    }


var route = searoute(origin, destination);
// > Returns a GeoJSON LineString Feature

// Optionally, define the units for the length calculation included in the properties object.
// Defaults to nautical miles, can be degrees, radians, miles, or kilometers.
var routeMiles = searoute(origin, destination, "miles");



console.log(route);

app.get("/", (req, res) => {
    res.send(route);
})


app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
