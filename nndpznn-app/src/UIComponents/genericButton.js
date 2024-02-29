import "../css/masterStyle.css";
import "../css/genericButton.css";

export default function GenericButton(props) {
  return (
    <a href={props.to} target={props.target} rel="noreferrer">
      <button type="button" className="genericButton">
        <b>{props.buttonTitle}</b>
      </button>
    </a>
  );
}
