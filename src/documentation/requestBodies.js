module.exports = {
  UserCreateBody: {
    required: true,
    content: {
      "application/json":{
        schema: {
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
        }
      }
    }
  }
}