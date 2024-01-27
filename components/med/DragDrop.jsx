'use client'

import { useState } from 'react'

const DragAndDropFileUpload = () => {
    const [dragging, setDragging] = useState(false)
    const [files, setFiles] = useState([])

    const handleDragEnter = (e) => {
        e.preventDefault()
        setDragging(true)
    };

    const handleDragOver = (e) => {
        e.preventDefault()
        setDragging(true)
    };

    const handleDragLeave = () => {
        setDragging(false)
    };

    const handleDrop = (e) => {
        e.preventDefault()

        const droppedFiles = Array.from(e.dataTransfer.files)
        setFiles(droppedFiles)

        setDragging(false)
    };

    return (
        <div
            className={`p-4 border-dashed border-2 h-[300px] mb-1.5 ${
                dragging ? 'border-blue-500' : 'border-gray-300'
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <p className="text-gray-500 text-center">
                {dragging ? 'Drop the files here!' : 'Drag and drop files here'}
            </p>
            <ul className="mt-4">
                {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default DragAndDropFileUpload;
