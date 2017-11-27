import DB from './database/mongo/mongoManager';

const db = new DB();

async function name() {
    const cdb = await db.connect();
    console.log(cdb);
};

name();