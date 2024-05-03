import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, hiredPeople } = props;


  return (
    <li>
      <h3>
        <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && (
        <>
          <p>Wage: £{person.wage}</p>
          <p><Link to={`/view/${person.login.uuid}`} state={hiredPeople}>Edit offer</Link></p>
        </>
      )}
    </li>
  );
}

export default PeopleListItem;
