import {useEffect, useState} from "react";
import Head from 'next/head'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import axios from "axios";
import {API_URL_POLYTICS} from '../api/constant';

const Polytics = () => {

    const [polytics, setPolytics]=useState([]);

     useEffect(()=>{
        const getPolytics = async () => {
            const res = await axios.get(API_URL_POLYTICS);
            setPolytics(res.data);
        }
        getPolytics()
    }, []);

    return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Политика конфиденциальности в отношении обработки персональных данных 9wines" />
        <meta name="keywords" content="" />
        <title>Политика конфиденциальности</title>
    </Head>
    <header>
        <Navbar/>
    </header>
    <main>
    <section id="PolyticSpage">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8">
                    <h2>Политика конфиденциальности в отношении обработки персональных данных</h2>
                </div>
            </div>
            <div className="row">
                 {
                 polytics.map((polytics, i) => (
                <div className="col-xxl-12" key={polytics.id}>
                    <div dangerouslySetInnerHTML={{ __html: polytics.content}}/>
                </div>
                ))
                 }
            </div>
        </div>
    </section>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>);
}

export default Polytics;