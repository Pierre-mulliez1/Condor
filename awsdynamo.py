import boto3
# Get the service resource.
from botocore.config import Config

"""client = boto3.client('root')

response = client.assume_role(
    DurationSeconds=3600,
    ExternalId='123ABC',
    Policy='{"Version":"2012-10-17","Statement":[{"Sid":"Stmt1","Effect":"Allow","Action":"dynamodb:*","Resource":"*"}]}',
    RoleArn='arn:aws:iam::123456789012:role/demo',
    RoleSessionName='Bob',
)

print(response)
"""
my_config = Config(
    region_name = 'us-east-2',
    retries = {
        'max_attempts': 20,
        'mode': 'standard'
    }
)

client = boto3.client('iam', config=my_config)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ias')
table.put_item(
   Item={
        'username': 'test',
    }
)

