const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendStatus(404);
});

router.get('/employees', (req, res, next) => {
    res.json([
    	{
    		'id': 111,
    		'first': 'Jane',
    		'last': 'Doe',
    		'stage': 'The female deer',
    		'employeeId': 123,
    		'dob': 'tbd',
    		'active': true,
    	},
    	{
    		'id': 222,
    		'first': 'John',
    		'last': 'Doe',
    		'stage': 'Lil Johnny Doughboy',
    		'employeeId': 456,
    		'dob': 'tbd',
    		'active': true,
    	},
    	{
    		'id': 333,
    		'first': 'Smith',
    		'last': 'Smithson',
    		'stage': 'Lack of creativity',
    		'employeeId': 789,
    		'dob': 'tbd',
    		'active': false,
    	}
    ]);
});

router.put('/employees', (req, res, next) => {
	res.sendStatus(200);
});

module.exports = router;
