'use strict';
const databaseService = require('./databaseService');

const insertClient = async function (client) {
    const sql = `INSERT INTO clients 
                        (id, first_name, last_name, telephone, city, street, zip_code)
                    VALUES
                    (?, ?, ?, ?, ?, ?, ?)`;
    const params =  [
                        client.id,
                        client.firstName,
                        client.lastName,
                        client.telephone,
                        client.city,
                        client.street,
                        client.zipCode
                    ]
    //TODO Refactor this return, because it can be done on the insert sql
        await databaseService.query(sql, params);
        const insertedId = await databaseService.query(`SELECT last_insert_rowid()as lastId`, []);
        return await getClientById(insertedId[0].lastId);
};

const getAll = async function () {
    const sql = `SELECT * FROM clients`;
    return databaseService.query(sql, []);
};

const getClientById = async function (clientId) {
    const sql = `SELECT * FROM clients
                 WHERE id = ?`;
    const params = [clientId];
    return databaseService.query(sql, params);
};

const updateClient = async function (clientId, client) {
    const oldClient = await getClientById(client);
    const sql = `UPDATE clients 
                    SET first_name = ?,
                    last_name = ?,
                    telephone = ?,
                    city = ?,
                    street = ?,
                    zip_code = ?
                    WHERE id = ?`;
    const params = [
        client.firstName,
        client.lastName,
        client.telephone,
        client.city,
        client.street,
        client.zipCode,
        clientId
    ]
    await databaseService.query(sql, params);
    
};


module.exports = {
    insertClient,
    getAll,
    getClientById,
    updateClient
}