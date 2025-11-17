import "../css/masterStyle.css";
import "../css/nolnButton.css";

export default function NolnButton(props) {
  return (
    <a href={props.to} target={props.target} rel="noreferrer">
      <button type="button" className={`nolnButton ${props.className} p-0`}>
        <b>{props.buttonTitle}</b>
      </button>
    </a>
  );
}
