
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import '../../../../styles/userprofile.scss';
import follow from '../../../../assets/follow.png'
import bg from '../../../../assets/bg-kominiti-view-follow.png'
const Leftsidebar = () => {
    return (
        <Fragment>
            <div>
                <div className='userprofilepage__card'>
                    <div className='userprofilepage__card-img'>
                        <img src={bg} alt='profile-background' />

                        <div className='userprofilepage__thumbnail'>
                            <div className='userprofilepage__thumbnail-wrap'>
                                <div className='userprofilepage__thumbnail--avatar'>
                                    <img src={follow} alt='user' />
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='userprofilepage__details'>
                        <div className='userprofilepage__details-desc'>
                            <h1>Eke Chibueze Precious</h1>
                            <p>Freelancer <span>Product Design</span></p>
                        </div>
                        <div className='userprofilepage__rating'>
                            <div className='seller'>
                                <p className='seller-title'>Seller ratings</p>
                                <div className='seller__box' >
                                    <span className='seller-rate'>
                                        <svg width="140" height="21" viewBox="0 0 140 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 8.25047C20 8.43531 19.8958 8.63695 19.6875 8.85539L15.3245 13.3166L16.3582 19.6178C16.3662 19.6766 16.3702 19.7607 16.3702 19.8699C16.3702 20.0463 16.3261 20.1933 16.238 20.311C16.1579 20.437 16.0377 20.5 15.8774 20.5C15.7252 20.5 15.5649 20.4496 15.3966 20.3488L10 17.3746L4.60336 20.3488C4.42708 20.4496 4.26683 20.5 4.1226 20.5C3.95433 20.5 3.82612 20.437 3.73798 20.311C3.65785 20.1933 3.61779 20.0463 3.61779 19.8699C3.61779 19.8195 3.6258 19.7355 3.64183 19.6178L4.67548 13.3166L0.300481 8.85539C0.10016 8.62854 0 8.42691 0 8.25047C0 7.93961 0.224359 7.74638 0.673077 7.67076L6.70673 6.75079L9.41106 1.0167C9.5633 0.672232 9.75962 0.5 10 0.5C10.2404 0.5 10.4367 0.672232 10.5889 1.0167L13.2933 6.75079L19.3269 7.67076C19.7756 7.74638 20 7.93961 20 8.25047Z" fill="#4895EF" />
                                            <path d="M50 8.25047C50 8.43531 49.8958 8.63695 49.6875 8.85539L45.3245 13.3166L46.3582 19.6178C46.3662 19.6766 46.3702 19.7607 46.3702 19.8699C46.3702 20.0463 46.3261 20.1933 46.238 20.311C46.1579 20.437 46.0377 20.5 45.8774 20.5C45.7252 20.5 45.5649 20.4496 45.3966 20.3488L40 17.3746L34.6034 20.3488C34.4271 20.4496 34.2668 20.5 34.1226 20.5C33.9543 20.5 33.8261 20.437 33.738 20.311C33.6579 20.1933 33.6178 20.0463 33.6178 19.8699C33.6178 19.8195 33.6258 19.7355 33.6418 19.6178L34.6755 13.3166L30.3005 8.85539C30.1002 8.62854 30 8.42691 30 8.25047C30 7.93961 30.2244 7.74638 30.6731 7.67076L36.7067 6.75079L39.4111 1.0167C39.5633 0.672232 39.7596 0.5 40 0.5C40.2404 0.5 40.4367 0.672232 40.5889 1.0167L43.2933 6.75079L49.3269 7.67076C49.7756 7.74638 50 7.93961 50 8.25047Z" fill="#4895EF" />
                                            <path d="M80 8.25047C80 8.43531 79.8958 8.63695 79.6875 8.85539L75.3245 13.3166L76.3582 19.6178C76.3662 19.6766 76.3702 19.7607 76.3702 19.8699C76.3702 20.0463 76.3261 20.1933 76.238 20.311C76.1579 20.437 76.0377 20.5 75.8774 20.5C75.7252 20.5 75.5649 20.4496 75.3966 20.3488L70 17.3746L64.6034 20.3488C64.4271 20.4496 64.2668 20.5 64.1226 20.5C63.9543 20.5 63.8261 20.437 63.738 20.311C63.6579 20.1933 63.6178 20.0463 63.6178 19.8699C63.6178 19.8195 63.6258 19.7355 63.6418 19.6178L64.6755 13.3166L60.3005 8.85539C60.1002 8.62854 60 8.42691 60 8.25047C60 7.93961 60.2244 7.74638 60.6731 7.67076L66.7067 6.75079L69.4111 1.0167C69.5633 0.672232 69.7596 0.5 70 0.5C70.2404 0.5 70.4367 0.672232 70.5889 1.0167L73.2933 6.75079L79.3269 7.67076C79.7756 7.74638 80 7.93961 80 8.25047Z" fill="#4895EF" />
                                            <path d="M110 8.25047C110 8.43531 109.896 8.63695 109.688 8.85539L105.325 13.3166L106.358 19.6178C106.366 19.6766 106.37 19.7607 106.37 19.8699C106.37 20.0463 106.326 20.1933 106.238 20.311C106.158 20.437 106.038 20.5 105.877 20.5C105.725 20.5 105.565 20.4496 105.397 20.3488L100 17.3746L94.6034 20.3488C94.4271 20.4496 94.2668 20.5 94.1226 20.5C93.9543 20.5 93.8261 20.437 93.738 20.311C93.6579 20.1933 93.6178 20.0463 93.6178 19.8699C93.6178 19.8195 93.6258 19.7355 93.6418 19.6178L94.6755 13.3166L90.3005 8.85539C90.1002 8.62854 90 8.42691 90 8.25047C90 7.93961 90.2244 7.74638 90.6731 7.67076L96.7067 6.75079L99.4111 1.0167C99.5633 0.672232 99.7596 0.5 100 0.5C100.24 0.5 100.437 0.672232 100.589 1.0167L103.293 6.75079L109.327 7.67076C109.776 7.74638 110 7.93961 110 8.25047Z" fill="#4895EF" />
                                            <path d="M140 8.25047C140 8.43531 139.896 8.63695 139.688 8.85539L135.325 13.3166L136.358 19.6178C136.366 19.6766 136.37 19.7607 136.37 19.8699C136.37 20.0463 136.326 20.1933 136.238 20.311C136.158 20.437 136.038 20.5 135.877 20.5C135.725 20.5 135.565 20.4496 135.397 20.3488L130 17.3746L124.603 20.3488C124.427 20.4496 124.267 20.5 124.123 20.5C123.954 20.5 123.826 20.437 123.738 20.311C123.658 20.1933 123.618 20.0463 123.618 19.8699C123.618 19.8195 123.626 19.7355 123.642 19.6178L124.675 13.3166L120.3 8.85539C120.1 8.62854 120 8.42691 120 8.25047C120 7.93961 120.224 7.74638 120.673 7.67076L126.707 6.75079L129.411 1.0167C129.563 0.672232 129.76 0.5 130 0.5C130.24 0.5 130.437 0.672232 130.589 1.0167L133.293 6.75079L139.327 7.67076C139.776 7.74638 140 7.93961 140 8.25047Z" fill="#4895EF" />
                                        </svg>
                                    </span>
                                    <span className='seller-score'>4.5</span>
                                    <p className='seller-review'>20 Reviews</p>
                                </div>
                            </div>
                            <div className='buyer'>
                                <p className='buyer-title'>Buyer rating</p>
                                <div className='buyer-rating'>
                                    <span className='buyer-rate'>
                                        <svg width="140" height="21" viewBox="0 0 140 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 8.25047C20 8.43531 19.8958 8.63695 19.6875 8.85539L15.3245 13.3166L16.3582 19.6178C16.3662 19.6766 16.3702 19.7607 16.3702 19.8699C16.3702 20.0463 16.3261 20.1933 16.238 20.311C16.1579 20.437 16.0377 20.5 15.8774 20.5C15.7252 20.5 15.5649 20.4496 15.3966 20.3488L10 17.3746L4.60336 20.3488C4.42708 20.4496 4.26683 20.5 4.1226 20.5C3.95433 20.5 3.82612 20.437 3.73798 20.311C3.65785 20.1933 3.61779 20.0463 3.61779 19.8699C3.61779 19.8195 3.6258 19.7355 3.64183 19.6178L4.67548 13.3166L0.300481 8.85539C0.10016 8.62854 0 8.42691 0 8.25047C0 7.93961 0.224359 7.74638 0.673077 7.67076L6.70673 6.75079L9.41106 1.0167C9.5633 0.672232 9.75962 0.5 10 0.5C10.2404 0.5 10.4367 0.672232 10.5889 1.0167L13.2933 6.75079L19.3269 7.67076C19.7756 7.74638 20 7.93961 20 8.25047Z" fill="#4895EF" />
                                            <path d="M50 8.25047C50 8.43531 49.8958 8.63695 49.6875 8.85539L45.3245 13.3166L46.3582 19.6178C46.3662 19.6766 46.3702 19.7607 46.3702 19.8699C46.3702 20.0463 46.3261 20.1933 46.238 20.311C46.1579 20.437 46.0377 20.5 45.8774 20.5C45.7252 20.5 45.5649 20.4496 45.3966 20.3488L40 17.3746L34.6034 20.3488C34.4271 20.4496 34.2668 20.5 34.1226 20.5C33.9543 20.5 33.8261 20.437 33.738 20.311C33.6579 20.1933 33.6178 20.0463 33.6178 19.8699C33.6178 19.8195 33.6258 19.7355 33.6418 19.6178L34.6755 13.3166L30.3005 8.85539C30.1002 8.62854 30 8.42691 30 8.25047C30 7.93961 30.2244 7.74638 30.6731 7.67076L36.7067 6.75079L39.4111 1.0167C39.5633 0.672232 39.7596 0.5 40 0.5C40.2404 0.5 40.4367 0.672232 40.5889 1.0167L43.2933 6.75079L49.3269 7.67076C49.7756 7.74638 50 7.93961 50 8.25047Z" fill="#4895EF" />
                                            <path d="M80 8.25047C80 8.43531 79.8958 8.63695 79.6875 8.85539L75.3245 13.3166L76.3582 19.6178C76.3662 19.6766 76.3702 19.7607 76.3702 19.8699C76.3702 20.0463 76.3261 20.1933 76.238 20.311C76.1579 20.437 76.0377 20.5 75.8774 20.5C75.7252 20.5 75.5649 20.4496 75.3966 20.3488L70 17.3746L64.6034 20.3488C64.4271 20.4496 64.2668 20.5 64.1226 20.5C63.9543 20.5 63.8261 20.437 63.738 20.311C63.6579 20.1933 63.6178 20.0463 63.6178 19.8699C63.6178 19.8195 63.6258 19.7355 63.6418 19.6178L64.6755 13.3166L60.3005 8.85539C60.1002 8.62854 60 8.42691 60 8.25047C60 7.93961 60.2244 7.74638 60.6731 7.67076L66.7067 6.75079L69.4111 1.0167C69.5633 0.672232 69.7596 0.5 70 0.5C70.2404 0.5 70.4367 0.672232 70.5889 1.0167L73.2933 6.75079L79.3269 7.67076C79.7756 7.74638 80 7.93961 80 8.25047Z" fill="#4895EF" />
                                            <path d="M110 8.25047C110 8.43531 109.896 8.63695 109.688 8.85539L105.325 13.3166L106.358 19.6178C106.366 19.6766 106.37 19.7607 106.37 19.8699C106.37 20.0463 106.326 20.1933 106.238 20.311C106.158 20.437 106.038 20.5 105.877 20.5C105.725 20.5 105.565 20.4496 105.397 20.3488L100 17.3746L94.6034 20.3488C94.4271 20.4496 94.2668 20.5 94.1226 20.5C93.9543 20.5 93.8261 20.437 93.738 20.311C93.6579 20.1933 93.6178 20.0463 93.6178 19.8699C93.6178 19.8195 93.6258 19.7355 93.6418 19.6178L94.6755 13.3166L90.3005 8.85539C90.1002 8.62854 90 8.42691 90 8.25047C90 7.93961 90.2244 7.74638 90.6731 7.67076L96.7067 6.75079L99.4111 1.0167C99.5633 0.672232 99.7596 0.5 100 0.5C100.24 0.5 100.437 0.672232 100.589 1.0167L103.293 6.75079L109.327 7.67076C109.776 7.74638 110 7.93961 110 8.25047Z" fill="#4895EF" />
                                            <path d="M140 8.25047C140 8.43531 139.896 8.63695 139.688 8.85539L135.325 13.3166L136.358 19.6178C136.366 19.6766 136.37 19.7607 136.37 19.8699C136.37 20.0463 136.326 20.1933 136.238 20.311C136.158 20.437 136.038 20.5 135.877 20.5C135.725 20.5 135.565 20.4496 135.397 20.3488L130 17.3746L124.603 20.3488C124.427 20.4496 124.267 20.5 124.123 20.5C123.954 20.5 123.826 20.437 123.738 20.311C123.658 20.1933 123.618 20.0463 123.618 19.8699C123.618 19.8195 123.626 19.7355 123.642 19.6178L124.675 13.3166L120.3 8.85539C120.1 8.62854 120 8.42691 120 8.25047C120 7.93961 120.224 7.74638 120.673 7.67076L126.707 6.75079L129.411 1.0167C129.563 0.672232 129.76 0.5 130 0.5C130.24 0.5 130.437 0.672232 130.589 1.0167L133.293 6.75079L139.327 7.67076C139.776 7.74638 140 7.93961 140 8.25047Z" fill="#4895EF" />
                                        </svg>
                                    </span>
                                    <span className='buyer-score'>4.5</span>
                                    <p className='buyer-review'>20 Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Leftsidebar;