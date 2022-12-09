import React from 'react'
import styles from '../cards/Card.module.css'


const Months=[
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

class Card extends React.Component {
  render() {
    const date = new Date(this.props.postedOn);
    return (
      <div className={styles.card}>
        <img className={styles.image} src={this.props.image} alt="" />
        <div className={styles.content}>
          <p className={styles.title}>{`${this.props.title.substring(0, 50)}...`} </p>
          <p className={styles.author}>{`${this.props.Author}`}
          <span className={styles.postedon}>{`| ${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`}</span></p>
          <p className={styles.description}>{`${this.props.description.substring(0, 145)}...`}</p>

        
        </div>
         
        
      </div>
    
      
    )
  }
}
export default Card;








