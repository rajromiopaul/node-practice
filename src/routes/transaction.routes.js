import { Router } from "express";
import authmiddleware from '../middleware/auth.middleware.js'
import transactionController from'../controllers/transaction.controller.js'

const transactionRoutes = Router()

transactionRoutes.post('/', authmiddleware.authMiddleware, transactionController.createTransaction)

export default transactionRoutes