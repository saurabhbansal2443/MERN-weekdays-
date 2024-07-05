import React, { useState } from "react";
import { useGetUserQuery, useUpdateMutation } from "./Utility/authApi";

const PhoneNumberUpdate = () => {
  let [phoneNumber, setPhoneNumber] = useState("");

  let [update, { isLoading }] = useUpdateMutation();

  let { refetch } = useGetUserQuery();

  let addPhoneNumber = async () => {
    let obj = {
      phoneNumber: phoneNumber,
    };
    console.log(phoneNumber);

    let res = await update(obj);
    refetch();
    console.log("upadted phonenumber ", res);
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Update Phone Number
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl flex justify-center items-center">
          <input
            type="text"
            placeholder="phoneNumber"
            className="input input-bordered input-info w-full max-w-xs text-white "
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <form method="dialog px-3 ">
            <button
              className="btn btn-outline btn-primary"
              onClick={addPhoneNumber}
            >
              Add
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default PhoneNumberUpdate;
