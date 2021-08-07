/* DEPENDENCIES */
const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");

/* ENVIRONMENTAL VARIABLES */
const PORT = process.env.PORT || 5000;

/* CORS SECURITY - MIDDLE MAN */
app.use(cors());
app.use(express.json());

/* STATIC CONTENT */
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/build")));
}

/* ROUTE MAPPER */


/* ROUTER STACK */


/* CATCH ALL */
app.get("*", (req, res) => {
    res.json("Invalid/url");
});

/* MAIN */
app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});