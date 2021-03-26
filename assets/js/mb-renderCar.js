    // RENDER CAR
    let renderCar = () => {
      ulAside = document.querySelector('aside ul');
      ulAside.innerHTML = '';
      totalCarrito = document.querySelector('#opencart span');
      totalAside = document.querySelector('#totalAside');
      articulos = 0;
      dinero = 0;
      totalArticles = document.querySelectorAll('div[val]');
      for (let totalArticle of totalArticles){
        totalArticle.innerHTML = '0';
      }
      for (let [index, c] of car.entries()){
        listElement = document.createElement('li');
        listElement.classList.add('w3-justify', 'w3-white', 'w3-border');
          listElementUp = document.createElement('p');
          listElementUp.classList.add('w3-large');
          listElementUp.textContent = c.cantidad + ' x ' + '$' + c.subtotal + ' - ' + c.titulo;
          listElementDown = document.createElement('div');
          listElementDown.classList.add('w3-row');
            priceElement = document.createElement('span')
            priceElement.classList.add('w3-col', 's5', 'w3-text-blue');
            priceElement.textContent = '$ ' + c.total + ' mxn';
            deleteElement = document.createElement('div');
            deleteElement.classList.add('w3-rest', 'w3-right-align');
              deleteIcon = document.createElement('i');
              deleteIcon.classList.add('fas', 'fa-trash-alt', 'w3-button', 'w3-red','w3-border', 'w3-small');
              deleteIcon.setAttribute('ident', index);
              deleteIcon.addEventListener('click', deleteItem);
        ulAside.appendChild(listElement);
          listElement.appendChild(listElementUp);
          listElement.appendChild(listElementDown);
            listElementDown.appendChild(priceElement);
            listElementDown.appendChild(deleteElement);
              deleteElement.appendChild(deleteIcon);

        // Total de artículos
        articulos += c.cantidad;

        // Total dinero
        dinero += c.total;

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
      const carString = JSON.stringify(car);
      localStorage.setItem('car', carString);
    };
