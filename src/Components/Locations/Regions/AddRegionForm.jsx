import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeRegionModal } from "../../../features/regions/regionsSlice";
import { saveRegion } from "../../../api/regions.api";
import swal from "sweetalert";

const AddRegionForm = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesSelect);

  return (
    <Formik
      initialValues={{
        region: "",
        idCountry: 0,
      }}
      onSubmit={async (values, actions) => {
        const region = {
          department: values.region,
          idCountry: values.idCountry,
          createdBy: "leon04",
        };

        try {
          const resp = saveRegion(region);
          dispatch(changeRegionModal(resp));
          swal("Good job!", "You saved a country!", "success");
          actions.resetForm();
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <div className="w-full py-2 px-4">
            <div className="w-full px-3 mb-3 flex flex-col">
              <label htmlFor="" className="text-base mb-1">
                Region
              </label>
              <input
                type="text"
                name="region"
                className="px-2 py-1 border rounded-md border-gray-200"
                onChange={handleChange}
                value={values.country}
              />
            </div>

            <div className="w-full px-3 mb-3 flex flex-col">
              <label htmlFor="" className="text-base mb-1">
                Country
              </label>
              <select
                name="idCountry"
                className="px-2 py-1 border rounded-md border-gray-200"
                onChange={handleChange}
              >
                {countries.map((country) => (
                  <option key={country.idCountry} value={country.idCountry}>
                    {country.Country}
                  </option>
                ))}
              </select>
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

export default AddRegionForm;
