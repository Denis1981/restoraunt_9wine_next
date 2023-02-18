import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios";
import { API_URL_CONTACTS, API_URL_SEO } from '../api/constant';
import MainLayout from '../components/base/MainLayout'
import FormsReserve from '../components/forms/FormsReserve';
import Image from 'next/image';
import { logoMain, headerUnderLogo, vk, tg} from "../../public";


export default function Index({ seoData }) {

  const [contacts, setContacts]=useState([]);

     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get(API_URL_CONTACTS);
            setContacts(res.data);
        }
        getContacts()
    }, []);

  return (
    <>
      {
        seoData.map((seoItem, i) => (
                (seoItem.id === 1)  && (
                <div key={seoItem.id}>
                    <MainLayout 
                        title={seoItem.title_page}
                        description={seoItem.description}
                        keywords={seoItem.keywords}
                        og_type={seoItem.og_type}
                        og_title={seoItem.og_title}
                        og_description={seoItem.og_description}
                        twitter_creator={seoItem.twitter_creator}
                        twitter_card={seoItem.twitter_card}
                        twitter_title={seoItem.twitter_title}
                        twitter_description={seoItem.twitter_description}
                    >
                    </MainLayout>
                </div>
        )))
        }

      <main>
      <section id="HomePage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <Image src={logoMain} alt="" title="" className="HomePage__logoMain" />
                        <Image src={headerUnderLogo} alt="" title="" className="HomePage__headerUnderLogo" />
                        <Link href="" className="btn HomePage__btn-reserve" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать</Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xxl-12">
                        <div className="HomePage__menu-block">
                            <ul className="list-unstyled text-center">
                                <li><Link href="/menu" legacyBehavior><a>Меню</a></Link></li>
                                <li><Link href="/about" legacyBehavior><a>О нас</a></Link></li>
                                <li><Link href="/celebrates" legacyBehavior><a>Мероприятия</a></Link></li>
                                <li><Link href="/interior" legacyBehavior><a>Интерьер</a></Link></li>
                                <li><Link href="/articles" legacyBehavior><a>Блог</a></Link></li>
                                <li><Link href="/contacts" legacyBehavior><a>Контакты</a></Link></li>
                            </ul>
                        </div>
                        {
                            contacts.map((contacts, i) => (
                        <div className="HomePage__social-block" key={contacts.id}>
                            <ul className="list-unstyled text-center">
                                 <li>
                                     <Link href={contacts.vk} rel="nofollow" legacyBehavior>
                                        <a><Image src={vk} /></a>
                                     </Link>
                                 </li>
                                 <li>
                                     <Link href={contacts.telegram} rel="nofollow" legacyBehavior>
                                         <a><Image src={tg} /></a>
                                     </Link>
                                 </li>
                            </ul>
                        </div>
                             ))
                    }
                    </div>
                </div>
            </div>
        </section>
      </main>
            <div className="modal fade" id="reserveModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Для того, чтобы зарезервировать стол в нашем ресторане, заполните форму</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                         <FormsReserve />
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}


export async function getServerSideProps (context) {
    
    const res =  await fetch(API_URL_SEO);
    const data = await res.json();
   
    return {
        props: {
            seoData: data
        }  
    }
}