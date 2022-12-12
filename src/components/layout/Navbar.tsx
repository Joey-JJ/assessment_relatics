import React from "react";
import { Button } from "flowbite-react";

interface Props {
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ openSearch, setOpenSearch }) => {
  return (
    <nav className="px-4 py-6  text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Weather App</h1>
          <p className="text-xs text-gray-400">
            Current weather data from anywhere!
          </p>
        </div>
        <Button
          size={"sm"}
          onClick={() => setOpenSearch((prev: boolean) => !prev)}
        >
          {!openSearch ? "Add city" : "Close"}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
