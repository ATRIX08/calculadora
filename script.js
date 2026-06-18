function fatorial(numero) {
  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

function calcular() {
  const nInput = document.getElementById("n");
  const pInput = document.getElementById("p");

  const n = Number(nInput.value);
  const p = Number(pInput.value);

  const erro = document.getElementById("erro");
  const resultado = document.getElementById("resultado");

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (nInput.value === "" || pInput.value === "") {
    erro.innerHTML = "Preencha todos os campos.";
    return;
  }

  if (n < 0 || p < 0) {
    erro.innerHTML = "Não são permitidos números negativos.";
    return;
  }

  if (!Number.isInteger(n) || !Number.isInteger(p)) {
    erro.innerHTML = "Digite apenas números inteiros.";
    return;
  }

  if (p > n) {
    erro.innerHTML = "O valor de p não pode ser maior que n.";
    return;
  }

  const nFatorial = fatorial(n);
  const pFatorial = fatorial(p);
  const npFatorial = fatorial(n - p);

  const combinacao = nFatorial / (pFatorial * npFatorial);

  resultado.innerHTML = `
        <h3>Resultado</h3>
        <br>
        <p><strong>${n}!</strong> = ${nFatorial}</p>
        <p><strong>${p}!</strong> = ${pFatorial}</p>
        <p><strong>(${n}-${p})!</strong> = ${npFatorial}</p>
        <br>
        <p><strong>C(${n},${p}) = ${combinacao}</strong></p>
    `;
}
