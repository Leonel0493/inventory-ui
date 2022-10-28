import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCountryModal } from "../../../features/countries/countriesSlice";
import { getAllCountries } from "../../../features/countries/countriesSlice";
import { getCountries } from "../../../api/countries.api";

const Country = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  const loadCountries = async () => {
    const resp = await getCountries();
    dispatch(getAllCountries(resp.data));
  };

  useEffect(() => {
    loadCountries();
  }, [dispatch]);

  const handleModal = (e) => {
    e.preventDefault();
    console.log("click");
    dispatch(changeCountryModal("param"));
  };

  return (
    <>
      <div className="w-full py-3 px-5 mb-4 flex flex-row justify-between">
        <p className="text-2xl">Countries</p>
        <button
          className="text-sm bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600"
          onClick={handleModal}
        >
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2" />
          Add Country
        </button>
      </div>

      <div className="w-full px-5">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                  Country
                </th>
                <th scope="col" className="py-3 px-6">
                  Code
                </th>
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {countries.length === 0 ? (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  ></th>
                  <td className="py-4 px-6"></td>
                  <td className="py-4 px-6"></td>
                  <td className="py-4 px-6"></td>
                </tr>
              ) : (
                countries.map((country) => (
                  <tr
                    key={country.idCountry}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {country.idCountry}
                    </th>
                    <td className="py-4 px-6">{country.Country}</td>
                    <td className="py-4 px-6">{country.CountryCode}</td>
                    <td className="py-4 px-6">
                      <a
                        href="/"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Country;
