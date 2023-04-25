# Documentação da API apicep

Essa é uma API desenvolvida por Leandro Sobral, um desenvolvedor Node.js, para consulta de CEP utilizando as tecnologias Express e Axios.

## Informações do Criador

- Nome: Leandro Sobral
- Email: leosobral.dev@gmail.com
- LinkedIn: [https://www.linkedin.com/in/ulss/](https://www.linkedin.com/in/ulss/)
- Portfólio: [https://uleandrosobrals.github.io/leandrosobral/](https://uleandrosobrals.github.io/leandrosobral/)
- WhatsApp: 79981447870

## Instalação

Para executar a API em seu ambiente local, siga os passos abaixo:

1. Clone o repositório do projeto:

```bash
git clone <URL do repositório>
```

2. Acesse o diretório do projeto:

```bash
cd apicep
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor local:

```bash
npm run dev
```

A API estará disponível em [http://localhost:3000](http://localhost:3000) para ser consumida.

## Endpoints

### Consultar CEP

- **Descrição**: Consulta um CEP específico.
- **URL**: `/cep/{cep}`
- **Método**: `GET`
- **Parâmetros de URL**:
  - `{cep}` (obrigatório): CEP a ser consultado.
- **Respostas**:
  - **Código de Status**: `200`
    - **Descrição**: Sucesso
    - **Corpo da Resposta**:
    ```json
    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
    ```
  - **Código de Status**: `500`
    - **Descrição**: Erro
    - **Corpo da Resposta**:
    ```json
    {
      "error": "Erro ao consultar o CEP"
    }
    ```

## Tecnologias Utilizadas

- Axios (^1.3.6)
- Bootstrap (^5.2.3)
- Express (^4.18.2)



Espero que isso seja útil! Lembre-se de atualizar as informações do criador, as descrições dos endpoints e as tecnologias utilizadas de acordo com o seu projeto.