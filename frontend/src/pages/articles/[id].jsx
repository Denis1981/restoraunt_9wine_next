import Router from "next/router";
import MainLayout from '../../components/base/MainLayout'
import Navbar from '../../components/base/Navbar'
import Footer from '../../components/base/Footer'
import { API_URL_ARTICLE, API_URL_SEO } from '../../api/constant';

const Article = ({ seoData, articles }) => {
    
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <>
        {seoData && (
              <div key={seoData.id}>
                <MainLayout 
                    title={seoData.title_page}
                    description={seoData.description}
                    keywords={seoData.keywords}
                    og_type={seoData.og_type}
                    og_title={seoData.og_title}
                    og_description={seoData.og_description}
                    twitter_creator={seoData.twitter_creator}
                    twitter_card={seoData.twitter_card}
                    twitter_title={seoData.twitter_title}
                    twitter_description={seoData.twitter_description}
                >
                </MainLayout>
          </div>
           )
        }
        <header>
            <Navbar/>
        </header>
        <main>
        <section id="ArticlePage">
            <div className="container">
                <div className="row">
                {articles && (
                    <div className="col-xxl-12">
                        <h1>{articles.title}</h1>
                    </div>
                    )}
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        {articles && (
                        <>
                            <div className="ArticlePage__text-content-article" dangerouslySetInnerHTML={{ __html: articles.content }}/>
                            <button className="btn btn_ArticlePage__goback" onClick={() => Router.push('/articles') }>назад</button>
                        </>
                    )}
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

export default Article;

export const getStaticPath = async () => {
    const res =  await fetch(API_URL_ARTICLE);
    const data = await res.json();

    const paths = data.map(article => {
        return {
            params: {id: article.id}
        }
    } )

    return {
        paths: [
            {
                paths,
                fallback: false
            }
        ]
    }
}

export async function getServerSideProps (context) {
    
    const id = context.params.id;

    const res =  await fetch(API_URL_ARTICLE + `${id}` + '/?format=json');
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