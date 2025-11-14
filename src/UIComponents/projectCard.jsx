import "../css/masterStyle.css";
import NolnButton from "./nolnButton"; // Assuming nolnButton is in the same directory

export default function ProjectCard({ project }) {
    const { title, desc, link, image, stack } = project;
    
    // Determine image rendering logic (can be expanded based on your needs)
    const renderImages = () => {
        if (!image) return null;

        // If 'image' is an array (like for viDoc)
        if (Array.isArray(image)) {
            return (
                <div className="flex justify-center my-4">
                    {image.map((imgSrc, index) => (
                        <img 
                            key={index} 
                            className="rounded-lg w-1/2 mx-1 shadow-md" 
                            src={imgSrc} 
                            alt={`${title} screenshot ${index + 1}`}
                        />
                    ))}
                </div>
            );
        }
        
        // If 'image' is a single source
        return (
            <div className="flex justify-center my-4">
                <img 
                    className="rounded-lg h-full max-h-80 object-cover shadow-md" 
                    src={image} 
                    alt={`${title} screenshot`}
                />
            </div>
        );
    };

    return (
        // The background color and rounding are now on the ProjectCard wrapper
        <div className="p-4 bg-gray-900 rounded-3xl flex flex-col justify-between h-full">
            <div>
                {/* Use NolnButton for the title/link, as per your original structure */}
                <NolnButton to={link} target="_blank" buttonTitle={title} />
                
                {/* Render the images */}
                {renderImages()}

                <p className="text-white text-base mt-3">
                    {desc}
                </p>

				<br></br>

				<p>{stack}</p>
            </div>

            {/* Optional: You can put a Call-to-Action button here */}
        </div>
    );
}