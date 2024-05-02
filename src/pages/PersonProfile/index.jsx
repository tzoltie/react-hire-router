import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const { people } = props;
  const [person, setPerson] = useState(null);
  const urlParms = useParams();

  useEffect(() => {
    const findProfile = people.find(
      (p) => p.login.uuid === urlParms.uuid
    );
    if (findProfile) {
      return setPerson({ ...findProfile });
    }
    
  }, [people, urlParms])

  if (!person) return <p>Loading...</p>;
  

  return (
    <article>
      <h2>{person.name.first} {person.name.last}</h2>
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
