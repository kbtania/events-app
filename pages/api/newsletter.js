import { MongoClient } from 'mongodb';
import { MONGO_PASSWORD } from './../../credentials';

async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }

        const client = await MongoClient.connect(`mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.klnpmnt.mongodb.net/?retryWrites=true&w=majority`)

        const db = client.db('events');
        await db.collection('newsletter').insertOne({ email: userEmail });
        client.close();
        res.status(201).json({ message: 'Signed Up!' });
    }
}

export default handler;