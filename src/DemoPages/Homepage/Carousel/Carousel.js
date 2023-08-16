import React, {} from 'react';

import {
    UncontrolledCarousel
} from 'reactstrap';

 import image1 from '../../../assets/utils/images/product/starComp.jpg';
 import image2 from '../../../assets/utils/images/product/starDesign.jpg';
 import image3 from '../../../assets/utils/images/product/starPrinting.jpg';
 
const items = [
    {
        id: 1,
        src: image1,
        altText: 'Star Comp',
        caption: 'Star Comp'
    },
    {
        id: 2,
        src: image2,
        altText: 'Star Design',
        caption: 'Star Design'
    },
    {
        id: 3,
        src: image3,
        altText: 'Star Printing',
        caption: 'Star Printing',
    }
];

const CarouselDefault = () => <UncontrolledCarousel items={items}/>;


export default CarouselDefault;
