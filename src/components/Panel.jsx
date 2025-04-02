import * as d3 from "d3";
import {FileInput, Label, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems} from "flowbite-react";
import {
  HiChevronDown,
  HiChevronUp,
  HiUpload,
  HiTable
} from "react-icons/hi";
const Panel = ({setData}) => {
  const datasetToFilenameMapping = {
    'Hazardous Waste Sites': './data/hazardous_sites_small.csv',
    'Superfund Sites': './data/superfund_sites.csv',
  }
  const handleClick = async (event) => {
    event.preventDefault();
    const dataset = event.currentTarget.innerText;
    const data = await d3.csv(datasetToFilenameMapping[dataset]);
    setData(data);
  }

  const handleChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return

    const text = await file.text()
    const data = d3.csvParse(text)
    setData(data);
  }

  return (
      <Sidebar aria-label="Dashboard panel" className="w-lg">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem>
              Dashboard
            </SidebarItem>
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
            <SidebarCollapse
                icon={HiUpload}
                label="Upload dataset"
                renderChevronIcon={(theme, open) => {
                  const IconComponent = open ? HiChevronDown : HiChevronUp;
                  return <IconComponent />;
                }}
            >
              <SidebarItem>
                <Label className="mb-2 block text-wrap" htmlFor="default-file-upload">
                  Please upload a .csv file
                </Label>
                <br />
                <FileInput id="default-file-upload" onChange={handleChange} accept=".csv"/>
                <br />
                <Label className="mb-2 block text-wrap" htmlFor="default-file-upload">
                  <strong>Note: File must have columns named &#34;Location, &#34;Latitude&#34; and &#34;Longitude&#34; (the file can have other columns as well). </strong>
                </Label>
              </SidebarItem>
            </SidebarCollapse>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
  );
};

export default Panel;