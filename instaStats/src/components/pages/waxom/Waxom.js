import React from "react";
import './css/styles.css';

import logo from './images/logos.png';
import cart from "./images/icon-cart.png";
import search from "./images/icon-search.png";
import iconWeb from "./images/icon-web.png";
import iconDev from "./images/icon-dev.png";
import iconCustom from "./images/icon-custom.png";
import iconMark from "./images/icon-mark.png";
import browserLeft from "./images/browser-left.png";
import browserCenter from "./images/browser-center.png"
import browserRight from "./images/browser-right.png";
import layers5 from "./images/layers5.png";
import layers4 from "./images/layers4.png";
import layers3 from "./images/layers3.png";
import layers2 from "./images/layers2.png";
import layers1 from "./images/layers1.png";
import layers from "./images/layers.png";
import phone from "./images/phone.png";
import recentLegs from "./images/recent_legs.png";
import recentTyping from "./images/recent_typing.png";
import recentLiner from "./images/recent_liner.png";
import buttonLeft from "./images/button_left.png";
import buttonRight from "./images/button_right.png";
import barberLogo from "./images/barber_logo.png";
import deliciousLogo from "./images/delicious_logo.png";
import designersLogo from "./images/designers_logo.png";
import royalLogo from "./images/royal_logo.png";
import mainLogo from "./images/main_logo.png";
import widgetPhones from "./images/widget_phones.png";
import widgetPackage from "./images/widget_package.png";
import widgetBook from "./images/widget_book.png";
import widgetIcons from "./images/widget_icons.png";



const Waxom = () => {
  return (
    <>
      <header className="page__header">
        <section className="navigation__container">
          <div className="wrapper">
            <nav className="page__navigation navigation">
              <div className="page__logo logo">
                <a className="logo__link link">
                  <img
                    src={logo}
                    alt="Logo"
                    className="logo__image"
                  />
                  <p className="logo__title">Waxom</p>
                </a>
              </div>
              <ul className="navigation__list list">
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    Home
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    About Us
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    Portfolio
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    Features
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    Blog
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    Pricing
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    Shortcodes
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    Contact
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    <img src={cart} alt="Cart" />
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link link">
                    <img src={search} alt="Search" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="page__slider slider">
          <div className="slider__wrapper">
            <div className="slider__content">
              <ul className="slider__list list">
                <li className="slider__item">
                  <p className="slider__description">Unique and Modern Design</p>
                  <p className="slider__title">Portfolio PSD Template</p>
                  <p className="slider__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto mollitia ipsa maxime unde placeat, quisquam dicta
                    soluta facere, excepturi consequatur necessitatibus. Velit
                    asperiores voluptatum nostrum! Voluptatem dignissimos id
                    quam atque.
                  </p>
                  <button className="slider__button">GET STARTED</button>
                </li>
              </ul>
              <button className="slider__prev"></button>
              <button className="slider__next"></button>
            </div>
            <ul className="slider__indicator indicator list">
              <li className="indicator__item">
                <input type="radio" name="" id="" />
              </li>
              <li className="indicator__item" id="checked">
                <input type="radio" name="" id="" />
              </li>
              <li className="indicator__item">
                <input type="radio" name="" id="" />
              </li>
              <li className="indicator__item">
                <input type="radio" name="" id="" />
              </li>
              <li className="indicator__item">
                <input type="radio" name="" id="" />
              </li>
            </ul>
          </div>
        </section>
      </header>
      <main className="page__content content">
        <section className="content__services services">
          <div className="wrapper">
            <ul className="services__list list">
              <li className="services__item">
                <div className="services__container">
                  <img
                    src={iconWeb}
                    alt=""
                    className="services__image"
                  />
                  <p className="services__title">Web & App Design</p>
                  <p className="services__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut omnis quis, qui culpa sed laboriosam? Aut excepturi quae
                    minima eaque. Laudantium hic tempore amet adipisci
                    voluptates id ut incidunt dolores.
                  </p>
                </div>
              </li>
              <li className="services__item">
                <div className="services__container">
                  <img
                    src={iconDev}
                    alt=""
                    className="services__image"
                  />
                  <p className="services__title">Development</p>
                  <p className="services__subtitle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem veniam, reprehenderit quos distinctio sint dolorem
                    neque maiores asperiores illum harum temporibus nesciunt
                    cumque a doloribus quibusdam sunt perferendis praesentium
                    quis.
                  </p>
                </div>
              </li>
              <li className="services__item">
                <div className="services__container">
                  <img
                    src={iconCustom}
                    alt=""
                    className="services__image"
                  />
                  <p className="services__title">Customization</p>
                  <p className="services__subtitle">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minus ab architecto sit doloremque quasi perspiciatis,
                    maiores quis incidunt sint unde, id a et non quae sapiente
                    culpa repellat. Nostrum, dicta.
                  </p>
                </div>
              </li>
              <li className="services__item">
                <div className="services__container">
                  <img
                    src={iconMark}
                    alt=""
                    className="services__image"
                  />
                  <p className="services__title">Marketing</p>
                  <p className="services__subtitle">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil nostrum doloremque in, officia suscipit ipsa voluptate
                    nam itaque. Eius minima magnam perferendis ex, quia autem
                    vero quibusdam commodi perspiciatis neque?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="content__ideas ideas">
          <div className="wrapper">
            <div className="ideas__container">
              <div className="ideas__about">
                <p className="ideas__title">Waxom is Realization of your Ideas</p>
                <p className="ideas__subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum quod ipsa nulla blanditiis distinctio illum odio
                  porro. Corrupti, tenetur eveniet laboriosam obcaecati fugit
                  quam dolores similique a quas velit omnis.
                </p>
              </div>
              <div className="ideas__gallery">
                <img
                  src={browserLeft}
                  alt=""
                  className="ideas__photo__left"
                />
                <img
                  src={browserCenter}
                  alt=""
                  className="ideas__photo__center"
                />
                <img
                  src={browserRight}
                  alt=""
                  className="ideas__photo__right"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="page__purchase-now purchase">
          <div className="wrapper">
            <div className="purchase__container">
              <div className="purchase__about">
                <p className="purchase__title">
                  <span className="marked">Waxom</span> Multipurpose WordPress Theme
                </p>
                <p className="purchase__subtitle">
                  Don't Forget to Rate the Template. Thanks so much!
                </p>
              </div>
              <button className="purchase__button button">Purchase Now</button>
            </div>
          </div>
        </section>
        <section className="page__projects projects">
          <div className="wrapper">
            <div className="projects__container">
              <div className="projects__about">
                <p className="projects__title">Our Latest Projects.</p>
                <p className="projects__subtitle">
                  Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius. Claritas est etiam processus dynamicus, qui
                  sequitur mutationem consuetudium.
                </p>
              </div>
              <div className="projects__categories categories">
                <ul className="categories__list list">
                  <li className="categories__item">
                    <button className="categories__selector button">All</button>
                  </li>
                  <li className="categories__item">
                    <button className="categories__selector button">
                      Web Design
                    </button>
                  </li>
                  <li className="categories__item">
                    <button className="categories__selector button">
                      Mobile App
                    </button>
                  </li>
                  <li className="categories__item">
                    <button className="categories__selector button">
                      Illustration
                    </button>
                  </li>
                  <li className="categories__item">
                    <button className="categories__selector button">
                      Photography
                    </button>
                  </li>
                </ul>
              </div>
              <div className="projects__content">
                <ul className="projects__list list">
                  <li className="projects__item">
                    <figure className="projects__image">
                      <div className="image__container">
                        <img src={layers1} alt="" />
                      </div>
                      <svg className="projects__icon-link">
                        <use href="./images/icons/sprite.svg#icon-chain"></use>
                      </svg>
                      <svg className="projects__icon-find">
                        <path
                          id="icon-find"
                          d="M12.304138,5.081543 C11.577759,5.081543 10.988525,5.662842 10.988525,6.376953 C10.988525,7.0944824 11.577759,7.673828 12.304138,7.673828 C13.911499,7.673828 15.346802,8.558838 16.051758,9.98291 C16.279602,10.444092 16.747192,10.711182 17.234497,10.711182 C17.428589,10.711182 17.624756,10.668457 17.810364,10.580811 C18.463684,10.266846 18.735046,9.490723 18.416565,8.847168 C17.2677,6.5249023 14.924744,5.081543 12.304138,5.081543 ZM26.456116,22.881348 C26.456116,22.881348 22.07257,18.563232 22.07257,18.563232 C23.370117,16.76416 24.140625,14.57251 24.140625,12.202393 C24.140625,6.128174 19.124939,1.1855469 12.958862,1.1855469 C6.7927856,1.1855469 1.7770996,6.128174 1.7770996,12.202393 C1.7770996,18.275635 6.7927856,23.218262 12.958862,23.218262 C15.53479,23.218262 17.90216,22.3479 19.794678,20.900879 C19.794678,20.900879 24.130005,25.17163 24.130005,25.17163 C24.451233,25.488525 24.872742,25.645752 25.29309,25.645752 C25.714233,25.645752 26.13501,25.489014 26.456116,25.17163 C27.098389,24.54004 27.098389,23.513916 26.456116,22.881348 ZM4.4087524,12.202393 C4.4087524,7.557129 8.244934,3.777832 12.959656,3.777832 C17.674194,3.777832 21.510254,7.557129 21.510254,12.202393 C21.510254,14.1345215 20.840088,15.91333 19.724243,17.33545 C19.355408,17.80542 18.941162,18.239502 18.481323,18.62378 C16.990295,19.870605 15.064209,20.627197 12.959656,20.627197 C8.244568,20.625732 4.4087524,16.846924 4.4087524,12.202393 Z"
                        ></path>
                      </svg>
                      <svg className="projects__icon-triangle">
                        <path
                          id="icon-triangle"
                          d="M16.999817,1.9968262 C16.999817,1.9968262 32.009186,11.997803 32.009186,11.997803 C32.009186,11.997803 1.9905396,11.997803 1.9905396,11.997803 C1.9905396,11.997803 16.999817,1.9968262 16.999817,1.9968262 Z"
                        ></path>
                      </svg>
                    </figure>
                    <figcaption className="projects__caption caption">
                      <p className="caption__title">Claritas Etiam Processus</p>
                      <p className="caption__subtitle">Photography, Nature</p>
                    </figcaption>
                  </li>
                  <li className="projects__item">
                    <figure className="projects__image">
                      <div className="image__container">
                        <img src={layers} alt="" />
                      </div>
                      <svg className="projects__icon-link">
                        <use href="./images/icons/sprite.svg#icon-chain"></use>
                      </svg>
                      <svg className="projects__icon-find">
                        <path
                          id="icon-find"
                          d="M12.304138,5.081543 C11.577759,5.081543 10.988525,5.662842 10.988525,6.376953 C10.988525,7.0944824 11.577759,7.673828 12.304138,7.673828 C13.911499,7.673828 15.346802,8.558838 16.051758,9.98291 C16.279602,10.444092 16.747192,10.711182 17.234497,10.711182 C17.428589,10.711182 17.624756,10.668457 17.810364,10.580811 C18.463684,10.266846 18.735046,9.490723 18.416565,8.847168 C17.2677,6.5249023 14.924744,5.081543 12.304138,5.081543 ZM26.456116,22.881348 C26.456116,22.881348 22.07257,18.563232 22.07257,18.563232 C23.370117,16.76416 24.140625,14.57251 24.140625,12.202393 C24.140625,6.128174 19.124939,1.1855469 12.958862,1.1855469 C6.7927856,1.1855469 1.7770996,6.128174 1.7770996,12.202393 C1.7770996,18.275635 6.7927856,23.218262 12.958862,23.218262 C15.53479,23.218262 17.90216,22.3479 19.794678,20.900879 C19.794678,20.900879 24.130005,25.17163 24.130005,25.17163 C24.451233,25.488525 24.872742,25.645752 25.29309,25.645752 C25.714233,25.645752 26.13501,25.489014 26.456116,25.17163 C27.098389,24.54004 27.098389,23.513916 26.456116,22.881348 ZM4.4087524,12.202393 C4.4087524,7.557129 8.244934,3.777832 12.959656,3.777832 C17.674194,3.777832 21.510254,7.557129 21.510254,12.202393 C21.510254,14.1345215 20.840088,15.91333 19.724243,17.33545 C19.355408,17.80542 18.941162,18.239502 18.481323,18.62378 C16.990295,19.870605 15.064209,20.627197 12.959656,20.627197 C8.244568,20.625732 4.4087524,16.846924 4.4087524,12.202393 Z"
                        ></path>
                      </svg>
                      <svg className="projects__icon-triangle">
                        <path
                          id="icon-triangle"
                          d="M16.999817,1.9968262 C16.999817,1.9968262 32.009186,11.997803 32.009186,11.997803 C32.009186,11.997803 1.9905396,11.997803 1.9905396,11.997803 C1.9905396,11.997803 16.999817,1.9968262 16.999817,1.9968262 Z"
                        ></path>
                      </svg>
                    </figure>
                    <figcaption className="projects__caption caption">
                      <p className="caption__title">Quam Nutamus Farum</p>
                      <p className="caption__subtitle">Graphic Design, Mock-Up</p>
                    </figcaption>
                  </li>
                  <li className="projects__item">
                    <figure className="projects__image">
                      <div className="image__container">
                        <img src={layers2} alt="" />
                      </div>
                      <svg className="projects__icon-link">
                        <use href="./images/icons/sprite.svg#icon-chain"></use>
                      </svg>
                      <svg className="projects__icon-find">
                        <path
                          id="icon-find"
                          d="M12.304138,5.081543 C11.577759,5.081543 10.988525,5.662842 10.988525,6.376953 C10.988525,7.0944824 11.577759,7.673828 12.304138,7.673828 C13.911499,7.673828 15.346802,8.558838 16.051758,9.98291 C16.279602,10.444092 16.747192,10.711182 17.234497,10.711182 C17.428589,10.711182 17.624756,10.668457 17.810364,10.580811 C18.463684,10.266846 18.735046,9.490723 18.416565,8.847168 C17.2677,6.5249023 14.924744,5.081543 12.304138,5.081543 ZM26.456116,22.881348 C26.456116,22.881348 22.07257,18.563232 22.07257,18.563232 C23.370117,16.76416 24.140625,14.57251 24.140625,12.202393 C24.140625,6.128174 19.124939,1.1855469 12.958862,1.1855469 C6.7927856,1.1855469 1.7770996,6.128174 1.7770996,12.202393 C1.7770996,18.275635 6.7927856,23.218262 12.958862,23.218262 C15.53479,23.218262 17.90216,22.3479 19.794678,20.900879 C19.794678,20.900879 24.130005,25.17163 24.130005,25.17163 C24.451233,25.488525 24.872742,25.645752 25.29309,25.645752 C25.714233,25.645752 26.13501,25.489014 26.456116,25.17163 C27.098389,24.54004 27.098389,23.513916 26.456116,22.881348 ZM4.4087524,12.202393 C4.4087524,7.557129 8.244934,3.777832 12.959656,3.777832 C17.674194,3.777832 21.510254,7.557129 21.510254,12.202393 C21.510254,14.1345215 20.840088,15.91333 19.724243,17.33545 C19.355408,17.80542 18.941162,18.239502 18.481323,18.62378 C16.990295,19.870605 15.064209,20.627197 12.959656,20.627197 C8.244568,20.625732 4.4087524,16.846924 4.4087524,12.202393 Z"
                        ></path>
                      </svg>
                      <svg className="projects__icon-triangle">
                        <path
                          id="icon-triangle"
                          d="M16.999817,1.9968262 C16.999817,1.9968262 32.009186,11.997803 32.009186,11.997803 C32.009186,11.997803 1.9905396,11.997803 1.9905396,11.997803 C1.9905396,11.997803 16.999817,1.9968262 16.999817,1.9968262 Z"
                        ></path>
                      </svg>
                    </figure>
                    <figcaption className="projects__caption caption">
                      <p className="caption__title">Usus Legentis Videntur</p>
                      <p className="caption__subtitle">Photography, Holiday</p>
                    </figcaption>
                  </li>
                  <li className="projects__item">
                    <figure className="projects__image">
                      <div className="image__container">
                        <img src={layers3} alt="" />
                      </div>
                      <svg className="projects__icon-link">
                        <use href="./images/icons/sprite.svg#icon-chain"></use>
                      </svg>
                      <svg className="projects__icon-find">
                        <path
                          id="icon-find"
                          d="M12.304138,5.081543 C11.577759,5.081543 10.988525,5.662842 10.988525,6.376953 C10.988525,7.0944824 11.577759,7.673828 12.304138,7.673828 C13.911499,7.673828 15.346802,8.558838 16.051758,9.98291 C16.279602,10.444092 16.747192,10.711182 17.234497,10.711182 C17.428589,10.711182 17.624756,10.668457 17.810364,10.580811 C18.463684,10.266846 18.735046,9.490723 18.416565,8.847168 C17.2677,6.5249023 14.924744,5.081543 12.304138,5.081543 ZM26.456116,22.881348 C26.456116,22.881348 22.07257,18.563232 22.07257,18.563232 C23.370117,16.76416 24.140625,14.57251 24.140625,12.202393 C24.140625,6.128174 19.124939,1.1855469 12.958862,1.1855469 C6.7927856,1.1855469 1.7770996,6.128174 1.7770996,12.202393 C1.7770996,18.275635 6.7927856,23.218262 12.958862,23.218262 C15.53479,23.218262 17.90216,22.3479 19.794678,20.900879 C19.794678,20.900879 24.130005,25.17163 24.130005,25.17163 C24.451233,25.488525 24.872742,25.645752 25.29309,25.645752 C25.714233,25.645752 26.13501,25.489014 26.456116,25.17163 C27.098389,24.54004 27.098389,23.513916 26.456116,22.881348 ZM4.4087524,12.202393 C4.4087524,7.557129 8.244934,3.777832 12.959656,3.777832 C17.674194,3.777832 21.510254,7.557129 21.510254,12.202393 C21.510254,14.1345215 20.840088,15.91333 19.724243,17.33545 C19.355408,17.80542 18.941162,18.239502 18.481323,18.62378 C16.990295,19.870605 15.064209,20.627197 12.959656,20.627197 C8.244568,20.625732 4.4087524,16.846924 4.4087524,12.202393 Z"
                        ></path>
                      </svg>
                      <svg className="projects__icon-triangle">
                        <path
                          id="icon-triangle"
                          d="M16.999817,1.9968262 C16.999817,1.9968262 32.009186,11.997803 32.009186,11.997803 C32.009186,11.997803 1.9905396,11.997803 1.9905396,11.997803 C1.9905396,11.997803 16.999817,1.9968262 16.999817,1.9968262 Z"
                        ></path>
                      </svg>
                    </figure>
                    <figcaption className="projects__caption caption">
                      <p className="caption__title">Claritas Etiam Processus</p>
                      <p className="caption__subtitle">Photography, Nature</p>
                    </figcaption>
                  </li>
                  <li className="projects__item">
                    <figure className="projects__image">
                      <div className="image__container">
                        <img src={layers4} alt="" />
                      </div>
                      <svg className="projects__icon-link">
                        <use href="./images/icons/sprite.svg#icon-chain"></use>
                      </svg>
                      <svg className="projects__icon-find">
                        <path
                          id="icon-find"
                          d="M12.304138,5.081543 C11.577759,5.081543 10.988525,5.662842 10.988525,6.376953 C10.988525,7.0944824 11.577759,7.673828 12.304138,7.673828 C13.911499,7.673828 15.346802,8.558838 16.051758,9.98291 C16.279602,10.444092 16.747192,10.711182 17.234497,10.711182 C17.428589,10.711182 17.624756,10.668457 17.810364,10.580811 C18.463684,10.266846 18.735046,9.490723 18.416565,8.847168 C17.2677,6.5249023 14.924744,5.081543 12.304138,5.081543 ZM26.456116,22.881348 C26.456116,22.881348 22.07257,18.563232 22.07257,18.563232 C23.370117,16.76416 24.140625,14.57251 24.140625,12.202393 C24.140625,6.128174 19.124939,1.1855469 12.958862,1.1855469 C6.7927856,1.1855469 1.7770996,6.128174 1.7770996,12.202393 C1.7770996,18.275635 6.7927856,23.218262 12.958862,23.218262 C15.53479,23.218262 17.90216,22.3479 19.794678,20.900879 C19.794678,20.900879 24.130005,25.17163 24.130005,25.17163 C24.451233,25.488525 24.872742,25.645752 25.29309,25.645752 C25.714233,25.645752 26.13501,25.489014 26.456116,25.17163 C27.098389,24.54004 27.098389,23.513916 26.456116,22.881348 ZM4.4087524,12.202393 C4.4087524,7.557129 8.244934,3.777832 12.959656,3.777832 C17.674194,3.777832 21.510254,7.557129 21.510254,12.202393 C21.510254,14.1345215 20.840088,15.91333 19.724243,17.33545 C19.355408,17.80542 18.941162,18.239502 18.481323,18.62378 C16.990295,19.870605 15.064209,20.627197 12.959656,20.627197 C8.244568,20.625732 4.4087524,16.846924 4.4087524,12.202393 Z"
                        ></path>
                      </svg>
                      <svg className="projects__icon-triangle">
                        <path
                          id="icon-triangle"
                          d="M16.999817,1.9968262 C16.999817,1.9968262 32.009186,11.997803 32.009186,11.997803 C32.009186,11.997803 1.9905396,11.997803 1.9905396,11.997803 C1.9905396,11.997803 16.999817,1.9968262 16.999817,1.9968262 Z"
                        ></path>
                      </svg>
                    </figure>
                    <figcaption className="projects__caption caption">
                      <p className="caption__title">Quam Nutamus Farum</p>
                      <p className="caption__subtitle">Graphic Design, Mock-Up</p>
                    </figcaption>
                  </li>
                  <li className="projects__item">
                    <figure className="projects__image">
                      <div className="image__container">
                        <img src={layers5} alt="" />
                      </div>
                      <svg className="projects__icon-link">
                        <use href="./images/icons/sprite.svg#icon-chain"></use>
                      </svg>
                      <svg className="projects__icon-find">
                        <path
                          id="icon-find"
                          d="M12.304138,5.081543 C11.577759,5.081543 10.988525,5.662842 10.988525,6.376953 C10.988525,7.0944824 11.577759,7.673828 12.304138,7.673828 C13.911499,7.673828 15.346802,8.558838 16.051758,9.98291 C16.279602,10.444092 16.747192,10.711182 17.234497,10.711182 C17.428589,10.711182 17.624756,10.668457 17.810364,10.580811 C18.463684,10.266846 18.735046,9.490723 18.416565,8.847168 C17.2677,6.5249023 14.924744,5.081543 12.304138,5.081543 ZM26.456116,22.881348 C26.456116,22.881348 22.07257,18.563232 22.07257,18.563232 C23.370117,16.76416 24.140625,14.57251 24.140625,12.202393 C24.140625,6.128174 19.124939,1.1855469 12.958862,1.1855469 C6.7927856,1.1855469 1.7770996,6.128174 1.7770996,12.202393 C1.7770996,18.275635 6.7927856,23.218262 12.958862,23.218262 C15.53479,23.218262 17.90216,22.3479 19.794678,20.900879 C19.794678,20.900879 24.130005,25.17163 24.130005,25.17163 C24.451233,25.488525 24.872742,25.645752 25.29309,25.645752 C25.714233,25.645752 26.13501,25.489014 26.456116,25.17163 C27.098389,24.54004 27.098389,23.513916 26.456116,22.881348 ZM4.4087524,12.202393 C4.4087524,7.557129 8.244934,3.777832 12.959656,3.777832 C17.674194,3.777832 21.510254,7.557129 21.510254,12.202393 C21.510254,14.1345215 20.840088,15.91333 19.724243,17.33545 C19.355408,17.80542 18.941162,18.239502 18.481323,18.62378 C16.990295,19.870605 15.064209,20.627197 12.959656,20.627197 C8.244568,20.625732 4.4087524,16.846924 4.4087524,12.202393 Z"
                        ></path>
                      </svg>
                      <svg className="projects__icon-triangle">
                        <path
                          id="icon-triangle"
                          d="M16.999817,1.9968262 C16.999817,1.9968262 32.009186,11.997803 32.009186,11.997803 C32.009186,11.997803 1.9905396,11.997803 1.9905396,11.997803 C1.9905396,11.997803 16.999817,1.9968262 16.999817,1.9968262 Z"
                        ></path>
                      </svg>
                    </figure>
                    <figcaption className="projects__caption caption">
                      <p className="caption__title">Usus Legentis Videntur</p>
                      <p className="caption__subtitle">Photography, Holiday</p>
                    </figcaption>
                  </li>
                </ul>
              </div>
              <button className="projects__button button">load more</button>
            </div>
          </div>
        </section>
        <section className="page__presentation presentation">
          <div className="wrapper">
            <div className="presentation__container">
              <button className="presentation__play-btn button"></button>
              <div className="presentation__about">
                <span className="presentation__title">
                  Waxom Video Presentation
                </span>
                <span className="presentation__subtitle">
                  Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius, qui sequitur mutationem consuetudium.
                </span>
              </div>
              <time className="presentation__timer">03:26</time>
            </div>
          </div>
        </section>
        <section className="page__mobile mobile">
          <div className="wrapper">
            <div className="mobile__container">
              <figure className="mobile__content content">
                <img src={phone} alt="" className="content__image" />
              </figure>
              <figcaption className="mobile__caption">
                <span className="mobile__title">Excellent for Mobile Devices.</span>
                <span className="mobile__subtitle">
                  Qisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Investigationes demonstraverunt lectores legere me
                  lius quod ii legunt saepius claritas. Eodem modo typi, qui
                  nunc nobis videntur parum clari, fiant sollemnes in futurum.
                </span>
                <ul className="mobile__list list">
                  <li className="mobile__item">
                    Nam liber tempor cum soluta nobis eleifend option;
                  </li>
                  <li className="mobile__item">
                    Option congue nihil imperdiet doming id quod mazim placerat
                    facer;
                  </li>
                  <li className="mobile__item">
                    Eodem modo typi, qui nunc nobis videntur parum futurum;
                  </li>
                  <li className="mobile__item">
                    Investigationes demonstraverunt lectores
                  </li>
                </ul>
              </figcaption>
            </div>
          </div>
        </section>
        <section className="page__statistics statistics">
          <div className="wrapper">
            <div className="statistics__container">
              <ul className="statistics__list list">
                <li className="statistics__item">
                  <svg
                    width="46px"
                    height="47px"
                    viewBox="0 0 46 47"
                    className="statistics__icon"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="#c7b299"
                      d="M20.937439,32.24951 C26.625366,32.24951 31.249939,26.620605 31.249939,19.702637 C31.249939,12.783691 26.625366,7.15625 20.937439,7.15625 C18.12439,7.15625 15.497803,8.501953 13.542847,10.943848 C11.660156,13.297852 10.623535,16.408203 10.624939,19.702637 C10.624939,26.62207 15.250183,32.24951 20.937439,32.24951 ZM20.937439,9.905762 C25.10675,9.905762 28.499939,14.300293 28.499939,19.702637 C28.499939,25.105957 25.10675,29.5 20.937439,29.5 C16.768127,29.5 13.374939,25.105957 13.372192,19.702637 C13.372192,14.300293 16.76538,9.905762 20.937439,9.905762 ZM29.598328,30.875 C28.838318,30.875 28.223328,31.489746 28.223328,32.24951 C28.223328,33.009766 28.838318,33.625 29.598328,33.625 C34.29944,33.625 38.125,37.450195 38.125,42.152832 C38.125,42.75537 37.6308,43.25 37.023804,43.25 C37.023804,43.25 4.8483276,43.25 4.8483276,43.25 C4.243469,43.25 3.749878,42.7583 3.749878,42.152832 C3.749878,37.450195 7.5741577,33.625 12.273804,33.625 C13.033936,33.625 13.648804,33.009766 13.648804,32.24951 C13.648804,31.489746 13.033936,30.875 12.273804,30.875 C6.057495,30.875 1.0,35.934082 1.0,42.152832 C1.0,44.274414 2.7268066,45.99951 4.8483276,45.99951 C4.8483276,45.99951 37.023804,45.99951 37.023804,45.99951 C39.14685,45.99951 40.875,44.274414 40.875,42.152832 C40.875,35.934082 35.815308,30.875 29.598328,30.875 ZM21.942566,5.6289062 C22.926758,5.044922 23.976196,4.7509766 25.062439,4.7509766 C29.23175,4.7509766 32.62494,9.145996 32.62494,14.546875 C32.62494,15.516113 32.51758,16.466309 32.30542,17.375 C32.1308,18.114258 32.590027,18.854004 33.328552,19.027344 C33.434753,19.05371 33.539307,19.063965 33.644043,19.063965 C34.268433,19.063965 34.83252,18.63623 34.981506,18.003906 C35.2406,16.888672 35.37494,15.726074 35.37494,14.546875 C35.37494,7.6289062 30.750427,2.0 25.062439,2.0 C23.498718,2.0 21.938477,2.4355469 20.544128,3.2607422 C19.889404,3.6469727 19.674011,4.491211 20.059937,5.1445312 C20.446716,5.7978516 21.29187,6.0146484 21.942566,5.6289062 ZM33.99994,25.375 C33.23993,25.375 32.62494,25.989746 32.62494,26.749512 C32.62494,27.509766 33.23993,28.124512 33.99994,28.124512 C38.700928,28.124512 42.25,32.04297 42.25,36.742676 C42.25,36.898438 42.220337,37.053223 42.155945,37.190918 C41.84845,37.88672 42.161316,38.697754 42.854248,39.006348 C43.03418,39.086914 43.224792,39.125 43.41284,39.125 C43.939148,39.125 44.441406,38.818848 44.669617,38.308105 C44.888428,37.813965 44.999878,37.287598 44.999878,36.739746 C44.999878,30.527344 40.21698,25.375 33.99994,25.375 Z"
                    />
                  </svg>
                  <span className="statistics__amount">3587</span>
                  <span className="statistics__name">Satisfied Clients</span>
                </li>
                <li className="statistics__item">
                  <svg
                    width="51px"
                    height="47px"
                    viewBox="0 0 51 47"
                    className="statistics__icon"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="#c7b299"
                      d="M48.043335,44.748535 C48.043335,45.439453 47.490845,45.99951 46.809326,45.99951 C46.809326,45.99951 3.2338867,45.99951 3.2338867,45.99951 C2.5524902,45.99951 2.0,45.439453 2.0,44.748535 C2.0,44.058105 2.5524902,43.498047 3.2338867,43.498047 C3.2338867,43.498047 46.809326,43.498047 46.809326,43.498047 C47.490845,43.498047 48.043335,44.058105 48.043335,44.748535 ZM23.769165,24.21289 C24.006958,24.437988 24.309082,24.549316 24.6109,24.549316 C24.940918,24.549316 25.270264,24.416016 25.513367,24.151855 C25.97821,23.646484 25.951294,22.855469 25.453064,22.38379 C23.337524,20.382324 23.7901,16.313965 25.608215,14.01416 C28.075134,10.893555 28.618164,5.3305664 25.452942,2.336914 C24.954773,1.8657227 24.173706,1.8930664 23.70874,2.3984375 C23.243896,2.9033203 23.270996,3.6953125 23.76941,4.166504 C25.6698,5.963867 25.627441,9.98877 23.682434,12.449707 C22.403992,14.066895 21.639893,16.234375 21.585876,18.396484 C21.52649,20.759277 22.302002,22.824707 23.769165,24.21289 ZM49.99994,21.614258 C49.99994,21.614258 49.99994,24.01416 49.99994,24.01416 C49.99994,27.45459 47.23938,30.25293 43.845886,30.25293 C43.845886,30.25293 41.09131,30.25293 41.09131,30.25293 C39.221313,35.523926 34.240173,39.30371 28.40503,39.30371 C28.40503,39.30371 21.63861,39.30371 21.63861,39.30371 C14.207886,39.30371 8.162537,33.175293 8.162537,25.642578 C8.162537,25.642578 8.162537,13.231934 8.162537,13.231934 C8.162537,12.541016 8.715027,11.980957 9.396545,11.980957 C9.396545,11.980957 17.311829,11.980957 17.311829,11.980957 C18.918457,9.504883 18.846619,5.8535156 17.062805,4.166504 C16.564636,3.6948242 16.537659,2.9033203 17.002502,2.3984375 C17.467468,1.8930664 18.248413,1.8657227 18.746582,2.3374023 C21.91101,5.3305664 21.368164,10.893555 18.901978,14.01416 C17.08319,16.314453 16.630432,20.382324 18.746582,22.38379 C19.244873,22.855469 19.271973,23.646484 18.807129,24.151855 C18.342163,24.657227 17.561218,24.68457 17.062927,24.213379 C15.595459,22.824707 14.819885,20.759277 14.878906,18.396484 C14.91272,17.049316 15.222168,15.700195 15.76001,14.48291 C15.76001,14.48291 10.630432,14.48291 10.630432,14.48291 C10.630432,14.48291 10.630432,25.642578 10.630432,25.642578 C10.630432,31.795898 15.568787,36.801758 21.63861,36.801758 C21.63861,36.801758 28.40503,36.801758 28.40503,36.801758 C34.474854,36.801758 39.413208,31.79541 39.413208,25.642578 C39.413208,25.642578 39.413208,14.48291 39.413208,14.48291 C39.413208,14.48291 30.134949,14.48291 30.134949,14.48291 C29.45343,14.48291 28.90094,13.922852 28.90094,13.231934 C28.90094,12.541016 29.45343,11.980957 30.134949,11.980957 C30.134949,11.980957 40.647278,11.980957 40.647278,11.980957 C41.328613,11.980957 41.881165,12.541016 41.881165,13.231934 C41.881165,13.231934 41.881165,15.375 41.881165,15.375 C41.881165,15.375 43.84601,15.375 43.84601,15.375 C47.239136,15.375 49.99994,18.173828 49.99994,21.614258 ZM47.53192,21.614258 C47.53192,19.55371 45.878357,17.876953 43.845886,17.876953 C43.845886,17.876953 41.881042,17.876953 41.881042,17.876953 C41.881042,17.876953 41.881042,27.751465 41.881042,27.751465 C41.881042,27.751465 43.845886,27.751465 43.845886,27.751465 C45.878357,27.751465 47.53192,26.074707 47.53192,24.01416 C47.53192,24.01416 47.53192,21.614258 47.53192,21.614258 Z"
                    />
                  </svg>
                  <span className="statistics__amount">207</span>
                  <span className="statistics__name">Cups of coffee</span>
                </li>
                <li className="statistics__item">
                  <svg
                    width="46px"
                    height="46px"
                    viewBox="0 0 46 46"
                    className="statistics__icon"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="#c7b299"
                      d="M29.872864,24.373535 C29.872864,24.373535 16.125488,24.373535 16.125488,24.373535 C15.366577,24.373535 14.750732,24.989746 14.750732,25.748535 C14.750732,26.507812 15.366577,27.123535 16.125488,27.123535 C16.125488,27.123535 29.872864,27.123535 29.872864,27.123535 C30.632141,27.123535 31.247498,26.507812 31.247498,25.748535 C31.247498,24.989746 30.632141,24.373535 29.872864,24.373535 ZM32.622192,16.125977 C32.622192,16.125977 13.376099,16.125977 13.376099,16.125977 C12.617126,16.125977 12.001282,16.74121 12.001282,17.500488 C12.001282,18.259277 12.617126,18.875 13.376099,18.875 C13.376099,18.875 32.622192,18.875 32.622192,18.875 C33.38159,18.875 33.99695,18.259277 33.99695,17.500488 C33.99695,16.74121 33.38159,16.125977 32.622192,16.125977 ZM22.999268,1.003418 C10.852051,1.003418 1.003418,9.619629 1.003418,20.249512 C1.003418,26.324707 4.227234,31.733398 9.251648,35.260742 C9.251648,35.260742 9.251648,44.995117 9.251648,44.995117 C9.251648,44.995117 18.887451,39.148438 18.887451,39.148438 C20.22113,39.368164 21.592834,39.496094 22.999268,39.496094 C35.148132,39.496094 44.9953,30.878906 44.9953,20.249512 C44.9953,9.619629 35.148132,1.003418 22.999268,1.003418 ZM22.999268,36.74707 C21.393433,36.74707 19.843018,36.56006 18.352661,36.242188 C18.352661,36.242188 11.880127,40.132812 11.880127,40.132812 C11.880127,40.132812 11.966858,33.756348 11.966858,33.756348 C7.005371,30.77246 3.7527466,25.839355 3.7527466,20.249512 C3.7527466,11.13916 12.36969,3.7524414 22.999268,3.7524414 C33.628662,3.7524414 42.24585,11.13916 42.24585,20.249512 C42.24585,29.360352 33.628662,36.74707 22.999268,36.74707 Z"
                    />
                  </svg>
                  <span className="statistics__amount">2500</span>
                  <span className="statistics__name">Blog posts</span>
                </li>
                <li className="statistics__item">
                  <svg
                    width="47px"
                    height="47px"
                    viewBox="0 0 47 47"
                    className="statistics__icon"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="#c7b299"
                      d="M32.25,2.0 C31.825562,2.0 31.402588,2.025879 30.9823,2.0644531 C30.82788,2.0786133 30.67627,2.100586 30.523071,2.1206055 C30.26538,2.1518555 30.010254,2.190918 29.755005,2.237793 C29.567017,2.272461 29.383057,2.3105469 29.203247,2.3520508 C28.992432,2.3999023 28.782837,2.4560547 28.573486,2.5136719 C28.374634,2.569336 28.177368,2.6225586 27.982666,2.6860352 C27.80542,2.7436523 27.633545,2.8134766 27.458862,2.878418 C26.999634,3.0507812 26.55127,3.244629 26.11621,3.4614258 C26.030273,3.503418 25.940308,3.5424805 25.855713,3.588379 C25.62732,3.7089844 25.407104,3.8432617 25.184204,3.975586 C25.063354,4.050293 24.939941,4.120117 24.819092,4.198242 C24.603638,4.3359375 24.39746,4.4833984 24.191406,4.631836 C24.128906,4.677246 24.06311,4.7182617 23.999878,4.76416 C21.622559,2.9746094 18.734985,2.0 15.75,2.0 C8.167969,2.0 1.9998779,8.166504 1.9998779,15.75 C1.9998779,28.194336 10.002197,39.45215 23.405884,45.862793 C23.594482,45.9541 23.797852,45.99951 23.999878,45.99951 C24.202148,45.99951 24.405518,45.9541 24.594116,45.862793 C37.99707,39.45215 45.999878,28.194336 45.999878,15.75 C45.999878,8.166504 39.8313,2.0 32.25,2.0 ZM23.999878,43.097168 C11.934448,37.10791 4.749878,26.927246 4.749878,15.75 C4.749878,9.68457 9.684692,4.75 15.75,4.75 C17.968872,4.75 20.118042,5.4345703 21.940186,6.6831055 C19.805054,9.106934 18.5,12.274902 18.5,15.75 C18.5,16.5083 19.114258,17.124512 19.875,17.124512 C20.63562,17.124512 21.249878,16.5083 21.249878,15.75 C21.249878,12.476074 22.696167,9.538574 24.97351,7.5234375 C25.184204,7.3344727 25.404541,7.1572266 25.62732,6.9868164 C25.678467,6.951172 25.728027,6.911621 25.779053,6.8740234 C25.997925,6.7148438 26.22229,6.5620117 26.451782,6.42041 C26.515015,6.380371 26.578003,6.3408203 26.642578,6.303711 C26.864014,6.17041 27.090942,6.0463867 27.320557,5.930664 C27.399902,5.8911133 27.481812,5.852539 27.562378,5.813965 C27.78247,5.709961 28.005493,5.6103516 28.2323,5.5214844 C28.331787,5.4814453 28.433838,5.4453125 28.53711,5.408203 C28.750732,5.331543 28.965454,5.258789 29.183105,5.1953125 C29.315918,5.158203 29.444946,5.125 29.577759,5.0932617 C29.775146,5.0439453 29.96997,4.992676 30.171387,4.953125 C30.35254,4.919922 30.536499,4.895508 30.719238,4.869629 C30.875,4.845703 31.030762,4.819336 31.189087,4.8032227 C31.538208,4.770508 31.8927,4.75 32.25,4.75 C38.315186,4.75 43.249878,9.68457 43.249878,15.75 C43.249878,26.927246 36.066162,37.10791 23.999878,43.097168 ZM32.25,7.4995117 C31.48999,7.4995117 30.875,8.116211 30.875,8.874512 C30.875,9.633301 31.48999,10.25 32.25,10.25 C35.283325,10.25 37.75,12.716309 37.75,15.75 C37.75,16.5083 38.36499,17.124512 39.125,17.124512 C39.884888,17.124512 40.5,16.5083 40.5,15.75 C40.5,11.200195 36.799316,7.4995117 32.25,7.4995117 Z"
                    />
                  </svg>
                  <span className="statistics__amount">873</span>
                  <span className="statistics__name">Likes</span>
                </li>
                <li className="statistics__item">
                  <svg
                    width="56px"
                    height="46px"
                    viewBox="0 0 56 46"
                    className="statistics__icon"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="#c7b299"
                      d="M53.31018,41.61133 C53.31018,41.61133 2.690796,41.61133 2.690796,41.61133 C1.7593994,41.61133 1.0032959,42.36914 1.0032959,43.30371 C1.0032959,44.237305 1.7593994,44.995117 2.690796,44.995117 C2.690796,44.995117 53.31018,44.995117 53.31018,44.995117 C54.241943,44.995117 54.998413,44.237305 54.998413,43.30371 C54.998413,42.36914 54.241943,41.61133 53.31018,41.61133 ZM29.6875,7.7714844 C29.6875,7.7714844 29.6875,4.387207 29.6875,4.387207 C29.6875,4.387207 33.062622,4.387207 33.062622,4.387207 C33.99353,4.387207 34.750122,3.6293945 34.750122,2.694336 C34.750122,1.7612305 33.99353,1.003418 33.062622,1.003418 C33.062622,1.003418 22.938843,1.003418 22.938843,1.003418 C22.007324,1.003418 21.25122,1.7612305 21.25122,2.694336 C21.25122,3.6293945 22.007324,4.387207 22.938843,4.387207 C22.938843,4.387207 26.313599,4.387207 26.313599,4.387207 C26.313599,4.387207 26.301392,7.9101562 26.313599,7.7714844 C12.193848,8.648926 1.0032959,20.46289 1.0032959,34.84326 C1.0032959,36.217285 1.0032959,35.601074 1.0032959,36.535156 C1.0032959,37.46924 1.7593994,38.22705 2.690796,38.22705 C2.690796,38.22705 53.31018,38.22705 53.31018,38.22705 C54.241943,38.22705 54.998413,37.46924 54.998413,36.535156 C54.998413,35.601074 54.998413,36.32373 54.998413,34.84326 C54.998413,20.46289 43.807617,8.648926 29.6875,7.7714844 ZM4.3779297,34.84326 C4.3779297,21.760742 14.954102,11.155273 28.00061,11.155273 C41.04773,11.155273 51.62329,21.760742 51.62329,34.84326 C51.62329,34.84326 4.3779297,34.84326 4.3779297,34.84326 Z"
                    />
                  </svg>
                  <span className="statistics__amount">900</span>
                  <span className="statistics__name">We launched</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="page__recent recent">
          <div className="wrapper">
            <div className="recent__container">
              <div className="recent__about">
                <span className="recent__title">Recent Posts.</span>
                <span className="recent__subtitle">
                  Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius. Claritas est etiam processus dynamicus, qui
                  sequitur mutationem consuetudium.
                </span>
              </div>
              <div className="recent__slider recent-slider">
                <ul className="recent__list list">
                  <li className="recent__item">
                    <figure className="recent-slider__image">
                      <img src={recentLegs} alt="" />
                      <div className="recent-slider__date">
                        <time className="recent-slider__day">30</time>
                        <time className="recent-slider__month">Sep.</time>
                      </div>
                    </figure>
                    <figcaption className="recent-slider__caption">
                      <span className="recent-slider__title">
                        Lorem ipsum dolor sit amet
                      </span>
                      <span className="recent-slider__subtitle">
                        Claritas est etiam processus dynamicus, qui sequitur
                        mutationem consuetudium.
                      </span>
                      <a href="#" className="recent-slider__read-more link">
                        Read More &#9658;
                      </a>
                    </figcaption>
                  </li>
                  <li className="recent__item">
                    <figure className="recent-slider__image">
                      <img src={recentTyping} alt="" />
                      <div className="recent-slider__date">
                        <time className="recent-slider__day">30</time>
                        <time className="recent-slider__month">Sep.</time>
                      </div>
                    </figure>
                    <figcaption className="recent-slider__caption">
                      <span className="recent-slider__title">
                        Lorem ipsum dolor sit amet
                      </span>
                      <span className="recent-slider__subtitle">
                        Claritas est etiam processus dynamicus, qui sequitur
                        mutationem consuetudium.
                      </span>
                      <a href="#" className="recent-slider__read-more link">
                        Read More &#9658;
                      </a>
                    </figcaption>
                  </li>
                  <li className="recent__item">
                    <figure className="recent-slider__image">
                      <img src={recentLiner} alt="" />
                      <div className="recent-slider__date">
                        <time className="recent-slider__day">30</time>
                        <time className="recent-slider__month">Sep.</time>
                      </div>
                    </figure>
                    <figcaption className="recent-slider__caption">
                      <span className="recent-slider__title">
                        Lorem ipsum dolor sit amet
                      </span>
                      <span className="recent-slider__subtitle">
                        Claritas est etiam processus dynamicus, qui sequitur
                        mutationem consuetudium.
                      </span>
                      <a href="#" className="recent-slider__read-more link">
                        Read More &#9658;
                      </a>
                    </figcaption>
                  </li>
                </ul>
                <div className="recent-slider__control">
                  <button className="recent__button__prev button">
                    <img src={buttonLeft} alt="" />
                  </button>
                  <button className="recent__button__next button">
                    <img src={buttonRight} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page__sponsor sponsor">
          <div className="wrapper">
            <div className="sponsor__container">
              <ul className="sponsor__list list">
                <li className="sponsor__item">
                  <img src={barberLogo} alt="" />
                </li>
                <li className="sponsor__item">
                  <img src={deliciousLogo} alt="" />
                </li>
                <li className="sponsor__item">
                  <img src={designersLogo} alt="" />
                </li>
                <li className="sponsor__item">
                  <img src={royalLogo} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="page__info info">
          <div className="wrapper">
            <div className="info__container">
              <div className="info__main-block main-block">
                <div className="main-block__title">
                  <img src={mainLogo} alt="" /> Waxom
                </div>
                <span className="main-block__subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci suscipit lobortis claritatem.
                </span>
                <a href="#" className="main-block__read-more link">
                  Read More &#9658;
                </a>
              </div>
              <div className="info__posts-block posts-block">
                <span className="posts-block__title">Recent Posts</span>
                <ul className="posts-block__list list">
                  <li className="posts-block__item">
                    <time className="posts-block__date">September 08, 2015</time>
                    <span className="posts-block__text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </span>
                  </li>
                  <li className="posts-block__item">
                    <time className="posts-block__date">September 08, 2015</time>
                    <span className="posts-block__text">
                      Diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna
                    </span>
                  </li>
                  <li className="posts-block__item">
                    <time className="posts-block__date">September 08, 2015</time>
                    <span className="posts-block__text">
                      Claritas est etiam processus dynamicus, qui sequitur
                      mutationem per seacula quarta decima
                    </span>
                  </li>
                </ul>
              </div>
              <div className="info__twitter-block twitter-block">
                <span className="twitter-block__title">Our Twitter</span>
                <ul className="twitter-block__list list">
                  <li className="twitter-block__item">
                    <span className="twitter-block__post">
                      <span className="twitter-block__highlight">@waxom</span> Cum
                      soluta nobis eleifend option congue nihil imperdiet doming
                    </span>
                    <time className="twitter-block__time">3 mins ago</time>
                  </li>
                  <li className="twitter-block__item">
                    <span className="twitter-block__post">
                      Mirum est
                      <span className="twitter-block__highlight">#envato</span>{" "}
                      notare quam littera gothica, quam nunc putamus parum
                      anteposuerit litterarum
                    </span>
                    <time className="twitter-block__time">5 hours ago</time>
                  </li>
                  <li className="twitter-block__item">
                    <span className="twitter-block__post">
                      Soluta nobis option
                      <a href="" className="twitter-block__link link">
                        bit.ly/1Hniso7
                      </a>
                    </span>
                    <time className="twitter-block__time">20 days ago</time>
                  </li>
                </ul>
              </div>
              <div className="info__widget-block widget-block">
                <div className="widget-block__title">Dribbble Widget</div>
                <ul className="widget-block__list list">
                  <li className="widget-block__item">
                    <img src={widgetPhones} alt="" />
                  </li>
                  <li className="widget-block__item">
                    <img src={widgetPackage} alt="" />
                  </li>
                  <li className="widget-block__item">
                    <img src={widgetBook} alt="" />
                  </li>
                  <li className="widget-block__item">
                    <img src={widgetIcons} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="page__footer footer">
        <div className="wrapper">
          <div className="footer__container">
            <div className="footer__supprot support">
              <ul className="support__list list">
                <li className="support__item">
                  <span className="support__text">Copyright © 2015 Waxom</span>
                </li>
                <li className="support__item">
                  <span className="support__text">Privacy Policy</span>
                </li>
                <li className="support__item">
                  <span className="support__text">FAQ</span>
                </li>
                <li className="support__item">
                  <span className="support__text">Support</span>
                </li>
              </ul>
            </div>
            <div className="footer__design-by design-by">
              <ul className="design-by__list list">
                <li className="design-by__item">
                  <span className="design-by__text">Designed by ThemeFire</span>
                </li>
                <li className="design-by__item">
                  <span className="design-by__text">Only on Envato Market</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
 export default Waxom;