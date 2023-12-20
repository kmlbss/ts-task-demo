export type NameProps = {
  first: string;
  last: string;
};

 type  PersonProps={
  name:NameProps
}

export const Person = (props:PersonProps) => {
  return <div>{props.name.first} {props.name.last}</div>;
};
