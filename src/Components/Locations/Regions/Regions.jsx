import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeRegionModal } from "../../../features/regions/regionsSlice";

const Regions = () => {
  const dispatch = useDispatch();

  const handleModal = (e) => {
    e.preventDefault();
    dispatch(changeRegionModal("param"));
  };

  return (
    <>
      <div className="w-full py-3 px-5 mb-4 flex flex-row justify-between">
        <p className="text-2xl">Regions</p>
        <button
          className="text-sm bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600"
          onClick={handleModal}
        >
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2" />
          Add Region
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
                  Region
                </th>
                <th scope="col" className="py-3 px-6">
                  Country
                </th>
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                ></th>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Regions;
