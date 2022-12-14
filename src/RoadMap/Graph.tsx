import dynamic from 'next/dynamic';
import { useCallback, useRef } from 'react';
import { ForceGraphMethods } from 'react-force-graph-3d';
import data from './data.json';
import SpriteText from 'three-spritetext';
import { MindMapNodeData } from './map-types';
const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), {
  ssr: false
});
/*
const ForwardGraph3D = forwardRef(
  (props: ForceGraphProps, ref: MutableRefObject<ForceGraphMethods>) => (
    <ForceGraph3D {...props} ref={ref} />
  )
);
*/
const FocusGraph = () => {
  const fgRef = useRef<ForceGraphMethods>();

  const handleClick = useCallback(
    node => {
      // Aim at node from outside it
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      console.log(node);
      fgRef?.current?.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    },
    [fgRef]
  );
  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data}
      nodeLabel="id"
      nodeThreeObject={node => {
        console.log(node);
        const typeNode: MindMapNodeData = node;
        const sprite = new SpriteText(String(typeNode.name));
        sprite.color = `#fff`;
        sprite.textHeight = 8;
        sprite.backgroundColor = '#faf';
        sprite.padding = 5;
        sprite.borderRadius = 5;
        return sprite;
      }}
      nodeAutoColorBy="group"
      onNodeClick={handleClick}
    />
  );
};

export default FocusGraph;
