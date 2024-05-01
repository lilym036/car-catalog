const accordEl= document.getElementById('accordionExample');

const price= ['20,000', '50,000', '30,000', '80,000', '60,000', '75,000'];
const carMpg= [27, 33, 40, 25];
const carSeats= [4, 5, 7];

  const getCars = async () => {
    const result = await fetch('https://exam.razoyo.com/api/cars', {
      method: 'GET',
    });
    const json = await result.json();
    return json;
  };


  const renderCars= (data) => {
    console.log(data);
    const accordItem= document.createElement('div');
    const accordHeader= document.createElement('h2');
    const accordButton= document.createElement('button');

    const accordCollapse= document.createElement('div');
    const accordBody= document.createElement('div');
    const strongEl= document.createElement('strong');

    accordItem.classList.add('accordion-item');
    accordHeader.classList.add('accordion-header');
    accordButton.classList.add('accordion-button');

    accordButton.setAttribute('type', 'button');
    accordButton.setAttribute('data-bs-toggle', 'collapse');
    accordButton.setAttribute('data-bs-target', '#collapseOne');
    accordButton.setAttribute('aria-expanded', 'true');
    accordButton.setAttribute('aria-controls', 'collapseOne');

    accordCollapse.classList.add('accordion-collapse', 'collapse', 'show');
    accordCollapse.setAttribute('id', 'collapseOne');
    accordCollapse.setAttribute('data-bs-parent', '#accordionExample');
    accordBody.classList.add('accordion-body');

   

    accordButton.innerHTML= `${data.cars[0].year} ${data.cars[0].make} ${data.cars[0].model}`;
    accordBody.innerHTML= `Price: ${price[0]} MPG: ${carMpg[0]} Seats: ${carSeats[0]}`


    
    accordEl.appendChild(accordItem);
    accordItem.appendChild(accordHeader);
    accordHeader.appendChild(accordButton);
    accordItem.appendChild(accordCollapse);
    accordCollapse.appendChild(accordBody);
    accordBody.appendChild(strongEl);


    

  }




  getCars().then((response) => renderCars(response));