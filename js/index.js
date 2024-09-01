//logic for bmi
let getButton = document.getElementById("btn__calculate");

getButton.addEventListener("click", (e) => {
  e.preventDefault();

  //get weight
  let getWeight = document.getElementById("weight").value;
  let getWeightError = document.getElementById("weightError");

  //get height
  let getHeight = document.getElementById("height").value;
  let getHeightError = document.getElementById("heightError");


  //is Data not null ? 
   getWeight == "" ? getWeightError.innerHTML = "wajib disii!" : getWeightError.innerHTML = "";
   getHeight == "" ? getHeightError.innerHTML = "wajib diisi!" :  getHeightError.innerHTML = "";

  if (getHeight !== "" && getWeight !== "") {
    const calculateHeight = Math.pow(getHeight / 100, 2);
    const fixedDecimalHeight = calculateHeight;

    const totalCalculate = Number(getWeight / fixedDecimalHeight);
    const getDataBMI = BMICategories(totalCalculate.toFixed(1));

    //delete error
    getWeightError.innerHTML = "";
    getHeightError.innerHTML = "";

    let getResultTag = document.getElementById("result__text");
    getResultTag.innerHTML = "calculate data....";
    setTimeout(() => {
        getResultTag.innerHTML = `Your BMI is <b>${totalCalculate.toFixed(
            1
          )}</b> which means You are <b>${getDataBMI}</b>`;
    }, 500)
  }
});

const BMICategories = (data) => {
  if (data < 18.5) {
    return "Under Weight";
  } else if (data >= 18.5 && data <= 24.9) {
    return "Normal Weight";
  } else if (data >= 25 && data <= 29.9) {
    return "Overweight";
  } else if (data >= 30) {
    return "Obesity";
  }
};
