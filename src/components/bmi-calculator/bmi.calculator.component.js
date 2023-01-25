import { useState } from "react";

export function BmiCalculator() {
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiResult , setBmiResult] = useState('');
  const [gender, setGender] = useState('');
  const [styleObject, SetStyleObject] = useState({marginLeft:""});

  function MaleChange (e) {
    if(e.target.checked){
      setGender(e.target.value);
    }
  }
  function FemaleChange (e) {
    if(e.target.checked){
      setGender(e.target.value);
    }
  }

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
        SetStyleObject({marginLeft:`${bmi}%`})
    }
    else if (bmi>=18.5 && bmi<25) {
        setBmiResult("NormalWeight Bmi")
        SetStyleObject({marginLeft:`${bmi}%`})

    }
    else if (bmi>=25 && bmi<30) {
        setBmiResult("OverWeight Bmi")
        SetStyleObject({marginLeft:`${bmi}%`})

    }else{
        setBmiResult("Obese Bmi")
        SetStyleObject({marginLeft:`${bmi}%`})

    }
    
    
  }

  return (
    <div className="container-fluid">

        <h2 className="mt-2">BMI Calculator</h2>
        <div className="mt-3 p-3"> 
        Select Gender : <br />
        <input type="radio" name="gender" onChange={MaleChange} value="Male" className="m-2 p-2" />Male
        <input type="radio" name="gender" onChange={FemaleChange} value="Female" className="m-2 p-2" />Female


        </div>
      

        <div className=" mt-2 p-2 m-1">
        
            Your Age :
            <div className="m-2">
              <input type="text" id="age" name="age" onChange={OnGetAge} value={age} />
            </div>
            Height in cm :
            <div className="m-2">
              <input type="text" onChange={OnGetHeight} value={height} />
            </div>
            Weight in Kg :
            <div className="m-2">
              <input type="text" onChange={OnGetWeight} value={weight} />
            </div>
        </div>

        <div className="m-3">
          <button  className="btn btn-primary ms-4" onClick={HandelCalculate}>Calculate</button>
        </div>

      <div className="row mt-4 p-4 m-3">
        <div className=" col-4 ">
          <h4>{bmiResult}</h4>
        <h4>{gender} BMI is {Math.round(bmi)}</h4>
        
        </div>

        <div className="col-8">
          <div className="progress">
            <div className="progress-bar me-1 bg-dark" style={{ width: "25%" }}>
              Bmi &lt; 18.5
            </div>
            <div className="progress-bar me-1 bg-info" style={{ width: "25%" }}>
              Bmi &lt; 25  
            </div>
            <div className="progress-bar me-1 bg-dark" style={{ width: "25%" }}>
              Bmi &lt; 30
            </div>
            <div className="progress-bar bg-dark" style={{ width: "25%" }}>
              Bmi &gt; 30 
            </div>
          </div>
          <div>
            <span
              style={styleObject}
              className="bi bi-triangle-fill"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
