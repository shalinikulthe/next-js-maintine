
'use client'
import { useState } from 'react';
import cx from 'clsx';
import { ScrollArea, Table } from '@mantine/core';
import classes from '../style/TableScrollArea.module.css'

export function TableScrollArea({data,headers}) {
const [scrolled, setScrolled] = useState(false);


const rows = data.map((row,rowIndex) => (
  // <Table.Tr key={row.id}>
  <Table.Tr key={row.id || rowIndex}> 
    {headers.map((ittem,colIndex)=>{
      return(

        // 
        // <Table.Td>{ittem.component ? ittem.component(row[ittem.key]):row[ittem.key]}</Table.Td>
        <Table.Td key={colIndex}>
                {ittem.component ? ittem.component(row[ittem.key]) : row[ittem.key]}
              </Table.Td>
      )

    }

    )
    }
  </Table.Tr>
)); 

return (
  <ScrollArea  onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
    <Table miw={700}>
      <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
        <Table.Tr>{
          
    headers.map((itte,index)=>{
      return(
        <Table.Th key={index}>{itte.value}</Table.Th>
      )
    })}

          
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  </ScrollArea>
);
}