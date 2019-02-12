import React from 'react';
import styles from './CarouselItem.css';
import Image from '../Image';
import star from '../../assets/carousel-star.svg';
import Love from '../Love';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loved: false
    }
    this.handleLove = this.handleLove.bind(this);
  }

  handleLove(e) {
    this.setState({ loved: !this.state.loved })
  }

  render() {
    let { loved } = this.state;
    let loveStatus = styles.love;
    if (loved) {
      loveStatus = styles.loved;
    }

    return (
      <div className={ styles.entry }>
        <div className={ styles.itemContainer1 }>
          <div className={ styles.itemContainer2 }>
            <div className={ styles.itemContainer3 }>
              <Image item={ this.props.item } />
              <div className={ styles.loveContainer }>
                <Love />
              </div>
            </div>

            <div className={ styles.name }>
              <span className={ styles.category }>
                {this.props.category}
              </span>
              <br />
              <span>
                {this.props.name}
              </span>
              <div className={ styles.price }>
                {this.props.price}
              </div>
            </div>

            <div className={ styles.starContainer }>

              <img className={ styles.star } src={ star }/>
              <img className={ styles.star } src={ star }/>
              <img className={ styles.star } src={ star }/>
              <img className={ styles.star } src={ star }/>
              <img className={ styles.star } src={ star }/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;