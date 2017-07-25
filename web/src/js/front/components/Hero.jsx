import React from 'react';
import { withRouter } from 'react-router';
import Saying from 'front/components/Saying';

let sayingIndex = -1;
const sayings = [
  { word: 'pragmatism', def: 'an approach to problems and situations that is based on practical solutions.' },
  { word: 'minimalism', def: 'a style or technique that is characterized by extreme spareness and simplicity.' },
  { word: 'art', def: 'the expression or application of human creative skill and imagination.' }
];

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saying: {}
    };
    this.interval = null;
  }

  componentDidMount() {
    this.updateSaying();
    this.interval = setInterval(this.updateSaying, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateSaying = () => {
    sayingIndex += 1;
    if (sayingIndex > sayings.length - 1) {
      sayingIndex = 0;
    }
    const saying = sayings[sayingIndex];
    this.setState({ saying });
  };

  render() {
    const { shrunk } = this.props;
    const { saying } = this.state;

    return (
      <section className="text-center hero" id="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Saying saying={saying} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Hero);
