import { NameProps } from "./Person";

type PersonListProps = {
  list: NameProps[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <ul>
        {props.list.map((person) => (
          <li>
            {person.first} {person.last}
          </li>
        ))}
      </ul>
    </div>
  );
};
