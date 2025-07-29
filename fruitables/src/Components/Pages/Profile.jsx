import React, { useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import { getCurrentUser } from "../auth/Auth";
import axios from "axios";
import EndPoints from "../../apis/EndPoints";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit = async () => {
    try {
      let user = getCurrentUser();
      let formData = new FormData();
      formData.append("imageName", file);

      let response = await axios.patch(
        EndPoints.UPLOAD_FILE,
        `/${user._id}`,
        formData
      );
    } catch (error) {
      console.log(error);
      toast.error("Oops Something Want wrong...");
    }
  };
  return (
    <>
      <ToastContainer />
      <SubHeader />

      <div className="container">
        <input onChange={handleChange} type="file" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Profile;
