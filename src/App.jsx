import Artist from "./Artist";
import Header from "./Header";
import SongRow from "./SongRow";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="Main-body">
                <div className="Column-one">
                    <div className="Image">
                        <img className="Banner-image" src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6360d792be74d37134544f59/COLLECTION_622101255224266.png" alt="Shazam"/>
                    </div>
                    <div className="Artist-block" >
                        <div className="Artist-label">Artists</div>
                        <div className="Artist">
                            <ul className="Artist-ul">
                                <Artist />
                                <Artist />
                                <Artist />
                                <Artist />
                                <Artist />
                            </ul>
                            <div className="All-Artists"> <button className="Artist-button">See All Artists</button></div>
                        </div>
                    </div>
                </div>
                <div className="Column-two">
                    <Header/>
                    <div className="Buttons">
                        <div className="Buttons-innerbox"><button className="Button">
                            <span className="Icon">&#9658;</span>Play songs</button>
                        <button className="Button"><span className="Icon">&#x2B;</span>Follow</button>
                        </div>
                    </div>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                    <SongRow/>
                </div>
            </div>
        </div>
    )
}

export default App;