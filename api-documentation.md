# API Documentation
1. [User Routes](#user-routes)
2. [Pet Routes](#pet-routes)

## User Routes

<details>
  <summary>
    <code>GET /api/users</code> 
    - Fetches a list of users
  </summary>
<p>

  ### Parameters
  None

  ### Request Body
  None

  ### Responses

  #### 200 - Success

  ````javascript
  [
    {
      "_id": "USER_ID",
      "username": "USERNAME"
    }
  ]
  ````

  #### 400 - Bad Request

  ````javascript
  [
    {
      "errCode": "ERROR_CODE", // string
      "message": "MESSAGE", // string
      "statusCode": 400 // number
    }
  ]
  ````
  </p>
</details>

<details>
  <summary>
    <code>POST /api/users</code> 
    - Creates a user
  </summary>
<p>

  ### Parameters
  None

  ### Request Body
  ````javascript
  {
    "username": "USERNAME" // string
  }
  ````

  ### Responses

  #### 200 - Success

  ````javascript
  [
    {
      "_id": "USER_ID", // string
    }
  ]
  ````

  #### 400 - Bad Request

  ````javascript
  [
    {
      "errCode": "ERROR_CODE", // string
      "message": "MESSAGE", // string
      "statusCode": 400 // number
    }
  ]
  ````
  </p>
</details>

## Pet Routes

<details>
  <summary>
    <code>GET /api/pets</code> 
    - Fetches a list of pets for a user
  </summary>
<p>

  ### Parameters
  #### Query Params:
  - `userId` (required) - ID of user

  ### Request Body
  None

  ### Responses

  #### 200 - Success

  ````javascript
  [
    {
      "_id": "PET_ID",
      "name": "PET_NAME",
      "type": "PET_TYPE"
      "userId": "USER_ID"
    }
  ]
  ````

  #### 400 - Bad Request

  ````javascript
  [
    {
      "errCode": "ERROR_CODE", // string
      "message": "MESSAGE", // string
      "statusCode": 400 // number
    }
  ]
  ````
  </p>
</details>

<details>
  <summary>
    <code>POST /api/pets</code> 
    - Creates a pet
  </summary>
<p>

  ### Parameters
  None

  ### Request Body
  ````javascript
  {
    "name": "PET_NAME", // string
    "type": "PET_TYPE", // string
    "userId": "USER_ID" // string
  }
  ````

  ### Responses

  #### 200 - Success

  ````javascript
  [
    {
      "_id": "PET_ID", // string
    }
  ]
  ````

  #### 400 - Bad Request

  ````javascript
  [
    {
      "errCode": "ERROR_CODE", // string
      "message": "MESSAGE", // string
      "statusCode": 400 // number
    }
  ]
  ````
  </p>
</details>