document.getElementById("primeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    const n = parseInt(document.getElementById("numberInput").value);
    const primeNumbers = generarPrimos(n);
    document.getElementById("primeOutput").textContent = primeNumbers.join(", ");
  });
  
  // Función para generar números primos menores que n
  function generarPrimos(n) {
    const primos = [];
    for (let i = 2; i < n; i++) {
      if (esPrimo(i)) {
        primos.push(i);
      }
    }
    return primos;
  }
  
  // Función para verificar si un número es primo
  function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  