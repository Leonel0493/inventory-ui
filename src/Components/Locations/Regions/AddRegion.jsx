import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeRegionModal } from "../../../features/regions/regionsSlice";
import { getCountryForSelect } from "../../../features/countries/countriesSlice";
import { getCountrySelect } from "../../../api/countries.api";
import AddRegionForm from "./AddRegionForm";
import { useEffect } from "react";

const AddRegion = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.regions.showModal);

  const loadCountries = async () => {
    const resp = await getCountrySelect();
    dispatch(getCountryForSelect(resp.data));
  };

  useEffect(() => {
    loadCountries();
  }, []);

  const handleModal = (e) => {
    e.preventDefault();
    dispatch(changeRegionModal("param"));
  };

  return (
    <div
      className={`w-screen h-screen ${
        modalState ? "fixed" : "hidden"
      } bg-black bg-opacity-50 flex items-center justify-center z-10`}
    >
      <div className="w-1/2 h-fit px-2 py-3 relative shadow-md bg-white border border-gray-300 rounded-lg">
        <div
          id="cardHeader"
          className="w-full py-2 px-4 flex flex-row justify-between items-center border-b border-gray-300"
        >
          <h1 className="text-xl">Add Region</h1>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="w-5 h-5 text-red-600"
            onClick={handleModal}
          />
        </div>
        <AddRegionForm />
      </div>
    </div>
  );
};

export default AddRegion;
