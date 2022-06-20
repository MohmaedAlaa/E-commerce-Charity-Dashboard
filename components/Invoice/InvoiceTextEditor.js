import React ,{ useEffect } from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default function InvoiceTextEditor () {
  const theme = 'snow';
  // const theme = 'bubble';

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered'}, { list: 'bullet' }],
  
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const placeholder = 'Provide a detailed description';

  const formats = ['bold', 'italic', 'underline','align', 'list'];

  const { quillRef } = useQuill({ theme, modules, formats, placeholder });

  return (
    
    <div className="h-32 mb-10 rounded-md">
      <div ref={quillRef} />
    </div>
  );
};

// import { useState } from "react";
// import { RichTextEditor } from "@mantine/rte";

// const initialValue = "Provide a detailed description";

// export default function InvoiceTextEditor() {
//   const [value, onChange] = useState(initialValue);
//   console.log(value);

//   return (
//     <RichTextEditor
//       value={value}
//       onChange={onChange}
//       controls={[
//         ["bold", "italic", "underline", "link"],
//         ["unorderedList", "h1", "h2", "h3"],
//         ["alignLeft", "alignCenter", "alignRight"],
//       ]}
//     />
//   );
// }