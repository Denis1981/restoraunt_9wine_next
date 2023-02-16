import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios";
import {logoFooter} from '../../assets/logo-footer.svg';
import {API_URL_CONTACTS} from '../../api/constant';
// import FormsReserve from '../../components/forms/FormsReserve';
// import FormsCall from '../../components/forms/FormsCall';
// import FormsReserveDegustation from '../../components/forms/FormReserveDegustation';
// import FormsReserveHappy from '../../components/forms/FormReserveHappy';

const Footer = () => {

    const [contacts, setContacts]=useState([]);

     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get(API_URL_CONTACTS);
            setContacts(res.data);
            console.log();
            
        }
        getContacts()
    }, []);


    return (
        <>
            <section id="footer-block" className="z-depth-1">
                <div className="container">
                    <div className="row">
                    {contacts.map((contacts, i) => (
                        <div className="col-xxl-3 text-center" key={contacts.id}>
                            <Link href="/" legacyBehavior>
                                <a><img src="{logoFooter}" alt="" title="" className="logo" /></a>
                            </Link>
                            <p dangerouslySetInnerHTML={{ __html: contacts.address}} className="address"/>
                            <p>
                                <a href={`tel: ${contacts.phone}`}>{contacts.phone}</a>
                            </p>
                        </div>
                    ))
                    }
                        <div className="col-xxl-2">
                            <div className="footer-block__text">
                                <p><Link href="/" legacyBehavior><a>Главная</a></Link></p>
                                <p><Link href="/about" legacyBehavior><a>О нас</a></Link></p>
                                <p><Link href="/menu" legacyBehavior><a>Меню ресторана</a></Link></p>
                                <p><Link href="/reviews" legacyBehavior><a>Отзывы</a></Link></p>
                                <p><Link href="/articles" legacyBehavior><a>Блог</a></Link></p>
                            </div>
                        </div>
                        <div className="col-xxl-3">
                            <div className="footer-block__text">
                                <p><b>Мероприятия</b></p>
                                <p><Link href="/wineevening" legacyBehavior><a>Дегустационный винный вечер</a></Link></p>
                                <p><Link href="/birthday" legacyBehavior><a>Винный день рождения</a></Link></p>
                                <p><Link href="/nightclub" legacyBehavior><a>Ночной клуб</a></Link></p>
                                <p><Link href="/gallery" legacyBehavior><a>Галерея</a></Link></p>
                            </div>
                        </div>
                        <div className="col-xxl-3">
                            <div className="footer-block__text">
                                <p><Link href="/contacts" legacyBehavior><a>Контакты</a></Link></p>
                                <p><Link href="/polytics" legacyBehavior><a>Политика конфиденциальности</a></Link></p>
                                <p>
                                    <button type="button" className="btn btn-reserve z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать стол</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="reserveModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Для того, чтобы зарезервировать стол в нашем ресторане, заполните форму</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                     {/* <FormsReserve /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="callModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Введите свои данные и мы перезвоним вам в течение 10 минут</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                     {/* <FormsCall /> */}
                  </div>
                </div>
              </div>
            </div>


            <div className="modal fade" id="degustationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Введите свои данные и мы перезвоним вам в течение 10 минут</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                     {/* <FormsReserveDegustation /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="happyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Введите свои данные и мы перезвоним вам в течение 10 минут</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                     {/* <FormsReserveHappy /> */}
                  </div>
                </div>
              </div>
            </div>

        </>
    )
}

export default Footer;