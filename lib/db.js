import {MongoClient} from 'mongodb'

async function connectToDatabase(){
    const client = await MongoClient.connect(`mongodb+srv://reactAuth:ZLrZ85WqMDcFVgY7@cluster0.6n48i.mongodb.net/react-next?retryWrites=true&w=majority`);

    return client;
}