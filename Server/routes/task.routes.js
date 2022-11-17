const TaskController = require('../controllers/task.controller')


module.exports = (app) => {
    // FIND ALL ****************
    app.get('/api/task', TaskController.findAll);
    // Find By ID **************
    app.get('/api/task/:id', TaskController.findOne);
    // Create ******************
    app.post('/api/task', TaskController.create)
    // Update ******************
    app.put('/api/task/:id', TaskController.updateOne);
    // Delete ******************
    app.delete('/api/task/:id', TaskController.delete);
}