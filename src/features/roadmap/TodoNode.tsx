
'use client'
import { Check } from 'lucide-react';
import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Checkbox } from '../../../components/ui/checkbox';

import dynamic from "next/dynamic";


const MantineEditor = dynamic(() => import("./../BlockNote/MantineEditor"), { ssr: false });
function TodoNode({ data }: { data: any }) {
  return (

    <Card className=" px-4 py-2 shadow-md rounded-md  w-full h-full">
      <CardHeader>
        <CardTitle>
          <span className='flex items-center gap-2'><Check size={15} />Todo</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">

        {/* <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            todo task 1
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            todo task 2
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            todo task 3
          </label>
        </div> */}

        <div className='w-10 min-w-96 bg-transparent nowheel nodrag  ' style={{ overflow: 'auto' }}>
          <MantineEditor />
        </div>
      </CardContent>



      <Handle type="target" position={Position.Top} className="w-4 h-4 rounded-full !bg-accent-foreground" />
      {/* <Handle type="source" position={Position.Bottom} className="w-4 h-4 rounded-full !bg-accent-foreground" /> */}
    </Card>
  );
}

export default memo(TodoNode);