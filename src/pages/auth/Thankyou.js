import React, { Fragment } from 'react';
import '../../styles/resetmail.scss'
import Logo from '../../assets/footer-logo.png'
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
function Thankyou() {
    return (
        <Fragment>
            <div className='resetmail'>
                <Header />
                <div className='resetmail__container'>
                    <div className='resetmail__container-box'>
                        <div className='resetmail__container-box--save'>
                            <div className='resetmail__header'>
                                <img src={Logo} alt='logo' />
                            </div>
                            <div className='resetmail-svg'>
                                <svg width="154" height="117" viewBox="0 0 154 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="77" cy="57.5" r="57" fill="#F1F7FF" />
                                    <circle cx="77" cy="57.5" r="46" fill="#E6F1FF" />
                                    <circle cx="77" cy="57.5" r="35" fill="#E0EEFF" />
                                    <path d="M79.3777 53.4731C81.3419 53.4731 82.426 51.4579 82.426 49.4171C82.426 46.8152 80.6148 45.0296 77.6175 45.0296C73.7019 45.0296 70.8448 47.9248 70.8448 51.7257C70.8448 54.3914 72.7198 56.1133 75.5895 56.1133C76.5461 56.1133 77.4645 55.9475 78.2808 55.6031L78.0257 54.4297C77.3752 54.7358 76.5844 54.8761 75.8446 54.8761C73.5616 54.8761 72.2478 53.7027 72.2478 51.5854C72.2478 48.5753 74.4289 46.2412 77.4262 46.2412C79.7348 46.2412 81.0358 47.4274 81.0358 49.4809C81.0358 50.6926 80.6021 52.2997 79.6327 52.2997C79.0588 52.2997 79.0078 51.8915 79.1098 51.241L79.7093 47.7973H78.217L78.1022 48.4605C77.8344 47.9631 77.3369 47.6953 76.5972 47.6953C74.7732 47.6953 73.5233 49.4171 73.5233 51.3176C73.5233 52.6441 74.2886 53.4859 75.5895 53.4859C76.4696 53.4859 77.2859 53.0777 77.7833 52.4145C77.9364 53.0777 78.4721 53.4731 79.3777 53.4731ZM77.8216 50.2207C77.8216 51.2538 77.0818 52.1594 76.1507 52.1594C75.4492 52.1594 75.1304 51.6875 75.1304 51.0242C75.1304 50.0166 75.7426 49.0217 76.7119 49.0217C77.4262 49.0217 77.8216 49.5319 77.8216 50.2207Z" fill="#4895EF" />
                                    <path d="M100.217 51.1256L100.328 74.734C100.328 76.064 99.8658 77.1909 98.9421 78.1145C98.0185 79.0382 96.8916 79.5 95.5616 79.5H57.766C56.436 79.5 55.3091 79.0382 54.3855 78.1145C53.4618 77.1909 53 76.064 53 74.734V51.1256C53 49.3522 53.7389 47.9852 55.2167 47.0246L76.6084 34.5L98 47.0246C99.4778 47.9852 100.217 49.3522 100.217 51.1256ZM76.6084 62.8744L96.2266 50.6823L76.6084 39.266L57.101 50.6823L76.6084 62.8744Z" fill="#4895EF" />
                                    <path d="M111.457 50.944L113.999 52.2283L112.501 55.1941L115.467 56.6924L114.182 59.2345L111.217 57.7362L109.718 60.702L107.176 59.4178L108.674 56.452L105.709 54.9537L106.993 52.4116L109.959 53.9098L111.457 50.944Z" fill="#24C167" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.2688 20.3944L85.685 21.615L84.261 24.4339L87.0798 25.858L85.8592 28.2741L83.0403 26.8501L81.6163 29.669L79.2001 28.4483L80.6241 25.6295L77.8053 24.2054L79.0259 21.7892L81.8448 23.2133L83.2688 20.3944ZM83.6291 24.6416L86.448 26.0657L85.2274 28.4819L82.4085 27.0578L80.9844 29.8767L78.5682 28.6561L79.9923 25.8372L77.1734 24.4131L78.394 21.9969L81.2129 23.421L82.637 20.6021L85.0532 21.8227L83.6291 24.6416ZM84.8254 21.8976L83.4013 24.7165L86.2202 26.1405L85.1525 28.2541L82.3336 26.83L80.9096 29.6489L78.796 28.5812L80.2201 25.7623L77.4012 24.3382L78.4689 22.2247L81.2878 23.6487L82.7119 20.8299L84.8254 21.8976Z" fill="#FFCC33" />
                                    <mask id="path-7-inside-1_651_23195" fill="white">
                                        <path d="M50.0993 49.0202L51.0277 51.9438L47.6395 53.0957L48.7227 56.5066L45.8184 57.4939L44.7352 54.083L41.3469 55.235L40.4184 52.3114L43.8067 51.1594L42.7235 47.7486L45.6277 46.7612L46.711 50.1721L50.0993 49.0202Z" />
                                    </mask>
                                    <path d="M50.0993 49.0202L48.8117 45.233L52.6762 43.9192L53.9116 47.8094L50.0993 49.0202ZM51.0277 51.9438L54.8401 50.733L56.0266 54.4691L52.3153 55.7309L51.0277 51.9438ZM47.6395 53.0957L43.8271 54.3064L42.6406 50.5703L46.3519 49.3086L47.6395 53.0957ZM48.7227 56.5066L52.5351 55.2958L53.7216 59.0319L50.0102 60.2937L48.7227 56.5066ZM45.8184 57.4939L47.106 61.281L43.2415 62.5948L42.0061 58.7047L45.8184 57.4939ZM44.7352 54.083L43.4477 50.2959L47.3121 48.9821L48.5476 52.8723L44.7352 54.083ZM41.3469 55.235L42.6344 59.0221L38.77 60.3359L37.5346 56.4457L41.3469 55.235ZM40.4184 52.3114L36.6061 53.5221L35.4195 49.786L39.1309 48.5242L40.4184 52.3114ZM43.8067 51.1594L47.6191 49.9487L48.8056 53.6848L45.0942 54.9466L43.8067 51.1594ZM42.7235 47.7486L38.9111 48.9593L37.7246 45.2232L41.436 43.9614L42.7235 47.7486ZM45.6277 46.7612L44.3402 42.9741L48.2046 41.6603L49.4401 45.5505L45.6277 46.7612ZM46.711 50.1721L47.9985 53.9592L44.1341 55.273L42.8986 51.3828L46.711 50.1721ZM53.9116 47.8094L54.8401 50.733L47.2154 53.1545L46.2869 50.2309L53.9116 47.8094ZM52.3153 55.7309L48.927 56.8828L46.3519 49.3086L49.7402 48.1566L52.3153 55.7309ZM51.4518 51.8849L52.5351 55.2958L44.9103 57.7173L43.8271 54.3064L51.4518 51.8849ZM50.0102 60.2937L47.106 61.281L44.5309 53.7068L47.4352 52.7194L50.0102 60.2937ZM42.0061 58.7047L40.9228 55.2938L48.5476 52.8723L49.6308 56.2832L42.0061 58.7047ZM46.0227 57.8702L42.6344 59.0221L40.0594 51.4478L43.4477 50.2959L46.0227 57.8702ZM37.5346 56.4457L36.6061 53.5221L44.2308 51.1006L45.1593 54.0242L37.5346 56.4457ZM39.1309 48.5242L42.5192 47.3723L45.0942 54.9466L41.7059 56.0985L39.1309 48.5242ZM39.9944 52.3702L38.9111 48.9593L46.5358 46.5378L47.6191 49.9487L39.9944 52.3702ZM41.436 43.9614L44.3402 42.9741L46.9152 50.5483L44.011 51.5357L41.436 43.9614ZM49.4401 45.5505L50.5233 48.9613L42.8986 51.3828L41.8154 47.972L49.4401 45.5505ZM45.4235 46.385L48.8117 45.233L51.3868 52.8073L47.9985 53.9592L45.4235 46.385Z" fill="#DF1F24" mask="url(#path-7-inside-1_651_23195)" />
                                    <path d="M2 114.5H152" stroke="#4895EF" stroke-width="4" stroke-linecap="round" />
                                </svg>

                            </div>
                            <div className='resetmail-email'>
                                <h2>Thank you</h2>
                            </div>
                            <div className='resetmail-message'>
                                <p>Your account has been verified. Click on “Continue” to setup your account. </p>
                            </div>
                            <div className='resetmail-footer'>
                                <p><Link to='/' className='resends'>Continue </Link></p> 
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </Fragment>
    );
}

export default Thankyou;