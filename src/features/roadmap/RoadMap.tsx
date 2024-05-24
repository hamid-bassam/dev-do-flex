'use client'
import { useCallback } from 'react';
import ReactFlow, {
  Connection,
  Controls,
  Edge,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import 'reactflow/dist/base.css';

import '@/tailwind.config';
import CustomNode from './CustomNode';
import RoundedNode from './RoundedNode';

const nodeTypes = {
  custom: CustomNode,
  rounded: RoundedNode,
};

const initNodes = [
  {
    id: '1',
    type: 'custom',
    data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },

    position: { x: -200, y: 200 },
  },
  {
    id: '3',
    type: 'rounded',
    data: { name: 'Kristi Price', job: 'Developer', emoji: '🤩' },
    position: { x: 200, y: 200 },
  },
];

const initEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
];

export const RoadMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      className="bg-card border rounded-md"
      minZoom={0.2}
      maxZoom={0.7}

    >

      <MiniMap
        zoomable
        pannable
        className='h-16 w-16 flex items-center justify-center'
        nodeComponent={function MiniMapNode({ x, y }) {
          return <circle cx={x} cy={y} r="50" />;
        }}
      />
      <Controls />
    </ReactFlow>
  );
};

