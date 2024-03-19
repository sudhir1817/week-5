const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase'; // Replace with your database name

// Collection Name
const collectionName = 'mycollection'; // Replace with your collection name

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to server");

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Insert a document
        const insertResult = await collection.insertOne({ name: "John", age: 30, city: "New York" });
        console.log(`Document inserted with id: ${insertResult.insertedId}`);

        // Find documents
        const documents = await collection.find({}).toArray();
        console.log("All documents:");
        console.log(documents);

        // Update a document
        const updateResult = await collection.updateOne({ name: "John" }, { $set: { age: 35 } });
        console.log(`${updateResult.modifiedCount} document(s) updated.`);

        // Find updated document
        const updatedDocument = await collection.findOne({ name: "John" });
        console.log("Updated document:");
        console.log(updatedDocument);

        // Delete a document
        const deleteResult = await collection.deleteOne({ name: "John" });
        console.log(`${deleteResult.deletedCount} document(s) deleted.`);

    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);
