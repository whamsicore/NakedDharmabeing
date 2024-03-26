import React, { useEffect, useState, useCallback, useContext } from 'react';
import { WidthProvider, Responsive, Layout, Layouts } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import {applyChange, observableDiff} from "deep-diff"
import {AppContext} from "../layout"
import { json } from 'stream/consumers';
import cloneDeep from 'lodash';

function deepMerge(oldObj:any, newObj:any) {
  Object.keys(newObj).forEach(key => {
    if (oldObj.hasOwnProperty(key)) {
      const oldValue = oldObj[key];
      const newValue = newObj[key];

      // If newValue is an object, recurse. Else, update oldValue with newValue only if newValue is not undefined.
      if (typeof newValue === 'object' && newValue !== null && !Array.isArray(newValue)) {
        // Initialize oldObj[key] as an object if it's not already one to prevent trying to assign properties to non-object types
        if (typeof oldValue !== 'object' || oldValue === null || Array.isArray(oldValue)) {
          oldObj[key] = {};
        }
        deepMerge(oldObj[key], newValue);
      } else if (newValue !== undefined) {
        oldObj[key] = newValue;
      }
    }
  });
  return oldObj;
}

const Grid2 = ({ 
  className = "layout", 
  cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }, 
  rowHeight = 100, 
}: { className?: string; 
  cols?: any; 
  rowHeight?: number; 
}) => {
  
  const {app, updateApp} = useContext(AppContext)
  
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    console.log('@app change:', app);
    if (app && app.dao && app.dao.canvas) {
      // console.log('app changed :', app.dao.canvas);
      // console.log('App DAO:', app.dao);

      
        const UpdatedItems = JSON.parse(app.dao.canvas);
        setItems(UpdatedItems);

    }
  }, [app]);


  const [newCounter, setNewCounter] = useState<number>(0);
  // const [layout, setLayout] = useState<any>(undefined);
  const [breakpoint, setBreakpoint] = useState<any>(undefined);
  const [currentCols, setCurrentCols] = useState<any>(cols);

  const onAddItem = useCallback(() => {
    console.log("adding", "n" + newCounter);
    setItems(prevItems => prevItems.concat({
      i: "n" + newCounter,
      x: (prevItems.length * 2) % (currentCols || 12),
      y: Infinity, // puts it at the bottom
      w: 2,
      h: 2
    }));
    setNewCounter(prevCounter => prevCounter + 1);
  }, [newCounter, currentCols]);

  // const handleLayoutChange = (newLayout: any) => {
  //   // onLayoutChange(newLayout);
  //   setLayout(newLayout);
  // };
  
  const handleBreakpointChange = (newBreakpoint: any, newCols: any) => {
    setBreakpoint(newBreakpoint);
    setCurrentCols(newCols);
  };

  const onLayoutChange = (currentLayout:Layout[], allLayouts:Layouts)=>{
    // You have to do some fancy change because the layout change does not include the additional information saved in Canvas.
    // const lhs = cloneDeep(items)
    const lhs = JSON.parse((JSON.stringify(items)))
    const rhs = currentLayout
    console.log("result after copy:", lhs); // to match original
    console.log("Items:", JSON.stringify(items)); // to match original
    console.log("lhs:", JSON.stringify(lhs)); // to match original
    console.log("rhs:", JSON.stringify(rhs)); // to match original

    deepMerge(lhs, rhs)
    console.log("result after applychange:", lhs); // to match original
    console.log("Items:", JSON.stringify(items)); // to match original
    console.log("lhs:", JSON.stringify(lhs)); // to match original

    // console.log("Items:", items); // to match original

    if (JSON.stringify(items) !== JSON.stringify(lhs)) {
  
      console.log("@changed")
    }
      // console.log("New canvas:", JSON.stringify(currentLayout));
      // console.log("Old canvas:", JSON.stringify(items));
      // console.log("allLayouts:", JSON.stringify(allLayouts));
      // const newApp = { ...app };
      // newApp.dao.canvas = JSON.stringify(currentLayout);
      // updateApp(newApp);
      // setLayout(currentLayout);
    // }
    // const newApp = app
    // newApp.dao.canvas = JSON.stringify(layout)
    // updateApp(newApp)
  }

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveReactGridLayout
        onLayoutChange={onLayoutChange}
        onBreakpointChange={handleBreakpointChange}
        {...{ className, cols, rowHeight }}
      >
        {items.map((el, i) => (
          <div key={el.i} className="bg-blue-400 border border-blue-500 p-3" data-grid={el}>
            {el.add ? (
              <span
                className="add text"
                onClick={onAddItem}
                title="You can add an item by clicking here, too."
              >
                Add +
              </span>
            ) : (
              <span className="text">{el.i}</span>
            )}
            <span
              className="remove"
              style={{
                position: "absolute",
                right: "2px",
                top: 0,
                cursor: "pointer"
              }}
              onClick={() => { 
                console.log("removing", el.i);
                setItems(prevItems => prevItems.filter(item => item.i !== el.i));
              }}
            >
              x
            </span>
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default Grid2;

