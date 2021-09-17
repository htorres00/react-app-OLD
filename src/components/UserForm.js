import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Welcome from "./Welcome";
import Footer from "./Footer";
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

const UserForm = () => {
  const [step, setStep] = useState(0);
  const [yesstep, setYesStep] = useState(2);
  const [yesindicator, setYesindicator] = useState(false);
  const [input, setInput] = useState("");
  const [emailQuestion, setEmailQuestion] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState([]);
  const [cardback, setCardBack] = useState([]);
  const [laborder, setLabOrder] = useState([]);
  const [optionone, setOptionOne] = useState([]);
  const [optiontwo, setOptionTwo] = useState([]);
  const [optionthree, setOptionThree] = useState([]);
  const [comments, setComments] = useState("");
  const [completedProgress, setCompletedProgress] = useState("");
  const testData = [
    { bgcolor: "rgb(251, 206, 55)", completed: completedProgress },
  ];

  // Proceed to next step
  const nextStep = (stepNo, bool) => {
    if (bool === true) {
      setYesindicator(bool);
      console.log(bool, " after indicator on yes");
      console.log(stepNo, "step number on clicking yess");
    }

    if (bool === false) {
      setYesindicator(bool);
      console.log(bool, "indicator on no");
    }

    setStep(stepNo);
    console.log(stepNo, "Step number before");

    console.log(yesstep, "Yess step");
    console.log(bool, "Indicator");
  };

  // Go back to prev step
  const prevStep = () => {
    if (yesindicator && step == 4) {
      setStep(step - 3);
    } else {
      setStep(step - 1);
    }
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setInput(e.target.value);
  };

  const HandleView = () => {
    useEffect(() => {
      console.log(files, "files user form");
    }, []);
    const values = {
      emailQuestion,
      phone,
      email,
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
    };
    const setValues = {
      setEmailQuestion,
      setPhone,
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
    };
    console.log(values, "parent values");
    switch (step) {
      case 1:
        return (
          <>
            <StepOne
              stepNo={step}
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
              setValues={setValues}
            />
          </>
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
          />
        );

      case 4:
        return (
          <StepTwo
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            indicator={yesindicator}
          />
        );
      case 5:
        return (
          <StepThree
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
          />
        );
      case 6:
        return (
          <StepThreeB
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            setStep={setStep}
          />
        );
      case 7:
        return (
          <StepThreeC
            stepNo={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            setStep={setStep}
          />
        );
      case 8:
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
          />
        );

      case 9:
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
          />
        );

      case 10:
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
      {step === 0 || step === 10
        ? null
        : testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
      <HandleView />
      {step === 0 || step === 10 ? null : (
        <Footer stepNo={step} nextStep={nextStep} prevStep={prevStep} />
      )}
    </div>
  );
};

export default UserForm;
