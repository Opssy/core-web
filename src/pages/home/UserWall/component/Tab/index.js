import React, { Fragment, useState } from 'react';
import banner from "../../../../../assets/banner_1.png"
import Layout from '../Layout';
import Trending from '../Trending';
import WallOfFame from '../WallOfFame';
const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Wall',
            content: <Layout/>
        },
        {
            id: 2,
            tabTitle: 'Trending topics',
            content: <Trending/>
        },
        {
            id: 3,
            tabTitle: 'wall of fame',
            content: <WallOfFame/>
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <Fragment>
            <div className="wall__page-header--tab">
                <div className="wall__page-header--tab-wrap">
                    <div className="wall__page-header--right">
                        <div className='tabs'>
                            {tabs.map((tab, i) =>
                                <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)} >{tab.tabTitle}</button>
                            )}
                        </div>
                    </div>
                    <div className="wall__page-header--left">
                        <div className="sort" >
                            <p>Sort by:</p>
                            <div className="container p-4">
                                <div className="card p-3">
                                    <select className="droplist">
                                        <option>New</option>
                                        <option>Old</option>
                                        <option>Semi-Old</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wall__page-header--tab--banner">
                   <div className='ads'>
                     <div className='quote'>
                       <p>“Intellectual growth should commence at birth and cease only at death.”    </p>
                     </div>
                     <div className='close'>X</div>
                     <img src={banner} alt='banner'/>
                   </div>
                </div>
                <div className='content'>
                    {tabs.map((tab, i) =>
                        <div key={i}>
                            {currentTab === `${tab.id}` && <div><p className='content__title'>{tab.title}</p><p>{tab.content}</p></div>}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    )
}
export default Tabs;