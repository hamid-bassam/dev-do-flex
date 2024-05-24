import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { getAuthSession } from "../lib/auth";
import { RoadMap } from "../src/features/roadmap/RoadMap";

// import { RoadMap } from "../src/features/roadmap/RoadMap";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div className="flex flex-col items-center gap-4 h-full">
      {/* <img src="https://www.creativefabrica.com/wp-content/uploads/2022/11/03/ToDo-Task-Manager-App-UI-Kit-Graphics-44545799-1-1-580x387.jpg">
      </img> */}
      <RoadMap />
      <p>
        {JSON.stringify(session, null, 2)}
      </p>
      <div className="flex  gap-2 justify-center">

        <Button variant={'secondary'}>click me </Button>
        <Button >click me </Button>
      </div>
      <Input />


    </div>
  );
}
