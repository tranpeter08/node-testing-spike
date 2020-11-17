module.exports = {
  PetsReqBodyCreate: {
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
  ErrorResp: {
    type: 'object',
    description: 'Error response',
    properties: {
      message: {
        type: 'string',
        example: 'Some error message'
      },
      errCode: {
        type: 'string',
        example: 'SOME_ERROR_CODE'
      },
      statusCode: {
        type: 'integer',
        min: 100,
        max: 599,
        example: 400
      }
    }
  }
}