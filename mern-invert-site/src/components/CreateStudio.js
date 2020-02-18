import React from "react";
import useCreateStudioForm from "./CustomHooks";

export default function CreateStudio() {
  const submitted = () => {
    console.log("Studio added!");
  };

  const { inputs, handleInputChange, handleSubmit } = useCreateStudioForm(
    submitted
  );

  return (
    <div>
      <h3>Create New Studio</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
            required
          />
        </div>
        <div>
          <span>Address:</span>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            onChange={handleInputChange}
            value={inputs.street}
            required
          />
          <label>City:</label>
          <input
            type="text"
            name="city"
            onChange={handleInputChange}
            value={inputs.city}
            required
          />
          <label>State:</label>
          <input
            type="text"
            name="state"
            onChange={handleInputChange}
            value={inputs.state}
            required
          />
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            onChange={handleInputChange}
            value={inputs.postalCode}
            required
          />
          <label>Country:</label>
          <input
            type="text"
            name="country"
            onChange={handleInputChange}
            value={inputs.country}
            required
          />
        </div>
        <div>
          <span>Coordinates:</span>
          <label>latitude:</label>
          <input
            type="text"
            name="latitude"
            onChange={handleInputChange}
            value={inputs.latitude}
            required
          />
          <label>longitude:</label>
          <input
            type="text"
            name="longitude"
            onChange={handleInputChange}
            value={inputs.longitude}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNum"
            onChange={handleInputChange}
            value={inputs.phoneNum}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            type="text"
            name="website"
            onChange={handleInputChange}
            value={inputs.website}
            required
          />
        </div>
        <div>
          <label>Picture:</label>
          <input
            type="text"
            name="picture"
            onChange={handleInputChange}
            value={inputs.picture}
            required
          />
        </div>
        <div>
          <label>Social Media:</label>
          <input
            type="text"
            name="socialMedia"
            onChange={handleInputChange}
            value={inputs.socialMedia}
            required
          />
        </div>
        <div>
          <label>Categories:</label>
          <input
            type="text"
            name="categories"
            onChange={handleInputChange}
            value={inputs.categories}
            required
          />
        </div>

        <button type="submit">Add Studio</button>
      </form>
    </div>
  );
}
