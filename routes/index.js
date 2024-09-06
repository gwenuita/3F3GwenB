const express = require('express');
const router = express.Router();
const moment = require('moment');

let tasks = []; // Consider moving this to a separate module if you want persistent storage

// Route to display tasks and calendar
router.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

// Route to add a task with priority and due date
router.post('/add', (req, res) => {
    const task = req.body.task;
    const dueDate = req.body.dueDate;
    const priority = req.body.priority;
    const category = req.body.category; // Added category
    const notification = req.body.notification; // Added notification

    if (task) {
        tasks.push({
            text: task,
            dueDate: moment(dueDate).format('YYYY-MM-DD'),
            priority: priority,
            category: category,
            notification: notification, // Added notification
            id: tasks.length
        });
    }
    res.redirect('/');
});

// Route to delete a task
router.post('/delete/:id', (req, res) => {
    tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
    res.redirect('/');
});

module.exports = router;
