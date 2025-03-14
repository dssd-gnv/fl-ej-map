import Select from 'react-select';
const Header = ({ datasets, updateDatasets }) => {
  const options = [
        { value: 'Hazardous Waste Sites', label: 'Hazardous Waste Sites' },
        { value: 'Superfund Sites', label: 'Superfund Sites' },
  ];
  return (
    <header className="bg-gray-800  flex justify-between items-center p-4">
        <span className="text-white text-2xl"> Dashboard </span>
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
