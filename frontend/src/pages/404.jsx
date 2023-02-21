import Image from 'next/image'
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import {
    photo_menu
} from "../../public";

const NotfoundPage = () => {

    return (
        <>
            <MainLayout 
                title="Извините, такой страницы не существует | 9wines"
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
                                    className="AboutUs_image1" 
                                />
                            <p>Извините, такой страницы не существует</p>
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

export default NotfoundPage;