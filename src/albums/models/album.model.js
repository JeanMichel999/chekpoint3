const mysql = require('mysql2')

// CONNEXION BDD //
class AlbumModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
// Va chercher tous les albums //
    async getAlbums() {
        try {
            const result = await this.connection.promise().query("SELECT * FROM album")
            return result[0]
        } catch (error) {
            throw error
        }
    }
// Va cherhcer un album par id //
    async getAlbum(resultGetAlbum) {
        try {
            const resultModelGetAlbum = await this.connection.promise().query("SELECT * FROM album where id=?", [resultGetAlbum])
            return resultModelGetAlbum[0]
        } catch (error) {
            throw error
        }
    }
// Crée un nouvel album //
    async postAlbum(resultId) {
        try {
            const resultModelPosttAlbum = await this.connection.promise().query("INSERT INTO  album set ?", [resultId])
            return resultModelPosttAlbum[0]
        } catch (error) {
            throw error
        }
    }
// Met à jour un album par id //
    async updateAlbum(body, resultUpdate) {
        try {
            const resultModelUpdateAlbum = await this.connection.promise().query("UPDATE album SET ? WHERE id = ?", [body, resultUpdate])
            return resultModelUpdateAlbum[0]
        } catch (error) {
            throw error
        }
    }
// Supprime un album //
    async deleteAlbum(resultDelete) {
        try {
            const resultModelDeleteAlbum = await this.connection.promise().query("DELETE FROM album WHERE id = ?", [resultDelete])
            return resultModelDeleteAlbum[0]
        } catch (error) {
            throw error
        }
    }

}

module.exports = new AlbumModel()