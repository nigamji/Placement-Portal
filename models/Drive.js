const mongoose = require('mongoose')

const Drive = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    companyName: {
        type: String,
        required: true
    },
    package: {
        type: Number
    },
    branch: {
        type: [String],
        required: true
    },
    course: {
        type: [String],
        required: true
    },
    desc: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now()
    },
    dateOfDrive: {
        type: Date
    },
    eligibility: {
        ssc: {
            type: Number
        },
        hsc: {
            type: Number
        },
        diploma: {
            type: Number
        },
        graduation: {
            type: Number
        }
    },
    notEligible: {
        placedIn: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'drive'
        },
        belowPackage: {
            type: Number
        }
    },
    Date

})
module.exports = mongoose.model('drive', Drive);