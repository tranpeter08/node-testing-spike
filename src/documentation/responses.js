module.exports = {
  CreateSuccessResp: {
    description: "Response when a document has been successfully created",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          description: 'Response body for creating a document',
          properties: {
            id: {
              description: 'The document _id',
              type: 'string',
              example: '5fb37b8672c339da1f6a487d'
            },
          }
        }
      }
    }
  },
  GetAllUsersResp: {
    description: "Responds with all users",
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {
            $ref: '#/components/schemas/User'
          }
        }
      }
    }
  }
  ,
  ErrorResp: {
    description: "Invalid request",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          $ref: '#/components/schemas/ErrorRespBody'
        }
      }
    }
  }
}