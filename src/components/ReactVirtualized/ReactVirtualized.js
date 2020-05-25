import React from 'react'
import { List } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  // And so on...
];

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}

export default function ReactVirtualized() {
  return (
    <div>
      <List
        width={300}
        height={100}
        rowCount={list.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}
