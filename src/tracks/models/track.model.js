const mysql = require('mysql2')

// CONNEXION BDD //
class trackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })


    // Va cherhcer toutes les chansons //
    async getTracks() {
        try {
            const resultTracks = await this.connection.promise().query('SELECT * FROM track')
            return resultTracks[0]
        } catch (error) {
            throw error
        }
    }

    // Va chercher une chanson par un id //
    async getTrack(resultTrack) {
        try {
            const resultTrackId = await this.connection.promise().query('SELECT * FROM track where id=?', [resultTrack])
            return resultTrackId[0][0]
        } catch (error) {
            throw error
        }
    }

    //Va chercher par id d'album//
    async getAlbumTrack(id) {
        try {
            const result = await this.connection.promise().query('SELECT * FROM album INNER JOIN track ON track.id_album = album.id WHERE album.id = ?', [id])
            return result[0]
        } catch (error) {
            throw error
        }
    }

    // Créer une nouvelle chanson 
    async postTrack(createTrack) {
        try {
            const resultCreateTrack = await this.connection.promise().query('INSERT INTO  track set ?', [createTrack])
            return resultCreateTrack[0][0]
        } catch (error) {
            throw error
        }
    }

    // Mettre à jour une nouvelle chanson //
    async updateTrack(body, updateTrack) {
        try {
            const resultUpdateTrack = await this.connection.promise().query('UPDATE track set ? WHERE id = ?', [body, updateTrack])
            return resultUpdateTrack[0]
        } catch (error) {
            throw error
        }
    }

    //Supprimer une chanson //
    async deleteTrack(resultDelete) {
        try {
            const resultDeleteTrack = await this.connection.promise().query('DELETE FROM track WHERE id = ?', [resultDelete])
            return resultDeleteTrack[0]
        } catch (error) {
            throw error
        }
    }


}


module.exports = new trackModel()