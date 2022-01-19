import './Container.css';

function Container({url}:{url: string}) {
    
    return (
        <div className="container pt-3 pb-3">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={url} alt="image"/>
                </div>
            </div>
        </div>
    );
}

export default Container;
