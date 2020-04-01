const MongoClient = require('mongodb').MongoClient;

//connection url
const url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, db){
    if(err){
        return console.dir(err);
    }
    console.log('Connected to mongodb');

    /*InsertDocument(db, function(){
        db.close();
    });*/

    /*InsertDocuments(db, function(){
        db.close();
    });*/

    /*FindDocuments(db, function(){
        db.close();
    });*/

    /*
    QueryDocuments(db, function(){
        db.close();
    });*/

    /*UpdateDocument(db, function(){
        db.close();
    });*/

    RemoveDocument(db, function(){
        db.close();
    });
});

//Insert single doc
const InsertDocument = function(db, callback){
    // Get Collection
	const collection = db.collection('users');
    //insert some document 
    collection.insert({
        name: 'Ilyas Perlindungan',
        email: 'ilyas@test.com'
    }, function(err, result){
        if(err){
            return console.dir(err);
        }
        console.log('Inserted document');
        console.log(result);
        callback(result);
    });
}

// Insert multiple docs
const InsertDocuments = function(db, callback){
    //Get collection
    const collection = db.collection('users');

    collection.insertMany([
        {
            name: 'Jhon Doe',
            email: 'jhon@test.com'
        },
        {
            name: 'Sam Smith',
            email: 'sam@test.com'
        },
        {
            name: 'Jim Halpert',
            email: 'jim@test.com'
        }
    ],
    function(err, result){
        if(err){
            return console.dir(err);
        }
        console.log('Inserted '+result.ops.length+' documents');
        callback(result);
    });
}

//return all the records of the collection
const FindDocuments = function(db, callback){
    //get collection
    const collection = db.collection('users');

    collection.find({}).toArray(function(err, docs){
        if(err){
            return console.dir(err);
        }
        console.log('Found the following records');
        console.log(docs);
        callback(docs); 
    });
}

//Query from the colllections
const QueryDocuments = function(db, callback){
    //get collection
    const collection = db.collection('users');

    collection.find({'name': 'Jhon Doe'}).toArray(function(err, docs){
        if(err){
            return console.dir(err);
        }
        console.log('Found the following records');
        console.log(docs);
        callback(docs); 
    });
}

//update certain record from the collections
const UpdateDocument = function(db, callback){
    //get collection
    const collection = db.collection('users');

    collection.updateOne({name: 'Jhon Doe'}, 
        {$set: {email: 'jhon@nottest.com'}}, 
        function(err, result){
            if(err){
                return console.dir(err);
            }
            console.log('Updated Document');
            callback(result);
        });
}

//Remove certain docs
const RemoveDocument = function(db, callback){
    //get collection
    const collection = db.collection('users');

    collection.deleteOne({name: 'Jhon Doe'}, function(err, result){
        if(err){
            return console.dir(err);
        }
        console.log('Removed document');
        console.log(result);
        callback(result);
    });
}
