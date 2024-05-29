"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, Theme, lightDefaultTheme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
// import * as Form from "../../../components/ui/form";
import { useTheme } from "next-themes";


// const lightTheme = {
//   colors: {
//     editor: {
//       text: "hsl(var(--foreground))",
//       background: "hsl(var(--background))",
//     },
//     menu: {
//       text: "hsl(var(--primary-foreground))",
//       background: "hsl(var(--primary))",
//     },
//     tooltip: {
//       text: "hsl(var(--foreground))",
//       background: "hsl(var(--muted))",
//     },
//     hovered: {
//       text: "hsl(var(--foreground))",
//       background: "hsl(var(--muted))",
//     },
//     selected: {
//       text: "hsl(var(--foreground))",
//       background: "hsl(var(--primary))",
//     },
//     disabled: {
//       text: "hsl(var(--muted-foreground))",
//       background: "hsl(var(--muted))",
//     },
//     shadow: "hsl(var(--ring))",
//     border: "hsl(var(--border))",
//     sideMenu: "hsl(var(--accent))",
//     highlights: lightDefaultTheme.colors.highlights,
//   },
//   // borderRadius: "var(--radius)",
//   fontFamily: "Helvetica Neue, sans-serif",
// } satisfies Theme;


// const lightTheme = {
//   colors: {
//     editor: {
//       text: "#2e2e2e", // HSL(0 0% 18.04%) to #2e2e2e
//       background: "#f9f5f5", // HSL(190 100% 98.82%) to #f9f5f5
//     },
//     menu: {
//       text: "#ffffff", // HSL(0 0% 100%) to #ffffff
//       background: "#4da0ff", // HSL(196.46 98.87% 34.71%) to #4da0ff
//     },
//     tooltip: {
//       text: "#1d1d1d", // HSL(0 0% 8%) to #1d1d1d
//       background: "#ebf5ff", // HSL(195.65 62.16% 92.75%) to #ebf5ff
//     },
//     hovered: {
//       text: "#1d1d1d", // HSL(0 0% 8%) to #1d1d1d
//       background: "#ebf5ff", // HSL(195.65 62.16% 92.75%) to #ebf5ff
//     },
//     selected: {
//       text: "#1d1d1d", // HSL(0 0% 8%) to #1d1d1d
//       background: "#4da0ff", // HSL(196.46 98.87% 34.71%) to #4da0ff
//     },
//     disabled: {
//       text: "#ebebeb", // HSL(0 0% 92.75%) to #ebebeb
//       background: "#f5f5f5", // HSL(0 0% 81.96%) to #f5f5f5
//     },
//     shadow: "#c3e4ff", // HSL(193.1 28.48% 77.19%) to #c3e4ff
//     border: "#f5f5f5", // HSL(0 0% 81.96%) to #f5f5f5
//     sideMenu: "#b3c9d1", // HSL(193.64 46.05% 74.04%) to #b3c9d1
//     highlights: lightDefaultTheme.colors.highlights, // Assuming highlights is pre-defined
//   },
//   borderRadius: 8, // Convert 0.5rem to px if needed, 1rem = 16px
//   fontFamily: "Helvetica Neue, sans-serif",
// } satisfies Theme;



function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hslToHex(hsl: string): string {
  const [h, s, l] = hsl.split(' ').map(value => parseFloat(value));
  const [r, g, b] = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}
// const lightTheme = {
//   colors: {
//     editor: {
//       text: hslToHex('0 0% 18.04%'), // HSL(0 0% 18.04%) to #2e2e2e
//       background: hslToHex('190 100% 98.82%'), // HSL(190 100% 98.82%) to #f9f5f5
//     },
//     menu: {
//       text: hslToHex('196.46 98.87% 34.71%'), // 
//       background: hslToHex('162.86 100% 98.63%'), // HSL(162.86 100% 98.63%) to #4da0ff
//     },
//     tooltip: {
//       text: hslToHex('0 0% 8%'), // HSL(0 0% 8%) to #141414
//       background: hslToHex('195.65 62.16% 92.75%'), // HSL(195.65 62.16% 92.75%) to #e2f0ff
//     },
//     hovered: {
//       text: hslToHex('0 0% 8%'), // HSL(0 0% 8%) to #141414
//       background: hslToHex('195.65 62.16% 92.75%'), // HSL(195.65 62.16% 92.75%) to #e2f0ff
//     },
//     selected: {
//       text: hslToHex('0 0% 8%'), // HSL(0 0% 8%) to #141414
//       background: hslToHex('196.46 98.87% 34.71%'), // HSL(196.46 98.87% 34.71%) to #0044ff
//     },
//     disabled: {
//       text: hslToHex('0 0% 81.96%'), // HSL(0 0% 81.96%) to #d0d0d0
//       background: hslToHex('195.65 62.16% 92.75%'), // HSL(195.65 62.16% 92.75%) to #e2f0ff
//     },
//     shadow: hslToHex('193.1 28.48% 77.19%'), // HSL(193.1 28.48% 77.19%) to #c3e4ff
//     border: hslToHex('0 0% 81.96%'), // HSL(0 0% 81.96%) to #d0d0d0
//     sideMenu: hslToHex('193.64 46.05% 74.04%'), // HSL(193.64 46.05% 74.04%) to #b3c9d1
//     highlights: lightDefaultTheme.colors.highlights, // Assuming highlights is pre-defined
//   },
//   borderRadius: 8,// Convert 0.5rem to px if needed, 1rem = 16px
//   fontFamily: "Helvetica Neue, sans-serif",
// } satisfies Theme;


const lightTheme = {

  colors: {

    editor: {
      text: "lightDefaultTheme.colors.editor.text",
      background: lightDefaultTheme.colors.editor.background,
    },
    menu: {
      text: "HSL(210.77 97.5% 15.69%)",
      background: "#f0f9ff",
    },
    disabled: {
      text: " lightDefaultTheme.colors.disabled.text",
      background: "lightDefaultTheme.colors.disabled.background",
    },
    tooltip: {
      text: "HSL(195.65 62.16% 92.75%)",
      background: "HSL(196.46 98.87% 34.71%)",
    },
    hovered: {
      text: "HSL(210.77 97.5% 15.69%)",
      background: "HSL(195.65 62.16% 92.75%)",
    },
    selected: {
      text: lightDefaultTheme.colors.selected.text,
      background: "lightDefaultTheme.colors.selected.background",
    },

    shadow: hslToHex('193.1 28.48% 77.19%'), // HSL(193.1 28.48% 77.19%) to #c3e4ff
    border: hslToHex('0 0% 81.96%'), // HSL(0 0% 81.96%) to #d0d0d0
    sideMenu: 'HSL(193.64 46.05% 74.04%)', // HSL(193.64 46.05% 74.04%) to #b3c9d1
    highlights: lightDefaultTheme.colors.highlights, // Assuming highlights is pre-defined
  },

  borderRadius: 8,// Convert 0.5rem to px if needed, 1rem = 16px
  fontFamily: "Helvetica Neue, sans-serif",
} satisfies Theme;




const darkTheme = {
  colors: {
    editor: {
      text: hslToHex('180 100% 98.63%'), // HSL(180 100% 98.63%) to #f7ffff
      background: hslToHex('211.36 88% 9.8%'), // HSL(211.36 88% 9.8%) to #09142a
    },
    menu: {
      text: hslToHex('193.04 74.19% 93.92%'), // HSL(193.04 74.19% 93.92%) to #e0f5ff
      background: hslToHex('206.8 100% 20.2%'), // HSL(206.8 100% 20.2%) to #003366
    },
    tooltip: {
      text: hslToHex('210 34.03% 80.17%'), // HSL(210 34.03% 80.17%) to #b4d1e4
      background: hslToHex('210.77 97.5% 15.69%'), // HSL(210.77 97.5% 15.69%) to #031f40
    },
    hovered: {
      text: hslToHex('210 34.03% 80.17%'), // HSL(210 34.03% 80.17%) to #b4d1e4
      background: hslToHex('210.77 97.5% 15.69%'), // HSL(210.77 97.5% 15.69%) to #031f40
    },
    selected: {
      text: hslToHex('203.64 100% 19.41%'), // HSL(203.64 100% 19.41%) to #004c8c
      background: hslToHex('197.8 45.27% 60.59%'), // HSL(197.8 45.27% 60.59%) to #66b3cc
    },
    disabled: {
      text: hslToHex('0 0% 93%'), // HSL(0 0% 93%) to #eeeeee
      background: hslToHex('195.65 69.7% 93.53%'), // HSL(195.65 69.7% 93.53%) to #e2f0ff
    },
    shadow: hslToHex('204.68 56.74% 66.21%'), // HSL(204.68 56.74% 66.21%) to #a0d1ff
    border: hslToHex('0 0% 93%'), // HSL(0 0% 93%) to #eeeeee
    sideMenu: hslToHex('206.8 60.22% 31.11%'), // HSL(206.8 60.22% 31.11%) to #4c6477
    highlights: lightDefaultTheme.colors.highlights, // Assuming highlights is pre-defined

  },
  borderRadius: 8, // Convert 0.5rem to px if needed, 1rem = 16px
  fontFamily: "Helvetica Neue, sans-serif",
} satisfies Theme;
// Our <Editor> component we can reuse later
export default function MantineEditor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
  const theme = useTheme();
  const blockTheme = theme.theme === "dark" ? "dark" : "light";
  const myTheme = blockTheme === "dark" ? darkTheme : lightTheme;
  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={myTheme} />;
}