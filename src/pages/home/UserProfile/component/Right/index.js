import React, { Fragment } from 'react'
import { Progress, Tag } from 'antd';
import icon from '../../../../../assets/follow.png'


const Right = () => {
    return(
      <Fragment>
          <div className='right'>
             <div className='right__box'>
               <h1>Progress indicator</h1>
               <div className='right__progress'>
                 <div className='__jobs'>
                     Jobs Completion
                      <Progress percent={30} />
                 </div>
                 <div className='__jobs'>
                     On budget
                     <Progress percent={30} />
                 </div>
                 <div className='__jobs'>
                     On time
                     <Progress percent={30} />
                 </div>
                 <div className='__jobs'>
                     Repeat rate hire
                     <Progress percent={30} />
                 </div>
               </div>
             </div>
             <div className='right__language'>
               <h1>Language</h1>
               <div className='right__lang'>
                  <div className='right__lang-eng'>English - <span>fluent</span></div>
                  <div className='right__lang-eng'>German - <span>fluent</span></div>
                  <div className='right__lang-eng'>Spanish - <span>fluent</span></div>
               </div>
             </div>
             <div className='right__interest'>
                <h1>Interest</h1>
                <div className='right_list'>
                  <Tag>Matchmaking</Tag>
                  <Tag>Social media</Tag>
                  <Tag>writing</Tag>
                  <Tag>Delivery</Tag>
                </div>
             </div>
             <div className='right__certification'>
                <h1>Certfications</h1>
                <div className='right_cert-list'>
                 <div className='cert'>
                     <div className='_wrap'>
                          <div className='__img'>
                              <img src={icon} alt='logo'/>
                          </div>
                          <div className='cert-desc'>
                              <h1>Adobe illustrator</h1>
                              <p>Learn on Kominiti</p>
                              <span>July 2021</span>
                          </div>
                     </div>
                     <div className='cert-expire'>
                        <p>No expiry</p>
                     </div>
                 </div>
                </div>
             </div>
          </div>
      </Fragment>
    )
}
export default Right;