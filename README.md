Using the AWS SNS service to send SMS (text messages) with the SDK for node.js

- Provide the cell number and a `senderID` (11-character alphanumeric) as the first and second argument.

```
# Make IAM credentials available, say by exporting a profile as an environment variable
$ export AWS_PROFILE=me@account-1
$ cd /path/to/aws-send-sms 
$ npm install
$ node index.js +911234567890 KM123456789
phone number: +911234567890
{ ResponseMetadata: { RequestId: '4f837fee-367c-5f25-a451-2cf4e03153bc' },
  MessageId: '86825b71-9a62-504d-b3ac-086b4c2facd4' }
  
```
