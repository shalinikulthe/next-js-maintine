'use client'
import { useEffect, useState } from 'react';


import Link from 'next/link';
import { TableScrollArea } from './DataTable';
import { ButtonProgress } from './Button';

const FetchingData = () => {
const [data, setData] = useState([]);


const headers=[
  {
    key: "id",
    value: "ID",
  },
  {
    key: "userId",
    value: "User Id",
  },
  {
    key: "title",
    value: "Title",
  },
  {
    key: "body",
    value: "Body",
    component: (dataALl) => {
      return dataALl.length > 50
        ? `${dataALl.substring(0, 120)}...`
        : dataALl;
    },
  },
  {
    key: "id",
    value: "Show",
    component: (dataALl) => {
      return (
        <Link href={`/posts/${dataALl}`}>
        <ButtonProgress/>
        
        </Link>
      )
    },
  },
]

useEffect(() => {

  fetch('https://jsonplaceholder.typicode.com/posts') 
    .then((response) => response.json())
    .then((data) => {
      setData(data); 
    
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      
    });
}, []);


return (<TableScrollArea data={data}  headers={headers} />)
};

export default FetchingData;
