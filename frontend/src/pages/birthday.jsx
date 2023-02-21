import Image from 'next/image'
import MainLayout from '../components/base/MainLayout';
import Navbar from '../components/base/Navbar';
import Footer from '../components/base/Footer';
import Map from '../components/base/Map'
import ImageGalleryBirthday from '../components/gallery/ImageGalleryBirthday';
import {
    birth0,
    birth9,
    birth10,
    birth11,
    birth12,
    birth13,
} from "../../public";

import { API_URL_BIRTHDAY, API_URL_SEO } from '../api/constant';

const Birthday = ({ birth, seoData }) => {

    return (
        <>
        {
        seoData.map((seoItem, i) => (
                (seoItem.id === 9)  && (
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
        <section id="BirthdayBlock1">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5">
                    {
                    birth.map((birth, i) => (
                        <div key={birth.id}>
                            <h1>Отметьте день рождения в центре Санкт-Петербурга</h1>
                            <p>Отпразднуй день рождения «под ключ» с напитками и едой</p>
                            <p className="BirthdayBlock1__price">{birth.price} рублей</p>
                            <button className="btn btn-reserve-menu z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#happyModal">запланировать праздник</button>
                        </div>
                        ))
                    }
                    </div>
                    <div className="col-xxl-7">
                        <Image 
                            src={birth0} 
                            alt="" 
                            title="" 
                            className="BirthdayBlock1_image z-depth-1" 
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="BirthdayBlock2">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8">
                        <h2>О нас</h2>
                        <p>Стильный бар со средиземноморской кухней на Садовой улице.</p>
                        <p>Концепция заведения построена вокруг девятки: по бокалам мы разливаем 9 образцов.</p>
                        <p>У нас нестандартная миссия: показать гостям, что хорошие напитки могут быть доступными.</p>
                        <p>Мы много лет работаем в индустрии и поддерживаем связи по всему миру, поэтому в меню вы найдете около 50 позиций по доступной цене. Из каждого популярного региона мира мы взяли несколько интересных образцов.</p>
                        <p>Девять из них мы разливаем по бокалам, эта «девятка» постоянно обновляется новыми хитами.</p>
                    </div>
                    <div className="col-xxl-4">
                        <Image 
                            src={birth9} 
                            alt="" 
                            title="" 
                            className="BirthdayBlock2_image z-depth-1" 
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="BirthdayBlock3">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <h2>Акции и спецпредложения</h2>
                    </div>
                </div>
                {
                    birth.map((birth, i) => (
                <div className="row" key={birth.id}>
                    <div className="col-xxl-4">
                        <Image 
                            src={birth10} 
                            alt="" 
                            title="" 
                            className="BirthdayBlock3_image z-depth-1" 
                        />
                        <h3>{birth.akciya1_title}</h3>
                        <p>{birth.akciya1_desc}</p>
                        <button className="btn btn-reserve-menu z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#happyModalMusic">забронировать</button>
                    </div>
                    <div className="col-xxl-4">
                        <Image 
                            src={birth11} 
                            alt="" 
                            title="" 
                            className="BirthdayBlock3_image z-depth-1" 
                        />
                        <h3>{birth.akciya2_title}</h3>
                        <p>{birth.akciya2_desc}</p>
                        <button className="btn btn-reserve-menu z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#happyModalDrink">забронировать</button>
                    </div>
                    <div className="col-xxl-4">
                        <Image 
                            src={birth12} 
                            alt="" 
                            title="" 
                            className="BirthdayBlock3_image z-depth-1" 
                        />
                        <h3>{birth.akciya3_title}</h3>
                        <p>{birth.akciya3_desc}</p>
                        <button className="btn btn-reserve-menu z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#happyModalPhotograph">забронировать</button>
                    </div>
                </div>
                 ))
                }
            </div>
        </section>

        <section id="BirthdayBlock4">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <h2>Наш ресторан предлагает</h2>
                    </div>
                </div>
                {
                    birth.map((birth, i) => (
                <div className="row" key={birth.id}>
                    <div className="col-xxl-12 text-center">
                        <div className="card z-depth-1">
                        <div className="card-body">
                            <div className="card-body-h3 z-depth-1">
                                <h3 className="card-title">Праздничный пакет <br /> "День рождения"</h3>
                            </div>
                            <p className="card-text quota">{birth.happy_package_quota}</p>
                            <p className="card-text price">{birth.happy_package_price} <span>&#8381;</span></p>
                            <div dangerouslySetInnerHTML={{ __html: birth.happy_package }}/>
                            <button className="btn btn-reserve-menu z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#happyModalPackage">забронировать</button>
                        </div>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </section>

        <section id="BirthdayBlock5">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h2>Посмотрите, какие эмоции вы получите, <br /> отпраздновав свой праздник у нас</h2>
                        <p>Мы можем пригласить фотографа на ваше мероприятие</p>
                    </div>
                </div>
                <div className="row">
                    <ImageGalleryBirthday />
                </div>
            </div>
        </section>

        <section id="BirthdayBlock6">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5">
                        <Image 
                            src={birth13} 
                            alt="" 
                            title="" 
                            className="BirthdayBlock6_image z-depth-1" 
                        />
                    </div>
                    <div className="col-xxl-7 text-center">
                        <h2>Вы готовы праздновать?</h2>
                        <p>Выберите дату и оставьте заявку, мы перезвоним вам в скором времени, чтобы уточнить детали.</p>
                        <button className="btn btn-reserve-menu z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#happyModal">запланировать праздник</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="BirthdayBlock7">
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

export default Birthday;

export async function getServerSideProps () {
    
    const res =  await fetch(API_URL_BIRTHDAY);
    const data = await res.json();
    const resSeo =  await fetch(API_URL_SEO);
    const dataSeo = await resSeo.json();
   
    return {
        props: {
            birth: data,
            seoData: dataSeo
        }  
    }
}