
'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { format } from "date-fns";
import { BookmarkCheck, CalendarIcon, Check, Edit, Ellipsis, Flame, GoalIcon, Paperclip, Plus, PlusIcon, SquareCheckBig, TriangleAlert } from 'lucide-react';
import * as React from "react";
import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { DescriptionScroll } from '../../../_components/description-scroll';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Calendar } from '../../../components/ui/calendar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/ui/popover';
import { Slider } from '../../../components/ui/slider';
import { cn } from '../../../lib/utils';


import dynamic from "next/dynamic";

const MantineEditor = dynamic(() => import("./../BlockNote/MantineEditor"), { ssr: false });
function TaskNode({ data }: { data: any }) {
  const [date, setDate] = React.useState<Date>()

  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const value = (target.dataset.value as unknown) as number[]; // Adjust based on how value is stored in the target
    console.log(value);
  }
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`;
  return (
    <Card className={cn("px-4 py-2 shadow-md rounded-md")}>
      <CardHeader>
        <div className=' flex items-center w-full '>
          <div className=' flex-1 mr-auto '>

            <CardTitle>
              <span className='flex items-center gap-2'><BookmarkCheck /> realisation d&apos;app web</span>
            </CardTitle>

          </div>



          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline"> <BookmarkCheck /></Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='transform scale-75 -translate-y-4'>



              <DropdownMenuItem className='p-0'>
                <Button variant='ghost' className='flex gap-1'>
                  <Check size={15} /> hello from mexico
                </Button>
              </DropdownMenuItem>



              <DropdownMenuItem className='p-0'>
                <Button variant='ghost' className='flex gap-1'>
                  <SquareCheckBig size={15} />
                </Button>
              </DropdownMenuItem>

              <DropdownMenuItem className='p-0'>
                <Button variant='ghost'>
                  <PlusIcon size={15} />
                </Button>
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>


        </div>


      </CardHeader >
      <CardContent className="grid gap-4">

        <div className=" flex items-center  space-x-4 rounded-md border p-4 ">
          <DescriptionScroll description={description} />
        </div>

        <div className='inline-flex gap-2'>

          <Badge>Projects</Badge>
          <Badge variant={'secondary'} className='bg-secondary'>Dev</Badge>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='text-primary'>
            <TriangleAlert strokeWidth={3} size={20} />
          </div>
          <Slider onValueCommit={(value: number[]) => console.log("value", value)} defaultValue={[33]} max={100} step={1} />
        </div>
        <div className='flex gap-2 items-center'>
          <div className='text-destructive'>
            <Flame strokeWidth={3} size={20} />
          </div>
          <Slider trackColor='bg-destructive' rangeColor='bg-destructive' defaultValue={[33]} max={100} step={1} />
        </div>


        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                " justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>


        <div className=' min-w-full bg-transparent nowheel nodrag  ' style={{ overflow: 'auto' }}>
          <MantineEditor />
        </div>

      </CardContent>
      <CardFooter>
        <div className='flex relative flex-col gap-2 w-full'>
          <TooltipProvider>
            <div className='flex w-full gap-1'>

              <div className='flex-1 mr-auto '></div>

              <Button variant="outline" disabled><Paperclip size={15} /></Button>

              <Tooltip >
                <TooltipTrigger>
                  <Button variant="outline"><Edit size={15} /></Button>
                </TooltipTrigger>
                <TooltipContent className='bg-popover text-primary'>
                  <p>Edit</p>
                </TooltipContent>
              </Tooltip>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline"><Plus size={15} /></Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className={`flex  items-center`}>

                  <Tooltip >
                    <TooltipTrigger>
                      <DropdownMenuItem className='p-0'>
                        <Button variant='ghost' className=''>
                          <GoalIcon size={15} />
                        </Button>
                      </DropdownMenuItem>
                    </TooltipTrigger>
                    <TooltipContent className='bg-popover text-primary'>
                      <p>Add a goal</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip >
                    <TooltipTrigger>
                      <DropdownMenuItem className='p-0'>
                        <Button variant='ghost' className=''>
                          <SquareCheckBig size={15} />
                        </Button>
                      </DropdownMenuItem>
                    </TooltipTrigger>
                    <TooltipContent className='bg-popover text-primary'>
                      <p>Add a Task</p>
                    </TooltipContent>
                  </Tooltip>
                  <DropdownMenuItem className='p-0 '>
                    <Button variant='ghost'>
                      <Ellipsis size={15} />
                    </Button>
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TooltipProvider>
        </div>
      </CardFooter>
      <Handle type="target" position={Position.Top} className="w-4 h-4 rounded-full !bg-accent-foreground" />
      <Handle type="source" position={Position.Bottom} className="w-4 h-4 rounded-full !bg-accent-foreground" />
    </Card >
  );
};


export default memo(TaskNode);