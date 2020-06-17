exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Bem vindo a sua área secreta"
  })

}