// import dynamic from 'next/dynamic';
import { useRef, useState, useMemo, useEffect } from 'react';
import ReactForceGraph2d, { ForceGraphMethods } from 'react-force-graph-2d';
import {
  data,
  clusterIds,
  clusters,
  DataNodeType,
  LinkObjectType
} from './exampleData';
// import * as d3 from 'd3';
/* const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false
}); */

const TestGraph = () => {
  const [initialCenter, setInitialCenter] = useState(true);
  const [collapsedClusters, setCollapsedClusters] = useState(clusterIds);
  const [hiddenClusters, setHiddenClusters] = useState([]);
  const forceRef = useRef<ForceGraphMethods>();

  useEffect(() => {
    // forceRef.current.d3Force("collide", d3.forceCollide(13));
    forceRef.current.d3Force('charge').strength(-40);
    forceRef.current.d3Force('link').distance(50);
    forceRef.current.d3Force('charge').distanceMax(150);
  }, []);

  const toggleClusterCollapse = clusterId => {
    if (collapsedClusters.includes(clusterId)) {
      setCollapsedClusters(collapsedClusters.filter(id => id !== clusterId));
    } else {
      setCollapsedClusters([...collapsedClusters, clusterId]);
    }
  };

  const handleNodeClick = node => {
    toggleClusterCollapse(node.id);
    if (collapsedClusters.includes(node.id)) {
      forceRef.current.zoom(3.5, 400);
      forceRef.current.centerAt(node.x, node.y, 400);
    }
  };

  const toggleCluster = clusterId => {
    console.log(clusterId);
    if (hiddenClusters.includes(clusterId)) {
      setHiddenClusters(hiddenClusters.filter(id => id !== clusterId));
    } else {
      setHiddenClusters([...hiddenClusters, clusterId]);
    }
    if (!collapsedClusters.includes(clusterId)) {
      toggleClusterCollapse(clusterId);
    }
  };

  const graphData = useMemo(() => {
    return {
      nodes: data.nodes.filter(node => !hiddenClusters.includes(node.id)),
      links: data.links
    };
  }, [hiddenClusters]);

  return (
    <div>
      <button
        onClick={() => {
          forceRef.current.zoomToFit();
          setHiddenClusters([]);
          setCollapsedClusters(clusterIds);
        }}
      >
        RESET
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {clusters.map(cluster => (
          <button
            key={cluster.id}
            onClick={() => {
              toggleCluster(cluster.id);
            }}
          >
            Toggle {cluster.name}
          </button>
        ))}
      </div>
      <div
        style={{
          border: '1px solid gray',
          marginTop: '20px',
          touchAction: 'none'
        }}
      >
        <ReactForceGraph2d
          width={window.innerWidth}
          height={650}
          ref={forceRef}
          onNodeClick={handleNodeClick}
          graphData={graphData}
          nodeRelSize={1}
          onEngineStop={() => {
            console.log('TEST:');
            if (initialCenter) {
              forceRef.current.zoomToFit();
            }
            setInitialCenter(false);
          }}
          nodeCanvasObjectMode={() => 'after'}
          nodeCanvasObject={(typeNode, ctx, globalScale) => {
            const node: DataNodeType = typeNode;
            const label = node.name;
            const fontSize = node.isClusterNode
              ? 14 * (node.val / 1500)
              : 14 / (globalScale * 1.2);
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = node.isClusterNode ? 'white' : 'black';
            if (node.isClusterNode) {
              // console.log();
              const lineHeight = fontSize * 1.2;
              const lines = label.split(',');
              const x = node.x;
              let y = node.y - lineHeight;
              for (let i = 0; i < lines.length; ++i) {
                ctx.fillText(lines[i], x, y);
                y += lineHeight;
              }
            } else if (globalScale >= 3.5) {
              ctx.fillText(label, node.x, node.y + 2.5);
            }
          }}
          nodeVisibility={typeNode => {
            const node: DataNodeType = typeNode;
            if (collapsedClusters.includes(node.clusterId)) {
              return false;
            } else return true;
          }}
          linkVisibility={typeLink => {
            const link: LinkObjectType = typeLink;
            if (
              typeof link.target === 'object' &&
              typeof link.source === 'object' &&
              collapsedClusters.includes(link.source.id) &&
              !link.target?.isClusterNode
            ) {
              return false;
            } else if (
              typeof link.target === 'object' &&
              typeof link.source === 'object' &&
              (hiddenClusters.includes(link.source.id) ||
                hiddenClusters.includes(link.target.id))
            ) {
              return false;
            } else return true;
          }}
        />
      </div>
    </div>
  );
};

export default TestGraph;
