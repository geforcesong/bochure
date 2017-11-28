import DB from './database/mongo/mongoManager';

const db = new DB();

async function name() {
    await db.connect();
    let categories = await db.collection('categories').find({}).toArray();
    if(categories && categories.length){
        var bulk = db.collection('categories').initializeUnorderedBulkOp();
        let i=1;
        for(var item of categories[0].subcategories ){
            bulk.insert({name: item.name, order: i++});
        }
        await bulk.execute();
    }
    await db.close();
};

name();