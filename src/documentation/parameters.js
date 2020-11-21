module.exports = {
  UserIdQueryParam: {
    name: 'userId',
    in: 'query',
    description: 'A user\'s ID',
    required: true,
    schema: {
      type: 'string',
      example: '5fb37b8672c339da1f6a487d'
    }
  }
}