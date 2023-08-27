// Seleciona o formulário e adiciona um evento de submissão
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

// Função que trata o evento de submissão do formulário
function handleSubmit(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário de atualizar a página

  // Obtém os valores dos campos do formulário
  const gender = getSelectedValue('gender');
  const age = getInputNumberValue('age');
  const weight = getInputNumberValue('weight');
  const height = getInputNumberValue('height');
  const activityLevel = getSelectedValue('activity_level');

  // Calcula os valores com base nos dados do formulário
  const tmb = Math.round(
    gender === 'female'
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  );
  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  // Cria o layout com os resultados
  const layout = `
    <h2>Seu resultado:</h2>
    <div class="result-content">
      <ul>
        <li>Seu metabolismo basal é de <strong>${tmb} calorias</strong>.</li>
        <li>Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.</li>
        <li>Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.</li>
        <li>Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.</li>
      </ul>
    </div>
  `;

  // Verifica se os campos obrigatórios foram preenchidos e exibe os resultados
  if (age == '') {
    alert('Digite sua idade!')
} else if(weight == '') { 
    alert('Digite seu peso!')
} else if(height == '') {
    alert('Digite sua altura!')
} else ( result.innerHTML = layout)

  // Seleciona o botão de reset e adiciona um evento de clique para limpá-lo
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', resetForm);

  // Função que reseta o formulário
  function resetForm() {
    form.reset();
  }
}

// Função que retorna o valor selecionado de um elemento select
function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

// Função que retorna o valor numérico de um campo de entrada
function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}











