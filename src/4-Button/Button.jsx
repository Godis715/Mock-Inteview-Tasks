export default function Button(props) {
  const { children, onClick, isDisabled } = props;

  return (
    <button onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}
