import React, { Component } from 'react';
import '../style/Home.css';
/* import Gallery from "react-photo-gallery"; */
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photo";


class Work extends Component
{
    state = { modalIsOpen: false };
    toggleModal = () =>
    {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    };
    render()
    {
        const { modalIsOpen } = this.state;


        return (
            <div className="App">
                <div className="title">
                    <h1>Work</h1>
                </div>
                <ModalGateway>
                    {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}>
                            <Carousel views={photos} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        );
    }
}

export default Work;


