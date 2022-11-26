import "./Artist.css";

const Artist = () => {
    return (
        <div className="Artists">
            <li className="Artists-li" >
                <a href="#" title="The weekend" className="Item">
                    <div className="Artists-block">
                        <img className="Artists-image" src="https://img.wynk.in/unsafe/80x80/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1667205846568-Imagine_Dragons-wa_9d276132.png" alt="Imagine Dragons" />
                        <span className="Artists-title">Imagine Dragons</span></div>
                </a>
            </li>
        </div>
    )
}

export default Artist;