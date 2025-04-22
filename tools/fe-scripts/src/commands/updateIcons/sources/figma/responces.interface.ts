export interface FigmaRootObject {
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
  role: string;
  nodes: FigmaNodes;
}

interface FigmaNodes {
  [key: string]: FigmaNode;
}

interface FigmaNode {
  document: FigmaDocument;
  components: FigmaComponents;
  schemaVersion: number;
  styles: FigmaStyles;
}

interface FigmaStyles {
  [key: string]: FigmaStyle;
}

interface FigmaStyle {
  key: string;
  name: string;
  styleType: string;
  description: string;
}

export interface FigmaComponents {
  [key: string]: FigmaSVGNode;
}

interface FigmaSVGNode {
  key: string;
  name: string;
  description: string;
}

export interface FigmaDocument {
  id: string;
  name: string;
  type: string;
  children: FigmaElement[];
  backgroundColor: Color;
  prototypeStartNodeID?: any;
  prototypeDevice: PrototypeDevice;
}

interface PrototypeDevice {
  type: string;
  rotation: string;
}

export enum FigmaElementType {
  component = 'COMPONENT',
  text = 'TEXT',
  vector = 'VECTOR',
  instance = 'INSTANCE',
  frame = 'FRAME',
  booleanOperation = 'BOOLEAN_OPERATION',
}

export interface FigmaElement {
  id: string;
  name: string;
  type: FigmaElementType;
  blendMode: string;
  absoluteBoundingBox: AbsoluteBoundingBox;
  constraints: Constraints;
  fills: FigmaFill[];
  strokes: Stroke[];
  strokeWeight: number;
  strokeAlign: string;
  effects: any[];
  booleanOperation?: string;
  children?: FigmaElement[];
  visible?: boolean;
  opacity?: number;
  clipsContent?: boolean;
  background?: FigmaFill[];
  backgroundColor?: Color;
  layoutGrids?: any[];
  preserveRatio?: boolean;
  strokeCap?: string;
  cornerRadius?: number;
  rectangleCornerRadii?: number[];
  componentId?: string;

  exportSettings?: ExportSetting[];
  characters?: string;
  layoutVersion?: number;
  characterStyleOverrides?: any[];
  styleOverrideTable?: any;
}

interface Stroke {
  blendMode: string;
  visible?: boolean;
  type: string;
  color: Color;
  opacity?: number;
}

interface FigmaFill {
  blendMode: string;
  type: string;
  color?: Color;
  visible?: boolean;
}

interface ExportSetting {
  suffix: string;
  format: string;
  constraint: Constraint;
}

interface Constraint {
  type: string;
  value: number;
}

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface Constraints {
  vertical: string;
  horizontal: string;
}

interface AbsoluteBoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}
