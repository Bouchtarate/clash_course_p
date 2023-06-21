export const Button = ({ text, color, onCLick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onCLick}
      value={text}
    >
      {text}
    </button>
  );
};
