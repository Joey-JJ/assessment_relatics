import React from "react";
import { Button } from "flowbite-react";

interface Props {
  name: string;
  country: string;
}

export const CityResult: React.FC<Props> = ({ name, country }) => {
  return (
    <div className="p-2 border-b flex justify-between items-center">
      <h3>
        {name}, {country}
      </h3>
      <Button size="xs">Add</Button>
    </div>
  );
};
