    // MODAL OF NAME
    function modalName(){
      let modal = document.getElementById('modal');
      modalContent = document.createElement('div');
      modalContent.classList.add('w3-modal-content', 'w3-animate-top', 'w3-center', 'w3-card', 'w3-padding');
        modalTitle = document.createElement('p');
        modalTitle.setAttribute('id', 'textoNombre');
        modalTitle.textContent = 'Ingresa tu nombre para continuar';
        inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('id', 'nombre');
        inputName.style = 'width:100%';
        divRow = document.createElement('div');
        divRow.classList.add('w3-row');
        divRow.style = 'margin: 15px 0 0 0'
          divLeft = document.createElement('div');
          divLeft.classList.add('w3-col', 's6', 'w3-center');
            cancelar = document.createElement('a');
            cancelar.classList.add('w3-button', 'w3-border', 'w3-border', 'w3-border-red', 'w3-left');
            cancelar.textContent = 'Cancelar';
        cancelar.style='width:90%';
            cancelar.addEventListener('click', modalGeneral);
          divRight = document.createElement('div');
          divRight.classList.add('w3-col', 's6', 'w3-center');
            aceptar = document.createElement('a');
            aceptar.classList.add('w3-button', 'w3-border', 'w3-border', 'w3-border-green', 'w3-right');
        aceptar.id = 'finalMessage'
            aceptar.textContent = 'Aceptar';
            aceptar.addEventListener('click', validateName);
        aceptar.style='width:90%';

      modal.appendChild(modalContent);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(inputName);
        modalContent.appendChild(divRow);
          divRow.appendChild(divLeft);
            divLeft.appendChild(cancelar);
          divRow.appendChild(divRight);
            divRight.appendChild(aceptar);

        focus();
    }

    // FOCUS
    function focus(){
      focus = document.querySelector('#nombre');
      focus.focus();
    }



    // MODAL VACIAR CARRITO
    function vaciarCarrito(){

      let modal = document.getElementById('modal');
      modalContent = document.createElement('div');
      modalContent.classList.add('w3-modal-content', 'w3-animate-top', 'w3-center', 'w3-light-gray', 'w3-padding');
        modalContainer = document.createElement('div');
        modalContainer.classList.add('w3-padding');
          signal = document.createElement('i');
          signal.classList.add('fas', 'fa-exclamation-circle', 'w3-text-red');
          signal.style = 'margin: 0 4px 0 0';
          content = document.createElement('span')
          content.classList.add('uppercase', 'bold');
          content.textContent = '¿Deseas limpiar el carrito?';
        divRow = document.createElement('div');
        divRow.classList.add('w3-row', 'w3-padding');
          divLeft = document.createElement('div');
          divLeft.classList.add('w3-col', 's6', 'w3-center');
            cancelar = document.createElement('a');
            cancelar.classList.add('w3-button', 'w3-border');
            cancelar.addEventListener('click', modalGeneral);
              cancelSymbol = document.createElement('i');
              cancelSymbol.classList.add('far', 'fa-times-circle', 'w3-text-red');
          divRight = document.createElement('div');
          divRight.classList.add('w3-col', 's6', 'w3-center');
            aceptar = document.createElement('a');
            aceptar.classList.add('w3-button', 'w3-border');
            aceptar.addEventListener('click', function(){
              car.splice(0,car.length);
              localStorage.removeItem('car');
            });
            aceptar.addEventListener('click', modalGeneral);
            aceptar.addEventListener('click', renderCar);
              aceptSymbol = document.createElement('i');
              aceptSymbol.classList.add('fas', 'fa-check', 'w3-text-green');

      modal.appendChild(modalContent);
        modalContent.appendChild(modalContainer);
          modalContainer.appendChild(signal);
          modalContainer.appendChild(content);
        modalContent.appendChild(divRow);
          divRow.appendChild(divLeft);
            divLeft.appendChild(cancelar);
              cancelar.appendChild(cancelSymbol);
          divRow.appendChild(divRight);
            divRight.appendChild(aceptar);
              aceptar.appendChild(aceptSymbol);

    }


    // EVENT OF ASIDE FOOTER
    let vaciar = document.getElementById('vaciar');
    continuar = document.getElementById('continuar');
    // Terminar declaración de variables
    vaciar.addEventListener('click', modalGeneral);
    vaciar.addEventListener('click', vaciarCarrito);
    continuar.addEventListener('click', modalGeneral);
    continuar.addEventListener('click', modalName);


    renderCar();
