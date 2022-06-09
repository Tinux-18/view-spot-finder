const AWS = require("aws-sdk");

const addElements = async event => {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    // const arr = Array.from(event.body);
    console.log("event :>> ", event);
    console.log("event.body :>> ", typeof event.body);
    // const { meshName, elements, values } = event.body;

    // dynamoDb.put({
    //     TableName:"MeshTable",
    //     Item:
    // })

    return {
        statusCode: 200,
        body: event.body,
    };
};

module.exports = {
    handler: addElements,
};
