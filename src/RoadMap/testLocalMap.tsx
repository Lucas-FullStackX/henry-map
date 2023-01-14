import { useRef, useState, useMemo, useEffect } from 'react';
import { ForceGraphMethods } from 'react-force-graph-2d';
import { DataType, DataNodeType, LinkObjectType } from './exampleData';

import dynamic from 'next/dynamic';
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false
});

const TestLocalMap = () => {
  const [map, setMap] = useState<DataType>({
    nodes: [
      {
        id: '0',
        isClusterNode: true,
        name: 'project, idea',
        size: 9.785932721712538
      },
      {
        id: '1',
        isClusterNode: true,
        name: 'project, idea',
        size: 9.785932721712538
      },
      {
        id: 'project',
        name: 'project',
        centrality: 0.10021091790578693,
        degrees: 35
      },
      {
        id: 'idea',
        name: 'idea',
        centrality: 0.03469693187854244,
        degrees: 29
      },
      {
        id: 'user',
        name: 'user',
        centrality: 0.025406514132413013,
        degrees: 27
      },
      {
        id: 'brainstorm',
        name: 'brainstorm',
        centrality: 0.023665166378717167,
        degrees: 17
      },
      {
        id: 'objective',
        name: 'objective',
        centrality: 0.012542206549093679,
        degrees: 20
      },
      {
        id: 'include',
        name: 'include',
        centrality: 0.008801869532453583,
        degrees: 8
      },
      {
        id: 'content',
        name: 'content',
        centrality: 0.0074603942268237815,
        degrees: 11
      },
      {
        id: 'new',
        name: 'new',
        centrality: 0.005023126926692252,
        degrees: 14
      },
      {
        id: 'fit',
        name: 'fit',
        centrality: 0.00468055315615163,
        degrees: 6
      },
      {
        id: 'regular',
        name: 'regular',
        centrality: 0.004346802361828111,
        degrees: 6
      },
      {
        id: 'session',
        name: 'session',
        centrality: 0.003783639452358817,
        degrees: 6
      },
      {
        id: 'strategy',
        name: 'strategy',
        centrality: 0.0035260765153736235,
        degrees: 8
      },
      {
        id: 'interview',
        name: 'interview',
        centrality: 0.0034049781921280673,
        degrees: 9
      },
      {
        id: 'bonus',
        name: 'bonus',
        centrality: 0.00290214737240322,
        degrees: 6
      },
      {
        id: 'follow',
        name: 'follow',
        centrality: 0.0026595686574450135,
        degrees: 8
      },
      {
        id: 'shoutout',
        name: 'shoutout',
        centrality: 0.0026048764830334356,
        degrees: 6
      },
      {
        id: 'high',
        name: 'high',
        centrality: 0.002436609346021149,
        degrees: 9
      },
      {
        id: 'vote',
        name: 'vote',
        centrality: 0.002358690142734182,
        degrees: 10
      },
      {
        id: 'number',
        name: 'number',
        centrality: 0.0022004453673387407,
        degrees: 6
      },
      {
        id: 'impact',
        name: 'impact',
        centrality: 0.0016647889209599322,
        degrees: 11
      },
      {
        id: 'comment',
        name: 'comment',
        centrality: 0.0013802207547753153,
        degrees: 6
      },
      {
        id: 'short',
        name: 'short',
        centrality: 0.0003333417893165349,
        degrees: 5
      },
      {
        id: 'actual',
        name: 'actual',
        centrality: 0.0001880648322366114,
        degrees: 4
      },
      {
        id: 'awesome',
        name: 'awesome',
        centrality: 4.932695116744196e-5,
        degrees: 4
      },
      {
        id: 'prototype',
        name: 'prototype',
        centrality: 3.225555054247834e-5,
        degrees: 4
      },
      {
        id: 'hunt',
        name: 'hunt',
        centrality: 0.0,
        degrees: 3
      },
      {
        id: 'inspiration',
        name: 'inspiration',
        centrality: 0.0,
        degrees: 3
      },
      {
        id: 'bot',
        name: 'bot',
        centrality: 0.0,
        degrees: 3
      },
      {
        id: 'stream',
        name: 'stream',
        centrality: 0.0,
        degrees: 4
      },
      {
        id: 'consist',
        name: 'consist',
        centrality: 0.0,
        degrees: 3
      },
      {
        id: 'discuss',
        name: 'discuss',
        centrality: 0.0,
        degrees: 5
      },
      {
        id: 'link',
        name: 'link',
        centrality: 0.0,
        degrees: 4
      }
    ],
    links: [
      {
        source: '0',
        target: '1'
      },
      {
        source: '0',
        target: 'project'
      },
      {
        source: '0',
        target: 'idea'
      },
      {
        source: '0',
        target: 'user'
      },
      {
        source: '0',
        target: 'brainstorm'
      },
      {
        source: '0',
        target: 'objective'
      },
      {
        source: '0',
        target: 'include'
      },
      {
        source: '0',
        target: 'content'
      },
      {
        source: '0',
        target: 'new'
      },
      {
        source: '0',
        target: 'fit'
      },
      {
        source: '0',
        target: 'regular'
      },
      {
        source: '0',
        target: 'session'
      },
      {
        source: '0',
        target: 'strategy'
      },
      {
        source: '0',
        target: 'interview'
      },
      {
        source: '0',
        target: 'bonus'
      },
      {
        source: '0',
        target: 'follow'
      },
      {
        source: '0',
        target: 'shoutout'
      },
      {
        source: '0',
        target: 'high'
      },
      {
        source: '0',
        target: 'vote'
      },
      {
        source: '0',
        target: 'number'
      },
      {
        source: '0',
        target: 'impact'
      },
      {
        source: '0',
        target: 'comment'
      },
      {
        source: '0',
        target: 'short'
      },
      {
        source: '0',
        target: 'actual'
      },
      {
        source: '0',
        target: 'awesome'
      },
      {
        source: '0',
        target: 'prototype'
      },
      {
        source: '0',
        target: 'hunt'
      },
      {
        source: '0',
        target: 'inspiration'
      },
      {
        source: '0',
        target: 'bot'
      },
      {
        source: '0',
        target: 'stream'
      },
      {
        source: '0',
        target: 'consist'
      },
      {
        source: '0',
        target: 'discuss'
      },
      {
        source: '0',
        target: 'link'
      }
    ]
  });

  useEffect(() => {
    map.nodes.forEach(node => {
      node.val = (node.size * 100) | (node.degrees / 10);
      if (node.isClusterNode) {
        node.clusterId = null;
      } else {
        const link = map.links.find(link => link.target === node.id);
        node.clusterId = link && link.source;
      }
    });
  }, []);

  const clusters = map.nodes.filter(node => node.isClusterNode);
  const clusterIds = clusters.map(cluster => cluster.id);

  const [initialCenter, setInitialCenter] = useState(true);
  const [collapsedClusters, setCollapsedClusters] = useState(clusterIds);
  const [hiddenClusters, setHiddenClusters] = useState([]);
  const forceRef = useRef<ForceGraphMethods>();
  const toggleClusterCollapse = clusterId => {
    if (collapsedClusters.includes(clusterId)) {
      setCollapsedClusters(collapsedClusters.filter(id => id !== clusterId));
    } else {
      setCollapsedClusters([...collapsedClusters, clusterId]);
    }
  };

  const handleNodeClick = node => {
    toggleClusterCollapse(node.id);
  };

  const toggleCluster = clusterId => {
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
    console.log('HERE:');
    return {
      nodes: map.nodes.filter(node => !hiddenClusters.includes(node.id)),
      links: map.links
    };
  }, [hiddenClusters, map]);

  const [state, setState] = useState({
    id: '',
    name: '',
    isClusterNode: true,
    size: 9.785932721712538
  });

  const handleChange = e =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setMap({ ...map, nodes: [...map.nodes, state] });
  };
  return (
    <div>
      <button
        onClick={() => {
          if (forceRef?.current?.zoomToFit) {
            forceRef.current.zoomToFit();
          }
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
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={state.id}
          onChange={e => handleChange(e)}
          name="id"
        />
        <input
          type="text"
          value={state.name}
          onChange={e => handleChange(e)}
          name="name"
        />
        <button type="submit">EOOOOOOO</button>
      </form>

      <div
        style={{
          border: '1px solid gray',
          marginTop: '20px'
        }}
      >
        <ForceGraph2D
          width={process.browser && window.innerWidth}
          height={650}
          ref={forceRef}
          onNodeClick={handleNodeClick}
          graphData={graphData}
          nodeRelSize={1}
          onEngineStop={() => {
            if (initialCenter && forceRef?.current?.zoomToFit) {
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

export default TestLocalMap;
