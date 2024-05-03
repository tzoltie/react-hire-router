import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const { people, setHiredPeople } = props;
  const [person, setPerson] = useState(null);
  const urlParms = useParams();

  const findProfile = people.filter((p) => p.login.uuid === urlParms.uuid);

  useEffect(() => {
    if (findProfile) {
      return setPerson(...findProfile);
    }
    
  }, [findProfile]);

  if (!person) return <p>Loading...</p>;
  
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  );
}

export default PersonProfile;
