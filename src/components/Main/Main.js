import React from 'react'
import styles from '../Main/Main.module.css'
import Pill from '../../Pill/Pill'
import Card from '../cards/Card'
import stories from '../Main/Main.data'

const Pill_Data = [
  'All',
  'Artificial Intelligence',
  'Cloud Computing',
  'DevOps',
  'Programming Languages',
  'Mobile Application Development',
  'Technology and Tools',
  'Get a Job in a Tech Company',
  'Others',
]

class Main extends React.Component {
  render() {
    return (
      <main className={styles.mainscreen}>
        <h3>Latest Posts</h3>
        <div className={styles.filter}>
          <div className={styles.filterdiv}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
              alt=""
            />
            <span>Filter by Category</span>
          </div>
          <div className={styles.filterPill}>
            {Pill_Data.map((pilltext, index) => {
              return (
                <Pill key={index} active={index === 0}>
                  {pilltext}
                </Pill>
              )
            })}
          </div>
        </div>
        <div className={styles.cards}>
          {stories.map((story) => {
            return (
              <Card
                image={story.small_image}
                title={story.title}
                Author={story.authorname}
                postedOn={story.posted_on}
                description={story.description}
              ></Card>
            )
          })}
        </div>
      </main>
      // "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg" alt="image"
    )
  }
}
export default Main
