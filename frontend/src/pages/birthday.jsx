import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import {
    photo_menu,
} from "../assets";

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
        <section id="BirthdayPage">
            <div className="container">
                <h2>BirthdayPage</h2>
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