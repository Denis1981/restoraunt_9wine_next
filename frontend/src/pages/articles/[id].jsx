import Router from "next/router";
import MainLayout from '../../components/base/MainLayout'
import Navbar from '../../components/base/Navbar'
import Footer from '../../components/base/Footer'
import { API_URL_ARTICLE} from '../../api/constant';

const Article = ({articles }) => {
    
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <>
        {articles && (
              <div key={articles.id}>
                <MainLayout 
                    title={articles.title_page}
                    description={articles.description}
                    keywords={articles.keywords}
                    og_type={articles.og_type}
                    og_title={articles.og_title}
                    og_description={articles.og_description}
                    twitter_creator={articles.twitter_creator}
                    twitter_card={articles.twitter_card}
                    twitter_title={articles.twitter_title}
                    twitter_description={articles.twitter_description}
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
   
    return {
        props: {
            articles: data,
        }  
    }
}