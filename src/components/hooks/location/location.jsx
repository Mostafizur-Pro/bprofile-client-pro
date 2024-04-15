import TextInput from "@/components/core/inputs/TextInput";
import SelectInput from "@/components/core/inputs/TextSelect";
import { useState, useEffect } from "react";

const MyLocation = ({
  selectedDivision,
  selectedDistrict,
  selectedThana,
  selectedWard,
  roadNumber,
  setSelectedDivision,
  setSelectedDistrict,
  setSelectedThana,
  setSelectedWard,
  setSelectedArea,
  setRoadNumber,
}) => {
  const [locations, setLocations] = useState(null);
  const [thanas, setThanas] = useState([]);
  const [wards, setWards] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("location.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDivisionChange = (selectedDivision) => {
    setSelectedDivision(selectedDivision);
    setSelectedDistrict(null);
    setSelectedThana(null);
    setSelectedWard(null);
    setThanas([]);
    setWards([]);
    setAreas([]);
    if (locations) {
      const selectedDivisionData = locations.find(
        (location) => location.division === selectedDivision
      );
      if (selectedDivisionData) {
        setSelectedDistrict(selectedDivisionData.districtList[0].district);
        setThanas(
          selectedDivisionData.districtList[0].thanaList.map(
            (thanaObj) => thanaObj.thana
          )
        );
      }
    }
  };

  const handleDistrictChange = (selectedDistrict) => {
    setSelectedDistrict(selectedDistrict);
    setSelectedThana(null);
    setSelectedWard(null);
    setThanas([]);
    setWards([]);
    setAreas([]);
    if (locations) {
      const selectedDivisionData = locations.find(
        (location) => location.division === selectedDivision
      );
      if (selectedDivisionData) {
        const selectedDistrictData = selectedDivisionData.districtList.find(
          (districtObj) => districtObj.district === selectedDistrict
        );
        if (selectedDistrictData) {
          setThanas(
            selectedDistrictData.thanaList.map((thanaObj) => thanaObj.thana)
          );
        }
      }
    }
  };

  const handleThanaChange = (selectedThana) => {
    setSelectedThana(selectedThana);
    setSelectedWard(null);
    setWards([]);
    setAreas([]);
    if (locations) {
      const selectedDivisionData = locations.find(
        (location) => location.division === selectedDivision
      );
      if (selectedDivisionData) {
        const selectedDistrictData = selectedDivisionData.districtList.find(
          (districtObj) => districtObj.district === selectedDistrict
        );
        if (selectedDistrictData) {
          const selectedThanaData = selectedDistrictData.thanaList.find(
            (thanaObj) => thanaObj.thana === selectedThana
          );
          if (selectedThanaData) {
            setWards(selectedThanaData.wardList.map((wardObj) => wardObj.ward));
          }
        }
      }
    }
  };

  const handleWardChange = (selectedWard) => {
    setSelectedWard(selectedWard);
    setAreas([]);
    if (locations) {
      const selectedDivisionData = locations.find(
        (location) => location.division === selectedDivision
      );
      if (selectedDivisionData) {
        const selectedDistrictData = selectedDivisionData.districtList.find(
          (districtObj) => districtObj.district === selectedDistrict
        );
        if (selectedDistrictData) {
          const selectedThanaData = selectedDistrictData.thanaList.find(
            (thanaObj) => thanaObj.thana === selectedThana
          );
          if (selectedThanaData) {
            const selectedWardData = selectedThanaData.wardList.find(
              (wardObj) => wardObj.ward === selectedWard
            );
            if (selectedWardData) {
              setAreas(selectedWardData.area);
            }
          }
        }
      }
    }
  };

  const handleAreaChange = (selectedArea) => {
    setSelectedArea(selectedArea);
  };

  return (
    <div>
      <div className="mb-2">
        <SelectInput
          id="division"
          options={
            locations
              ? locations.map((location) => ({
                  value: location.division,
                  label: location.division,
                }))
              : []
          }
          label="Select Division"
          placeholder="Select Division"
          onChange={(e) => handleDivisionChange(e.target.value)}
        />
      </div>
      {selectedDivision && (
        <div className="mb-2">
          <SelectInput
            id="district"
            options={
              selectedDivision && locations
                ? locations
                    .find((location) => location.division === selectedDivision)
                    .districtList.map((districtObj) => ({
                      value: districtObj.district,
                      label: districtObj.district,
                    }))
                : []
            }
            label="Select District"
            placeholder="Select District"
            onChange={(e) => handleDistrictChange(e.target.value)}
            disabled={!selectedDivision}
          />
        </div>
      )}
      {selectedDistrict && (
        <div className="mb-2">
          <SelectInput
            id="thana"
            options={thanas.map((thana) => ({ value: thana, label: thana }))}
            label="Select Thana"
            placeholder="Select Thana"
            onChange={(e) => handleThanaChange(e.target.value)}
            disabled={!selectedDistrict}
          />
        </div>
      )}
      {selectedThana && (
        <div className="mb-2">
          <SelectInput
            id="ward"
            options={wards.map((ward) => ({ value: ward, label: ward }))}
            label="Select Ward"
            placeholder="Select Ward"
            onChange={(e) => handleWardChange(e.target.value)}
            disabled={!selectedThana}
          />
        </div>
      )}
      {selectedWard && (
        <div className="mb-2">
          <SelectInput
            id="area"
            options={areas.map((area) => ({ value: area, label: area }))}
            label="Select Area"
            placeholder="Select Area"
            onChange={(e) => handleAreaChange(e.target.value)}
            disabled={!selectedWard}
          />
        </div>
      )}
      {selectedThana && (
        <div>
          <TextInput
            id={"road"}
            label={"Road/House No."}
            type="text"
            placeholder="Enter Road/House No."
            value={roadNumber}
            onChange={(e) => setRoadNumber(e.target.value)}
            disabled={!selectedWard}
          />
        </div>
      )}
    </div>
  );
};

export default MyLocation;
