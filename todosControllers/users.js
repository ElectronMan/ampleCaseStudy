/* eslint-disable class-methods-use-this */
import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

const csvFile = path.join(__dirname, '..', 'db', 'data.csv');

const users = []

const readCSV = new Promise( (resolve, reject) => {
  fs.createReadStream(csvFile)
  .pipe(csv())
  .on('data', (row) => {
    users.push(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    resolve(users)
  });
}
)

class UsersController {
  
  getAllUsers(req, res) {
    readCSV
      .then( users => {
        return res.status(200).send({
          success: 'true',
          message: 'users retrieved successfully',
          users
        });
      })
      .catch(error => {
        return res.status(404).send({
          success: 'false',
          message: 'No Users',
        });
      });
  }
}

const userController = new UsersController();
export default userController;