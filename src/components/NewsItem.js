import React from 'react'

const NewsItem = (props) => {

    let mystyle = {
        size: '5rem',
        border: '2px solid red',
        // height: '20rem'
    }
    // let mystyle1 = {
    //     // height: '10 px',
    //     width : '283px'
    // }
    // let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div>
            <div className="card my-2" style={{ width: '18rem' }} >
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={mystyle}>{props.source}</span>
                <img src={props.imageUrl ? props.imageUrl : "https://thumbs.dreamstime.com/b/luxury-gold-n-h-nh-letter-classy-floral-logo-icon-vintage-drawn-emblem-book-design-weeding-card-stamp-restaurant-boutique-185131076.jpg"} alt="" className="card-img-top mx-auto" />

                <div className="card-body">
                    <h5 className="card-title">{props.title}...</h5>
                    <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                    <p className="card-text">{props.description}... {<a rel="noreferrer" href={props.url} target='_blank' rel='noreferrer' className='d-flex'>Read More...</a>}</p>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
