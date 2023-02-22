import Link from 'next/link'

const ArticleItem = ({ id, title, photo, alt }) => {

    return (
        <>
                <div className="col-xxl-4 col-xl-4 col-md-6" key={id}>
                    <div className="card">
                        <img 
                            src={photo}
                            className="card-img-top z-depth-1" 
                            alt={alt}
                            title={title}
                            width={200}
                            height={200}
                        />
                        <div className="card-body z-depth-1">
                            <Link key={id} href={`/articles/${id}`} legacyBehavior>
                            <a>
                                <h5 className="card-title" dangerouslySetInnerHTML={{ __html: title.slice(0,50) }}/>
                                <p>подробнее  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5911 6.78711C12.7408 6.78711 12.0512 7.32971 12.0512 7.99955C12.0512 8.66938 12.7408 9.21197 13.5911 9.21197C14.4415 9.21197 15.6845 8.66938 15.6845 7.99955C15.6845 7.32971 14.4415 6.78711 13.5911 6.78711Z" fill="currentColor"/><path d="M2.12643 8.45191C2.97791 8.61425 3.79122 9.03985 3.79122 9.03985C3.79122 9.03985 6.56796 9.86472 11.9082 16C11.9082 16 15.5806 11.7982 7.55735 9.27092L6.03004 8.84534L2.68686 8L5.98266 7.14734C15.9789 4.71224 11.8642 0 11.8642 0C6.52101 6.12943 3.899 6.97769 3.899 6.97769C3.899 6.97769 3.02734 7.40475 2.12657 7.55393H2.12643L6.10352e-05 8L2.12643 8.45191Z" fill="currentColor"/></svg></p>
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
    </>);
}

export default ArticleItem;




