import unitsData from "./data.json" assert { type: "json" };
import convertor from "./functions/functionConvertor.js";

const form = document.querySelector("form");
export const result = document.querySelector(".result");
const selectUnit = document.querySelector(".size");
const selectConvertTo = document.querySelector(".convert_to");

const murkup = unitsData.units.map(
  (el) => `<option value="${el.title}">${el.title}</option>`
);

selectUnit.innerHTML = murkup;
selectConvertTo.innerHTML = murkup;

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { unit, size, convert_to },
  } = e.currentTarget;

  const convertRequest = {
    distance: {
      value: unit.value,
      unit: size.value,
    },
    convert_to: convert_to.value,
  };
  const convertRequestJson = JSON.stringify(convertRequest);

  convertor(convertRequest, unitsData);
}
