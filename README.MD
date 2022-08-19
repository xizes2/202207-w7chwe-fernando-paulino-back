[GET] /users -> devuelve un array con todos los users de la BD. STATUS: 200

[GET] /users/:idUser -> devuelve un user de la BD por id. STATUS: 200

[POST*] /users/register -> recibe los datos de un user lo crea en la BD y devuelve el user recién creado. STATUS: 201

[PUT*] /users/update/:idUser -> recibe un user, modifica en la BD el user con la misma id que el recibido, y devuelve el user modificado. STATUS: 200

[DELETE*] /users/delete/:idRobot -> elimina de la BD un user por id y devuelve el status. STATUS: 200

Bad request - STATUS: 400
Unauthorized - STATUS: 401
Not Found - STATUS: 404
Conflict - STATUS: 409
