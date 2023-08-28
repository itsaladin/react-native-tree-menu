import React, { useState } from 'react';
import { MenuTree } from 'react-native-tree-menu';

const dataSet = [
  {
    label: 'Name A 1',
    checked: true,
    id: 1,
    childrenNodes: [
      {
        label: 'Name A 2',
        checked: true,
        id: 2,
        childrenNodes: [
          {
            label: 'Name A 3',
            checked: true,
            id: 3,
          },
        ],
      },
    ],
  },
  {
    label: 'Name B 1',
    checked: true,
    id: 4,
    childrenNodes: [
      {
        label: 'Name B 2',
        checked: true,
        id: 5,
        childrenNodes: [
          {
            label: 'Name B 3',
            checked: true,
            id: 6,
          },
        ],
      },
      {
        label: 'Name B 4',
        checked: true,
        id: 7,
        childrenNodes: [
          {
            label: 'Name B 5',
            checked: true,
            id: 8,
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [data, setData] = useState(dataSet);
  return (
    <>
      <MenuTree data={data} setData={setData} />
    </>
  );
};

export default App;
