function alternarModo() {
    var body = document.querySelector('body');
    if (body.classList.contains('modo-claro')) {
      body.classList.remove('modo-claro');
      document.querySelector('#modo').textContent = 'Modo Escuro';
    } else {
      body.classList.add('modo-claro');
      document.querySelector('#modo').textContent = 'Modo Claro';
    }
  }