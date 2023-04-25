// Capturar o formulário de consulta de CEP
const cepForm = document.getElementById('cepForm');

// Adicionar um evento de submit ao formulário
cepForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evitar o envio do formulário

  // Capturar o valor do CEP digitado pelo usuário
  const cepInput = document.getElementById('cepInput');
  const cep = cepInput.value;

  try {
    // Realizar uma requisição GET para o servidor backend com o CEP informado
    const response = await axios.get(`/cep/${cep}`);
    const data = response.data;

    // Atualizar o elemento HTML com os dados do CEP
    const resultDiv = document.getElementById('result');
    if (data.erro) {
      resultDiv.textContent = 'CEP não encontrado';
    } else {
      resultDiv.textContent = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
    }
  } catch (error) {
    console.error(error);
    // Exibir mensagem de erro na página
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Erro ao consultar o CEP. Verifique se o CEP está correto e tente novamente.';
  }
});
