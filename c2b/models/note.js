const mng = require('mongoose')

const schema = new mng.Schema({
    content: {
        type: String,
        required: true,
        minlength: 2
    },
    important: Boolean,
})

schema.set('toJSON', {
    transform: (d, ro) => {
        ro.id = ro._id.toString()
        delete ro._id
        delete ro.__v
    }
})

module.exports = mng.model('Note', schema)
