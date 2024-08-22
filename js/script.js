const inptEtanol = document.querySelector("#etanol");
const inptGasolina = document.querySelector("#gasolina");
const btnCalc = document.querySelector("#btn-calc");
const res = document.querySelector(".res h2");
const border = document.querySelector(".res");

inptEtanol.addEventListener("input", () => {
  inptEtanol.value = inptEtanol.value.replace(/[^0-9,.]/g, "");
});
inptGasolina.addEventListener("input", () => {
  inptGasolina.value = inptGasolina.value.replace(/[^0-9,.]/g, "");
});

const calcular = () => {
  const preçoEtanol = inptEtanol.value.replace(",", ".");
  const preçoGasolina = inptGasolina.value.replace(",", ".");

  if (Number(preçoEtanol) === 0 || Number(preçoGasolina) === 0) {
    border.style.opacity = 1;
    res.innerHTML = "Preço do combustivel Não pode ser zero!";
    return;
  } else {
    var calc = (Number(preçoEtanol) / Number(preçoGasolina)).toFixed(2);
  }

  if (calc > 0.7) {
    res.innerHTML = "Gasolina Vale mais a pena!";
  } else if (calc <= 0.7) {
    res.innerHTML = "Etanol Vale mais a pena!";
  }

  inptEtanol.value = "";
  inptGasolina.value = "";

  setTimeout(() => {
    res.innerHTML = "Digite Os Valores Acima";
  }, 4000);
};

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();
  calcular();
});
