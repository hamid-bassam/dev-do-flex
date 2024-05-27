"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import * as Badge from "../../../components/ui/badge";
import * as Button from "../../../components/ui/button";
import * as Card from "../../../components/ui/card";
import * as DropdownMenu from "../../../components/ui/dropdown-menu";
// import * as Form from "../../../components/ui/form";
import { useTheme } from "next-themes";
import * as Input from "../../../components/ui/input";
import * as Label from "../../../components/ui/label";
import * as Popover from "../../../components/ui/popover";
import * as Select from "../../../components/ui/select";
import * as Toggle from "../../../components/ui/toggle";
import * as Tooltip from "../../../components/ui/tooltip";






// Our <Editor> component we can reuse later
export default function Editor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
  const theme = useTheme();
  const blockTheme = theme.theme === "dark" ? "dark" : "light";

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={blockTheme} shadCNComponents={{
    Badge,
    Button,
    Card,
    Select,
    DropdownMenu,
    Popover,
    Tooltip,
    // Form,
    Toggle,
    Input,
    Label






  }} />;
}