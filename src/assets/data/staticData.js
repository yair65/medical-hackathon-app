const mockSequences = [
    {
        sequenceNumber: 1,
        stages: {
            1: { message: 'Good morning Margalit', options: ['continue'] }
        },
        recommendations: [{
            img: 'https://assets.materialup.com/uploads/778093ab-2751-4ffa-b6f8-7a61873a3ea3/preview.jpg',
            title: 'Check your health status',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://png.pngtree.com/png-vector/20200413/ourlarge/pngtree-health-workers-fight-coronavirus-png-image_2185121.jpg',
            title: 'Call a caretaker',
        }]
    },
    {
        sequenceNumber: 2,
        stages: {
            1: { message: 'How did you sleep?', options: ["Well", "Not well"] },
            2: { message: 'Did you have trouble falling asleep?', options: ["Yes", "No"] }
        },
        recommendations: [{
            img: 'https://www.waterindustryjournal.co.uk/wp-content/uploads/2019/09/p78-graphic.jpg',
            title: 'Avoid screens for an hour before bed',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqmpnV6--XPddCZGYNeagA7xxLS8Lb1wb4w&usqp=CAU',
            title: 'Try going to sleep at the same time each day',
        }
        ]
    },
    {
        sequenceNumber: 3,
        stages: {
            // 3: { message: 'Suggestions: Try going to sleep at the same time each day', options: ['done'] },
            // 4: { message: 'Suggestions: Avoid caffeine in the hours before bedtime', options: ['done'] },
            // 5: { message: 'Suggestions: Avoid screens for an hour before bed', options: ['done'] },
            6: { message: 'Have the suggestions been helpful?', options: ['Yes', 'No'] },
            7: { message: 'Click here to write to your doctor', options: ['Link'] },
            8: { message: 'Did you wake up in the middle of the night?', options: ['Yes', 'No'] },
            9: { message: 'Do you wake up due to shortness of breath?', options: ['Yes', 'No'] },

        },
        recommendations: [{
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'try elevating your bed or using multiple pillows to prop yourself up',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Make sure to use your CPAP machine if you are prescribed one',
        }]
    },
    {
        sequenceNumber: 4,
        stages: {
            // 10: { message: 'Suggestions: If yes, try elevating your bed or using multiple pillows to prop yourself up', options: ['Done'] },
            // 11: { message: 'Suggestions: Make sure to use your CPAP machine if you are prescribed one', options: ['Done'] },
            // 12: { message: 'Suggestions: Have the suggestions been helpful?', options: ['Yes', 'No'] },
            13: { message: 'Do you wake up to use the bathroom?', options: ['Yes', 'No'] },
        },
        recommendations: [{
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'limit fluid intake in the hours before bedtime',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Make sure that you take your diuretics in the early morning hours so that their effect will fade before bedtime',
        }]
    },
    // {
    //     sequenceNumber: 5,
    //     stages: {
    //         // 14: { message: 'Suggestions: If yes, limit fluid intake in the hours before bedtime', options: ['Done'] },
    //         // 15: { message: 'Suggestions: Make sure that you take your diuretics in the early morning hours so that their effect will fade before bedtime', options: ['Done'] },
    //         16: { message: 'Have the suggestions been helpful?', options: ['Yes', 'No'] },
    //     }
    // },
    {
        sequenceNumber: 6,
        stages: {
            1: { message: 'Have you been eating less than usual?', options: ['Yes', 'No'] }
        }
    },
    {
        sequenceNumber: 7,
        stages: {
            1: { message: 'Are you experiencing pain?', options: ['Yes', 'No'] },
            2: { message: 'How much pain are you feeling?', options: ['Vas Scale Placeholder'] },
            3: { message: 'Where do you feel the pain?', options: ['body front and back'] },
            4: { message: 'Is this the same chronic pain that you usually have?', options: ['Yes', 'No'] },
        },
        recommendations: [{
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Try stretching - Click here to get an instructional video',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Try pilates - click here to get an instructional video',
        }]
    },
    {
        sequenceNumber: 8,
        stages: {
            // 5: { message: 'Suggestions: Try stretching - Click here to get an instructional video?', options: ['View Instructional Video'] },
            // 6: { message: 'Suggestions: Try pilates - click here to get an instructional video?', options: ['View Instructional Video'] },
            7: { message: 'Suggestions: Request a home visit from a physical therapist', options: ['Call Therapist'] },
            8: { message: 'Suggestions: Request a home visit from an acupuncturist', options: ['Call Therapist'] },
            9: { message: 'Have the suggestions been helpful?', options: ['Yes', 'No'] }
        }
    },
    {
        sequenceNumber: 9,
        stages: {
            1: { message: 'Please test your blood pressue', options: ['Pair With Device'] }
        }
    },
    {
        sequenceNumber: 10,
        stages: {
            1: { message: 'Please test your blood sugar level before eating breakfast', options: ['Pair With Device'] }
        }
    },
    {
        sequenceNumber: 11,
        stages: {
            1: { message: 'All done for now.Have a great day!', options: ['Love You'] }
        }
    }

]

module.exports = { mockSequences };