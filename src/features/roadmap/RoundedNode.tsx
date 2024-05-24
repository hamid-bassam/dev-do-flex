
'use client'
import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Card } from '../../../components/ui/card';

function RoundedNode({ data }: { data: any }) {
  return (
    <Card className="px-4 py-2 shadow-md rounded-full">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-primary/20">
          {data.emoji}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-accent" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-accent" />
    </Card>
  );
}

export default memo(RoundedNode);