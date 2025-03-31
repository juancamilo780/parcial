const obtenerValorInput = () => {
  let inputTexto = document.getElementById('input_star');
  let valor = inputTexto.value.trim();

  if (!valor) {
    alert('Por favor ingresa el nombre de un personaje.');
    return;
  }

  peticionApi(valor);
};

const peticionApi = (name) => {
  const baseUrl = 'https://www.swapi.tech/api/';
  const endpoint = `people/?name=${name}`;
  const url = `${baseUrl}${endpoint}`;

  axios
    .get(url)
    .then((res) => {
      if (res.data.result.length === 0) {
        alert('No se encontró el personaje. Verifica el nombre e intenta de nuevo.');
        return;
      }
      printData(res.data.result[0]);
    })
    .catch((err) => console.error('Error en la petición:', err));
};

const printData = (data) => {
  let respuesta = document.getElementById('show-info');
  const properties = data.properties;

  respuesta.innerHTML = `
        <label>Nombre: <h3>${properties.name}</h3></label>
        <label>Género: <h3>${properties.gender}</h3></label>
        <label>Color de cabello: <h3>${properties.hair_color}</h3></label>
        <label>Descripción: <h3>${data.description}</h3></label>
    `;
};
