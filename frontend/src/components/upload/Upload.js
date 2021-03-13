import React, { Fragment, useState, useEffect } from 'react'
import '../upload/Upload.css'
import axios from 'axios'

const Upload = () => {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose file')
    const [uploadedFile, setUploadedFile] = useState({})
    const [message, setMessage] = useState('')
 
    useEffect(() => {
        var audio = new Audio('http://localhost:3001/download')
        audio.play()
        
        // axios.get('http://localhost:3001/download')
        //         .then(res => console.log(res)
        //     )
    }, [])

    const handleFileInput = (e) => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const submitFile = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const { fileName, filePath } = res.data
            setUploadedFile({ fileName, filePath })
            setMessage('File uploaded')
        } catch (err) {
            console.log(err.status)
            if (err.response.status === 500) {
                setMessage('There was a problem with the server')
            } else {
                setMessage(err.response.data.msg)
            }
        }
    }
    return (
        <Fragment>
            <form onSubmit={submitFile}>
                <div className='file-box'>
                    <div className='custom-file mb-4'>
                        <input type='file' className='custom-file-input' id='customFile' onChange={handleFileInput} />
                        <label className='custom-file=label' htmlFor='customFile'>{filename}</label>

                    </div>
                    <input type='submit' value='Upload' className='btn btn-primary btn-block mt-4' />
                </div>
            </form>

        </Fragment>

    )
}

export default Upload