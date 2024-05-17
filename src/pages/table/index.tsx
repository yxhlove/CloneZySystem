import { useState } from "react";
import "./index.less";
interface CellData {
  content: string;
  rowSpan: number;
  colSpan: number;
}

const tableData: CellData[][] = [
  [
    { content: "A1", rowSpan: 2, colSpan: 1 },
    { content: "B1", rowSpan: 2, colSpan: 1 },
    { content: "C1", rowSpan: 1, colSpan: 1 },
    { content: "D1", rowSpan: 1, colSpan: 1 },
    { content: "E1", rowSpan: 1, colSpan: 1 },
  ],
  [
    // { content: "A2", rowSpan: 2, colSpan: 1 },
    // { content: "B2", rowSpan: 2, colSpan: 1 },
    { content: "C2", rowSpan: 1, colSpan: 1 },
    { content: "D2", rowSpan: 1, colSpan: 2 },
    // { content: "E2", rowSpan: 1, colSpan: 1 },
  ],
  [
    { content: "A3", rowSpan: 1, colSpan: 1 },
    { content: "B3", rowSpan: 1, colSpan: 1 },
    { content: "C3", rowSpan: 1, colSpan: 1 },
    { content: "D3", rowSpan: 1, colSpan: 1 },
    { content: "E3", rowSpan: 1, colSpan: 1 },
  ],
];

const Table = () => {
  const [data, setData] = useState(tableData);

  return (
    <table>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} rowSpan={cell.rowSpan} colSpan={cell.colSpan}>
                {cell.content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
