import { result } from "../index.js";

function convertor({ distance, convert_to }, { units }) {
  const unit = units.find((el) => el.title === distance.unit);

  const { value } = units.find((el) => el.title === convert_to);
  const resultValue = (unit.value * Number(distance.value)) / value;
  result.textContent = `${resultValue.toFixed(2)} ${convert_to}`;

  const outputData = {
    value: resultValue.toFixed(2),
    unit: convert_to,
  };
  const outputDataJson = JSON.stringify(outputData);
}

export default convertor;
