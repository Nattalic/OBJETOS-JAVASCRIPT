function Carro(marca, modelo, anio, color) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.color = color
}


let miCarro = new Carro('Toyota', 'Corolla', 2020, 'Rojo') //el new es para crear un nuevo objeto

console.log(miCarro)

let listaCarros = [];

const form = document.getElementById('carForm');
const carsContainer = document.getElementById('carsContainer');

function renderCarList() {
    carsContainer.innerHTML = '';
    
    if (listaCarros.length === 0) {
        carsContainer.innerHTML = '<p class="no-cars">No hay carros en la lista</p>';
        return;
    }
    
    listaCarros.forEach((carro, index) => {
        console.log(carro)
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        
        carCard.innerHTML = `
            <div class="car-info">
                <h3>${carro.marca} ${carro.modelo}</h3>
                <p>Año: ${carro.anio}</p>
                <p>Color: ${carro.color}</p>
            </div>
            <button class="delete-btn" data-index="${index}">Eliminar</button>
        `;
        
        carsContainer.appendChild(carCard);
    });
    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            eliminarCarro(index);
        });
    });
}

//Rellenamos
function agregarCarro(event) {
    event.preventDefault() //evita que la pagina se recargue al enviar el formulario
    const marca = document.getElementById('marca').value
    const modelo = document.getElementById('modelo').value
    const anio = parseInt(document.getElementById('anio').value)
    const color = document.getElementById('color').value



    const nuevoCarro = new Carro(marca, modelo, anio, color)

    listaCarros.push(nuevoCarro) //agregamos el nuevo carro a la lista de carros

    renderCarList() //actualizamos la lista de carros
}

function eliminarCarro(index) {
   listaCarros.splice(index) //eliminamos el carro de la lista
   renderCarList() //actualizamos la lista de carros
}

form.addEventListener('submit', agregarCarro);

listaCarros.push(new Carro('Toyota', 'Corolla', 2020, 'Rojo'))
listaCarros.push(new Carro('Honda', 'Civic', 2019, 'Azul'))
listaCarros.push(new Carro('Ford', 'Mustang', 2021, 'Negro'))


renderCarList()