import React from 'react';
import styles from './ModalImage.css';

export default ({ item, badge }) => (
  <div className={ styles.imageContainer1 }>
    <div className={ styles.imageContainer2 }>
      <div className={ styles.imageContainer3 }>
        <img src={ item }/>
      </div>

      <div
      className={ styles.badgeContainer }
      style={ badge ? { opacity: 1 } : { opacity: 0 } }>
        <div className={ styles.badge }>New</div>
      </div>

    </div>
  </div>
);