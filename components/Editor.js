import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

const initialValue = "type your message here";

export default function Editor() {
  const [value, onChange] = useState(initialValue);
  console.log(value);

  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      controls={[
        ["bold", "italic", "underline", "link"],
        ["unorderedList", "h1", "h2", "h3"],
        ["alignLeft", "alignCenter", "alignRight"],
      ]}
      className='h-52'
    />
  );
}
