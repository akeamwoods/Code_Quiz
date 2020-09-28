import React from "react";
import {
  Column,
  Table as VirtualizedTable,
  AutoSizer,
} from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import { Wrapper } from "./style";

type TableData = {
  nameFirst: string;
  nameLast: string;
  room: string;
};

export const Table: React.FC<{ list: TableData[] }> = ({ list }) => {
  const headers = Object.keys(Object.assign({}, ...list)); // dynamically populate column headers from the data itself
  return (
    <Wrapper>
      <AutoSizer>
        {({ height, width }) => (
          <VirtualizedTable
            width={width}
            height={height}
            headerHeight={50}
            rowHeight={50}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
            rowStyle={({ index }) => {
              return { background: index % 2 ? "#ddd" : "#fff" };
            }}
          >
            {headers.map((header) => (
              <Column
                key={header}
                width={width}
                label={header}
                dataKey={header}
              />
            ))}
          </VirtualizedTable>
        )}
      </AutoSizer>
    </Wrapper>
  );
};
