"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
// import * as Form from "../../../components/ui/form";
import { useTheme } from "next-themes";






// Our <Editor> component we can reuse later
export default function MantineEditor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
  const theme = useTheme();
  const blockTheme = theme.theme === "dark" ? "dark" : "light";

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={blockTheme} />;
}