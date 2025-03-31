import FileUploader from "../components/FileUploader"
import "../css/Home.css"

function Home(){
    return(
        <div className="home">
            <h1 className="home-title">Agrimatch</h1>
            <FileUploader/>
        </div>
    )
}

export default Home