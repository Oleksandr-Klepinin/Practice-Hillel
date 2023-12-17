import './styles/main.scss';

document.addEventListener('DOMContentLoaded', function () {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = createAppHtml();

    const input = document.getElementById('endpointInput');
    const fetchDataButton = document.getElementById('fetchData');
    const resultContainer = document.getElementById('result');
    const spinner = document.getElementById('spinner');
    const idBlock = document.getElementById('idBlock');
    const controllerBlock = document.getElementById('controllerBlock');

    function showSpinner() {
        spinner.style.display = 'block';
    }

    function hideSpinner() {
        spinner.style.display = 'none';
    }

    function displayResult({ id, controller, data }) {
        idBlock.textContent = `id: ${id}`;
        controllerBlock.textContent = `controller: ${controller}`;
        const formattedData = JSON.stringify(data, null, 2);
        resultContainer.textContent = formattedData;
    }

    async function fetchDataFromAPI(endpoint) {
        try {
            const response = await fetch(`https://swapi.dev/api/${endpoint}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }

    function parseEndpoint(endpoint) {
        endpoint = endpoint.replace(/^\/|\/$/g, '');
        const parts = endpoint.split('/');
        const id = parts.find(part => !isNaN(part)) || '';
        const controller = parts.slice(0, parts.indexOf(id)).join('/');
        return { id, controller };
    }

    async function fetchData() {
        const endpoint = input.value.trim();

        if (endpoint !== '') {
            showSpinner();

            try {
                const data = await fetchDataFromAPI(endpoint);
                const { id, controller } = parseEndpoint(endpoint);
                displayResult({ id, controller, data });
            } catch (error) {
                console.error(error.message);
            } finally {
                hideSpinner();
            }
        } else {
            resultContainer.textContent = '';
            idBlock.textContent = 'id: ';
            controllerBlock.textContent = 'controller: ';
        }
    }

    fetchDataButton.addEventListener('click', fetchData);

    function createAppHtml() {
        return `
        <h1>SWAPI</h1>
        <div id="input">
          <label for="endpointInput">https://swapi.dev/api/</label>
          <input type="text" id="endpointInput" />
          <button id="fetchData" class="btn btn-primary">Get Info</button>
          <div id="spinner" class="spinner-border text-primary" role="status" style="display: none;">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div>
          <div id="controllerBlock"></div>
          <div id="idBlock"></div>
          <pre id="result"></pre>
        </div>
      `;
    }
});