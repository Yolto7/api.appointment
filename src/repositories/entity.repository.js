const model = require("../models/appointment");

class EntityRepository {
  static instance
  model

  constructor(model) {
    if(!!EntityRepository.instance) {
      return EntityRepository.instance;
    }

    EntityRepository.instance = this;
    this.model = model;
  }

  async filter(filter) {
    const data = await this.model.find(filter);
    return (data.length > 0) ? data : null;
  }

  async create(entity) {
    const appointment = new this.model(entity);
    return await appointment.save();
  }

  async assign(id, data) {
    data.status = true
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }
}

module.exports = new EntityRepository(model);
