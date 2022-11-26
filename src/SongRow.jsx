import "./SongRow.css";

const SongRow = () =>{
    return(
        <div className="SongRow">
            <div className="SongBlock">
                <img src="https://i.ytimg.com/vi/fQWhenQgXo8/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mx5qTlRvvP8TQX-8zEPJHAyGPgjQ" alt="Photograph" className="Song-image" />
                <div className="Song-title">
                    <div className="Song-text">
                        <div className="Song-title"><a title="Photograph" href="#">Photograph</a></div>
                        <div className="Song-artist"><a title="Ed Sheran" href="#"> Ed Sheran - Photograph</a></div>
                    </div>
                </div>
                <div className="Side-icons">
                    <div><button  className="icon-1"><img src="https://img.icons8.com/material-rounded/24/null/downloading-updates.png"/></button></div>
                    <div><button  className="icon-2"><img src="https://img.icons8.com/ios-glyphs/30/null/menu-2.png"/></button></div>
                </div>
            </div>
        </div>
    )
}

export default SongRow