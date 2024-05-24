
'use client'
import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Card } from '../../../components/ui/card';
import clsx from 'clsx';

function TaskNode({ data }: { data: any }) {
  return (

    <Card className="px-4 py-2 shadow-md rounded-md">

      <div className="flex flex-col gap-2">
        <h5 className='text-sm font-medium'>
          {data.title}
        </h5>
        <p>
          {data.description}
        </p>
        <p>
          {data.deadLine?? "No deadline set"}
        </p>
        <div>
          <span className={clsx("p1 text-xs" , 
          data.status === "completed" ? "bg-primary-foreground " : "bg-destructive"
          )}>
            {data.status}
          </span>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-accent" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-accent" />
    </Card>
  );
}

export default memo(TaskNode);