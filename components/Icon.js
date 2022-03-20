export default function Icon({
  name,
  color = 'currentColor',
  fontSize = '1.5rem',
  handleClick,
}) {
  return (
    <i
      onClick={handleClick}
      className={`bi-${name}`}
      style={{ fontSize, color, opacity: 0.75 }}
    ></i>
  );
}
