import React from "react";
import { Form, Formik } from "formik";
import swal from "sweetalert";
import { createCountryRequest } from "../../../api/countries.api";

const AddCountryFrom = () => {
  return (
    <Formik
      initialValues={{
        country: "",
        countryCode: "",
      }}
      onSubmit={async (values, actions) => {
        const country = {
          country: values.country,
          countryCode: values.countryCode,
          createdBy: "leonr",
        };

        try {
          const resp = await createCountryRequest(country);
          swal("Good job!", "You saved a country!", "success");
          actions.resetForm();
        } catch (error) {
          console.log(error.message);
        }
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <div className="w-full py-2 px-4">
            <div className="w-full px-3 mb-3 flex flex-col">
              <label htmlFor="" className="text-base mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                className="px-2 py-1 border rounded-md border-gray-200"
                onChange={handleChange}
                value={values.country}
              />
            </div>
            <div className="w-full px-3 mb-3 flex flex-col">
              <label htmlFor="" className="text-base mb-1">
                Country Code
              </label>
              <input
                type="text"
                name="countryCode"
                className="px-2 py-1 border rounded-md border-gray-200"
                onChange={handleChange}
                value={values.countryCode}
                maxLength="4"
              />
            </div>
            <div className="w-full px-3 mb-3 flex flex-row-reverse">
              <button
                className="w-fit rounded-md py-1 px-4 bg-green-700 hover:bg-green-600 text-white"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddCountryFrom;
