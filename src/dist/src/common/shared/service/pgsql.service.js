"use strict";
// import { DatabaseManager } from "./database-manager";
// import { Pool } from "pg";
// import * as dbConfig from '../config/database.json';
// interface IError {
//     statusCode: number, response: any
// }
// export class PGSqlService {
//     constructor(
//         //@ts-ignore
//         private databaseManager: DatabaseManager = new DatabaseManager(() => new Pool({
//             max: 20,
//             connectionString: `postgres://${dbConfig.postgressdb.user}:${dbConfig.postgressdb.password}@${dbConfig.postgressdb.host}:${dbConfig.postgressdb.port}/${dbConfig.postgressdb.database}`,
//             idleTimeoutMillis: 30000
//         }))
//     ) {
//     }
//     public async pgStore(sloc: string, payload: any, tagIds: Map<string, number>, validationHandler: (error: IError) => void): Promise<boolean> {
//         const tagNames = Object.keys(payload);
//         let dataBuff = new Map<string, string>();
//         for (let i = 0; i < tagNames.length; i++) {
//             let id = tagIds.get(tagNames[i]);
//             let sample = payload[tagNames[i]];
//             let time = Object.keys(sample);
//             if (time.length < 0 || time.filter((t: string) => parseInt(t) < 0 || parseInt(t).toString() != t).length > 0) {
//                 validationHandler({ statusCode: 400, response: 'time range must be postive number greater than 0' });
//             }
//             if (time.filter((t: string) => !sample[t].hasOwnProperty('v') || !sample[t].hasOwnProperty('q')).length > 0) {
//                 validationHandler({ statusCode: 400, response: 'time must have value (v) and quality (q) property' });
//             }
//             dataBuff.set(id + "-" + sloc, JSON.stringify(sample));
//         }
//         await this.saveToPgsql(dataBuff);
//         return true;
//     }
//     private async saveToPgsql(datablock: Map<string, string>) {
//         try {
//             const sql = `INSERT INTO records (headerBuff, bodyBuff) VALUES($1, $2)`;
//             const token = this.databaseManager.generateDatabasetoken("pg");
//             await this.databaseManager.getDatabase(token);
//             const result = await this.databaseManager.runQueries(token, ['query', sql, Array.from(datablock)[0]]);
//             return result;
//         } catch (error) {
//             console.log("error", error)
//             throw new Error(`Unable to insert record in pgsql`);
//         }
//     }
//     public async pgRead(sloc: string, fromTime: number, toTime: number, tagIds: Map<string, number>): Promise<any> {
//         let samples: any = {};
//         for (let [tagName, tagId] of tagIds) {
//             let dataBuff = { headerBuff: (tagId + "-" + sloc) };
//             const result = await this.getFromPgsql(dataBuff.headerBuff);
//             for (let sample of result) {
//                 samples = Object.assign({},samples, JSON.parse(sample.bodybuff));
//             } 
//         }
//         return samples;
//     }
//     private async getFromPgsql(headerBuff: string): Promise<any> {
//         try {
//             const sql = `SELECT bodyBuff FROM records WHERE headerBuff=($1)`;
//             const token = this.databaseManager.generateDatabasetoken("pg");
//             await this.databaseManager.getDatabase(token);
//             const result = await this.databaseManager.runQueries(token, ['query', sql, [headerBuff]]);
//             return result.rows && result.rows.length > 0 ? result.rows : result;
//         } catch (error) {
//             console.log("error", error)
//             throw new Error(`Unable to connect pgsql service`);
//         }
//     }
// }
//# sourceMappingURL=pgsql.service.js.map