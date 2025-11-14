import "../css/masterStyle.css";
import "../css/projectCard.css";

export default function ProjectCard(props) {
	return (
		<div className="cardBG">
			<h2 className="cardTitle" >{props.title}</h2>
			<p>{props.desc}</p>
		</div>
	);
}