import express from "express"
import "dotenv/config" 

const app = express()

app.use("/usuarios", (req, res) => {
    
})

app.listen(process.env.PORT, () => 
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
)