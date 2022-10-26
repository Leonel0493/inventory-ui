import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getCountries } from "../../../api/countries.api";
import DynamicTable from "../../Common/DynamicTable";
import HeaderContent from "../../Common/HeaderContent";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const loadCountries = async () => {
      const resp = await getCountries();
      setCountries(resp.data);
    };

    loadCountries();
  }, []);
  return (
    <>
      <HeaderContent
        title="Countries"
        icon={faCirclePlus}
        btnText="Add Country"
      />

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
              {countries.map((country) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Country;
