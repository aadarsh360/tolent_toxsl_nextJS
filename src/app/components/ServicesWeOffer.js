import React from 'react'

function ServicesWeOffer() {

    const offers = [
        { id: 1, title: 'Web Development', imageUrl: 'https://toxsl.com/themes/new/img/services-offer-icon/web-development.png', description: 'We are among the leading and client-focused organizations offering web development services with tangible results.', color: '#70e4e8' },
        { id: 2, title: 'Mobile App Development', imageUrl: 'https://toxsl.com/themes/new/img/services-offer-icon/mobile-app-development.png', description: 'We are among the leading and client-focused organizations offering web development services with tangible results.', color: '#f5eb92' },
        { id: 3, title: 'ERP | CRM Development', imageUrl: 'https://toxsl.com/themes/new/img/services-offer-icon/erp.png', description: 'We are among the leading and client-focused organizations offering web development services with tangible results.', color: '#a3ffe2' },
        { id: 4, title: 'Digital Marketing', imageUrl: 'https://toxsl.com/themes/new/img/services-offer-icon/digital-marketing.png', description: 'We are among the leading and client-focused organizations offering web development services with tangible results.', color: '#ffbc7a' },
        { id: 5, title: 'Managed Cloud Services', imageUrl: 'https://toxsl.com/themes/new/img/services-offer-icon/managed-cloud-services.png', description: 'We are among the leading and client-focused organizations offering web development services with tangible results.', color: '#e3ff8e' },
        { id: 6, title: 'Automated Testing', imageUrl: 'https://toxsl.com/themes/new/img/services-offer-icon/automation.png', description: 'We are among the leading and client-focused organizations offering web development services with tangible results.', color: '#ef98f1' },
        { id: 7, title: 'Artificial Intelligence', imageUrl: 'https://toxsl.com/themes/new/img/services-offer-icon/artificial-intelligence.png', description: 'We are among the leading and client-focused organizations offering web development services with tangible results.', color: '#e8bae9' },
        { id: 8, title: 'Internet of Things', imageUrl: 'https://toxsl.com/themes/new/img/services-offer-icon/iot.png', description: 'We are among the leading and client-focused organizations offering web development services with tangible results.', color: '#98aff1' },

    ];

    return (
        <div className="background-light-sky py-5">
            <div className=" container">
                <div className="text-center py-2">
                    <h2 className=" py-1 px-3 " style={{ color: "#FFA500" }} >Services We Offer</h2>
                    <p className="fs-5">Get work done in 200+ different technologies.</p>
                </div>

                <div className="row g-3 mt-4">
                    {offers.map((offer) => (
                        <div className="col-lg-3 col-md-6 col-12 d-flex" key={offer.id}>
                            <div
                                className=" shadow-lg border-0 py-4 px-4 bg-white d-flex flex-column rounded"
                                style={{
 
                                    width: '',
                                    height: ''
                                }}
                            >
                                <div className='py-2 mb-2'>
                                    <img
                                        src={offer.imageUrl}
                                        alt="Image"
                                        className='img-fluid p-2 shadow-lg'
                                        style={{ objectFit: 'cover', backgroundColor: offer.color, borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "60px", height: "60px" }}
                                    />
                                </div>
                                <div className='py-2'>
                                    <h4 className="mb-0 py-4">{offer.title}</h4>
                                    <p className='text-muted fs-6'>{offer.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ServicesWeOffer
