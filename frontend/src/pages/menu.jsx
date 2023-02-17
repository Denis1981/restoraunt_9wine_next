import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios";
import { API_URL_MENUREST, API_URL_SEO } from '../api/constant';
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import Image from 'next/image';
import {
    photo_menu,
    wine_menu,
    winebar_menu,
    bar_menu,
    menu_menu,
    line_menu
} from "../assets";

const MenuPage = ({ seoData }) => {

     const [menus, setMenus]=useState([]);
     const [loading, setLoading]=useState([false]);

     useEffect(()=>{
        const getMenus = async () => {
            setLoading(true);
            const res = await axios.get(API_URL_MENUREST);
            setMenus(res.data);
            setLoading(false);
        }
        getMenus()
    }, [])

    return (
        <>
        {
        seoData.map((seoItem, i) => (
                (seoItem.id === 3)  && (
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
        <section id="MenuPage">
            <div className="container">
               <div className="row">
                   <div className="col-xxl-12">
                       <Image 
                            src={photo_menu} 
                            className="MenuPage__photo_menu" 
                            alt="" 
                            title="" 
                       />
                   </div>
               </div>
               <div className="row MenuPage__wine_menu">
                   <div className="col-xxl-5 text-center">
                       <Image src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                   <div className="col-xxl-2 text-center">
                       <h2>wine</h2>
                   </div>
                   <div className="col-xxl-4 text-center">
                       <Image 
                       src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                <div className="col-xxl-12" key={menus.id}>
                                    <p dangerouslySetInnerHTML={{ __html: menus.wine }}/>
                                </div>
                            ))
                        }
                    </div>
               </div>
                <div className="row MenuPage__winebar_menu">
                   <div className="col-xxl-5 text-center">
                       <Image src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                   <div className="col-xxl-2 text-center">
                       <h2>wine & bar</h2>
                   </div>
                   <div className="col-xxl-5 text-center">
                       <Image src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                <div className="col-xxl-12" key={menus.id}>
                                    <p dangerouslySetInnerHTML={{ __html: menus.wine_bar }}/>
                                </div>
                            ))
                        }
                    </div>
               </div>
                <div className="row MenuPage__bar_menu">
                   <div className="col-xxl-5 text-center">
                       <Image src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                   <div className="col-xxl-2 text-center">
                       <h2>bar</h2>
                   </div>
                   <div className="col-xxl-5 text-center">
                       <Image src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                <div className="col-xxl-12" key={menus.id}>
                                    <p dangerouslySetInnerHTML={{ __html: menus.bar }}/>
                                </div>
                            ))
                        }
                    </div>
               </div>
                <div className="row MenuPage__menu_menu">
                   <div className="col-xxl-5 text-center">
                       <Image src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                   <div className="col-xxl-2 text-center">
                       <h2>menu</h2>
                   </div>
                   <div className="col-xxl-5 text-center">
                       <Image src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                <div className="col-xxl-12" key={menus.id}>
                                    <p dangerouslySetInnerHTML={{ __html: menus.menu }}/>
                                </div>
                            ))
                        }
                    </div>
               </div>
            </div>
        </section>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>);
};

export default MenuPage;

export async function getServerSideProps (context) {
    
    const res =  await fetch(API_URL_SEO);
    const data = await res.json();
   
    return {
        props: {
            seoData: data
        }  
    }
}