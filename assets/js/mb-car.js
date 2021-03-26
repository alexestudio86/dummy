
    const car = JSON.parse(localStorage.getItem('car')) || [];

    let carCounter = () => {
      // Nombre
      formCero = document.querySelector('#formCero');
      // Modelo
      formPrimaryTitle = '';
      formPrimary = document.querySelector('form#formPrimary input:checked');
      if(formPrimary){
        formPrimaryTitle = formPrimary.value;
      }
      // Variación
      formSecondaryTitle = '';
      formSecondaryInputs = document.querySelectorAll('form#formSecondary input:checked');
      if(formSecondaryInputs){
        formSecondaryAllTexts = [];
        formSecondaryAllValues = [];
        for (let formSecondaryInput of formSecondaryInputs){
          // Titles
formSecondaryAllTexts.push(document.querySelector('form#formSecondary label[for="'+formSecondaryInput.id+'"]').textContent);
          // Values
          formSecondaryAllValues.push(parseInt(formSecondaryInput.value));
        }
      }
      // Titles
      totalTitles=[formCero.textContent, formPrimaryTitle, ...formSecondaryAllTexts];
      title = totalTitles.join(', ');
      // Cantidad
      quantity = 0;
      formTertiary = document.querySelector('form#formTertiary select option:checked');
      quantity = parseInt(formTertiary.value);
      // Subtotal
      stotal = 0;
      itemPrice = 0;
      // Seguro de precio
      auxiliarPrice = document.querySelector('span[data-price]');
      if(parseInt(auxiliarPrice.textContent)){
		itemPrice = parseInt(auxiliarPrice.textContent);
      }else{
        itemPrice = 500;
      }
      totalPrices=[itemPrice, ...formSecondaryAllValues];
      let secondaryInputsValues = (elemento) => {
        stotal += parseInt(elemento);
      }
      totalPrices.forEach(secondaryInputsValues);
      // Total
      ttal=quantity*stotal;
      // Constructor
      class carConstructor {
        constructor(titulo, cantidad, subtotal, total){
          this.titulo		=	titulo;
          this.cantidad		=	cantidad;
          this.subtotal		=	subtotal;
          this.total		=	total;
        }
      }
      nuevoElemento = new carConstructor(title, quantity, stotal, ttal);
      // Buscar duplicado
      let indexCarElement = (position) =>{return position.titulo == title}
      buscaDuplicado = car.indexOf(car.find(indexCarElement));

      if(buscaDuplicado >= 0){
        car[buscaDuplicado].cantidad = quantity;
        car[buscaDuplicado].subtotal = stotal
        car[buscaDuplicado].total = ttal
      }else{
        car.push(nuevoElemento);
      }
      renderCar();
    }

    // Show price to start
    formSecondaryPrices = document.querySelectorAll('form#formSecondary input');
    showFormPrices = () => {
      for(let formSecondaryPrice of formSecondaryPrices){
        formSecondaryP = document.querySelector('form#formSecondary label[for="'+formSecondaryPrice.id+'"]');
        tempStyle = document.createElement('style');
        tempStyle.innerHTML = 'label[for="'+formSecondaryPrice.id+'"]::after {content: " | $'+formSecondaryPrice.value+'mxn"; color:#B12704; float:right}';
        document.head.appendChild(tempStyle);
      }
    };
    showFormPrices();

    let disableButton = () => {
      carButton.setAttribute('disabled', 'true');
      carSpan = document.querySelector('#carButton span.tooltiptext');
      carSpan.style.visibility = 'visible';
      carButton.classList.remove('w3-black');
      carButton.classList.add('w3-light-gray');
      setInterval(() => {
        backUrl = document.referrer;
        currentHostname = 'https://'+window.location.hostname;
        backUrl = document.referrer;
        currentHostname = 'https://'+window.location.hostname;
        if(backUrl.indexOf(currentHostname) > -1){
          history.back();
        }else{
          window.location.href = '/#menu';
        }
      },1000);
    }

    let deleteItem = (e) => {
      car.splice(parseInt(e.target.getAttribute('ident')),1);
      renderCar();
    }

    // Add Events to start
    carButton = document.querySelector('#carButton');
    if(carButton){
      carButton.addEventListener('click', carCounter);
      carButton.addEventListener('click', disableButton);
    }
