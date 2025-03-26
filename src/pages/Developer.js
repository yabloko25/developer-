import { useEffect, useState } from "react";
import { fetchProfiles } from "../api";

const Developer = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetchProfiles().then(setDevelopers);
  }, []);

  return (
    <div>
      <h2>Developers</h2>
      <ul>
        {developers.map((dev) => (
          <li key={dev._id}>{dev.name} - {dev.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Developer;