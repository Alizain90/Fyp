import React from 'react';
import '../styles/BuyerRegistration.css';
import InputField from '../components/InputField';

const BuyerRegistration = () => {
  return (
    <div className="registration-container">
      <div className="form-container">
        <h1>Sign Up</h1>
        <InputField placeholder="First Name" />
        <InputField placeholder="Last Name" />
        <div className="col2">
          <InputField placeholder="Email" />
          <InputField placeholder="Password" />
          <InputField placeholder="Confirm Password" />
          <InputField placeholder="Country" />
          <InputField placeholder="Cnic No/Identity No" />
        </div>
        <div className="terms-container">
          <form>
            <label>
              <input type="checkbox" name="agreeTerms" required />
              We agree to the <a href="#terms" target="_blank">Terms and Conditions</a>.
            </label>
            <br /><br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyerRegistration;
