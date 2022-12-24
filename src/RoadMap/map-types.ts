export interface MindMapNodeData {
  name?: string;
  val?: number;
  id?: string | number;
  x?: number;
  y?: number;
  z?: number;
  vx?: number;
  vy?: number;
  vz?: number;
  fx?: number;
  fy?: number;
  fz?: number;
}
export interface MindMapLinkData {
  source: string;
  target: string;
}
export interface MindMapData {
  nodes: MindMapNodeData[];
  links: MindMapLinkData[];
}
