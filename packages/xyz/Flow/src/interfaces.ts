import type { CSSProperties, Dispatch, SetStateAction } from 'react';
import { MarkerType, type ReactFlowProps, type Node, type Edge } from 'reactflow';

type ExtenalReactFlowProps = Pick<
  ReactFlowProps,
  | 'id'
  | 'fitView'
  | 'snapToGrid'
  | 'snapGrid'
  | 'panOnDrag'
  | 'selectNodesOnDrag'
  | 'panOnScroll'
  | 'panOnScrollMode'
  | 'zoomOnScroll'
  | 'zoomOnPinch'
  | 'zoomOnDoubleClick'
  | 'preventScrolling'
  | 'nodesConnectable'
  | 'nodesDraggable'
  | 'nodesFocusable'
  | 'elementsSelectable'
  | 'zoomOnScroll'
>;

export interface FlowValue {
  nodes: Node[];
  edges: Edge[];
}

// набор методов для управления reactflow из вне
export interface ExternalControls {
  setNodes: Dispatch<SetStateAction<Node<any, string | undefined>[]>>;
  addNode: (node: Node) => void;
  removeNode: (nodeId: Node['id']) => void;
  // ...
}

export interface FlowProps extends ExtenalReactFlowProps {
  colorMode?: 'light' | 'dark' | 'color';
  initialData?: FlowValue;
  height?: CSSProperties['height'];
  connectExternalControls?: (controls: ExternalControls) => void;
}

export type FlowNodeType = 'badge';

export { MarkerType, type Edge, type Node };
