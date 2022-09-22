import { MongoClient } from 'mongodb';
import { MONGO_PASSWORD } from './../credentials';

export async function connectDatabase() {
    const client = await MongoClient.connect(
        `mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.klnpmnt.mongodb.net/?retryWrites=true&w=majority`
    );

    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db('events');

    const result = await db.collection(collection).insertOne(document);

    return result;
}

export async function getAllDocuments(client, collection, sort, filter) {
    const db = client.db('events');

    const documents = await db
        .collection(collection)
        .find(filter)
        .sort(sort)
        .toArray();

    return documents;
}