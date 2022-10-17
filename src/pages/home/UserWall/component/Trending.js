import React, { Fragment } from "react";
import banner from "../../../../assets/banner_1.png"
import trend from "../../../../assets/Group.png"
import "../../../../styles/wall.scss"
const Trending = () => {
    return (
        <Fragment>
            <div className="trending">
                <div className="trending__top">
                    <div className="trending__top-banner">
                        <img src={banner} alt="banner" />
                        <div className="trending__content">
                          <span>Trending</span>
                          <div className="trending__content-text">
                             <h1>Anti-vaccine groups are already pushing the narrative against kids getting Covid vaccines</h1>
                             <p>Vaccine advocates are pointing to videos already spreading quickly on social media as a harbinger for the kind of graphic misinformation that they fear most.</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="trending__news">
                    <div className="trending__news-header">
                        <h1>Top Trending Topics Of The Day</h1>
                    </div>
                    <div className="trending__news-list">
                      <div className="right">
                         <div className="right__span">
                            <span>1</span>
                         </div>
                         <div className="right__side">
                            <span>#Technology</span>
                            <h1>YouTube's new features, let's take a look</h1>
                            <p>1k Engagement</p>
                         </div>
                      </div>
                      <div className="left">
                        <img src={trend} alt="trending"/>
                      </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Trending;