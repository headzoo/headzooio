import React from 'react';
import { withRouter } from 'react-router';
import Saying from 'front/components/Saying';

let sayingIndex = -1;
const sayings = [
  { word: 'pragmatism', def: 'an approach to problems and situations that is based on practical solutions.' },
  { word: 'craftsman', def: 'a person who practices or is highly skilled in a craft; artisan.' },
  { word: 'minimalism', def: 'a style or technique that is characterized by extreme spareness and simplicity.' },
  { word: 'artist', def: 'one who professes and practices an imaginative art.' },
  { word: 'empathy', def: 'the imaginative ascribing to an object or work of art, feelings present in oneself.' }
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
