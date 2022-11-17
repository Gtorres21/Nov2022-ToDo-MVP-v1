const ColumnController = require('../controllers/column.controller')


module.exports = (app) => {
    // FIND ALL ****************
    app.get('/api/column', ColumnController.findAll);
    // Find By ID **************
    app.get('/api/column/:id', ColumnController.findOne);
    // Create ******************
    app.post('/api/column', ColumnController.create)
    // Update ******************
    app.put('/api/column/:id', ColumnController.updateOne);
    // Delete ******************
    app.delete('/api/column/:id', ColumnController.delete);
}