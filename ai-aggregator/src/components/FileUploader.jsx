import { useState } from "react";


function FileUploader() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState()

    const handleFileChange = (e) => {
        if(e.target.files){
            setFile(e.target.files[0]);
        }
    }
    
    return (
        <div className="fileUploader">
            <input type="file" onChange={handleFileChange}/>
            {file && (
                <div> 
                    <p>File name: {file.name}</p>
                    <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
                    <p>Type: {file.type}</p>
                </div>
            )}
        </div>
    );
}

export default FileUploader