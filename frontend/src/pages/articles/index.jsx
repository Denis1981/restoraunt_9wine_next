import Link from 'next/link'
import MainLayout from '../../components/base/MainLayout'
import Navbar from '../../components/base/Navbar'
import Footer from '../../components/base/Footer'
import Loading from '../../components/base/Loading'
import ArticleItem from '../../components/articles/ArticleItem'
import { API_URL_ARTICLES, API_URL_SEO } from '../../api/constant';

const Articles = ({ articles, seoData }) => {

       return (
        <>
        {
        seoData.map((seoItem, i) => (
                (seoItem.id === 4)  && (
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
        <section id="ArticlesPage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>события и новости <strong>NINEWINES</strong></h1>
                    </div>
                </div>
                <div className="row">
                
                {
                articles.map((articles, i) => (
                        <ArticleItem id={articles.id} title={articles.title} photo={articles.photo} alt={articles.category}/>
                ))}
                    
                </div>
            </div>
        </section>
        </main>
        <footer>
            <Footer/>
        </footer>   
    </>);
}

export default Articles;

export async function getServerSideProps () {
    
    const res =  await fetch(API_URL_ARTICLES);
    const data = await res.json();
    const resSeo =  await fetch(API_URL_SEO);
    const dataSeo = await resSeo.json();
   
    return {
        props: {
            articles: data,
            seoData: dataSeo
        }  
    }
}


