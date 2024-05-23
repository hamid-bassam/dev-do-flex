import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4 items-center justify-center h-96 bg-popover-foreground">
      <Button variant={'secondary'}>click me </Button>
      <Button >click me </Button>
    </div>
  );
}
