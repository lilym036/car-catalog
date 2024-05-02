const accordEl = document.getElementById('accordionExample');

const accordArray= ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'];

const price = ['20,000', '50,000', '30,000', '80,000', '60,000', '75,000'];
const carMpg = [27, 33, 40, 25, 50, 45, 70];
const carSeats = [4, 5, 7, 9, 2, 4, 7];

const getCars = async () => {
  const result = await fetch('https://exam.razoyo.com/api/cars', {
    method: 'GET',
  });
  const json = await result.json();
  return json;
};


const renderCars = (data) => {
  console.log(data);

  for (let i = 0; i < data.cars.length; i++) {
    const accordItem = document.createElement('div');
    const accordHeader = document.createElement('h2');
    const accordButton = document.createElement('button');

    const accordCollapse = document.createElement('div');
    const accordBody = document.createElement('div');
    const strongEl = document.createElement('strong');

    accordItem.classList.add('accordion-item');
    accordHeader.classList.add('accordion-header');
    accordButton.classList.add('accordion-button', 'collapsed');

    accordButton.setAttribute('type', 'button');
    accordButton.setAttribute('data-bs-toggle', 'collapse');

   
    accordButton.setAttribute('data-bs-target', `#collapse${accordArray[i]}`);

    accordButton.setAttribute('aria-expanded', 'false');
    accordButton.setAttribute('aria-controls', `collapse${accordArray[i]}`);

    accordCollapse.classList.add('accordion-collapse', 'collapse');
    accordCollapse.setAttribute('id', `collapse${accordArray[i]}`);
    accordCollapse.setAttribute('data-bs-parent', '#accordionExample');
    accordBody.classList.add('accordion-body');



    accordButton.innerHTML = `${data.cars[i].year} ${data.cars[i].make} ${data.cars[i].model}`;
    accordBody.innerHTML = `Price: ${price[i]} MPG: ${carMpg[i]} Seats: ${carSeats[i]}`



    accordEl.appendChild(accordItem);
    accordItem.appendChild(accordHeader);
    accordHeader.appendChild(accordButton);
    accordItem.appendChild(accordCollapse);
    accordCollapse.appendChild(accordBody);
    accordBody.appendChild(strongEl);



  }
}




getCars().then((response) => renderCars(response));