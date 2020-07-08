import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

function Step3() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

    return (
        <div>
            <div> <h3>Security Question</h3></div>


            <div> <TextField label="Fav Pet Name" value={userData['pet']} onChange={(e) => setUserData({ ...userData, "pet": e.target.value })} />  </div>


            <div> <Button color='secondary' onClick={() => setStep(2)}>Back</Button>
                <Button color='secondary' onClick={()=> setStep(4)}>Submit</Button>  </div>

        </div>
    )
}

export default Step3
