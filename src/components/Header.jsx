import {HiMenu} from "react-icons/hi";

const Header = ({ toggleSidebar}) => {
  return (
    <nav className="fixed top-0 z-10 w-full flex gap-4 p-3 items-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Dashboard</span>
      <span 
        onClick={toggleSidebar} 
      >
        <HiMenu className="h-7 w-7" />
      </span>
    </nav>
  );
};

export default Header;