import React from "react";
import { Button } from "flowbite-react";

interface Props {
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ openSearch, setOpenSearch }) => {
  return (
    <nav className="px-4 py-6 bg-slate-900 border-b border-slate-200 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Weather App</h1>
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
