import React from 'react'
import styles from '../head/Head.module.css'

// function Head(){
//   return(
//     <div className="cent"></div>
//   );
// }

class Head extends React.Component {
  render() {
    return (
      <header className={styles.Hcontainer}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <p>EDYODA</p>
            <span>Stories</span>
          </div>
          <div className="categories">
            <p>Explore Catogries<i className="fa fa-angle-down"></i></p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.htext}>EdYoda is free learning and knowledge
           sharing platform for techies</div>
          <button className={styles.button}>GO To Main Website</button>
        </div>
      </header>
    )
  }
}
export default Head
