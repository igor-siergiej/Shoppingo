import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const port = 3001;

const allowedOrigins: string[] = [
    "https://shoppingo.imapps.co.uk",
    "http://localhost:3000",
];

const corsOptions: cors.CorsOptions = {
    origin: function(origin, callback) {
        if (!origin) {
            callback(null, true);
            return;
        }
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// app.get("/items/:listName", getItemsInList);


app.listen(port, () => {
    console.log(`Shoppingo Api server running on port ${port}.`);
});
