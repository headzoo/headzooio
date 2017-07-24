import React from 'react';
import { withRouter } from 'react-router';
import Saying from 'components/Saying';

let saying_index = -1;
const sayings = [
  {word: 'pragmatism', def: 'an approach to problems and situations that is based on practical solutions.'},
  {word: 'minimalism', def: 'a style or technique that is characterized by extreme spareness and simplicity.'}
];

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saying: {}
    };
  }
  
  componentDidMount() {
    this.setSaying();
    this.props.history.listen(this.setSaying);
  }
  
  setSaying = () => {
    saying_index += 1;
    if (saying_index > sayings.length - 1) {
      saying_index = 0;
    }
    const saying = sayings[saying_index];
    this.setState({saying});
  };
  
  render() {
    const {saying} = this.state;
    
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
