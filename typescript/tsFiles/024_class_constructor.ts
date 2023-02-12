(() => {
  // TIP: MODO 1

  // class Avenger {
  //   nombre: string;
  //   equipo: string;
  //   nombreReal?: string;
  //   puedePelear: boolean;
  //   peleasGanadas: number;

  //   constructor(
  //     nombre: string,
  //     equipo: string,
  //     nombreReal?: string,
  //     puedePelear?: boolean,
  //     peleasGanadas?: number
  //   ) {
  //     this.nombre = nombre;
  //     this.equipo = equipo;
  //   }
  // }

  // TIP: modo 2
  class Avenger {
    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal?: string,
      public puedePelear: boolean = true,
      public peleasGanadas: number = 0
    ) {}
  }

  const personaje = new Avenger('antman', 'capi', 'scot');
  personaje.equipo = 'ironman';
  console.log(personaje);
})();
