import Image from 'next/image'
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import {
    photo_menu
} from "../../public";

const ThanksPage = () => {

    return (
        <>
            <MainLayout 
                title="Ваша заявка принята | 9wines"
            >
            </MainLayout>
            <header>
                <Navbar/>
            </header>
            <main>
            <section id="Notfound">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                                <Image 
                                    src={photo_menu} 
                                    alt="" 
                                    title="" 
                                />
                            <p>Ваша заявка принята. Мы свяжемся с вами в течение 10 минут.</p>
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

export default ThanksPage;