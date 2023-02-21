
import MainLayout from '../components/base/MainLayout'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import ReviewItem from '../components/reviews/ReviewItem'
import { API_URL_SEO, API_URL_REVIEWS } from '../api/constant';

const Reviews = ({ reviews, seoData }) => {
    
    return (
        <>
        {
        seoData.map((seoItem, i) => (
                (seoItem.id === 6)  && (
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
        <section id="ReviewsPage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>отзывы клиентов <strong>NINEWINES</strong></h1>
                    </div>
                </div>
                <div className="row">
                {reviews.map((review) => (
                    <ReviewItem id={review.id} title={review.title} photo={review.photo} content={review.content} dateReview={review.dateReview}/>
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

export default Reviews;

export async function getServerSideProps () {
    
    const res =  await fetch(API_URL_REVIEWS);
    const data = await res.json();
    const resSeo =  await fetch(API_URL_SEO);
    const dataSeo = await resSeo.json();
   
    return {
        props: {
            reviews: data,
            seoData: dataSeo
        }  
    }
}