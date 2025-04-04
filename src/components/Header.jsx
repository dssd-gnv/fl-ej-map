import { HiMenu } from "react-icons/hi";
import { Button } from "flowbite-react";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-10 w-full flex gap-4 p-3 items-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        Dashboard
      </span>
      <span onClick={toggleSidebar}>
        <HiMenu className="h-7 w-7" />
      </span>
      <div className="flex w-full justify-end">
        <div className="mr-20">
          <Button
            href="https://gainesville.dssdglobal.org/projects/ej-dashboard"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
