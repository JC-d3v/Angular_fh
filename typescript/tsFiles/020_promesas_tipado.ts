(() => {
  // TIP: const retirarDinero = (montoRetiro: number): """""Promise<number>"""""" => {
  const retirarDinero = (montoRetiro: number): Promise<number> => {
    let saldoActual = 1000;
    return new Promise((resolve, reject) => {
      if (montoRetiro > saldoActual) {
        reject('Fondos insuficientes');
      } else {
        saldoActual -= montoRetiro;
        resolve(saldoActual);
      }
    });
  };

  retirarDinero(500)
    .then((saldoActual) => console.log(`Me queda ${saldoActual}`))
    .catch((err) => console.warn(err));
})();
