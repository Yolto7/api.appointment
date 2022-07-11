const entityRepository = require('../repositories/entity.repository');

class EntityService {
  static instance
  entityRepository

  constructor(entityRepository) {
    if(!!EntityService.instance) {
      return EntityService.instance;
    }

    EntityService.instance = this;
    this.entityRepository = entityRepository;
  }

  async filter(filter) {
    return await this.entityRepository.filter(filter);
  }

  async getAppointments() {
    return await this.filter({ status: false });
  }

  async getByUserId(id) {
    return await this.filter({ userId: id });
  }

  async create(entity) {
    return await this.entityRepository.create(entity);
  }

  async assign(filter, userId) {
    const appointment = (await this.filter(filter))[0];

    if(appointment) {
      filter.userId = userId
      return await this.entityRepository.assign(appointment._id, filter);
    }
  }
}

module.exports = new EntityService(entityRepository);