import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceData = [
    {
        title: "Project 1",
        description: "Description 1",
        image: "/images/project1.jpg",
    },
    {
        title: "Project 2",
        description: "Description 2",
        image: "/images/project2.jpg",
    },
    {
        title: "Project 3",
        description: "Description 3",
        image: "/images/project3.jpg",
    },
    {
        title: "Project 4",
        description: "Description 4",
        image: "/images/project4.jpg",
    },
    {
        title: "Project 5",
        description: "Description 5",
        image: "/images/project5.jpg",
    },
    {
        title: "Project 6",
        description: "Description 6",
        image: "/images/project6.jpg",
    },
];

const ProjectSlider = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="h-full w-3/4 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-text text-center flex flex-col">
                Our Projects
            </h1>
            <div className="mt-12 w-full">
                <Slider {...settings}  >
                    {ServiceData.map((project, index) => (
                        <div className="bg-primary flex flex-col items-center text-text dark:text-background h-[450px] rounded-lg hover:cursor-pointer overflow-hidden">
                            <div className="flex justify-center items-center">
                                <img className="w-full h-64 object-cover" src="https://static.vecteezy.com/system/resources/previews/003/808/879/non_2x/yellow-orange-beehive-background-honeycomb-bees-hive-cells-pattern-bee-honey-shapes-geometric-seamless-texture-symbol-hexagon-hexagonal-raster-mosaic-cell-sign-or-icon-gradation-color-vector.jpg" alt={project.title} />
                            </div>
                            <div key={index} className="p-7 pt-0">
                                <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProjectSlider;