import React from "react";
import "./style.css";

const imgData = [
  {
    url: "https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2014/09/cute-kittens.jpg",
    title: "Cat1",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    id: 0,
  },
  {
    url: "https://media.istockphoto.com/id/489590895/photo/wide-eyed-tortoiseshell-tabby-cat-about-to-pounce-on-something.jpg?s=612x612&w=0&k=20&c=_iEeZlABZYXAx6Q-Ia158yz_U12_GuYAK_4lwkdgXGs=",
    title: "Cat2",
    text: 'Numquam ea soluta qui. Pariatur facere ratione velit accusantium alias sunt, fugit iusto quaerat.',
    id: 1,
  },
  {
    url: "https://static3.depositphotos.com/1000270/117/i/600/depositphotos_1175551-stock-photo-young-bengal-kitten.jpg",
    title: "Cat3",
    text: 'Aspernatur in fugiat optio quibusdam libero necessitatibus illo!',
    id: 2,
  },
];

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgs: imgData,
      count: 0,
      intervalId: null,
    };
  }

  startAuto = () => {
    const intervalId = setInterval(this.increment, 2000);

    this.setState({ intervalId });
  };

  stopAuto = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  };

  increment = () => {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % imgData.length,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: (prevState.count - 1 + imgData.length) % imgData.length,
    }));
  };

  render() {
    const { imgs, count } = this.state;
    const currentImg = imgs[count];

    return (
      <div className="boxStyle">
        <div>
          <img
            className="imgStyle"
            src={currentImg.url}
            alt={currentImg.title}
            title={currentImg.title}
          />
          <p>{currentImg.title}</p>
          <p>{currentImg.text}</p>
          <button className="buttonStyle leftButton" onClick={this.decrement}>
            &#8592;
          </button>
          <button className="buttonStyle rightButton" onClick={this.increment}>
            &#8594;
          </button>
          <div>
            <button className="green" onClick={this.startAuto}>
              Enable auto start
            </button>
            <button className="red" onClick={this.stopAuto}>
              Disable auto start
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
