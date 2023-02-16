import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios";
import { API_URL_CONTACTS, API_URL_SEO } from '../api/constant';
import MainLayout from '../components/base/MainLayout'
import Image from 'next/image';
import { logoMain, headerUnderLogo, vk, tg} from "../assets";


export default function Index() {

  const [contacts, setContacts]=useState([]);
  const [seoData, setSeoData]=useState([]);

     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get(API_URL_CONTACTS);
            setContacts(res.data);
        }
        getContacts()
    }, []);

     useEffect(()=>{
        const getSeoData = async () => {
            const res = await axios.get(API_URL_SEO);
            setSeoData(res.data);
        }
        getSeoData()
    }, []);

  return (
    <>
    {
      seoData.map((seoData, i) => (
            (seoData.id === 1)  && (
            <div key={seoData.id}>
                <MainLayout 
                  title={seoData.title_page}
                  description={seoData.description}
                  keywords={seoData.keywords}
                  og_type={seoData.og_type}
                  og_title={seoData.og_title}
                  og_description={seoData.og_description}
                  twitter_creator={seoData.twitter_creator}
                  twitter_card={seoData.twitter_card}
                  twitter_title={seoData.twitter_title}
                  twitter_description={seoData.twitter_description}
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
    </>
  )
}
