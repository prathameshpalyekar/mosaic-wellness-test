import React, { Component } from 'react';
import {
  Row,
  Col,
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';
import './Carousel.scss';

class CustomCarousel extends Component {
  state = {
    activeIndex: 0
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    const { data, onNext } = this.props;
    const dataLength = data.length || 0;
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === dataLength - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    onNext && onNext();
  }

  previous = () => {
    const { data, onPrev } = this.props;
    const dataLength = data.length || 0;
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? dataLength - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    onPrev && onPrev();
  }

  render() {
    const { activeIndex } = this.state;
    const { data, interval = false } = this.props;
    
    if (data.length === 1) {
      const dataElement = data[0];
      return (
        <Container>
          <Row>
            <Col md="10" className="offset-md-1">
              {dataElement.element}
            </Col>
          </Row>
        </Container>
      )
    }

    const slides = (data || []).map((dataElement) => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={dataElement.id}>
          {dataElement.element}
        </CarouselItem>
      );
    });

    return (
      <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} interval={interval}>
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        {slides}
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      
    );
  }
}

export default CustomCarousel;
