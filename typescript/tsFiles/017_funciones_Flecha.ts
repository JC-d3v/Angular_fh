(function () {
  const miFuncion = function (a: string) {
    return a.toUpperCase();
  };
  const miFuncionF = (a: string) => a.toUpperCase();

  console.log(`msg`, miFuncion('lorem'));
  console.log(`msg`, miFuncionF('lorem'));

  const sumarN = function (a: number, b: number) {
    return a + b;
  };

  const sumarNF = (a: number, b: number) => a + b;

  console.log(`sumar `, sumarN(4, 5));
  console.log(`sumar `, sumarNF(4, 5));
  const superHeroe = {
    nombre: 'hulk',
    poder() {
      setTimeout(() => {
        console.log(`poder.. ${this.nombre} SMAHHH!!!`);
      }, 2000);
    },
  };

  superHeroe.poder();
})();
