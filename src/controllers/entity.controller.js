const entityService = require("../services/entity.service");

class Controller {
  static instance
  entityService

  constructor(entityService) {
    if(!!Controller.instance) {
      return Controller.instance;
    }

    Controller.instance = this;
    this.entityService = entityService;
  }

  async getAppointments(req, res) {
    try {
      const data = await this.entityService.getAppointments();
      return res.status(200).json({ data , status: true });
    }
    catch (err) {
      return res.status(400).json({ msg: err.message, status: false });
    }
  }

  async getByUserId(req, res) {
    try {
      const { userId } = req.params;
      const data = await this.entityService.getByUserId(userId);
      return res.status(200).json({ data , status: true });
    }
    catch (err) {
      return res.status(400).json({ msg: err.message, status: false });
    }
  }

  async create(req, res) {
    try {
      const { specialty, date, hour, doctor } = req.body;
      const appointment = await this.entityService.create({ specialty, date, hour, doctor });

      return res.status(201).json({data: appointment, status: true});
    }
    catch (err) {
      return res.status(400).json({ msg: err.message, status: false });
    }
  }

  async assign(req, res) {
    try {
      const { specialty, date, hour, doctor } = req.body
      const data = await this.entityService.assign({ specialty, date, hour, doctor }, req.userId)
      return res.status(200).json({data, status: true})
    }
    catch (err) {
      return res.status(400).json({ msg: err.message, status: false });
    }
  }
}

module.exports = new Controller(entityService);
