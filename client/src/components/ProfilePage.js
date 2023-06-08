import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const InputForm = () => {
  const [profileData, setProfileData] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  // const SetForm = () => {
  //   setPolicyNumber("");
  //   setCustomerId("");
  //   setConditionClaimedFor("");
  //   setSymptomsDetails("");
  //   setMedicalServiceType("");
  //   setServiceProviderName("");
  //   setOtherInsuranceProvider(true);
  //   setIsChecked(false);
  //   setError(false);
  //   setStartDate(new Date());
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(
          `${process.env.REACT_APP_API_SERVER_URL}/api/form/profile`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setProfileData(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [getAccessTokenSilently]);

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const body = {
  //       policy_number: policyNumber,
  //       customer_id: customerId,
  //       condition_claimed_for: conditionClaimedFor,
  //       first_symptoms_date: startDate,
  //       symptoms_details: symptomsDetails,
  //       medical_service_type: medicalServiceType,
  //       service_provider_name: serviceProviderName,
  //       other_insurance_provider: otherInsuranceProvider,
  //       consent: isChecked,
  //     };

  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_SERVER_URL}/api/form`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       }
  //     );
  //     if (!response.ok) {
  //       const error = await response.json();
  //       if (error.error === "Duplicate Entry") {
  //         alert("Duplicate Entry, You have already filed this claim.");
  //         return resetForm();
  //       }
  //       if (error.message === "Validation failed") {
  //         alert("Validation Failed, Please check your details and try again");
  //         return resetForm();
  //       } else {
  //         setError(true);
  //         return;
  //       }
  //     } else {
  //       alert("Submission Successfully Added!");
  //       return resetForm();
  //     }
  //   } catch (err) {
  //     setError(true);
  //   }
  // };
  // if (error) {
  //   return (
  //     <div className="claims-form">
  //       <p className="errorMessage">
  //         Oops, something went wrong! Please refresh this page to re-fill the
  //         claim form.
  //       </p>
  //     </div>
  //   );
  // }
  return (
    <>
      <div className="claims-form">
        {" "}
        {Object.keys(profileData).map((key) => (
          <p key={key}>{`${key}: ${profileData[key]}`}</p>
        ))}
      </div>
    </>

    //   <form className="claims-form" onSubmit={onSubmit}>
    //     <h1 className="formTitle">Insurance Claims Form</h1>

    //     <label htmlFor="policyNumber">Policy Number</label>
    //     <input
    //       id="policyNumber"
    //       type="text"
    //       className="form-control"
    //       value={policyNumber}
    //       onChange={(e) => setPolicyNumber(e.target.value)}
    //       required
    //     />
    //     <label htmlFor="customerId">Customer Id</label>
    //     <input
    //       id="customerId"
    //       type="text"
    //       className="form-control"
    //       value={customerId}
    //       onChange={(e) => setCustomerId(e.target.value)}
    //       required
    //     />
    //     <label htmlFor="conditionClaimedFor">Condition Claimed For</label>
    //     <input
    //       id="conditionClaimedFor"
    //       type="text"
    //       className="form-control"
    //       value={conditionClaimedFor}
    //       onChange={(e) => setConditionClaimedFor(e.target.value)}
    //       required
    //     />
    //     <label htmlFor="startDate">Beginning of Observed Condition</label>
    //     <div className="datePicker" data-testid="datePicker">
    //       <DatePicker
    //         selected={startDate}
    //         onChange={(date) => setStartDate(date)}
    //         maxDate={new Date()}
    //         id={new Date()}
    //       />
    //     </div>
    //     <label htmlFor="symptomDetails">Symptom Details</label>
    //     <input
    //       id="symptomDetails"
    //       type="text"
    //       className="form-control"
    //       value={symptomsDetails}
    //       onChange={(e) => setSymptomsDetails(e.target.value)}
    //       required
    //     />
    //     <label htmlFor="medicalServiceType">Medical Service Type</label>
    //     <input
    //       id="medicalServiceType"
    //       type="text"
    //       className="form-control"
    //       value={medicalServiceType}
    //       onChange={(e) => setMedicalServiceType(e.target.value)}
    //       required
    //     />
    //     <label htmlFor="serviceProviderName">Service Provider Name</label>
    //     <input
    //       id="serviceProviderName"
    //       type="text"
    //       className="form-control"
    //       value={serviceProviderName}
    //       onChange={(e) => setServiceProviderName(e.target.value)}
    //       required
    //     />
    //     <label htmlFor="otherInsuranceProvider">Other Insurance Provider</label>

    //     <input type="submit" className="btn-success" />
    //   </form>
  );
};

export default InputForm;
