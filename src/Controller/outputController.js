//output da rota raiz

const output = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Usuários</title>
    <style>
        body{
            background-image: url(https://victoria.mediaplanet.com/app/uploads/sites/58/2020/12/Flat-illustration-of-diverse-people.jpg);
            background-color: black;
            background-size: cover;
        }

        .fundo{
            background-color: rgba(25, 2, 47, 0.2);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            width: 70%;
            height: 70vh;
            margin: auto;
            margin-top: 15vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 25px;
        }

        h1, h2{
            text-align: center;
            color: white;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            text-shadow: black 0.1em 0.1em 0.2em;
        }

        h1{
            font-size: 55pt;
            margin-bottom: 0;
        }

        h2{
            font-size: 35pt;
            margin-top: 0%;
        }

        button{
            background-color: rgba(8, 4, 12, 0.2);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            color: white;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 15pt;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
        }

        button:hover{
            transform: scale(1.5);
            transition: all 0.5s;
        }


    </style>
</head>
<body>
    <div class='fundo'>

        <h1>API USUÁRIOS</h1>
        <h2>Bem Vindo</h2>
        <a href="https://github.com/jeanramalho/projeto-final-modulo4-resilia" target="_blank">
            <button>SAIBA MAIS</button>
        </a>

    </div>
</body>
</html>
`

module.exports = output