(function () {
  // TIP: Parametros obligatorios, opcionales, por defecto,
  function activar(obligatorio: string, opcional?: string, defecto: string = 'señal') {
    if (opcional) {
      console.log(`${obligatorio} activo la  ${defecto} en la ${opcional}`);
    } else {
      console.log(`${obligatorio} activo la  ${defecto}`);
    }
    console.log(`${obligatorio} activo la ${opcional}`);
  }
  activar('Gordon', 'carro', 'tarde');
})();
