module.exports = {
  User: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        example: 'SuperMario',
      },
      _id: {
        type: 'string',
        example: '5fb37b8672c339da1f6a487d'
      }
    },
    required: [
      'username'
    ]
  },
  UserCreateReqBody: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        example: 'SuperMario',
      }
    },
    required: [
      'username'
    ]
  },
  PetsCreateReqBody: {
    type: 'object',
    description: 'Request body for creating a pet',
    properties: {
      name: {
        description: 'The pet\'s name',
        type: 'string',
        example: 'Hachiko'
      },
      type: {
        description: 'The pet type',
        type: 'string',
        example: 'Loyal dog'
      },
    }
  },
  ErrorRespBody: {
    type: 'object',
    description: 'Error response',
    properties: {
      message: {
        type: 'string',
        description: 'The error message',
        example: "'Invalid ID'"
      },
      errCode: {
        type: 'string',
        description: 
          '## Error Code Descriptions:\n' +
          '1. `ERROR_CODE_1` description...\n' +
          '2. `ERROR_CODE_2` description....'
        ,
        example: "'SOME_ERROR_CODE'"
      },
      statusCode: {
        type: 'integer',
        description: 'Description: Status code for the response',
        example: 400
      }
    }
  }
}