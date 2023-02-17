import { useState, useEffect } from 'react';
import axios from "axios";
import Image from 'next/image'
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import { API_URL_SALE, API_URL_SEO } from '../api/constant';
import { image1_about,
         image2_about,
         image1_aboutBlock,
         image2_aboutBlock,
         image3_aboutBlock,
         image4_aboutBlock,
         image5_aboutBlock,
         image6_aboutBlock,
         image1_karaokeBlock
} from "../assets";

const about = ({ seoData }) => {

    const [sale, setSale]=useState([]);

     useEffect(()=>{
        const getSale = async () => {
            const res = await axios.get(API_URL_SALE);
            setSale(res.data);
        }
        getSale()
    }, []);

    return (
    <>
        {
        seoData.map((seoItem, i) => (
                (seoItem.id === 2)  && (
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
        <section id="AboutUs">
               <div className="container">
                   <div className="row">
                       <div className="col-xxl-7">
                           <div className="AboutUs__block">
                                <h1>Винный ресторан NineWines - это частичка Европы, Нового Света, Кавказа и Крыма в Санкт-Петербурге.</h1>
                                <p>Ресторан, в котором собраны отборные вина из разных регионов мира от бутиковых производителей Европы, Нового света, Кавказа и Крыма.</p>
                                <p>Винная карта ресторана очень динамична, составляется собственником ресторана и постоянно обновляется его интересными находками, собранными в разных уголках света. Мы сами привозим эти вина, что позволяет предлагать их нашим дорогим гостям по стоимости, соизмеримой с ценой чашки капучино. А наш Шеф повар создал меню, которое служит идеальным гастрономическим сопровождением к винам, представленным в ассортименте ресторана.</p>
                                <Image 
                                    src={image1_about} 
                                    alt="" 
                                    title="" 
                                    className="AboutUs_image1 z-depth-1" 
                                />
                           </div>
                       </div>
                       <div className="col-xxl-1" />
                       <div className="col-xxl-4">
                           <div className="AboutUs__block">
                                <Image 
                                    src={image2_about} 
                                    alt="" 
                                    title="" 
                                    className="AboutUs_image2 z-depth-1" 
                                />
                                <p>Интерьером пространства занимались ребята из легендарного дизайнерского коллектива Broburo.
Картины, украшающие стены ресторана, были написаны специально для 9wines, а наш стол в виде девятки занимает особое место в центре зала. За ним удобно веселиться большим компаниям, проводить дегустации и наслаждаться царящей вокруг атмосферой гедонизма.</p>
                               <p>А каждую пятницу и субботу в Nine Wines можно потанцевать. Мы привозим талантливых диджеев с популярной тематической музыкой.</p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="special">
                <div className="container">
                    <div className="row">
                        {
                            sale.map((sale, i) => (
                               <div className="col-xxl-6" key={sale.id}>
                                    <h2>{sale.title}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: sale.contentSale }}/>
                                   <div className="special_notes-wine">
                                        <p><b>{sale.itemSale1}</b></p>
                                        <p><b>{sale.itemSale2}</b></p>
                                        <button className="btn special__btn-more z-depth-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">узнать больше</button>
                                    </div>
                               </div>
                            ))
                        }
                        {
                            sale.map((sale, i) => (
                               <div className="col-xxl-6 text-center" key={sale.id}>
                                    <Image 
                                        src={sale.photo} 
                                        className="special__special_image1 z-depth-1" 
                                        alt="" 
                                        title={sale.itemSale1} 
                                        width="350" 
                                        height="440"
                                    />
                               </div>
                            ))
                        }
                    </div>
                </div>
           </section>

           <section id="aboutBlock">
               <div className="container">
                   <div className="row">
                        <div className="col-xxl-12 text-center">
                            <h2>к нам хочется возвращаться</h2>
                        </div>
                   </div>
                   <div className="row">
                       <div className="col-xxl-4 text-center">
                           <p>Самые изысканные вина <br /> и закуски</p>
                           <Image 
                                src={image2_aboutBlock} 
                                className="aboutBlock__image image1 z-depth-1" 
                                alt="" 
                                title=""
                           />
                       </div>
                       <div className="col-xxl-4 text-center">
                           <p>Неповторимый, дизайнерский <br /> интерьер</p>
                            <Image 
                                src={image1_aboutBlock} 
                                className="aboutBlock__image image2 z-depth-1" 
                                alt="" 
                                title=""
                            />
                       </div>
                       <div className="col-xxl-4 text-center">
                           <p>Всегда праздничная <br /> атмосфера </p>
                            <Image 
                                src={image4_aboutBlock} 
                                className="aboutBlock__image image3 z-depth-1" 
                                alt="" 
                                title=""
                            />
                       </div>
                   </div>
               </div>
           </section>

           <section id="karaokeBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                            <h2>Nine Wines — караоке-ресторан</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6">
                            <p>
                                Nine Wines — это также караоке-ресторан, оборудованный самой современной звуковой и световой аппаратурой, и у нас регулярно проходят музыкальные шоу и конкурсы с участием гостей нашего ресторана.
                            </p>
                            <p>
                                Наша атмосфера располагает к комфортному отдыху — современный стильный интерьер, отменное вино, прекрасная аппаратура! А новичкам и тем, кому нужна компания, помогают звукорежиссер и бэк-вокалисты. В перерывах между выступлениями гостей свою музыку презентуют модные ди-джеи.
                            </p>
                                <button className="btn karaokeBlock__btn-more z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">узнать больше</button>
                        </div>
                        <div className="col-xxl-6">
                            <Image 
                                src={image1_karaokeBlock} 
                                className="karaokeBlock__image z-depth-1" 
                                alt="" 
                                title="" 
                            />
                        </div>
                    </div>
                </div>
           </section>
           </main>

            <footer>
                <Footer/>
            </footer>
            
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                      </div>
                    {
                    sale.map((sale, i) => (
                      <div className="modal-body" key={sale.id}>
                          <Image 
                                src={sale.photo} 
                                alt="" 
                                title={sale.itemSale1} 
                                width="64" 
                                height="400"
                            />
                          <p dangerouslySetInnerHTML={{ __html: sale.contentPopup }}/>
                      </div>
                     ))
                    }
                      <button type="button" className="btn btn-more"  data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать стол</button>
                </div>
              </div>
            </div>
    </>);
}

export default about;

export async function getServerSideProps (context) {
    
    const res =  await fetch(API_URL_SEO);
    const data = await res.json();
   
    return {
        props: {
            seoData: data
        }  
    }
}