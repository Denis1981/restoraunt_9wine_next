import Link from 'next/link'

const ReviewItem = ({ id, title, photo, content, dateReview }) => {

    return (
        <>
                <div className="card mb-3" key={id}>
                        <div className="row">
                            <div className="col-xxl-4">
                                <img 
                                    src={photo} 
                                    className="reviews__photo z-depth-1" 
                                />
                            </div>
                            <div className="col-xxl-8">
                                <div className="card-body">
                                      <h3 className="card-title">{title}</h3>
                                      <div className="card-text" dangerouslySetInnerHTML={{ __html: content.slice(0,600) }}/>
                                      <p className="card-text"><small className="text-muted">{dateReview}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
    </>);
}

export default ReviewItem;




