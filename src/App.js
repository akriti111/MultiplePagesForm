import React ,{useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2' ;
import Step3  from './Components/Step3';
import {Stepper , StepLabel , Step} from '@material-ui/core' ;
import {multiStepContext} from './StepContext';
import Result from './Components/Result' ;
function App() {

  const {currentStep, finalData} = useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1 : return <Step1/>
      case 2 : return <Step2/>
      case 3 : return <Step3/>
      case 4 : return <Result/>
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>MultiStep Form .</h1>
        <div className="center-stepper">
            <Stepper style={{background:'none'}} activeStep={currentStep -1}>
              <Step >
                    <StepLabel></StepLabel>
              </Step>
              <Step>
                    <StepLabel></StepLabel>
              </Step>
              <Step>
                    <StepLabel></StepLabel>
              </Step>
            </Stepper>
        </div>
        { showStep(currentStep)}
        
      </header>
    </div>
  );
}

export default App;
