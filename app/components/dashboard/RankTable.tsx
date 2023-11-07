import React from 'react';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

interface TableRow {
  id: number;
  [key: string]: string | number; // Add a string index signature for other properties
}

interface TableColumn {
  name: string;
  isNumeric?: boolean;
}

interface RankTableProps {
  heading: string;
  content: TableRow[];
  columns: TableColumn[];
}

interface CustomRankTableProps {
  width: string;
  height: string;
}

const RankTable: React.FC<RankTableProps & CustomRankTableProps> = ({
  heading,
  content,
  columns,
  width,
  height,
}) => {
  return (
    <TableContainer width={width} height={height}>
      <Table variant="simple" size="lg">
        <TableCaption>{heading}</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th key={index} isNumeric={column.isNumeric}>
                {column.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {content.map((item) => (
            <Tr key={item.id}>
              {columns.map((column, index) => (
                <Td key={index} isNumeric={column.isNumeric}>
                  {item[column.name]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RankTable;
