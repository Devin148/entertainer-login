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
            'employeeId': 111,
            'dob': 'tbd',
            'active': true,
        },
        {
            'id': 222,
            'first': 'John',
            'last': 'Doe',
            'stage': 'Lil Johnny Doughboy',
            'employeeId': 222,
            'dob': 'tbd',
            'active': true,
        },
        {
            'id': 333,
            'first': 'Smith',
            'last': 'Smithson',
            'stage': 'Lack of creativity',
            'employeeId': 333,
            'dob': 'tbd',
            'active': false,
        },
        {
            'id': 444,
            'first': 'Some',
            'last': 'Other',
            'stage': 'Names',
            'employeeId': 444,
            'dob': 'tbd',
            'active': false,
        },
        {
            'id': 555,
            'first': 'Go',
            'last': 'Here',
            'stage': 'Yup',
            'employeeId': 555,
            'dob': 'tbd',
            'active': false,
        }
    ]);
});

router.put('/employees', (req, res, next) => {
    res.sendStatus(200);
});

router.get('/timecards', (req, res, next) => {
    const { date, startDate, endDate} = req.query;

    if (date) {
        res.json([
            {
                'employeeId': 111,
                'stage': 'Foo',
                'timein': '2013-07-29 21:59:00',
                'timeout': '2013-07-29 21:59:00',
                'tips': Math.floor(Math.random() * 100),
                'dances': 4,
                'champagne': 1,
                'owed': 120,
            },
            {
                'employeeId': 222,
                'stage': 'Foo',
                'timein': '2013-07-29 21:59:00',
                'timeout': '2013-07-29 21:59:00',
                'tips': Math.floor(Math.random() * 100),
                'dances': 5,
                'champagne': 1,
                'owed': 50,
            },
            {
                'employeeId': 333,
                'stage': 'Foo',
                'timein': '2013-07-29 21:59:00',
                'timeout': '2013-07-29 21:59:00',
                'tips': Math.floor(Math.random() * 100),
                'dances': 5,
                'champagne': 0,
                'owed': 120,
            },
            {
                'employeeId': 444,
                'stage': 'Foo',
                'timein': '2013-07-29 21:59:00',
                'timeout': '2013-07-29 21:59:00',
                'tips': Math.floor(Math.random() * 100),
                'dances': 10,
                'champagne': 2,
                'owed': 200,
            },
            {
                'employeeId': 555,
                'stage': 'Foo',
                'timein': '2013-07-29 21:59:00',
                'timeout': '2013-07-29 21:59:00',
                'tips': Math.floor(Math.random() * 100),
                'dances': 0,
                'champagne': 0,
                'owed': 0,
            },
        ]);
    } else {
        res.json([{'foo': 'bar'}]);
    }
});

module.exports = router;
