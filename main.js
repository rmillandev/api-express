import express from "express"
import "dotenv/config" 
import userRoute from "./routes/userRoutes.js"

const app = express()

app.use(express.json())

app.use("/api", userRoute)


app.listen(process.env.PORT, () => 
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
)