"use client";

import React, { useEffect, useState } from "react";
import { IconAt } from '@tabler/icons-react';
import { Avatar, Group, Text, Card } from '@mantine/core';
import classes from '../style/UserInfoIcons.module.css';

const Comments = ({ postId }) => {
const [details, setDetails] = useState([]);

useEffect(() => {
  if (!postId) return;

  const fetchDetails = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);
    const result = await response.json();
    setDetails(result);
  };

  fetchDetails();
}, [postId]);

return (
  <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
    <Text 
fw={700} 
fz="lg" 
mb="md" 
className="comments-header" 
style={{ textAlign: "center" }} // Added inline CSS for centering
>
Comments
</Text>


    {details.map((itt, index) => (
      <Card key={index} shadow="xs" padding="md" radius="sm" withBorder className={classes.commentCard}>
        <Group wrap="nowrap">
          <Avatar
            src= 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png'
            size={60}
            radius="md"
          />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="">
              {itt.name}
            </Text>

            <Group wrap="nowrap" gap={10} mt={3}>
              
              <Text fz="xs" c="black">{itt.email}</Text>
            </Group>

            <Group wrap="nowrap" gap={10} mt={3}>
              
              <Text fz="xs" c="black">{itt.body}</Text>
            </Group>
          </div>
        </Group>
      </Card>
    ))}
  </Card>
);
};

export default Comments;
