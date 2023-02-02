import './Button.css';

export default function Button(props) {
  // TODO: стилизовать кнопку в соответствие с макетом:
  // https://www.figma.com/community/file/769870685529936013
  const { children, onClick, size, isDisabled } = props;

  return (
    <button onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}
