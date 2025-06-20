import { useState } from "react";
import * as d3 from "d3";
import { FileInput, Label, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiChevronDown, HiChevronUp, HiTable, HiUpload, HiOutlineLocationMarker } from "react-icons/hi";

const Panel = ({ collapsed, setData, data }) => {
  const [bufferRange, setBufferRange] = useState(10);
  const [error, setError] = useState(null);

  const datasetToFilenameMapping = {
    'Hazardous Waste Sites': './data/hazardous_sites_small.csv',
    'Superfund Sites': './data/superfund_sites.csv',
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const dataset = event.currentTarget.innerText;
    const data = await d3.csv(datasetToFilenameMapping[dataset]);
    setData(data);
  };

  const handleChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;

    const text = await file.text();
    const data = d3.csvParse(text);
    setData(data);
  };

  const handleSliderChange = (event) => {
    setBufferRange(event.target.value);
  };

  const handleSubmit = () => {
    if (!data || data.length === 0) {
      // If no data is present, show error
      setError("Error: no points on map. Please select a dataset or upload your own dataset, then try again.");
    } else {
      // Reset any existing error and process the buffer range
      setError(null);
      console.log(`Buffer range selected: ${bufferRange} miles`);
    }
  };

  return (
    <div className="fixed top-14 left-0 h-full z-20">
      <Sidebar 
        aria-label="Dashboard panel" 
        className={`transition-all duration-300 ease-in-out w-md ${collapsed ? '-translate-x-full' : 'translate-x-0'}`}
      >
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarCollapse
              icon={HiTable}
              label="Load from dataset"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiChevronDown : HiChevronUp;
                return <IconComponent />;
              }}
            >
              <SidebarItem onClick={handleClick}>Hazardous Waste Sites</SidebarItem>
              <SidebarItem onClick={handleClick}>Superfund Sites</SidebarItem>
            </SidebarCollapse>

            {/* Upload dataset */}
            <SidebarCollapse
              icon={HiUpload}
              label="Upload dataset"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiChevronDown : HiChevronUp;
                return <IconComponent />;
              }}
            >
              <SidebarItem>
                <Label className="mb-2 block text-wrap">
                  Please upload a .csv file
                </Label>
                <br />
                <FileInput id="default-file-upload" onChange={handleChange} accept=".csv" />
                <br />
                <Label className="mb-2 block text-wrap">
                  <strong>Note: File must have columns named "Location", "Latitude", and "Longitude". Click here for an example.</strong>
                </Label>
              </SidebarItem>
            </SidebarCollapse>

            {/* Slider for buffer range */}
            <SidebarCollapse
              icon={HiOutlineLocationMarker}
              label="Select buffer range (miles)"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiChevronDown : HiChevronUp;
                return <IconComponent />;
              }}
            >
              <SidebarItem>
                <div>
                  <Label htmlFor="buffer-range" className="block text-sm mb-2">
                    Buffer Range: {bufferRange} miles
                  </Label>
                  <input
                    type="range"
                    id="buffer-range"
                    min="10"
                    max="100"
                    step="1"
                    value={bufferRange}
                    onChange={handleSliderChange}
                    className="w-full"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>

                {/* Error message */}
                {error && (
                  <p className="mb-2 block text-wrap text-yellow-100">{error}</p>
                )}
              </SidebarItem>
            </SidebarCollapse>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
};

export default Panel;
