const entityRepository = require('../repositories/entity.repository');

class EntityService {

  async create(entity) {
    return await entityRepository.create(entity)
  }

  async assign(filter, userId) {
    const appointment = (await entityRepository.filter(filter))[0]

    if(appointment) {
      filter.userId = userId
      return await entityRepository.assign(appointment._id, filter)
    }
  }
}

module.exports = new EntityService();