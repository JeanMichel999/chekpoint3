const albumModel = require('../models/album.model');

class AlbumController {
  async getAlbums(req, res) {
    try {
      const result = await albumModel.getAlbums();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async getAlbum(req, res) {
    try {
      const result = await albumModel.getAlbum(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAlbumTrack(req, res) {
    try {
      const result = await albumModel.getAlbumTrack(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }
  /* Message erreur 201 pour creation noté dans la consigne */
  async postAlbum(req, res) {
    try {
      const result = await albumModel.postAlbum(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  /* Message erreur 204 pour maj noté dans la consigne */
  async updateAlbum(req, res) {
    try {
      const result = await albumModel.updateAlbum(req.body, req.params.id);
      res.status(204).send(result);
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  /* Message erreur 204 pour delete noté dans la consigne */
  async deleteAlbum(req, res) {
    try {
      const result = await albumModel.deleteAlbum(req.params.id);
      res.status(204).send(result);
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }
}

module.exports = new AlbumController();
