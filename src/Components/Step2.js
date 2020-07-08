import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

function Step2() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div>
            <div> <TextField label="Country" value={userData['country']} onChange={(e) => setUserData({ ...userData, "country": e.target.value })} />  </div>


            <div> <TextField label="State" value={userData['state']} onChange={(e) => setUserData({ ...userData, "state": e.target.value })} />  </div>


            <div> <TextField label="City" value={userData['city']} onChange={(e) => setUserData({ ...userData, "city": e.target.value })} />  </div>


            <div> <TextField label="Postal Code" value={userData['code']} onChange={(e) => setUserData({ ...userData, "code": e.target.value })} />   </div>


            <div> <Button color='secondary' onClick={() => setStep(1)}>Back</Button>
                <Button color='secondary' onClick={() => setStep(3)}>Next</Button>  </div>

        </div>
    )
}

export default Step2
