import { MongoClient } from 'mongodb'
import {UninitDbError} from '../../errors/uninitDbError';
import * as setting from '../../../system.config.json';

class DB {
    connectionString: string;
    databaseObject:any;
    constructor() {
        this.connectionString =  (<any>setting).database.mongoConnectionString;
    }

    public async connect() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.connectionString, (err, db) => {
                if (err) {
                    return reject(err);
                }
                this.databaseObject = db;
                resolve(db);
            });
        });
    }

    collection(name: string) {
        if (!this.databaseObject) {
            throw new UninitDbError('[ERROR - DB] DB is not initialized..');
        }
        return this.databaseObject.collection(name);
    }

    public async close() {
        if (!this.databaseObject) {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            this.databaseObject.close((err: Error) => {
                if (err) {
                    return reject(err);
                }
                this.databaseObject = null;
                resolve();
            });
        });
    }
}

export default DB;
