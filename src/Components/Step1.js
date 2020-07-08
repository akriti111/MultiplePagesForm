import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
function Step1() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div>
            <div> <TextField label="First Name"
                value={userData['firstname']}
                onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })} />   </div>


            <div> <TextField label="Last Name"
                value={userData['lastname']}
                onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })} />  </div>


            <div> <TextField label="Email Address" value={userData['email']}
                onChange={(e) => setUserData({ ...userData, "email": e.target.value })} />  </div>


            <div> <TextField label="Contact Number" value={userData['phone']} onChange={(e) => setUserData({ ...userData, "phone": e.target.value })} />   </div>


            <div> <Button color='secondary' onClick={() => setStep(2)} >Next</Button>  </div>

        </div>
    )
}

export default Step1
