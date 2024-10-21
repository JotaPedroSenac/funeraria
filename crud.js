// importar uuid de forma desestruturada

const {v4: uuidv4} = require("uuid");    

let clientes = []; //vai virar um array de objetos com as informações dos clientes criados

// CRUD create, read, update, Delete

// listar Clientes

function listarClientes(){
    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado na funerária");
    }else{
        console.log("Lista de clientes:")
        clientes.forEach(cliente => {
            console.log(`ID: ${cliente.id}, nome: ${cliente.nome}, email: ${cliente.email}`);
        })
    }
}

// criar clientes

function criarClientes(nome, telefone, email){
    const novoCliente = {
        id: uuidv4(),
        nome: nome,
        email: email,
        telefone: telefone
    };

    clientes.push(novoCliente);
    console.log(`Cliente ${novoCliente.nome} criado com sucesso`);
}

// Editar clientes

function editarClientes(id, novoNome, novoTelefone, novoEmail){
    const cliente = clientes.find(cliente => 
        cliente.id === id
    );
    if(cliente){
        cliente.nome = novoNome;
        cliente.email = novoEmail;
        cliente.telefone = novoTelefone;
        console.log(`Cliente ${cliente} atualizado com sucesso`)
    }else{
        console.log("Cliente não existe ou não encontrado");
    }

};

// excluir clientes

function excluirClientes(id){
    const indice = clientes.findIndex(cliente => 
        cliente.id === id);
        if(indice === -1){
            console.log("Indice não encontrado");
        }else{
            const clienteRemovido = clientes.splice(indice, 1);
            console.log("O cliente foi removido!");
        }
}

// module.exports
// require

// testes

listarClientes();
criarClientes("João", "8499999-9999", "joao@email.com");
criarClientes("Maria", "8499999-9998", "maria@email.com");
listarClientes();
excluirClientes(clientes[0].id); //excluir o joão. Foi feito assim pq o id muda a cada execução
listarClientes();
editarClientes(clientes[0].id, "Sivirina", "8499999-9998", "sivirina@email.com");
listarClientes();