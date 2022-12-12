import React from "react";
import { Button } from "flowbite-react";
import { Close, Search } from "../../icons/Icons";

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
            Current weather data for any city!
          </p>
        </div>
        <Button
          size="sm"
          color="gray"
          onClick={() => setOpenSearch((prev: boolean) => !prev)}
        >
          {!openSearch ? <Search /> : <Close />}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
