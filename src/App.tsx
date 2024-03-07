import './App.css'
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Create Puck component config
const config = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
        resolvedTitle: {
          type: "text",
        },
      },
      resolveData: async ({ props }) => {
        return {
          props: {
            resolvedTitle: props.title,
          },
        };
      },
      render: ({ resolvedTitle }) => {
        return <h1>{resolvedTitle}</h1>;
      },
    },
    WYSIWYG: {
      fields: {
        title: {
          type: "custom",
          render: ({ name, onChange, value }) => ( // TODO: Connect fields to data
            <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={(e) => onChange(e.currentTarget.value)}
            />
          ),
        },
      },
      render: ({ title }) => {
        return <p>{title}</p>;
      },
    },
  },
};

// Describe the initial data
const initialData = {
  content: [],
  root: {},
};

// Save the data to your database
const save = (data) => {};
 
// Render Puck editor
export function App() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}

export default App