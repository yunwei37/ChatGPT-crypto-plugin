#!/bin/bash

# Encrypt data using AES method
curl -X POST http://localhost:3000/api/encrypt/aes \
-H "Content-Type: application/json" \
-d '{ "input": "my-input-string-1", "input_format": "utf-8", "key": "my-key-1" }'

echo ""

# Encrypt data using HMAC-SHA256 method
curl -X POST http://localhost:3000/api/encrypt/hmac-sha256 \
-H "Content-Type: application/json" \
-d '{ "input": "my-input-string-2", "input_format": "utf-8", "key": "my-key-2" }'

echo ""

# Encrypt data using SHA256 method
curl -X POST http://localhost:3000/api/encrypt/sha256 \
-H "Content-Type: application/json" \
-d '{ "input": "my-input-string-3", "input_format": "utf-8" }'

echo ""

# Encrypt data using MD5 method
curl -X POST http://localhost:3000/api/encrypt/md5 \
-H "Content-Type: application/json" \
-d '{ "input": "my-input-string-4", "input_format": "utf-8" }'

echo ""

# Encrypt data using hex method
curl -X POST http://localhost:3000/api/encrypt/hex \
-H "Content-Type: application/json" \
-d '{ "input": "my-input-string-5", "input_format": "utf-8" }'

echo ""

# Decrypt data using AES method
curl -X POST http://localhost:3000/api/decrypt/aes \
-H "Content-Type: application/json" \
-d '{ "input": "U2FsdGVkX1/sBSyyIzpYaXO9Asujvn5ARd02/QlybKgOlWV4SSBimW+1gLjzS4i0", "input_format": "Base64", "key": "my-key-1" }'

echo ""
