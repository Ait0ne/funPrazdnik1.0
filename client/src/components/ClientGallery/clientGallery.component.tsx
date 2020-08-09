import React from 'react';


import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.jpg';
import client4 from '../../assets/client4.jpg';
import client5 from '../../assets/client5.jpg';
import client6 from '../../assets/client6.jpg';
import client7 from '../../assets/client7.jpg';
import client8 from '../../assets/client8.jpg';
import { ClientGalleryContainer } from './clientGallery.styles';
import InfiniteScroll from '../infiniteScroll/infiniteScroll.component'

const images = [client1, client2, client3, client4, client5, client6, client7, client8]


const ClientGallery: React.FC = () => {


    return (
        <ClientGalleryContainer>
            <InfiniteScroll images={images}/>
        </ClientGalleryContainer>
    )
}

export default ClientGallery;