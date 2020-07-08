import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext';
function Result() {
    const { userData } = useContext(multiStepContext);

    return (
        <div>
            <h4>And it's Done !! Thankyou for filling your details . </h4>
            <h5> Information Filled are listed below</h5>
            <ul>
                <li> <h6>First Name : {userData.firstname}</h6> </li>
                <li> <h6>Last Name : {userData.lastname}</h6></li>
                <li>   <h6>Email Address : {userData.email}</h6></li>
                <li>   <h6>Contact Number : {userData.phone}</h6></li>
                <li>   <h6>Country : {userData.country}</h6></li>
                <li>   <h6>State : {userData.state}</h6></li>
                <li>   <h6>City : {userData.city}</h6></li>
                <li>   <h6>Postal Code : {userData.code}</h6></li>
                 <li>   <h6>Fav Pet Name  : {userData.pet}</h6></li>
            </ul>
        </div>
    )
}

export default Result
