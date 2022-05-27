const trackModel = require('../models/track.model');

class trackController {
  async getTracks(req, res) {
    try {
      const result = await trackModel.getTracks();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTrack(req, res) {
    try {
      const result = await trackModel.getTrack(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  /* Message erreur 201 pour creation noté dans la consigne */
  async postTrack(req, res) {
    try {
      const result = await trackModel.postTrack(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  /* Message erreur 204 pour delete noté dans la consigne */
  async updateTrack(req, res) {
    try {
      const body = req.body;
      const result = await trackModel.updateTrack(body, req.params.id);
      res.status(204).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  /* Message erreur 204 pour delete noté dans la consigne */
  async deleteTrack(req, res) {
    try {
      const result = await trackModel.deleteTrack(req.params.id);
      res.status(204).send(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new trackController();
