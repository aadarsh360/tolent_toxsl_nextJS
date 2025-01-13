import React from 'react'

function OurHappyClient() {

    const clients = [
        { id: 1, imgSrc: 'https://toxsl.com/themes/new/img/dine.png', alt: 'Image 1' },
        { id: 2, imgSrc: 'https://toxsl.com/themes/new/img/samsung.png', alt: 'Image 2' },
        { id: 3, imgSrc: 'https://toxsl.com/themes/new/img/Carinventory.png', alt: 'Image 3' },
        { id: 4, imgSrc: 'https://toxsl.com/themes/new/img/Weddingplanning.png', alt: 'Image 4' },
        { id: 5, imgSrc: 'https://toxsl.com/themes/new/img/packet_video.png', alt: 'Image 5' },
        { id: 6, imgSrc: 'https://toxsl.com/themes/new/img/specalist.png', alt: 'Image 6' },
        { id: 7, imgSrc: 'https://toxsl.com/themes/new/img/plug.png', alt: 'Image 7' },
        { id: 8, imgSrc: 'https://toxsl.com/themes/new/img/onnectupz.png', alt: 'Image 8' },
        { id: 9, imgSrc: 'https://toxsl.com/themes/new/img/e_kryana.png', alt: 'Image 9' },
        { id: 10, imgSrc: 'https://toxsl.com/themes/new/img/line_buster.png', alt: 'Image 10' },
        { id: 11, imgSrc: 'https://toxsl.com/themes/new/img/leader_ship.png', alt: 'Image 11' },
        { id: 12, imgSrc: 'https://toxsl.com/themes/new/img/hdfc.png', alt: 'Image 12' },
        { id: 13, imgSrc: 'https://toxsl.com/themes/new/img/FindYourFIt.png', alt: 'Image 12' },
        { id: 14, imgSrc: 'https://toxsl.com/themes/new/img/hcl.png', alt: 'Image 12' },
        { id: 15, imgSrc: 'https://toxsl.com/themes/new/img/Flavorite.png', alt: 'Image 12' },
        { id: 16, imgSrc: 'https://toxsl.com/themes/new/img/my_coach.png', alt: 'Image 12' },
        { id: 17, imgSrc: 'https://toxsl.com/themes/new/img/loy_up.png', alt: 'Image 12' },
        { id: 18, imgSrc: 'https://toxsl.com/themes/new/img/LewisInstitute.png', alt: 'Image 12' },
        { id: 19, imgSrc: 'https://toxsl.com/themes/new/img/employeepast.png', alt: 'Image 12' },
        { id: 20, imgSrc: 'https://toxsl.com/themes/new/img/ecosys.png', alt: 'Image 12' },
        { id: 21, imgSrc: 'https://toxsl.com/themes/new/img/open_oceain.png', alt: 'Image 12' },
        { id: 22, imgSrc: 'https://toxsl.com/themes/new/img/H2O.png', alt: 'Image 12' },
        { id: 23, imgSrc: 'https://toxsl.com/themes/new/img/learn_to_write.png', alt: 'Image 12' },
        { id: 23, imgSrc: 'https://toxsl.com/themes/new/img/Fixiliti.png', alt: 'Image 12' },
    ];

    return (
        <div className="background-blue-gray py-5">
            <div className=" container">
                <div className="text-center py-2">
                    <h2 className=" py-1 px-3 " style={{ color: "#0D47A1" }} >Our Happy Clients</h2>
                    <p className="fs-5">We are result-oriented! We believe in going an extra miles for our clients.</p>
                </div>

                <div className="row ">
                    {clients.map((client) => (
                        <div key={client.id} className="col-lg-2 col-md-4 col-6 mb-4">
                            <div className="card border-0 shadow-sm">
                                <img
                                    src={client.imgSrc}
                                    alt={client.alt}
                                    className="card-img-top p-2"
                                    style={{ height: '100px', objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default OurHappyClient
