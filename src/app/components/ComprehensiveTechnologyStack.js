"use client"
import React, { useState } from 'react'

function ComprehensiveTechnologyStack() {

    const [activeContent, setActiveContent] = useState('item1');

    const contentData = [

        {
            id: 'item1',
            text: 'Hi-Tech',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/hi-tech/microwavearchitecture.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/zoom.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/google-meet.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/jira.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/trello.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/slack.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/git-hub.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/bit-bucket.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/git-lab.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/tfvs.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/figma.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/xd.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/illustrator.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/after-effect.svg'

            ],
        },
        {
            id: 'item2',
            text: 'AI/ML',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/nlp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/deep-learning.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/figma.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/xd.svg',

            ],
        },
        {
            id: 'item3',
            text: 'Cloud/DevOps',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/cloud-devops/aws.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/cloud-devops/azure.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/deep-learning.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/tfvs.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',

            ],
        },
        {
            id: 'item4',
            text: 'Platforms/BI tools',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/deep-learning.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/tfvs.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/nlp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/deep-learning.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',
            ],
        },
        {
            id: 'item5',
            text: 'Frameworks',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/tfvs.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/nlp.svg',
            ],
        },
        {
            id: 'item6',
            text: 'Front-End',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/slack.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/git-hub.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/bit-bucket.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/git-lab.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/tfvs.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/figma.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/xd.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/illustrator.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/after-effect.svg'
            ],
        },
        {
            id: 'item7',
            text: 'Back-End',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/tfvs.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/nlp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/ai-ml/deep-learning.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',
            ],
        },
        {
            id: 'item8',
            text: 'Mobile',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/git-lab.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/tfvs.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/figma.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/xd.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/illustrator.svg',
            ],
        },
        {
            id: 'item9',
            text: 'DataBase',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/figma.svg',
            ],
        },
        {
            id: 'item10',
            text: 'MobileCMS/Ecommerce',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/cms-ecommerce/wordpress.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/cms-ecommerce/drupal.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/cms-ecommerce/strapi.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/cms-ecommerce/drupal.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/cms-ecommerce/strapi.svg',

            ],
        },
        {
            id: 'item11',
            text: 'Quality Engineering',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/quality-enginners/selenium.svg1',
                'https://toxsl.com/themes/new/img/technology-tab-icon/cms-ecommerce/drupal.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/cms-ecommerce/strapi.svg',
            ],
        },

        {
            id: 'item12',
            text: 'Tools',
            images: [
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/zoom.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/google-meet.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/jira.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/trello.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/slack.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/git-hub.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/bit-bucket.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/git-lab.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/tfvs.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/base-camp.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/asana.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/insta-connect.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/figma.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/xd.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/illustrator.svg',
                'https://toxsl.com/themes/new/img/technology-tab-icon/tools/after-effect.svg'
            ],
        },



    ];


    return (
        <div className="bg-white py-5">
            <div className=" container">
                <div className="text-center py-2">
                    <h2 className=" py-1 px-3 " style={{ color: "#0D47A1" }} >Enhance Software Development with a Comprehensive Technology Stack</h2>
                    <p className="fs-5">As a leading software development company, we follow agile methods to ensure fast development and solutions that can grow with your needs. Our approach focuses on innovation, allowing us to create custom software that meets your specific requirements while adapting quickly to changes.</p>
                </div>


                <div className=' row py-2'>
                    {/* Left Side: Content List */}
                    <div className='col-lg-3 col-md-3 col-sm-3 py-2 d-flex flex-column ' style={{width:"30%"}}>
                        <ul className='' style={{ listStyleType: "none" }}>
                            {contentData.map((content) => (
                                <li
                                    key={content.id}
                                    className={` py-2 ${activeContent === content.id ? ' fw-bold' : ''}`}
                                    onClick={() => setActiveContent(content.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {content.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Images */}
                    <div className='col-lg-9 col-md-9 col-sm-9  p-1 ' style={{width:"70%"}}>
                        <div className='row g-2 '>
                            {contentData
                                .find((content) => content.id === activeContent)
                                ?.images.map((image, index) => (

                                    <div key={index} className="col-lg-2 col-2 p-4 text-center" >
                                        <div className='p-2 border rounded shadow'>
                                            <img
                                                src={image}
                                                alt={`Content ${activeContent} Image ${index + 1}`}
                                                className='img-fluid'
                                            // style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                            />
                                            <div>
                                            <p className='py-2'>image</p>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ComprehensiveTechnologyStack
