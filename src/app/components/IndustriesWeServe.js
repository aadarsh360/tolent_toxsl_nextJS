import React from 'react';

const IndustriesWeServe = () => {
    const industries = [
        { id: 1, title: 'Taxi Booking App Development', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/taxi.png', color: '#70e4e8' },
        { id: 2, title: 'Internet of Things', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/IoT.png', color: '#f5eb92' },
        { id: 3, title: 'Lifestyle', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/lifestyle.png', color: '#a3ffe2' },
        { id: 4, title: 'Education App Development', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/education.png', color: '#ffbc7a' },
        { id: 5, title: 'Healthcare', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/medical.png', color: '#e3ff8e' },
        { id: 6, title: 'Real Estate', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/realestate.png', color: '#ef98f1' },
        { id: 7, title: 'Grocery Delivery', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/grocery.png', color: '#e8bae9' },
        { id: 8, title: 'E-Commerce', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/ecommerce.png', color: '#c7f7b9' },
        { id: 9, title: 'Food Delivery', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/food-color.png', color: '#9de5f5' },
        { id: 10, title: 'ERP', imageUrl: 'https://toxsl.com/themes/new/img/icons/solution-icon/food-color.png', color: '#98aff1' },
    ];

    return (
        <div className="bg-white py-5">
            <div className="container">
                <div className="text-center py-2">
                    <h2 className=" py-1 px-3 " style={{ color: "#FFA500" }} >Industries We Serve</h2>
                    <p className="fs-5">We are your technology partner gateway for scalable, responsive and secure solution.</p>
                </div>


                <div className="row g-3 mt-4">
                    {industries.map((industry) => (
                        <div className="col-md-3 col-6 " key={industry.id}>
                            <div
                                className=" shadow-sm border-0 py-4 px-4 text-center"
                                style={{
                                    backgroundColor: industry.color,
                                    borderRadius: '10px',
                                    borderTopRightRadius: '50px', // Top-right border radius
                                    borderBottomLeftRadius: '50px', // Bottom-left border radius
                                    width:'',
                                    height:''
                                }}
                            >
                                <img
                                    src={industry.imageUrl}
                                    alt="Image"
                                    className='img-fluid'
                                   style={{ objectFit: 'cover' }}
                                />
                                <div className='p-2'>
                                <p className="mb-0 py-2 text-dark">{industry.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesWeServe;
