import Link from 'next/link'
import Image from 'next/image'
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import { API_URL_SEO } from '../api/constant';
import {
    bron,
    menus,
    happy,
    degustation,
    gallery,
    nightclub,
} from "../../public";

const Celebrates = ({ seoData }) => {

    return (
        <>
        {
        seoData.map((seoItem, i) => (
                (seoItem.id === 5)  && (
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
        <section id="CelebratesPage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>мероприятия NineWines</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="CelebratesPage__itemPage">
                            <Image 
                                src={bron} 
                                className="CelebratesPage__image_1 z-depth-1" 
                                alt="" 
                                title=""
                            />
                            <h2 data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">
                                Забронировать стол
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <Image 
                                src={menus} 
                                className="CelebratesPage__image_2 z-depth-1" 
                                alt="" 
                                title=""
                            />
                            <h2>
                                <Link href="/menu" legacyBehavior>
                                    <a>Меню</a>
                                </Link>
                            </h2>
                        </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <Image 
                                src={degustation} 
                                className="CelebratesPage__image_3 z-depth-1" 
                                alt="" 
                                title=""
                            />
                            <h2>
                                <Link href="/wineevening" legacyBehavior>
                                    <a>Дегустационный винный вечер</a>
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <Image 
                                src={happy} 
                                className="CelebratesPage__image_4 z-depth-1" 
                                alt="" 
                                title=""
                            />
                            <h2>
                                <Link href="/birthday" legacyBehavior>
                                    <a>Винный день рождения</a>
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <Image 
                                src={gallery} 
                                className="CelebratesPage__image_5 z-depth-1" 
                                alt="" 
                                title=""
                            />
                            <h2>
                                <Link href="/gallery" legacyBehavior>
                                    <a>Галерея</a>
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="CelebratesPage__itemPage">
                            <Image 
                                src={nightclub} 
                                className="CelebratesPage__image_6 z-depth-1" 
                                alt="" 
                                title=""
                            />
                            <h2>
                                <Link href="/nightclub" legacyBehavior>
                                    <a>Ночной клуб</a>
                                </Link>
                            </h2>
                        </div>
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

export default Celebrates;

export async function getServerSideProps () {
    
    const resSeo =  await fetch(API_URL_SEO);
    const dataSeo = await resSeo.json();
   
    return {
        props: {
            seoData: dataSeo
        }  
    }
}