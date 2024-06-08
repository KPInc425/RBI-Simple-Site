import { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [showForm, setShowForm] = useState(true);
  const [showToasterSuccess, setShowToasterSuccess] = useState(false);
  const [showToasterError, setShowToasterError] = useState(false);
  const [toasterText, setToasterText] = useState("");

  const handleSuccessToaster = () => {
    setShowToasterSuccess(true);
    setTimeout(() => {
      setShowToasterSuccess(false);
      setToasterText("");
    }, 3000);
  };
  const handleErrorToaster = () => {
    setShowToasterError(true);
    setTimeout(() => {
      setShowToasterError(false);
      setToasterText("");
    }, 3000);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-20 justify-around container mx-auto text-xl text-center xl:text-start p-4 pb-12 lg:p-12">
      <div className="toast toast-top toast-center">
        {showToasterSuccess && (
          <div className="alert alert-success">
            <span className="font-semibold text-success-content">
              {toasterText}
            </span>
          </div>
        )}
        {showToasterError && (
          <div className=" alert alert-error">
            <span className="font-semibold text-error-content">
              {toasterText}
            </span>
          </div>
        )}
      </div>
      <div
        id="contact"
        className="flex flex-col gap-4 justify-center items-center w-full"
      >
        <h1 className="text-3xl font-bold">Contact Us</h1>
        {!showForm ? (
          <button
            className={`btn btn-primary rounded-lg p-4 ${
              showForm ? "hidden" : ""
            }`}
            onClick={() => setShowForm(!showForm)}
          >
            Get in touch
          </button>
        ) : (
          <div className="flex justify-center xl:justify-self-end items-center order-1 mb-4 xl:mb-0 w-3/4 px-4">
            <ContactForm
              showForm={showForm}
              setShowForm={setShowForm}
              setToasterText={setToasterText}
              handleSuccessToaster={handleSuccessToaster}
              handleErrorToaster={handleErrorToaster}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Contact;
