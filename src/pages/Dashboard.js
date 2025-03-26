import { useEffect, useState } from "react";
import { fetchProfiles } from "../api";

const Dashboard = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles().then(setProfiles);
  }, []);

  return (
    <div>
      <h2>Developers</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>{profile.name} - {profile.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;