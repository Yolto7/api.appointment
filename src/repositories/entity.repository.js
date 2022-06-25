const Appointment = require("../models/appointment");

class EntityRepository {
  async filter(filter) {
    return await Appointment.find({
      specialty: filter.specialty,
      date: filter.date,
      hour: filter.hour,
      doctor: filter.doctor
    });
  }

  async create(entity) {
    const appointment = new Appointment(entity)
    return await appointment.save()
  }

  async assign(id, data) {
    data.status = true
    return await Appointment.findByIdAndUpdate(id, data);
  }
}

module.exports = new EntityRepository();
