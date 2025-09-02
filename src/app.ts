import express from 'express'
import { router } from './routes.js'
import "reflect-metadata"
import { swaggerUi, swaggerSpec } from "./swagger.js"

const app = express()

app.use(express.json())
app.use(router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export { app }

