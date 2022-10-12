// agregar 10e3 pares (llave:valor) a un objeto
var obj = { }
for (let i = 0; i < 10e3; i++) {
  let name = 'name' + Math.floor(Math.random() * 1e5)
  obj[name] = name
}
console.log(obj)
console.log(Object.values(obj).length)