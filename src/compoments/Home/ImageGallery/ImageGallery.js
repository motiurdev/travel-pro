import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const photos = [
        {
            src: "https://image.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg",
            width: 4,
            height: 3
        },
        {
            src: "https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-coconut-palm-tree-sunrise-time_74190-7454.jpg",
            width: 1,
            height: 1
        },
        {
            src: "https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-with-umbrella-chair-around-swimming-pool_74190-1071.jpg",
            width: 3,
            height: 4
        },
        {
            src: "https://image.freepik.com/free-photo/couple-tourists-with-backpacks-mountain_1150-7520.jpg",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://image.freepik.com/free-photo/aerial-view-beautiful-koh-tao-island-surat-thani-thailand_335224-1066.jpg",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
        }
    ];


    return (
        <div className="py-5">
            <div className='container'>
                <h1 className="header-title places-effect mb-5">Photo Gallery</h1>
                <div>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;