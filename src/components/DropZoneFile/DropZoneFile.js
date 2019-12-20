import React, { useState, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

export default function DropZoneFile() {

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };  


  const [files, setFiles] = useState([]);
  
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map((file, index) => Object.assign(file, {
        preview: URL.createObjectURL(file, index),
        index: index
      })));
    }
  });
  
  // const handleDelete = (id) => {
  //   const d = files.filter(f => {
  //     return f.preview !== id
  //   })
  //   setFiles({files: d})
  //   // console.log(d)
  // }

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
          // onClick={() => handleDelete(file.preview)}
        />
        <br />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);


  return (
    <>
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
      </section>
      <br />
      <button onClick={() => setFiles([])}>Delete Images</button>
      <br />
      <pre>{ JSON.stringify(files, null, 2) }</pre>
    </>
  )
}
