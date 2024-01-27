export default function Buttons({ onChangeFontSize, title }) {
  return <button onClick={onChangeFontSize}>{title}</button>;
}
