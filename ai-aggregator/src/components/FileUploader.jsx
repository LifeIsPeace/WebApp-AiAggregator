import { useState } from "react";
import axios from 'axios'

function FileUploader() {
    const [file, setFile] = useState(null);
    // idle, uploading, success, error
    const [status, setStatus] = useState('idle')

    const handleFileChange = (e) => {
        if(e.target.files){
            setFile(e.target.files[0]);
        }
    }

    const handleFileUpload = async() => {
        if (!file) return;

        setStatus("uploading");

        const formData = new FormData()
        formData.append("file", file)

        try{
            await axios.post("http://127.0.0.1:8000/api/fileUpload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            setStatus("success");
        } catch{
            setStatus('error');
        };
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

            {file && status !== "uploading" && 
                <button onClick={handleFileUpload}>Upload</button>
            }

            {status === 'success' && (
                <p>
                    File uploaded successfully!
                </p>
            )}

            {status === 'error' && (
                <p>
                    Upload failed. Please try again.
                </p>
            )}
            
        </div>
    );
}

export default FileUploader