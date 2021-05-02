const tableService = require('./table.service')
const logger = require('../../services/logger.service')

async function insertTable(req, res) {
    try {
        const table = await tableService.insert(req.params)
        res.send(table)
    } catch (err) {
        logger.error('Failed to ...', err)
        res.status(500).send({ err: 'Failed to get user' })
    }
}

module.exports = {
    insertTable
}