import React from 'react'

// function TechnologiesWeMaster() {
//     const technologies = [
//         // First Row (6)
//         {
//             name: "Node.js",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
//         },
//         {
//             name: "React",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
//         },
//         {
//             name: "Angular",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg"
//         },
//         {
//             name: "Vue.js",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
//         },
//         {
//             name: "Python",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
//         },
//         {
//             name: "Java",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
//         },
//         // Second Row (5)
//         {
//             name: "PHP",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
//         },
//         {
//             name: "Laravel",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg"
//         },
//         {
//             name: "Django",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"
//         },
//         {
//             name: "Spring",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
//         },
//         {
//             name: "Express",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
//         },
//         // Third Row (6)
//         {
//             name: "Flutter",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
//         },
//         {
//             name: "React Native",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
//         },
//         {
//             name: "Kotlin",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg"
//         },
//         {
//             name: "Swift",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg"
//         },
//         {
//             name: "TensorFlow",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
//         },
//         {
//             name: "OpenCV",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg"
//         }
//     ];

//     // Split technologies into rows
//     const firstRow = technologies.slice(0, 6);
//     const secondRow = technologies.slice(6, 11);
//     const thirdRow = technologies.slice(11, 17);

//     return (
//         <div className='my-5'>
//             <div className='container'>
//                 <h1 className='text-success text-center'>Technologies We Master</h1>
//                 <div className="hex-grid">
//                     <div className="hex-row">
//                         {firstRow.map((tech, index) => (
//                             <div key={`row1-${index}`} className="hex-item bg-danger">
//                                 <div className="hex-content bg-danger">
//                                     <img
//                                         src={tech.image}
//                                         alt={tech.name}
//                                         className="tech-image"
//                                     />
//                                     <div className="tech-name">{tech.name}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hex-row">
//                         {secondRow.map((tech, index) => (
//                             <div key={`row2-${index}`} className="hex-item bg-primary">
//                                 <div className="hex-content bg-primary">
//                                     <img
//                                         src={tech.image}
//                                         alt={tech.name}
//                                         className="tech-image"
//                                     />
//                                     <div className="tech-name">{tech.name}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="hex-row">
//                         {thirdRow.map((tech, index) => (
//                             <div key={`row3-${index}`} className="hex-item bg-primary">
//                                 <div className="hex-content bg-primary">
//                                     <img
//                                         src={tech.image}
//                                         alt={tech.name}
//                                         className="tech-image"
//                                     />
//                                     <div className="tech-name">{tech.name}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function TechnologiesWeMaster() {
//     const technologies = [
//         {
//             name: "Node.js",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
//             bgColor: "#A5D6A7", // Light Green
//             url: "https://nodejs.org/"
//         },
//         {
//             name: "React",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
//             // bgColor: "#90CAF9", // Light Blue
//             bgColor: "#FFF176", // Light Yellow
//             url: "https://reactjs.org/"
//         },
//         {
//             name: "Angular",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
//             bgColor: "#EF9A9A", // Light Red
//             url: "https://angular.io/"
//         },
//         {
//             name: "Vue.js",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
//             bgColor: "#A5D6A7", // Light Green
//             url: "https://vuejs.org/"
//         },
//         {
//             name: "Python",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
//             bgColor: "#81D4FA", // Light Blue
//             url: "https://www.python.org/"
//         },
//         {
//             name: "Java",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
//             bgColor: "#CE93D8", // Light Purple
//             url: "https://www.java.com/"
//         },
//         {
//             name: "PHP",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
//             bgColor: "#B39DDB", // Light Lavender
//             url: "https://www.php.net/"
//         },
//         {
//             name: "Laravel",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg",
//             bgColor: "#EF9A9A", // Light Red
//             url: "https://laravel.com/"
//         },
//         {
//             name: "Django",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
//             bgColor: "#A5D6A7", // Light Green
//             url: "https://www.djangoproject.com/"
//         },
//         {
//             name: "Spring",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
//             bgColor: "#A5D6A7", // Light Green
//             url: "https://spring.io/"
//         },
//         {
//             name: "Express",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
//             bgColor: "#E0E0E0", // Light Grey
//             url: "https://expressjs.com/"
//         },
//         {
//             name: "Flutter",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
//             bgColor: "#90CAF9", // Light Blue
//             url: "https://flutter.dev/"
//         },
//         {
//             name: "React Native",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
//             // bgColor: "#90CAF9", // Light Blue
//             bgColor: "#FFF176", // Light Yellow
//             url: "https://reactnative.dev/"
//         },
//         {
//             name: "Kotlin",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
//             bgColor: "#CE93D8", // Light Purple
//             url: "https://kotlinlang.org/"
//         },
//         {
//             name: "Swift",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
//             bgColor: "#FFCC80", // Light Orange
//             url: "https://developer.apple.com/swift/"
//         },
//         {
//             name: "TensorFlow",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
//             bgColor: "#FFF176", // Light Yellow
//             url: "https://www.tensorflow.org/"
//         },
//         {
//             name: "OpenCV",
//             image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
//             bgColor: "#81D4FA", // Light Blue
//             url: "https://opencv.org/"
//         }
//     ];

//     return (
//         <div className='my-5'>
//             <div className='container'>
//                 <h1 className='text-success text-center'>Technologies We Master</h1>
//                 <div className="hex-grid">
//                     {technologies.map((tech, index) => (
//                         <div
//                             key={index}
//                             className="hex-item"
//                             style={{ backgroundColor: tech.bgColor }}
//                         >
//                             <a href={tech.url} target="_blank" rel="noopener noreferrer">
//                                 <div className="hex-content">
//                                     <img
//                                         src={tech.image}
//                                         alt={tech.name}
//                                         className="tech-image"
//                                     />
//                                     <div className="tech-name">{tech.name}</div>
//                                 </div>
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

function TechnologiesWeMaster() {
    const technologies = [
        {
            name: "Node.js",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
            bgColor: "#A5D6A7", // Light Green
            url: "https://nodejs.org/"
        },
        {
            name: "React",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
            // bgColor: "#90CAF9", // Light Blue
            bgColor: "#FFF176", // Light Yellow
            url: "https://reactjs.org/"
        },
        {
            name: "Angular",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
            bgColor: "#EF9A9A", // Light Red
            url: "https://angular.io/"
        },
        {
            name: "Vue.js",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
            bgColor: "#A5D6A7", // Light Green
            url: "https://vuejs.org/"
        },
        {
            name: "Python",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            bgColor: "#81D4FA", // Light Blue
            url: "https://www.python.org/"
        },
        {
            name: "Java",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
            bgColor: "#CE93D8", // Light Purple
            url: "https://www.java.com/"
        },
        {
            name: "PHP",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
            bgColor: "#B39DDB", // Light Lavender
            url: "https://www.php.net/"
        },
        {
            name: "Laravel",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
            bgColor: "#EF9A9A", // Light Red
            url: "https://laravel.com/"
        },
        {
            name: "Django",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
            bgColor: "#A5D6A7", // Light Green
            url: "https://www.djangoproject.com/"
        },
        {
            name: "Spring",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
            bgColor: "#A5D6A7", // Light Green
            url: "https://spring.io/"
        },
        {
            name: "Express",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
            bgColor: "#E0E0E0", // Light Grey
            url: "https://expressjs.com/"
        },
        {
            name: "Flutter",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
            bgColor: "#90CAF9", // Light Blue
            url: "https://flutter.dev/"
        },
        {
            name: "React Native",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
            // bgColor: "#90CAF9", // Light Blue
            bgColor: "#FFF176", // Light Yellow
            url: "https://reactnative.dev/"
        },
        {
            name: "Kotlin",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
            bgColor: "#CE93D8", // Light Purple
            url: "https://kotlinlang.org/"
        },
        {
            name: "Swift",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
            bgColor: "#FFCC80", // Light Orange
            url: "https://developer.apple.com/swift/"
        },
        {
            name: "TensorFlow",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
            bgColor: "#FFF176", // Light Yellow
            url: "https://www.tensorflow.org/"
        },
        {
            name: "OpenCV",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
            bgColor: "#81D4FA", // Light Blue
            url: "https://opencv.org/"
        }
    ];

    // Split technologies into rows
    const firstRow = technologies.slice(0, 6);
    const secondRow = technologies.slice(6, 11);
    const thirdRow = technologies.slice(11, 17);

    return (
        <div className='my-5 py-4'>
            <div className='container '>
                <h1 className='text-success text-center py-3'>Technologies We Master</h1>
                <div className="hex-grid ">
                    <div className="hex-row">
                        {firstRow.map((tech, index) => (
                            <div key={`row1-${index}`} className="hex-item" style={{ backgroundColor: tech.bgColor }}>

                                <a href={tech.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                    <div className="hex-content ">
                                        <img
                                            src={tech.image}
                                            alt={tech.name}
                                            className="tech-image"
                                        />
                                        <div className="tech-name">{tech.name}</div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="hex-row">
                        {secondRow.map((tech, index) => (
                            <div key={`row2-${index}`} className="hex-item " style={{ backgroundColor: tech.bgColor }}>

                                <a href={tech.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                    <div className="hex-content ">
                                        <img
                                            src={tech.image}
                                            alt={tech.name}
                                            className="tech-image"
                                        />
                                        <div className="tech-name">{tech.name}</div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="hex-row">
                        {thirdRow.map((tech, index) => (
                            <div key={`row3-${index}`} className="hex-item " style={{ backgroundColor: tech.bgColor }}>

                                <a href={tech.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                    <div className="hex-content">
                                        <img
                                            src={tech.image}
                                            alt={tech.name}
                                            className="tech-image"
                                        />
                                        <div className="tech-name">{tech.name}</div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}




export default TechnologiesWeMaster
