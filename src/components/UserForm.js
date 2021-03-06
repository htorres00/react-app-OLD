import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Welcome from "./Welcome";
import StepFullName from "./StepFullName";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepThreeB from "./StepThreeB";
import StepThreeC from "./StepThreeC";
import StepThreeD from "./StepThreeD";
import StepFour from "./StepFour";
import ThankYou from "./Thankyou";
import NoPageStep1 from "./NoPageStep1";
import NoPageStep2 from "./NoPageStep2";
import DistanceApi from "./DistanceApi";
import FeedBack from "./FeedBack";
import EmailReponse from "./EmailResponse";
import EmailThank from "./EmailThank";
import AddressTwo from "./AddressTwo";

const UserForm = (props) => {
  const [step, setStep] = useState(0);
  // const [mandotaryInformations, setmandotaryInformations] = useState({ firstName: "", lastName:"",phone:"",email:""})
  const [canProceed, setCanProceed] = useState(false);
  const [yesstep, setYesStep] = useState(2);
  const [yesindicator, setYesindicator] = useState(false);
  const [input, setInput] = useState("");
  const [emailQuestion, setEmailQuestion] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hasInformation, setHasInformation] = useState(true);
  const [firstName, setFirstName] = useState(new URLSearchParams(window.location.search).get("first_name"));
  const [lastName, setLastName] = useState(new URLSearchParams(window.location.search).get("last_name"));
  const [mobileNumber, setMobileNumber] = useState(new URLSearchParams(window.location.search).get("mobile_number"));
  const [mandotaryEmail, setMandotaryEmail] = useState(new URLSearchParams(window.location.search).get("email"));
  const [files, setFiles] = useState([]);
  const [frontfile, setFrontFile] = useState([]);
  const [backfile, setBackFile] = useState([]);
  const [multfile, setMultFile] = useState([]);
  const [cardback, setCardBack] = useState([]);
  const [laborder, setLabOrder] = useState([]);
  const [optionone, setOptionOne] = useState([]);
  const [dateone, setDateOne] = useState('');
  const [timeone, setTimeOne] = useState('');
  const [optiontwo, setOptionTwo] = useState([]);
  const [datetwo, setDateTwo] = useState('');
  const [timetwo, setTimeTwo] = useState('');
  const [optionthree, setOptionThree] = useState([]);
  const [datethree, setDateThree] = useState('');
  const [timethree, setTimeThree] = useState('');
  const [comments, setComments] = useState("");
  const [completedProgress, setCompletedProgress] = useState("");
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const [distance, setDistance] = useState("");
  const [address, setAddress] = useState("");
  const [servicemsg, setServiceMsg] = useState("");
  const [addresstwo, setAddressTwo] = useState("");
  const [unattendedAddress, setUnattendedAddress] = useState("");

  const testData = [
    { bgcolor: "rgb(251, 206, 55)", completed: completedProgress },
  ];

  // Proceed to next step
  const nextStep = (stepNo, bool) => {
    if (bool === true) {
      setYesindicator(bool);
    }

    if (bool === false) {
      setYesindicator(bool);
    }

    setStep(stepNo);
  };

  // Proceed to next step
  const handleCanProceed = (bool) => {
    setCanProceed(bool);
  };

  // Go back to prev step
  const prevStep = () => {
    if (yesindicator && step == 4) {
      setStep(step - 3);
    } else {
      setStep(step - 1);
    }
  };
  useEffect(() => {
    if(!firstName || !lastName || !mandotaryEmail || !mobileNumber) setHasInformation(false)
  }, []);
  // Handle fields change
  const handleChange = (input) => (e) => {
    setInput(e.target.value);
  };

  const HandleView = () => {
    useEffect(() => {}, []);

    const values = {
      hasInformation,
      firstName,
      lastName,
      mobileNumber,
      emailQuestion,
      phone,
      email,
      mandotaryEmail,
      input,
      files,
      completedProgress,
      cardback,
      laborder,
      optionone,
      optiontwo,
      optionthree,
      comments,
      yesstep,
      location,
      id,
      submissionId,
      distance,
      address,
      frontfile,
      backfile,
      multfile,
      dateone,
      timeone,
      datetwo,
      timetwo,
      datethree,
      timethree,
      servicemsg,
      addresstwo,
      unattendedAddress
    };
    const setValues = {
      setEmailQuestion,
      setFirstName,
      setLastName,
      setMobileNumber,
      setPhone,
      setMandotaryEmail,
      setEmail,
      setInput,
      setFiles,
      setCompletedProgress,
      setCardBack,
      setLabOrder,
      setOptionOne,
      setOptionTwo,
      setOptionThree,
      setComments,
      setYesStep,
      setLocation,
      setId,
      setSubmissionId,
      setDistance,
      setAddress,
      setFrontFile,
      setBackFile,
      setMultFile,
      setDateOne,
      setTimeOne,
      setDateTwo,
      setTimeTwo,
      setDateThree,
      setTimeThree,
      setServiceMsg,
      setAddressTwo,
      setUnattendedAddress,
    };
    switch (step) {
      case 1:
        if (!hasInformation) return <StepFullName
          stepNo={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          canProceed={handleCanProceed}
        />
        return (
            <StepOne
              stepNo={step}
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
              setValues={setValues}
              canProceed={handleCanProceed}
            />
        );

      case 2:
        return (
          <NoPageStep1
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            canProceed={handleCanProceed}
          />
        );

      case 3:
        return (
          <NoPageStep2
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            canProceed={handleCanProceed}
          />
        );

      case 4:
        return (
          <DistanceApi
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            indicator={yesindicator}
            canProceed={handleCanProceed}
            bfusers={props.bfusers}
          />
        );
      case 5:
        return (
          <AddressTwo
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            canProceed={handleCanProceed}
            indicator={yesindicator}
          />
        );
      case 6:
        return (
          <StepTwo
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            indicator={yesindicator}
            canProceed={handleCanProceed}
          />
        );
      case 7:
        return (
          <StepThree
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            canProceed={handleCanProceed}
          />
        );
      case 8:
        return (
          <StepThreeB
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            setStep={setStep}
            canProceed={handleCanProceed}
          />
        );

      case 9:
        return (
          <StepThreeC
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            indicator={yesindicator}
            canProceed={handleCanProceed}
          />
        );

      case 10:
        return (
          <StepThreeD
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            indicator={yesindicator}
            canProceed={handleCanProceed}
          />
        );

      case 11:
        return (
          <StepFour
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            indicator={yesindicator}
            canProceed={handleCanProceed}
          />
        );

      case 12:
        return (
          <ThankYou
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );

      case 13:
        return (
          <EmailReponse
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            indicator={yesindicator}
          />
        );

      case 14:
        return (
          <EmailThank
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 15:
        return (
          <FeedBack
            stepNo={step}
            setStep={setStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            canProceed={handleCanProceed}
          />
        );
      default:
        return (
          <Welcome
            nextStep={() => {
              nextStep(1);
            }}
          />
        );
    }
  };

  return (
    <div className="user-from">
      {step === 0 || step === 12
        ? null
        : testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
        ))}
      <HandleView />
      {/* {step === 0 || step === 12 ? null : (
        <Footer stepNo={step} canProceed={canProceed} nextStep={nextStep} prevStep={prevStep} />
      )} */}
    </div>
  );
};

export default UserForm;
