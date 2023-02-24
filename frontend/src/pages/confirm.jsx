import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import {
    photo_menu
} from "../../public";

const ConfirmPage = () => {

    return (
        <>
            <MainLayout 
                title="Подтвердите свой возраст | 9wines"
            >
            </MainLayout>
            <header>
                <Navbar/>
            </header>
            <main>
            <section id="Confirm">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                                <Image 
                                    src={photo_menu} 
                                    alt="" 
                                    title="" 
                                    className="AboutUs_image1" 
                                />
                            <h2>Для доступа на страницу вы должны подтвердить свой совершеннолетний возраст</h2>    
                            <p><em>Информация, размещенная на сайте www.9wines.ru, только для лиц совершеннолетнего возраста, все сведения не являются рекламой, носят исключительно информационный характер и предназначены только для личного использования.</em></p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-2 col-md-4 col-lg-3 col-xl-3">
                            <Link href="/wineevening" legacyBehavior><a className="btn btn-done z-depth-1">Подтверждаю</a></Link>
                        </div>
                        <div className="col-xxl-2 col-md-4 col-lg-3 col-xl-3">
                            <Link href="/" legacyBehavior><a className="btn btn-no z-depth-1">Мне нет 18 лет</a></Link>
                        </div>
                    </div>
                </div>
            </section>
            </main>
            <footer>
                <Footer/>
            </footer> 
        </>
    )

}

export default ConfirmPage;