import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

function Form() {
  interface UserForm {
    name: string;
    mobileNo: string;
  }
  interface ErrorMsg {
    errorName: string;
    errorMobileNo: string;
  }

  interface CheckError {
    checkName: boolean;
    checkMobileNo: boolean;
  }

  const [formData, setFormData] = useState<UserForm>({
    name: "",
    mobileNo: "",
  });

  const errorMsg: ErrorMsg = {
    errorName: "Letter should be more than 3",
    errorMobileNo: "Mobile number should be 10 digit",
  };

  const CheckError: CheckError = {
    checkName: formData.name.length > 2,
    checkMobileNo: formData.mobileNo.length >= 10,
  };

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  console.log(formData);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" w-100 h-50 bg-amber-500">
        <form
          action=" "
          onSubmit={(e: SubmitEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <label htmlFor="">Name :</label>
          <input
            name="name"
            type="text"
            className="border bg-amber-50 rounded-2xl"
            placeholder="name"
            value={formData.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
          />
          {formData.name && !CheckError.checkName && (
            <p className="text-red-600">{errorMsg.errorName}</p>
          )}
          <br />
          <label htmlFor="">Mobile No :</label>
          <input
            name="mobileNo"
            type="number"
            maxLength={10}
            className="border bg-amber-50 rounded-2xl"
            placeholder="Mobile Number"
            value={formData.mobileNo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
          />
          {formData.mobileNo && !CheckError.checkMobileNo && (
            <p className="text-red-600">{errorMsg.errorMobileNo}</p>
          )}
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default Form;
