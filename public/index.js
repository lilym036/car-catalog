const accordEl= document.getElementById('accordionExample');



fetch('https://exam.razoyo.com/api/cars', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.cars[0]);
    console.log(data.cars[1]);
    console.log(data.makes[0]);
  });

  const renderCars= (data) => {
    const accordItem= document.createElement('div');
    const accordHeader= document.createElement('h2');
    const accordButton= document.createElement('button');

    const accordCollapse= document.createElement('div');
    const accordBody= document.createElement('div');
    const strongEl= document.createElement('strong');

    accordItem.classList.add('accordion-item');
    accordHeader.classList.add('accordion-header');
    accordButton.classList.add('accordion-button');

    accordCollapse.classList.add('accordion-collapse', 'collapse', 'show');
    accordBody.classList.add('accordion-body');

    accordButton.innerHTML= `hello`;

    
    accordEl.appendChild(accordItem);
    accordItem.appendChild(accordHeader);
    accordHeader.appendChild(accordButton);
    accordItem.appendChild(accordCollapse);
    accordCollapse.appendChild(accordBody);
    accordBody.appendChild(strongEl);


    

  }

  renderCars();




// const requestUrl= 'https://exam.razoyo.com/api/cars';

// function getApi(requestUrl) {
//     fetch(requestUrl)
//       .then(function (response) {
//         console.log(response);
//         if (response.status === 200) {
//           console.log(response.status);
//         }
//         return response.json();
//     });
//   }
  
//   getApi(requestUrl);


// const data = async () => {
//     const result = await fetch('https://exam.razoyo.com/api/cars', {
//       method: 'GET',
//     });
//     const json = await result.json();
//     console.log(json);
//     // return json;
//   };

