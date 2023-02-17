import Link from 'next/link'
import MainLayout from '../../components/base/MainLayout'
import Navbar from '../../components/base/Navbar'
import Footer from '../../components/base/Footer'
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
                    {articles.map((article) => 
                        <div className="col-xxl-4" key={article.id}>
                            <div className="card">
                                <img 
                                    src={article.photo}
                                    className="card-img-top z-depth-1" 
                                    alt={article.category} title=""
                                    width={200}
                                    height={200}
                                />
                                <div className="card-body z-depth-1">
                                  <Link key={article.id} href={`/articles/${article.id}`} legacyBehavior>
                                    <a>
                                      <h2 className="card-title" dangerouslySetInnerHTML={{ __html: article.title.slice(0,50) }}/>
                                      <p>подробнее  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5911 6.78711C12.7408 6.78711 12.0512 7.32971 12.0512 7.99955C12.0512 8.66938 12.7408 9.21197 13.5911 9.21197C14.4415 9.21197 15.6845 8.66938 15.6845 7.99955C15.6845 7.32971 14.4415 6.78711 13.5911 6.78711Z" fill="currentColor"/><path d="M2.12643 8.45191C2.97791 8.61425 3.79122 9.03985 3.79122 9.03985C3.79122 9.03985 6.56796 9.86472 11.9082 16C11.9082 16 15.5806 11.7982 7.55735 9.27092L6.03004 8.84534L2.68686 8L5.98266 7.14734C15.9789 4.71224 11.8642 0 11.8642 0C6.52101 6.12943 3.899 6.97769 3.899 6.97769C3.899 6.97769 3.02734 7.40475 2.12657 7.55393H2.12643L6.10352e-05 8L2.12643 8.45191Z" fill="currentColor"/></svg></p>
                                    </a>
                                  </Link>
                              </div>
                            </div>
                        </div>
                    )}
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


