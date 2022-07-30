# toywiki
A toy of wiki.

## Setup
```sh
# up dynamodb_local and dynamodb-admin
docker compose up -d

# create table
aws dynamodb create-table --cli-input-json file://dynamodb/wiki_table.json  --endpoint-url http://localhost:8000

# insert test data
aws dynamodb batch-write-item --request-items file://dynamodb/wiki_data.json --endpoint-url http://localhost:8000

# delete table
aws dynamodb delete-table --table-name wiki --endpoint-url http://localhost:8000
```

## Directory

## Author
skanehira
