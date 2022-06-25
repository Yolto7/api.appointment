const entityService = require("../services/entity.service");

class Controller {

  async create(req, res) {
    const { specialty, date, hour, doctor } = req.body;
    return await entityService.create({ specialty, date, hour, doctor })

  }

  async assign(req, res) {
    try {
      const { specialty, date, hour, doctor } = req.body
      const data = await entityService.assign({ specialty, date, hour, doctor }, req.userId)

      res.status(200).json({data, status: true})
    }
    catch (err) {
      res.status(400).json({ msg: err.message, status: false });
    }
    
  }
}

module.exports = new Controller();
