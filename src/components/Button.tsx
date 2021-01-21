interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

function Button({ text, onClick, className }: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
