const express = require('express');
const axios = require('axios');
const app = express();

// Configurar o Express para servir arquivos estáticos do front-end
app.use(express.static(__dirname + '/'));

// Configurar o middleware do Express para receber dados JSON do frontend
app.use(express.json());

// Rota para consultar o CEP
app.get('/cep/:cep', async (req, res) => {
  const cep = req.params.cep;
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar o CEP' });
  }
});

// Iniciar o servidor
const PORT = 3000; // Porta do servidor
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
