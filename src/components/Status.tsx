type StatusProps = {
  //string literal union type.
  status: "loading" | "success" | "error";
};

export const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") message = "loading";
  else if (status === "success") message = "Data fetched Successfully";
  else if (status === "error") message = "Error fetching data";
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
