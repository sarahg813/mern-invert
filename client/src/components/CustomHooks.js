import { useState } from "react";
import axios from "axios";

export default function useCreateStudioForm(callback) {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();

      axios
        .post("http://localhost:5000/studios/add", inputs)
        .then(res => console.log(res.data));

      window.location = "/create";
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
