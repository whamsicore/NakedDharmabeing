import GridLayout from "react-grid-layout";
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

// export const AppContext = createContext<any>(null);


const MyFirstGrid = () => {
  // layout is an array of objects, see the demo for more complete usage
  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 }
  // ];
  return (
    <GridLayout
      className="layout text-center"
      cols={12}
      rowHeight={30}
      width={window.innerWidth}
      isBounded={true}
    >
      <div 
        key="a" 
        className="bg-blue-100 border border-blue-500 p-3" 
        data-grid={{ x: 0, y: 0, w: 6, h: 7, static: false }}
      >
        <Markdown remarkPlugins={[remarkGfm]}>
          {
          `  #Dharmabeing Vitals
            - Current Network Load (users, and load, api calls, etc...)
            - Prana Balance
          `
          }
        </Markdown>

        <Markdown> 
        </Markdown>
      </div>
      <div 
        key="b" 
        className="bg-green-100 border border-green-500 p-3" 
        data-grid={{ x: 1, y: 0, w: 3, h: 9, minW: 2, maxW: 4 }}
      >
        Code of conduct. A Dao must not just exist for the sake of existing, Otherwise, it would be a husk. The essence of a DAO should be a purpose. And for us, we have chosen it to be Dharma. Spirituality is ultimately a personal journey, therefore, that is all we will say about our purpose!
      </div>
      <div 
        key="c" 
        className="bg-red-100 border border-red-500 p-3" 
        data-grid={{ x: 4, y: 0, w: 5, h: 5 }}
      >
        Program Architecture
        - 
      </div>
    </GridLayout>
  );
}

export default MyFirstGrid;

