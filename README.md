## Samle Project

Dummy project using Authentication, Authroization and encryption-decryption.

Note: I am not sure if any UI design is required for this task and hence I have only done node.js part.

## Start:
    npm install
    node app.js

## Sample Users
    email: admin1@gmail.com
    password: admin
    role: admin


    email: admin2@gmail.com
    password: admin
    role: customerSupport


### Supported APIs

##### Signup

- **API Endpoint**: /api/auth/signup
- **Header**: content-type: application/json
- **Method**: POST
- **Params**: name, email, password, address, contactNo, role

    Note: Only ['user', 'admin', 'customerSupport', 'deliveryPerson'] roles are supported

##### Login

- **API Endpoint:** /api/auth/login
- **Method**: POST
- **Params**: email, password


##### Encrypt message

- **API Endpoint:** /api/message/encrypt
- **Method**: POST
- **Header**: content-type: application/json , Authorization: jwt + <jwt_token>
- **Data**: {message: 'any messge'}
- **Role**: admin


##### Decrypt message

- **API Endpoint:** /api/message/decrypt
- **Method**: POST
- **Header**: content-type: application/json , Authorization: jwt + <jwt_token>
- **Data**: {message: 'encrypted message'}
- **Role**: admin


##### Get user list

- **API Endpoint:** /api/user/user-list
- **Method**: POST
- **Header**: content-type: application/json , Authorization: jwt + <jwt_token>
- **Role**: admin

##### Get User Address

- **API Endpoint:** /api/user/get-user-address
- **Method**: GET
- **Header**: content-type: application/json , Authorization: jwt + <jwt_token>
- **Query Params**: email
- **Role**: deliveryPerson


##### Get User Contact No

- **API Endpoint:** /api/user/get-user-contact
- **Method**: GET
- **Header**: content-type: application/json , Authorization: jwt + <jwt_token>
- **Query Params**: email
- **Role**: customerSupport







