import './NotFound.css';

const NotFound = () => {
    return(
        <>  
        <div className="not-found-container">
            <h1 className="title-error">ERROR 404: PAGE NOT FOUND.</h1>
            <a className="home-ref" href="/">HOME</a>
        </div>
        </>
    )
}

export default NotFound;