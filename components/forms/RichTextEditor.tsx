import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor: React.FC<{cb: (body: string) => void, val: string}> = ({cb, val}) => {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      cb(editorRef.current.getContent())
    }
  };

  return (
     <>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
        value={val}
         onChange={log}
         init={{
           height: 300,
           menubar: false,
           skin: "oxide-dark",
           content_css: "dark",
    
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
     </>
  )
}

export default RichTextEditor
