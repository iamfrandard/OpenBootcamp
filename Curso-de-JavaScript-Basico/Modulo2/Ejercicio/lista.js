const fecha_nacimiento = new Date(2000, 11, 22);

const Libro = {
  titulo: "Lazarillo de Tormes",
  autor: "Anonimo",
  fecha: new Date(1554, 0, 11),
  url: "https://archive.org/details/lazarillodetormesed.ricocatedra",
};

const lista = [
  "Francis Daniel Cordero Chalas",
  22,
  true,
  fecha_nacimiento,
  Libro,
];

console.log(lista);
