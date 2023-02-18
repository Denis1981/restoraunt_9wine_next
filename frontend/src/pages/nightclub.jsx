import Image from 'next/image'
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import { API_URL_SEO } from '../api/constant';
import {
    night_image1,
    night_image2,
    night_image3,
    night_image4,
    night_image5
} from "../../public";

const NightclubPage = ({ seoData }) => {

    return (
        <>
        {
        seoData.map((seoItem, i) => (
                (seoItem.id === 10)  && (
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
        <section id="NightclubScreen1">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>Бар на Садовой</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <p>каждую пятницу и субботу</p>
                        <button type="button" className="btn btn-reserve z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать стол</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="NightclubScreen2">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <h2><strong>9WINES</strong> — бар-ресторан на каждый день с великолепной, ни на что не похожей винной картой.</h2>
                        <div className="NightclubScreen2__block1">
                            <p>Винотека, собранная по винодельням мира.</p>
                            <p>Адекватные цены за достойное по-настоящему вино, доставленное с тщательным расчетом логистики и без необходимости переплачивать за бренды.</p>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <Image 
                            src={ night_image1 } 
                            className="NightclubScreen2__image1 z-depth-1" 
                            alt="" 
                            title=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-6">
                        <Image 
                            src={ night_image2 } 
                            className="NightclubScreen2__image2 z-depth-1" 
                            alt="" 
                            title=""
                        />
                    </div>
                    <div className="col-xxl-6">
                        <div className="NightclubScreen2__block2">
                            <p>Наша кухня лаконична, великолепно сочетается с винами и утоляет не только гастрономические ожидания, но и аппетит.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-4 text-center">
                        <Image 
                            src={ night_image3 } 
                            className="NightclubScreen2__image3 z-depth-1" 
                            alt="" 
                            title=""
                        />
                    </div>
                    <div className="col-xxl-4 text-center">
                        <Image 
                            src={ night_image4 } 
                            className="NightclubScreen2__image4 z-depth-1" 
                            alt="" 
                            title=""
                        />
                    </div>
                    <div className="col-xxl-4 text-center">
                        <Image 
                            src={ night_image5 } 
                            className="NightclubScreen2__image5 z-depth-1" 
                            alt="" 
                            title=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <p>Каждую пятницу и субботу наш бар-ресторан превращается в изысканное и поистине тусовочное место, где вы с друзьями с наслаждением проведете ночь до утра, не заметив рассвета, под зажигательную стильную музыку.</p>
                        <button type="button" className="btn btn-reserve z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать стол</button>
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

export default NightclubPage;

export async function getServerSideProps () {
    
    const resSeo =  await fetch(API_URL_SEO);
    const dataSeo = await resSeo.json();
   
    return {
        props: {
            seoData: dataSeo
        }  
    }
}