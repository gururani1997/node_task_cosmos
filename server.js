const express = require("express");
const app = express();
app.use(express.json());

app.use("/api", require("./routes/routes"));
const Port = 3000;

app.use((req, res, next) => {
    res.status(404).json({ status: false, message: "Not Found" });
});
app.listen(Port, () => {
    console.log("Port is listening on", Port);
})
