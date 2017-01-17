const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')
const app = express()

const options = {
    ca: [
        fs.readFileSync(path.join(__dirname, 'node_modules/aliv/lib/crt/server.csr'))
    ],
    cert: fs.readFileSync(path.join(__dirname, 'node_modules/aliv/lib/crt/server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'node_modules/aliv/lib/crt/server.key'))
}

app.get('/passaporte-rest-api/rest/authorization/token', (req, res) => {
    res.end('avc123')
})

app.get('/passaporte-rest-api/rest/produtos/habilitados', (req, res) => {
    res.json([
        {
            url: "https://passaporte2-dev.alterdata.com.br/produtos", 
            urlAutenticacao: "https://passaporte2-dev.alterdata.com.br/produtos?info=wut&idProduto=wat", 
            urlLogo: "https://cdnnimbus.alterdata.com.br/imagens/logos/passaporte.svg"
        }
    ])
})

app.get('/passaporte-rest-api/rest/authorization', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })

    res.json({
        "idUsuario": 3115,
        "nomeUsuario": "Renan Souza",
        "nrTelefone": "21997411310",
        "sexo": 0,
        "avatar": "http://novaintranet.alterdata.com.br/Images/funcionarios/souza_sup_erp.png",
        "emailUsuario": "souza.sup.erp@alterdata.com.br",
        "contas": [
            {
                "avatar": "http://novaintranet.alterdata.com.br/Images/funcionarios/souza_sup_erp.png",
                "email": "souza.sup.erp@alterdata.com.br",
                "nome": "ADMatriz"
            },
            {
                "email": "souza.sup.erp@alterdata.com.br",
                "nome": "Passaporte"
            }
        ],
        "assinantes": [
            {
                "id": 3098,
                "nome": "RENAN VERISSIMO DE VASCONCELOS SOUZA",
                "idExterno": "340582",
                "identificacao": "167.165.967-80",
                "administradorPassaporte": true,
                "produtos": [
                    {
                        "id": 4,
                        "nome": "Passaporte Admin",
                        "chaveProduto": "e8c91ad13fffb75c7a4af3f2dd571e5d",
                        "isModulo": false,
                        "idAssinanteProdutoUsuario": 13101,
                        "statusBimer": "Pleno Atendimento",
                        "idStatusBimer": "0010000001",
                        "perfis": [
                            {
                                "id": 2,
                                "nome": "Passaporte Administração - Administrador",
                                "tags": []
                            }
                        ],
                        "funcionalidades": [
                            {
                                "nome": "Aceitar Tarefa",
                                "perfis": [
                                    2
                                ]
                            },
                            {
                                "nome": "Delegar Perfil Administrador",
                                "perfis": [
                                    2
                                ]
                            },
                            {
                                "nome": "Recusar Tarefa",
                                "perfis": [
                                    2
                                ]
                            },
                            {
                                "nome": "Revogar Acesso",
                                "perfis": [
                                    2
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2463,
                "nome": "MARIA ALESSANDRA DA SILVA MACULO",
                "idExterno": "068379",
                "identificacao": "091.425.017-50",
                "administradorPassaporte": false,
                "produtos": [
                    {
                        "id": 4,
                        "nome": "Passaporte Admin",
                        "chaveProduto": "e8c91ad13fffb75c7a4af3f2dd571e5d",
                        "isModulo": false,
                        "idAssinanteProdutoUsuario": 13099,
                        "statusBimer": "Pleno Atendimento",
                        "idStatusBimer": "0010000001",
                        "bloqueadoBimer": false,
                        "perfis": [
                            {
                                "id": 13,
                                "nome": "Passaporte Administração - Cliente",
                                "tags": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2002,
                "nome": "ALTERDATA TECNOLOGIA EM INFORMATICA LTDA",
                "idExterno": "900000",
                "identificacao": "36.462.778/0001-60",
                "administradorPassaporte": false,
                "produtos": [
                    {
                        "id": 4,
                        "nome": "Passaporte Admin",
                        "chaveProduto": "e8c91ad13fffb75c7a4af3f2dd571e5d",
                        "isModulo": false,
                        "idAssinanteProdutoUsuario": 13165,
                        "statusBimer": "Pleno Atendimento",
                        "idStatusBimer": "0010000001",
                        "bloqueadoBimer": false,
                        "perfis": [
                            {
                                "id": 13,
                                "nome": "Passaporte Administração - Cliente",
                                "tags": []
                            }
                        ]
                    }
                ]
            }
        ]
    })
})

https.createServer(options, app).listen(9876)