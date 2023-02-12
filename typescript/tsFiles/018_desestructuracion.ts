(() => {
  const avenger = {
    nombre: 'steve',
    clave: 'capitan america',
    poder: 'Fuerza',
  };
  // TIP: desestructuracion objetos
  // TIP: MODO 1: const {nombre, clave, poder} = avenger;
  const extraer = ({ nombre, clave, poder }: any) => {
    console.log(nombre);
    console.log(clave);
    console.log(poder);
  };
  extraer(avenger);
  // TIP: destructuracion arrays
  const avengers: string[] = ['thor', 'ironman', 'spiderman'];
  // TIP: modo 1:  const [trueno, plancha, arana] = avengers;

  const extraerArr = ([trueno, plancha, arana]: string[]) => {
    console.log(trueno);
    console.log(arana);
    console.log(plancha);
  };
  extraerArr(avengers);
})();
