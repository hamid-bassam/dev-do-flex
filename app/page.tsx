import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 h-full">
      <img src="https://www.creativefabrica.com/wp-content/uploads/2022/11/03/ToDo-Task-Manager-App-UI-Kit-Graphics-44545799-1-1-580x387.jpg">
      </img>
      <div className="flex absolute bottom-16 right-0 left-0 gap-2 justify-center">

        <Button variant={'secondary'}>click me </Button>
        <Button >click me </Button>
      </div>

    </div>
  );
}
