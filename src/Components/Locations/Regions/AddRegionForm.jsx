import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeRegionModal } from "../../../features/regions/regionsSlice";

const AddRegionForm = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const handleModal = (e) => {
    e.preventDefault();
    dispatch(changeRegionModal("param"));
  };

  return (
    <Formik
      initialValues={{
        region: "",
        idCountry: "",
      }}
      onSubmit={async (values, actions) => {
        const region = {
          department: values.region,
          idCountry: values.idCountry,
          createdBy: "leon04",
        };

        console.log(region);
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
                  <option value={country.idCountry}>{country.Country}</option>
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
