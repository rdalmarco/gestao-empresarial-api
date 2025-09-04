import express from 'express'
import { router } from './routes.js'
import "reflect-metadata"
import { swaggerUi, swaggerSpec } from "./swagger.js"
import { errorHandler } from './middlewares/errorHandler.js'
import cors from "cors";


const app = express()

app.use(cors({
  origin: "http://localhost:3001",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json())
app.use(router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(errorHandler)

export { app }

