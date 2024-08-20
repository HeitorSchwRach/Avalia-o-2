

var usuarios = []

console.log(usuarios)

function novoUsuario(nome, idade, email){

    if(typeof(nome)!= "string" && typeof(idade)!= "number" && typeof(email) != "string"){
        console.log("Dados inválidos")
    }else{
        usuarios.push({
            nome: nome,
            email: email,
            idade: idade
        })
    }

    }
        
novoUsuario("Heitor Rachadeç", 16, "heitor@gmail.com")
novoUsuario("Dennis Hinkel", 17, "dennis@gmail.com")

function numeroUsuarios(){
if (usuarios.length == 0 ) {
        console.log('Nenhum usuário cadastrado.')
    }else{
        console.log('Tem', usuarios.length, 'cadastrados')
    }
}
console.log(usuarios);


numeroUsuarios()