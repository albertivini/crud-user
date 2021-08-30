
# CRUD de Usuário

Desafio de CRUD de usuário para vaga de Desenvolvedor Back-End.

## Recursos utilizados

- Node.Js
- Typescript
- Express
- Mongoose
- Bcryptjs

## Executando a aplicação

Para instalar os pacotes é necessário ter o instalador de pacotes "yarn" instalado:

```
npm install -g yarn 
```

Após a instalação do yarn via NPM utilize o comando para instalar os pacotes:

```
yarn
```

Para inicar a aplicação utilize o comando: 

```
yarn dev
```

## Funcionalidades

### GET

- Listar Usuário a partir do seu id - <strong> /user/:id </strong>
- Listar todos os usuários - <strong> /users </strong>

### POST

- Criar Usuário - <strong> /user </strong> </br>

    Paramêtros necessários no body:

        name
        username
        password

### PUT 

- Atualizar dados do Usuário a partir do id - <strong> /user/:id </strong>

    Paramêtros necessários no body:

            name
            username
            password

### DELETE

- Apagar Usuário a partir do id - <strong> /user/:id </strong>

_______________________________________________

<strong >_Feito por Vinicius Alberti_ </strong>







