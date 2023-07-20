import { Editable, useEditor } from '@wysimark/react';
import { useState, useEffect } from 'react';
import './MarkdownEditor.css';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('### Type something');
  const editor = useEditor({
    maxHeight: 600,
  });

  console.log(markdown);

  return (
    <div className="editor-wrapper">
      <Editable
        className="editor"
        editor={editor}
        value={markdown}
        onChange={setMarkdown}
        throttleInMs={500}
        placeholder="Type something here..."
      />
    </div>
  );
};

export default MarkdownEditor;
