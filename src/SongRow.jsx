import "./SongRow.css";

const SongRow = () =>{
    return(
        <div className="SongRow" style={{position: 'relative', top: '1.5rem'}}>
            <div className="SongBlock">
                <img src="https://i.ytimg.com/vi/fQWhenQgXo8/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mx5qTlRvvP8TQX-8zEPJHAyGPgjQ" alt="Photograph" className="Song-image" />
                <div className="Song-title">
                    <div className="Song-text">
                        <div className="Song-title"><a title="Photograph" href="#">Photograph</a></div>
                        <div className="Song-artist"><a title="Ed Sheran" href="#"> Ed Sheran - Photograph</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongRow