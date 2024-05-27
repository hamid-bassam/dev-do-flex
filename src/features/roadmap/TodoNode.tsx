
'use client'
import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Card } from '../../../components/ui/card';
import { Checkbox } from '../../../components/ui/checkbox';


function TodoNode({ data }: { data: any }) {
  return (

    <Card className="px-4 py-2 shadow-md rounded-md">

      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
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
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-accent" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-accent" />
    </Card>
  );
}

export default memo(TodoNode);