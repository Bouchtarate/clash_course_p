import { Button } from "./Button";

export const Header = ({ clickHandler, showAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onCLick={clickHandler}
      />
    </header>
  );
};
