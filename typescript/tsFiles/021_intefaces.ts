(() => {
  // TIP: interface : reglas de definicion
  interface Xmen {
    nombre: string;
    edad: number;
    poder?: string;
  }

  // TIP:              xmen TYPE obj({}) nombre TYPE string
  const enviarMision = (xmen: { nombre: string }) => {
    console.log(`Enviando a ${xmen.nombre}`);
  };

  const wolverine: Xmen = {
    nombre: 'logan',
    edad: 60,
  };

  enviarMision(wolverine);
})();
