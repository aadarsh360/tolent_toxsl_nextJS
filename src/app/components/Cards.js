import React from 'react'

function Cards(props) {

    const { imageUrl, description, message } = props.currentElement;
    return (

        <div className="col-md-4 col-12 p-2 d-flex">
            <div className="px-3 py-3 bg-white shadow d-flex flex-column">
                {/* Image */}
                <img
                    src={imageUrl}
                    alt="Example"
                    className="img-fluid mb-3"
                    style={{ height: "200px", width: "500px" }}
                />

                {/* Heading */}
                <h4 className="text-success mb-2">{description}</h4>

                {/* Paragraph */}
                <p className="text-muted">{message}</p>
            </div>
        </div>
    )
}

export default Cards
