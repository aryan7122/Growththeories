// GrowthTracks.jsx
import React from "react";
import "./GrowthTracks.scss";
import cardImg from '../../../assets/service/Business-inequality-cuate1.svg'
const GrowthTracks = () => {
    return (
        <div className="growth-tracks">
            <div className="box-content-growth-service">

                <div
                    className="content_box_header">
                    <div>
                        <h1 className="title">What Are Growth Tracks?</h1>
                        <p className="description">    Growth tracks are data-driven strategies that guide your business
                            through each stage of growth. We combine rapid experimentation, data
                            insights, and custom solutions tailored to your unique needs.</p>
                    </div>
                    <button className="cta_button"> Discover How Our Growth Tracks Work</button>
                </div>

                <section className="features">
                    <h2 className="title_top_h2">Features</h2>
                    <h2>Key Features Of Our Growth Tracks</h2>
                    <p>
                        Our Growth Tracks offer a unique blend of personalized strategies and
                        data-driven insights designed to deliver measurable results for your
                        business. From rapid experimentation to custom-built solutions, each
                        track is crafted to target your specific growth challenges. Whether
                        you’re focused on customer retention, revenue growth, or market
                        expansion, our approach is tailored to ensure sustainable, scalable
                        success.
                    </p>

                    <div className="features-content">
                        <img
                            src={cardImg}
                            alt="Illustration"
                            className="illustration"
                        />
                        <div className="cards">
                            <div className="card">
                                <div className="card_box_">
                                    <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M2.25607 15.6322C2.29003 15.309 2.52424 15.0485 2.99267 14.5276L4.02374 13.3749C4.27577 13.0558 4.45462 12.5 4.45462 11.9998C4.45462 11.5 4.27571 10.944 4.02371 10.625L2.99267 9.47231C2.52424 8.95137 2.29002 8.6909 2.25607 8.36768C2.22211 8.04446 2.39707 7.74083 2.74698 7.13358L3.24056 6.27698C3.61386 5.62915 3.8005 5.30523 4.11808 5.17607C4.43566 5.0469 4.79482 5.14883 5.51316 5.35267L6.73339 5.69637C7.192 5.80212 7.67315 5.74213 8.0919 5.52698L8.42878 5.33261C8.78786 5.10262 9.06406 4.76352 9.21694 4.36493L9.5509 3.36754C9.77047 2.70753 9.88026 2.37752 10.1416 2.18876C10.403 2 10.7502 2 11.4445 2H12.5593C13.2537 2 13.6009 2 13.8622 2.18876C14.1236 2.37752 14.2334 2.70753 14.453 3.36754L14.7869 4.36493C14.9398 4.76352 15.216 5.10262 15.5751 5.33261L15.912 5.52698C16.3307 5.74213 16.8119 5.80212 17.2705 5.69637L18.4907 5.35267C19.209 5.14883 19.5682 5.0469 19.8858 5.17607C20.2034 5.30523 20.39 5.62915 20.7633 6.27698L21.2569 7.13358C21.6068 7.74083 21.7817 8.04446 21.7478 8.36768C21.7138 8.6909 21.4796 8.95137 21.0112 9.47231L19.9801 10.625C19.7282 10.944 19.5492 11.5 19.5492 11.9998C19.5492 12.5 19.7281 13.0558 19.9801 13.3749L21.0112 14.5276C21.4796 15.0485 21.7138 15.309 21.7478 15.6322C21.7817 15.9555 21.6068 16.2591 21.2569 16.8663L20.7633 17.7229C20.39 18.3707 20.2034 18.6947 19.8858 18.8238C19.5682 18.953 19.209 18.8511 18.4907 18.6472L17.2705 18.3035C16.8118 18.1977 16.3306 18.2578 15.9118 18.473L15.575 18.6674C15.2159 18.8974 14.9398 19.2364 14.787 19.635L14.453 20.6325C14.2334 21.2925 14.1236 21.6225 13.8622 21.8112C13.6009 22 13.2537 22 12.5593 22H11.4445C10.7502 22 10.403 22 10.1416 21.8112C9.88026 21.6225 9.77047 21.2925 9.5509 20.6325" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M2.73696 18.7798C3.81696 17.6998 7.48896 14.0638 7.84896 13.6438C8.22953 13.1998 7.92096 12.5998 8.10456 10.7398C8.1934 9.8398 8.38699 9.16555 8.94096 8.6638C9.60096 8.0398 10.141 8.0398 12.001 7.99781C13.621 8.0398 13.813 7.8598 13.981 8.27981C14.101 8.57981 13.741 8.7598 13.309 9.23981C12.349 10.1998 11.785 10.6798 11.731 10.9798C11.341 12.2998 12.877 13.0798 13.717 12.2398C14.0346 11.9221 15.505 10.4398 15.649 10.3198C15.757 10.2238 16.0155 10.2284 16.141 10.3798C16.249 10.4859 16.261 10.4998 16.249 10.9798C16.2379 11.4241 16.2428 12.062 16.2442 12.7198C16.2459 13.5721 16.201 14.5198 15.841 14.9998C15.121 16.0798 13.921 16.1398 12.841 16.1878C11.821 16.2478 10.981 16.1398 10.717 16.3318C10.501 16.4398 9.36096 17.6398 7.98096 19.0198L5.52096 21.4798C3.48096 23.0998 1.23696 20.5798 2.73696 18.7798Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg></div>
                                    <h3>Custom-Built For Every Business</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor
                                        risus non nisl viverra.
                                    </p>
                                </div>
                                <button className="button_card">
                                    Contact Us <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#3737b5" fill="none">
                                        <path d="M17 7L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </button>
                            </div>
                            <div className="card">
                                <div className="card_box_">
                                    <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M14.5405 2V4.48622C14.5405 6.23417 14.5405 7.10814 14.7545 7.94715C14.9685 8.78616 15.3879 9.55654 16.2267 11.0973L17.3633 13.1852C19.5008 17.1115 20.5696 19.0747 19.6928 20.53L19.6792 20.5522C18.7896 22 16.5264 22 12 22C7.47357 22 5.21036 22 4.3208 20.5522L4.30725 20.53C3.43045 19.0747 4.49918 17.1115 6.63666 13.1852L7.7733 11.0973C8.61209 9.55654 9.03149 8.78616 9.24548 7.94715C9.45947 7.10814 9.45947 6.23417 9.45947 4.48622V2" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M9 16.002L9.00868 15.9996" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 18.002L15.0087 17.9996" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8 2L16 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 11.5563C8.5 10.4029 10.0994 11.2343 12 12.3182C14.5 13.7439 16 12.65 16.5 11.6152" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg></div>
                                    <h3>Rapid Experimentation For Faster Results</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor
                                        risus non nisl viverra.
                                    </p>
                                </div>
                                <button className="button_card">
                                    Contact Us <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#3737b5" fill="none">
                                        <path d="M17 7L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </button>
                            </div>
                            <div className="card ">
                                <div className="card_box_">
                                    <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M21.9644 4.50615C21.9644 4.50615 22.1405 2.72142 21.7095 2.29048M21.7095 2.29048C21.276 1.85699 19.4941 2.0371 19.4941 2.0371M21.7095 2.29048L19 4.99997" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.9644 19.4938C21.9644 19.4938 22.1405 21.2785 21.7095 21.7095M21.7095 21.7095C21.276 22.143 19.4941 21.9629 19.4941 21.9629M21.7095 21.7095L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.29048 2.29047L5 4.99997M2.29048 2.29047C2.72397 1.85699 4.50593 2.0371 4.50593 2.0371M2.29048 2.29047C1.85953 2.72142 2.03561 4.50614 2.03561 4.50614" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.29048 21.7095L5 19M2.29048 21.7095C2.72397 22.143 4.50593 21.9629 4.50593 21.9629M2.29048 21.7095C1.85953 21.2786 2.03561 19.4939 2.03561 19.4939" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M11.914 9.30127C10.8094 9.30127 10 9.94342 10 10.6887C10 11.4339 10.5219 11.8999 12 11.8999C13.6282 11.8999 14 12.6423 14 13.3875C14 14.1328 13.2883 14.7214 11.914 14.7214M11.914 9.30127C12.7848 9.30127 13.2451 9.60613 13.6086 10.0165M11.914 9.30127V8.45703M11.914 14.7214C11.0432 14.7214 10.7046 14.5494 10.225 14.1154M11.914 14.7214V15.5088" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg></div>
                                    <h3>Scalable Solutions For Long-Term Growth</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor
                                        risus non nisl viverra.
                                    </p>
                                </div>
                                <button className="button_card">
                                    Contact Us <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#3737b5" fill="none">
                                        <path d="M17 7L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </button>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    );
};

export default GrowthTracks;
