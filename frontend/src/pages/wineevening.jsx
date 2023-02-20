import Image from 'next/image'
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import Map from '../components/base/Map'
import {
    winevening2,
} from "../../public";

import { API_URL_DEGUSTATION, API_URL_SEO, API_URL_CONTACTS } from '../api/constant';

const Degustation = ({ deg, seoData, contacts }) => {

    return (
        <>
        {
        seoData.map((seoItem, i) => (
                (seoItem.id === 8)  && (
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
        <header>
            <Navbar/>
        </header>
        <main>

        <section id="DegustationBlock1">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <h1>Дегустационный винный вечер</h1>
                        <h3>Дегустация великолепных вин и вкуснейших блюд в сопровождении профессионального сомелье в винном баре 9WINES в центре Санкт-Петербурга</h3>
                        <button className="btn btn-reserve-menu z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#happyModal">забронировать место</button>
                    </div>
                </div>
                <div className="row">
                    {
                    deg.map((deg, i) => (
                    <div className="col-xxl-4 text-center" key={deg.id}>
                        <p>Дата и время</p>
                        <p className="content">{deg.date}</p>
                    </div>
                      ))
                    }
                    {
                    contacts.map((contacts, i) => (
                    <div className="col-xxl-4 text-center" key={contacts.id}>
                        <p>Место</p>
                        <p className="content">{contacts.address}</p>
                    </div>
                      ))
                    }
                    {
                    deg.map((deg, i) => (
                    <div className="col-xxl-4 text-center" key={deg.id}>
                        <p>Цена</p>
                        <p className="content">{deg.price} рублей</p>
                    </div>
                    ))
                }
                </div>
            </div>
        </section>

        <section id="DegustationBlock2">
            <div className="container">
                {
                    deg.map((deg, i) => (
                <div className="row" key={deg.id}>
                    <div className="col-xxl-5">
                        <Image 
                            src={winevening2}
                            alt="" 
                            title="" 
                            className="DegustationBlock2_image z-depth-1" 
                        />
                    </div>
                    <div className="col-xxl-7">
                        <h2>Дегустация вина</h2>
                        <p>Винный вечер, где за 1,5 часа увлекательнейшего экскурса в мир вина и его тайн вы погрузитесь в чудесные винодельческие глубины и путешествие по лозам винограда в сопровождении самого оптимистичного сомелье нашего города. В стоимость вечера включены 5 вин и закуски — голодными, грустными и трезвыми не останетесь.</p>
                        <div dangerouslySetInnerHTML={{ __html: deg.content }}/>
                        <button className="btn btn-reserve-menu z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#degustationModal">забронировать место</button>
                    </div>
                </div>
                ))
            }
            </div>
        </section>

        <section id="DegustationBlock3">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <Map />
                    </div>
                </div>
            </div>
        </section>

        </main>
        <footer>
            <Footer/>
        </footer> 
    </>);
}

export default Degustation;

export async function getServerSideProps () {
    
    const res =  await fetch(API_URL_DEGUSTATION);
    const data = await res.json();
    const resSeo =  await fetch(API_URL_SEO);
    const dataSeo = await resSeo.json();
    const resContacts =  await fetch(API_URL_CONTACTS);
    const contacts = await resContacts.json();
   
    return {
        props: {
            deg: data,
            seoData: dataSeo,
            contacts: contacts
        }  
    }
}