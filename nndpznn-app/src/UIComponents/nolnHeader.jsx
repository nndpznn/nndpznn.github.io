import "../css/masterStyle.css";
import "../css/nolnHeader.css";

export default function NolnHeader(props) {
  return (
    <h1 className={`nolnHeader ${props.className}`}>
      <b>
        {props.headerTitle}
      </b>
    </h1>
  );
}
