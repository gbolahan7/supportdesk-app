const express = require('express')
const router = express.Router()
const {getTickets,
        getTicket,
        createTickets,
        deleteTicket,
        updateTicket,} = require('../controller/ticketController')

const {protect} = require('../middleware/authMiddleware')


router.route('/').get(protect, getTickets).post(protect, createTickets)
router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

// Re-route into note router
const noteRouter = require('./noteRoutes')
router.use('/:ticketId/notes', noteRouter)



module.exports = router