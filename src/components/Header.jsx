import Select from 'react-select';
import Button from 'react-bootstrap/Button';
const Header = ({ datasets, updateDatasets }) => {
  const options = [
        { value: 'Hazardous Waste Sites', label: 'Hazardous Waste Sites' },
        { value: 'Superfund Sites', label: 'Superfund Sites' },
  ];
  return (
    <header className="bg-gray-800  flex justify-between items-center p-4">
        <span className="text-white text-2xl"> Dashboard</span>
        <Button
            href="https://gainesville.dssdglobal.org/projects/ej-dashboard"
            className="d-flex text-white ml-170"
            target="_blank" 
            rel="noopener noreferrer"
        >About</Button>
        <Select
            className="basic-single w-75"
            classNamePrefix="select"
            options={options}
            onChange={(option) => updateDatasets(new Set(datasets).add(option.value).values().toArray())}
            />
    </header>
  );
};

export default Header;
