
const { Schema, model } = require('mongoose');

const schema = Schema({
    userId: {
        type: String,
        default: null
    },
    specialty: {
        type: String,
        required: [true, 'The specialty is required'],
    },
    doctor: {
        type: String,
        required: [true, 'The user lastnames is required']
    },
    date: {
      type: Date,
      required: [true, 'The user sex is required']
    },
    hour: {
      type: String,
      required: [true, 'The user occupation is required']
    },
    status: {
      type: Boolean,
      default: false,
      required: [true, 'The user cellphone is required']
    }
});

schema.methods.toJSON = function() {
    const { __v, _id, ...appointment } = this.toObject();
    appointment.id = _id;
    return appointment;
}

module.exports = model('Appointment', schema );
