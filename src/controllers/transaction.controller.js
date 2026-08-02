import transactiionModel from '../models/transaction.model.js'
import ledgerModel from '../models/ledger.model.js'
import accountModel from '../models/account.model.js'
import emailService from '../services/email.service.js'
import mongoose from 'mongoose'

async function createTransaction(req, res) {

    const { fromAccount, toAccount, amount, idempotencyKey } = req.body


}

export default { createTransaction }