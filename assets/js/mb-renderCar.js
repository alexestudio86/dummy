    // RENDERIZAR CARRITO
    function renderCar () {
      ulAside = document.querySelector('aside ul');
      ulAside.innerHTML = '';
      totalCarrito = document.querySelector('#opencart span');
      totalAside = document.querySelector('#totalAside');
      articulos = 0;
      dinero = 0;
      totalArticle = document.querySelectorAll('div[val]');
      for (let tArticle of totalArticle){
        tArticle.innerHTML = '0';
      }
      for (let c of car){
        listElement = document.createElement('li');
        listElement.classList.add('w3-right-align', 'w3-border', 'w3-white', 'w3-row');
          listElementLeft = document.createElement('div');
          listElementLeft.classList.add('w3-col', 's10');
            elementDescription = document.createElement('span');
            elementDescription.textContent = c.cantidad + ' x ' + '$' + c.precio + ' - ' + c.titulo + ' | $' + c.subtotal;
          listElementRight = document.createElement('div');
          listElementRight.classList.add('w3-rest')
            deleteElement = document.createElement('a');
            deleteElement.classList.add('w3-button', 'w3-red', 'w3-small', 'bold');
            deleteElement.innerHTML = '&times;';
            deleteElement.setAttribute('ident', c.identificador);
            deleteElement.setAttribute('deleteThis', 'true');
            deleteElement.setAttribute('data-price', c.cantidad);
            deleteElement.setAttribute('data-title', c.titulo);
            deleteElement.addEventListener('click', carCounter);

        ulAside.appendChild(listElement);
          listElement.appendChild(listElementLeft);
            listElementLeft.appendChild(elementDescription);
          listElement.appendChild(listElementRight);
            listElementRight.appendChild(deleteElement);

        // Total de artículos
        articulos += c.cantidad;

        // Total dinero
        dinero += c.subtotal;

        actualizarCampo = document.querySelector('div[val="'+c.identificador+'"]');
        if(actualizarCampo){
          actualizarCampo.innerHTML = c.cantidad;
        }
      }

      let vaciar = document.getElementById('vaciar');
      continuar = document.getElementById('continuar');
      if(car.length <= 0){
        vaciar.classList.remove('w3-show');
        continuar.classList.remove('w3-show');
      }else{
        vaciar.classList.add('w3-show');
        continuar.classList.add('w3-show');
      }
      totalCarrito.innerHTML = articulos;
      totalAside.innerHTML = dinero;
      if(parseInt(totalCarrito.innerHTML) != 0){
        totalCarrito.classList.add('w3-text-red');
      }else{
        totalCarrito.classList.remove('w3-text-red');
      }
    };
