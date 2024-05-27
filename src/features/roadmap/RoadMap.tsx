'use client'
import { useCallback } from 'react';
import ReactFlow, {
  Connection,
  Controls,
  Edge,
  MiniMap,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import 'reactflow/dist/base.css';

import '@/tailwind.config';
import CardExample from './CardExample';
import CustomNode from './CustomNode';
import GoalNode from './GoalNode';
import RoundedNode from './RoundedNode';
import TaskNode from './TaskNode';
import TodoNode from './TodoNode';

const nodeTypes = {
  custom: CustomNode,
  rounded: RoundedNode,
  card: CardExample,
  taskNode: TaskNode,
  goalNode: GoalNode,
  todoNode: TodoNode,
};

const initNodes: Node[] = [
  {
    id: '1',
    type: 'goalNode',
    data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
    position: { x: 0, y: -300 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },

    position: { x: -100, y: 500 },
  },

  {
    id: '3',
    type: 'taskNode',
    data: { title: 'Task 1', description: 'This is a task', deadLine: '12/12/2022', status: 'completed' },
    position: { x: 100, y: 500 },
  },
  {
    id: '5',
    type: 'taskNode',
    data: { title: 'Task 2', description: 'This is a task', deadLine: '12/12/2022', status: 'completed' },
    position: { x: 200, y: 500 },
  },
  {
    id: '6',
    type: 'goalNode',
    data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
    position: { x: 400, y: 500 },
  },
  {
    id: '4',
    type: 'rounded',
    data: { name: 'Kristi Price', job: 'Developer', emoji: '🤩' },
    position: { x: -100, y: 800 },
  },
  {
    id: '7',
    type: 'todoNode',
    data: { name: 'Kristi Price', job: 'Developer', emoji: '🤩' },
    position: { x: 300, y: 1200 },
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
  {
    id: 'e1-5',
    source: '1',
    target: '5',
  },
  {
    id: 'e1-6',
    source: '1',
    target: '6',
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
  },

  {
    id: 'e3-4',
    source: '3',
    target: '4',
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
      className="bg-popover/10 border rounded-md h-[30rem]"
      minZoom={0.1}
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

