import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logoSvg from '../assets/img/pizza-logo.svg';
import Button from './Button';

const modal = document.getElementById('modal');
const btn = document.querySelector('.button');
const contacts = document.querySelector('.modal__contacts');
const body = document.querySelector('body');

function handleClick() {
  document.getElementById('modal').classList.remove('modal__hidden');
  body.style.overflow = 'hidden';
}
function modalClick() {
  document.getElementById('modal').classList.add('modal__hidden');
  body.style.overflow = 'visible';
}
function contactsClick(e) {
  e.stopPropagation();
}

function Header({handleLogout}) {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>Bella Ciao</h1>
              <p>найсмачніша піца у всесвіті</p>
            </div>
          </div>
        </Link>

        <div className="header__cart">
          <Button onClick={handleClick} id="show__modal" className="button button__contact">
            Контакти
          </Button>

          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice} ₴</span>
              <div className="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{totalCount}</span>
            </Button>
          </Link>

          <Button onClick={handleLogout} className="button--cart button--exit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 21H5C3.89543 21 3 20.1046 3 19V15H5V19H19V5H5V9H3V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM11 16V13H3V11H11V8L16 12L11 16Z"
                fill="white"
              />
            </svg>
          </Button>
          
        </div>
      </div>
      <div onClick={modalClick} id="modal" className="modal modal__hidden">
        <div className="modal__contacts">
          <div className="pizza__center">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.6826 44.1924C11.6867 39.9142 7.90792 35.9375 3.9506 29.7051C2.52357 27.4576 3.55554 24.5024 6.01826 23.491L30.8397 13.1448C33.6175 12.0039 36.36 14.848 35.1187 17.5826L24.0313 42.3938C22.9179 44.8467 19.8754 45.7569 17.6826 44.1924ZM26.559 19.6109C24.791 17.7482 21.848 17.6711 19.9851 19.4389C18.1222 21.2067 18.0451 24.1499 19.813 26.0128C21.5808 27.8755 24.5238 27.9527 26.3867 26.1849C28.2497 24.4171 28.3268 21.4738 26.559 19.6109ZM17.6187 31.3003C19.2487 29.7534 21.8239 29.8208 23.3708 31.4508C24.9175 33.0808 24.8501 35.6562 23.2201 37.2029C21.5903 38.7498 19.0149 38.6823 17.4681 37.0523C15.9213 35.4223 15.9887 32.847 17.6187 31.3003ZM13.943 26.5338C13.1956 25.7462 11.9513 25.7137 11.1637 26.461C10.3761 27.2085 10.3435 28.4527 11.0909 29.2403C11.8383 30.0279 13.0826 30.0605 13.8702 29.313C14.6578 28.5657 14.6904 27.3214 13.943 26.5338Z"
                fill="#FE5F1E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M45.6156 20.1435C51.4641 24.3942 55.1392 28.3298 58.9702 34.481C60.3516 36.6992 59.3133 39.5912 56.8874 40.5628L32.4353 50.5055C29.699 51.6015 27.0315 48.7863 28.2734 46.113L39.3687 21.8547C40.4826 19.4565 43.4768 18.589 45.6156 20.1435ZM36.6926 44.1952C38.4118 46.039 41.3 46.1397 43.1435 44.4206C44.9872 42.7014 45.088 39.8132 43.3688 37.9695C41.6497 36.1259 38.7615 36.025 36.9177 37.7441C35.0742 39.4635 34.9733 42.3517 36.6926 44.1952ZM45.5679 32.7985C43.9547 34.3028 41.4275 34.2144 39.9232 32.6012C38.4189 30.9881 38.5073 28.461 40.1204 26.9565C41.7336 25.4523 44.2607 25.5406 45.765 27.1538C47.2694 28.7669 47.1811 31.294 45.5679 32.7985ZM49.1348 37.5082C49.8618 38.2876 51.0828 38.3302 51.8623 37.6035C52.6417 36.8767 52.6843 35.6555 51.9576 34.8761C51.2306 34.0966 50.0096 34.054 49.2302 34.7809C48.4507 35.5077 48.4081 36.7289 49.1348 37.5082Z"
                fill="#FE5F1E"
              />
            </svg>
          </div>

          <h2 className="contacts__header">Контакти</h2>
          <p className="contacts__text">
            Маєш додаткові запитання чи пропозиції, або хочеш поділитися з нами своїм відгуком? Не
            зволікай! Ми з радістю тебе вислухаємо!{' '}
          </p>
          <div className="contacts__contacts">
            <div className="contact">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.2422 5H3.75781C2.78977 5 2 5.72498 2 6.61538V17.3846C2 18.272 2.78625 19 3.75781 19H20.2422C21.2078 19 22 18.2775 22 17.3846V6.61538C22 5.728 21.2137 5 20.2422 5ZM19.9995 6.07692L12.0373 13.394L4.00621 6.07692H19.9995ZM3.17188 17.1616V6.83325L8.81559 11.9752L3.17188 17.1616ZM4.00051 17.9231L9.64777 12.7334L11.6266 14.5362C11.8556 14.7449 12.2253 14.7443 12.4534 14.5346L14.3828 12.7615L19.9995 17.9231H4.00051ZM20.8281 17.1616L15.2114 12L20.8281 6.83838V17.1616Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div>
                <h4 className="contact__name">bella_ciao@gmail.com</h4>
                <p className="contact__description">E-mail:</p>
              </div>
            </div>

            <div className="contact">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.2422 5H3.75781C2.78977 5 2 5.72498 2 6.61538V17.3846C2 18.272 2.78625 19 3.75781 19H20.2422C21.2078 19 22 18.2775 22 17.3846V6.61538C22 5.728 21.2137 5 20.2422 5ZM19.9995 6.07692L12.0373 13.394L4.00621 6.07692H19.9995ZM3.17188 17.1616V6.83325L8.81559 11.9752L3.17188 17.1616ZM4.00051 17.9231L9.64777 12.7334L11.6266 14.5362C11.8556 14.7449 12.2253 14.7443 12.4534 14.5346L14.3828 12.7615L19.9995 17.9231H4.00051ZM20.8281 17.1616L15.2114 12L20.8281 6.83838V17.1616Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div>
                <h4 className="contact__name">support@bella_ciao.com</h4>
                <p className="contact__description">Адміністратор:</p>
              </div>
            </div>

            <div className="contact">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C7.5888 2 4 5.31193 4 9.38281C4 10.7582 4.41284 12.1005 5.19418 13.265L11.5446 22.7092C11.6663 22.8901 11.8806 23 12.1111 23C12.1128 23 12.1146 23 12.1164 23C12.3488 22.9983 12.5636 22.885 12.683 22.7009L18.8716 13.1653C19.6098 12.0254 20 10.7174 20 9.38281C20 5.31193 16.4112 2 12 2ZM17.7274 12.5336L12.101 21.2029L6.32742 12.6167C5.67707 11.6474 5.32444 10.5292 5.32444 9.38281C5.32444 5.99041 8.324 3.22227 12 3.22227C15.676 3.22227 18.6711 5.99041 18.6711 9.38281C18.6711 10.4952 18.3417 11.5849 17.7274 12.5336Z"
                  fill="#FE5F1E"
                />
                <path
                  d="M12 5C9.7944 5 8 6.7944 8 9C8 11.1915 9.7652 13 12 13C14.2624 13 16 11.1674 16 9C16 6.7944 14.2056 5 12 5ZM12 11.6756C10.5219 11.6756 9.32444 10.4741 9.32444 9C9.32444 7.5296 10.5296 6.32444 12 6.32444C13.4704 6.32444 14.6711 7.5296 14.6711 9C14.6711 10.4526 13.5015 11.6756 12 11.6756Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div>
                <h4 className="contact__name">вулиця Сихівська, 13</h4>
                <p className="contact__description">Адреса:</p>
              </div>
            </div>

            <div className="contact">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C7.5888 2 4 5.31193 4 9.38281C4 10.7582 4.41284 12.1005 5.19418 13.265L11.5446 22.7092C11.6663 22.8901 11.8806 23 12.1111 23C12.1128 23 12.1146 23 12.1164 23C12.3488 22.9983 12.5636 22.885 12.683 22.7009L18.8716 13.1653C19.6098 12.0254 20 10.7174 20 9.38281C20 5.31193 16.4112 2 12 2ZM17.7274 12.5336L12.101 21.2029L6.32742 12.6167C5.67707 11.6474 5.32444 10.5292 5.32444 9.38281C5.32444 5.99041 8.324 3.22227 12 3.22227C15.676 3.22227 18.6711 5.99041 18.6711 9.38281C18.6711 10.4952 18.3417 11.5849 17.7274 12.5336Z"
                  fill="#FE5F1E"
                />
                <path
                  d="M12 5C9.7944 5 8 6.7944 8 9C8 11.1915 9.7652 13 12 13C14.2624 13 16 11.1674 16 9C16 6.7944 14.2056 5 12 5ZM12 11.6756C10.5219 11.6756 9.32444 10.4741 9.32444 9C9.32444 7.5296 10.5296 6.32444 12 6.32444C13.4704 6.32444 14.6711 7.5296 14.6711 9C14.6711 10.4526 13.5015 11.6756 12 11.6756Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div>
                <h4 className="contact__name">Червоної калини, 71</h4>
                <p className="contact__description">Адреса:</p>
              </div>
            </div>

            <div className="contact">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5373 16.2762L18.2995 14.0385C17.6826 13.4216 16.6786 13.4216 16.0617 14.0385L15.0446 15.0556C14.5773 15.523 13.8167 15.5228 13.3495 15.0558L8.94069 10.6434C8.47221 10.175 8.47214 9.41676 8.94069 8.94823C9.10453 8.7844 9.57497 8.31397 9.95783 7.93112C10.5721 7.31694 10.5807 6.31622 9.95724 5.6929L7.72008 3.46287C7.10313 2.84598 6.09927 2.84598 5.48398 3.46125C5.02355 3.91765 4.87504 4.06488 4.6686 4.26953C2.44382 6.49418 2.44382 10.114 4.66849 12.3386L11.6541 19.3275C13.884 21.5574 17.4934 21.5576 19.7235 19.3275L20.5373 18.5138C21.1542 17.8969 21.1542 16.8931 20.5373 16.2762ZM6.22827 4.20874C6.43391 4.00311 6.76847 4.00308 6.97477 4.20931L9.21193 6.43934C9.41806 6.64546 9.41806 6.97906 9.21193 7.18521L8.83895 7.55815L5.85721 4.57655L6.22827 4.20874ZM12.4001 18.5817L5.4145 11.5927C3.69325 9.87154 3.59864 7.1689 5.12354 5.33469L8.09663 8.30765C7.31541 9.1932 7.34798 10.5426 8.19461 11.3892L12.6032 15.8013C12.6033 15.8014 12.6034 15.8014 12.6034 15.8015C13.4491 16.6472 14.7985 16.6819 15.6852 15.8996L18.6583 18.8727C16.8299 20.3949 14.1332 20.3147 12.4001 18.5817ZM19.7914 17.7679L19.4184 18.1409L16.4347 15.1573L16.8076 14.7844C17.0134 14.5787 17.348 14.5787 17.5536 14.7844L19.7914 17.022C19.997 17.2277 19.997 17.5623 19.7914 17.7679Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div>
                <h4 className="contact__name">+380442381657</h4>
                <p className="contact__description">Дзвінок безкоштовний</p>
              </div>
            </div>

            <div className="contact">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5373 16.2762L18.2995 14.0385C17.6826 13.4216 16.6786 13.4216 16.0617 14.0385L15.0446 15.0556C14.5773 15.523 13.8167 15.5228 13.3495 15.0558L8.94069 10.6434C8.47221 10.175 8.47214 9.41676 8.94069 8.94823C9.10453 8.7844 9.57497 8.31397 9.95783 7.93112C10.5721 7.31694 10.5807 6.31622 9.95724 5.6929L7.72008 3.46287C7.10313 2.84598 6.09927 2.84598 5.48398 3.46125C5.02355 3.91765 4.87504 4.06488 4.6686 4.26953C2.44382 6.49418 2.44382 10.114 4.66849 12.3386L11.6541 19.3275C13.884 21.5574 17.4934 21.5576 19.7235 19.3275L20.5373 18.5138C21.1542 17.8969 21.1542 16.8931 20.5373 16.2762ZM6.22827 4.20874C6.43391 4.00311 6.76847 4.00308 6.97477 4.20931L9.21193 6.43934C9.41806 6.64546 9.41806 6.97906 9.21193 7.18521L8.83895 7.55815L5.85721 4.57655L6.22827 4.20874ZM12.4001 18.5817L5.4145 11.5927C3.69325 9.87154 3.59864 7.1689 5.12354 5.33469L8.09663 8.30765C7.31541 9.1932 7.34798 10.5426 8.19461 11.3892L12.6032 15.8013C12.6033 15.8014 12.6034 15.8014 12.6034 15.8015C13.4491 16.6472 14.7985 16.6819 15.6852 15.8996L18.6583 18.8727C16.8299 20.3949 14.1332 20.3147 12.4001 18.5817ZM19.7914 17.7679L19.4184 18.1409L16.4347 15.1573L16.8076 14.7844C17.0134 14.5787 17.348 14.5787 17.5536 14.7844L19.7914 17.022C19.997 17.2277 19.997 17.5623 19.7914 17.7679Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div>
                <h4 className="contact__name">+380936763452</h4>
                <p className="contact__description">Дзвінок безкоштовний</p>
              </div>
            </div>

            <div className="contact">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5373 16.2762L18.2995 14.0385C17.6826 13.4216 16.6786 13.4216 16.0617 14.0385L15.0446 15.0556C14.5773 15.523 13.8167 15.5228 13.3495 15.0558L8.94069 10.6434C8.47221 10.175 8.47214 9.41676 8.94069 8.94823C9.10453 8.7844 9.57497 8.31397 9.95783 7.93112C10.5721 7.31694 10.5807 6.31622 9.95724 5.6929L7.72008 3.46287C7.10313 2.84598 6.09927 2.84598 5.48398 3.46125C5.02355 3.91765 4.87504 4.06488 4.6686 4.26953C2.44382 6.49418 2.44382 10.114 4.66849 12.3386L11.6541 19.3275C13.884 21.5574 17.4934 21.5576 19.7235 19.3275L20.5373 18.5138C21.1542 17.8969 21.1542 16.8931 20.5373 16.2762ZM6.22827 4.20874C6.43391 4.00311 6.76847 4.00308 6.97477 4.20931L9.21193 6.43934C9.41806 6.64546 9.41806 6.97906 9.21193 7.18521L8.83895 7.55815L5.85721 4.57655L6.22827 4.20874ZM12.4001 18.5817L5.4145 11.5927C3.69325 9.87154 3.59864 7.1689 5.12354 5.33469L8.09663 8.30765C7.31541 9.1932 7.34798 10.5426 8.19461 11.3892L12.6032 15.8013C12.6033 15.8014 12.6034 15.8014 12.6034 15.8015C13.4491 16.6472 14.7985 16.6819 15.6852 15.8996L18.6583 18.8727C16.8299 20.3949 14.1332 20.3147 12.4001 18.5817ZM19.7914 17.7679L19.4184 18.1409L16.4347 15.1573L16.8076 14.7844C17.0134 14.5787 17.348 14.5787 17.5536 14.7844L19.7914 17.022C19.997 17.2277 19.997 17.5623 19.7914 17.7679Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div>
                <h4 className="contact__name">+380982771556</h4>
                <p className="contact__description">Дзвінок безкоштовний</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
