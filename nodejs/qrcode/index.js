// Importing the packages that we need

const express = require("express");
const app = express();
const bp = require("body-parser");
const qr = require("qr-image");

app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/scan", (req, res) => {
    const url = req.body.url;
    // If the input is null return "Empty Data" error
    if (url.length === 0) return res.send("Empty Data!");
    if(url.length > 1024) return res.send("too much data cannot make qr code")

    // Let us convert the input stored in the url and return it as a representation of the QR Code image contained in the Data URI(Uniform Resource Identifier)
    // It shall be returned as a png image format
    // In case of an error, it will save the error inside the "err" variable and display it

   var src = qr.imageSync(url, { type: 'svg' });
   if(!src){res.send("Something went wrong")}
   res.render("scan",{src});
});

const port = 5000;
app.listen(port, () => console.log("Server is running at http://localhost:5000"));
