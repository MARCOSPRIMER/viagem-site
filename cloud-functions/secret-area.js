exports.handler = function(event, context, callback) {
  const secretContent = `
  <h3>Bem vindo a área secreta</h3>
  <p>Aqui sua Festa é mais <strong>Divertida</strong>, e nao vemos a hora de nos encontrar.</p>
  `

  let body

  if(event.body){
    body = JSON.parse(event.body)

  }else{
    body = {}
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    })
  } else{ 
    callback(null, {
      statusCode: 401
      
    })
  }
  
  

}