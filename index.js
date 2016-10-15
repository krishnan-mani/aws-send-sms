var AWS = require('aws-sdk');

/*
Use one of the supported regions/endpoints as documented at:
https://docs.aws.amazon.com/de_de/sns/latest/dg/sms_supported-countries.html
 */

var region = 'ap-southeast-1';
var sns = new AWS.SNS({region: region});

var phoneNumber = '[REPLACE-WITH-MOBILE-NUMBER]'; //e.g. +919812345678, prefix with plus sign
var messageAttributes = {
    "AWS.SNS.SMS.SenderID": {
        DataType: 'String',
        StringValue: '[REPLACE-WITH-SENDER-ID]' // Upto 11 alphanumeric characters
    },
    "AWS.SNS.SMS.SMSType": {
        DataType: 'String',
        StringValue: 'Transactional' // Promotional messages may not be sent at all hours of day
    }
};

var params = {
    Message: 'Test SMS sent using AWS SNS by km using Singapore at ' + new Date().toISOString(),
    MessageAttributes: messageAttributes,
    PhoneNumber: phoneNumber
};

var request = sns.publish(
    params
);

request.on('success', function (response) {
    console.log(response.data);
});

request.on('error', function (error) {
    console.dir(error);
});

request.send();