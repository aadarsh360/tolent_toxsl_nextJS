import React from "react";




const TechGrid = () => {
    const technologies1 = [
        { name: "Node.js", img: "path-to-nodejs-image" },
        { name: "Selenium", img: "path-to-selenium-image" },
        { name: "ReactJS", img: "path-to-reactjs-image" },
        { name: "Laravel", img: "path-to-laravel-image" },
        { name: "PWA", img: "path-to-pwa-image" },
        { name: "Kotlin", img: "path-to-kotlin-image" },

    ];

    const technologies2 = [
        { name: "Flutter", img: "path-to-flutter-image" },
        { name: "Yii", img: "path-to-yii-image" },
        { name: "PHP", img: "path-to-php-image" },
        { name: "Django", img: "path-to-django-image" },
        { name: "AngularJS", img: "path-to-angularjs-image" },
    ];

    const technologies3 = [
        { name: "React Native", img: "path-to-react-native-image" },
        { name: "Swift", img: "path-to-swift-image" },
        { name: "Spring Boot", img: "path-to-springboot-image" },
        { name: "Python", img: "path-to-python-image" },
        { name: "TensorFlow", img: "path-to-tensorflow-image" },
        { name: "OpenCV", img: "path-to-opencv-image" },
    ];



    return (
        <div className="container text-center py-5">
            <div className="row justify-content-center">
                {technologies1.map((tech, index) => (
                    <div
                        key={index}
                        className="col-6 col-md-4 col-lg-2 d-flex justify-content-center border border-primary"
                    >
                        <div className="hexagon border border-danger">
                            <img src={tech.img} alt={tech.name} className="img-fluid" />
                            <p className="hex-title">{tech.name}</p>
                        </div>
                    </div>
                ))}

                {technologies2.map((tech, index) => (
                    <div
                        key={index}
                        className="col-6 col-md-4 col-lg-3 d-flex justify-content-center border border-primary"
                    >
                        <div className="hexagon border border-danger">
                            <img src={tech.img} alt={tech.name} className="img-fluid" />
                            <p className="hex-title">{tech.name}</p>
                        </div>
                    </div>
                ))}

{technologies3.map((tech, index) => (
                    <div
                        key={index}
                        className="col-6 col-md-4 col-lg-2 d-flex justify-content-center border border-primary"
                    >
                        <div className="hexagon border border-danger">
                            <img src={tech.img} alt={tech.name} className="img-fluid" />
                            <p className="hex-title">{tech.name}</p>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    );
};

export default TechGrid;
