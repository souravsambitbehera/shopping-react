import { useState } from "react";

export function BmiCalculator() {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiResult , setBmiResult] = useState('');
  const [bmiMsg, setBmiMsg] = useState('');

  function OnGetAge(e) {
    setAge(e.target.value);
  }
  function OnGetHeight(e) {
    setHeight(e.target.value);
  }
  function OnGetWeight(e) {
    setWeight(e.target.value);
  }
  function HandelCalculate() {
    let bmi = (weight / (height * height)) * 10000;
    setBmi(bmi);
    if (bmi<18.5) {
        setBmiResult("UnderWeight Bmi");
    }
    else if (bmi>=18.5 && bmi<25) {
        setBmiResult("NormalWeight Bmi")
    }
    else if (bmi>=25 && bmi<30) {
        setBmiResult("OverWeight Bmi")
    }else{
        setBmiResult("Obese Bmi")
    }
    setBmiMsg("")
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="mb-4">BMI Calculator</h2>
      </div>

      <div className="row mt-4 border border-dark border-2 p-4 m-3">
        <div className="col">
          Your Age{" "}
          <input
            type="text"
            id="age"
            name="age"
            onChange={OnGetAge}
            value={age}
          />
        </div>
        <div className="col">
          Height in cm <input type="text" onChange={OnGetHeight} value={height} />
        </div>
        <div className="col">
          Weight in Kg <input type="text" onChange={OnGetWeight} value={weight} />
        </div>
      </div>
      <div>
        <button onClick={HandelCalculate}>Calculate</button>
      </div>

      <div className="row mt-4 p-4 m-3">
        <div className="col-4 fs-1 fw-bold">{Math.round(bmi * 10) / 10}
        <h2>{bmiResult}</h2>
        
        </div>

        <div className="col-8">
          <div className="progress">
            <div className="progress-bar me-1 bg-dark" style={{ width: "25%" }}>
              Low Weight &lt; 53 kg
            </div>
            <div className="progress-bar me-1 bg-info" style={{ width: "25%" }}>
              Normal Weight
            </div>
            <div className="progress-bar me-1 bg-dark" style={{ width: "25%" }}>
              OverWeight
            </div>
            <div className="progress-bar bg-dark" style={{ width: "25%" }}>
              Obese
            </div>
          </div>
          <div>
            <span
              style={{ marginLeft: "35%" }}
              className="bi bi-triangle-fill"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
