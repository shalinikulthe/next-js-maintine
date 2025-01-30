"use client";

import React, { useEffect, useState } from "react";
import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Group, Text } from '@mantine/core';
import classes from '../style/UserInfoIcons.module.css';

const Comments = ({ postId }) => {
const [details, setDetails] = useState([]);

useEffect(() => {
if (!postId) return;  

const fetchDetails = async () => {
    const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1/comments`
    );
    const result = await response.json();
    setDetails(result);
};

fetchDetails();
}, [postId]);

return (
<div>
    <b className="comments-header">Comments</b>
    {details.map((itt,index) => {
    return (
        <div key={index}>
      <Group wrap="nowrap">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={60}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
           {itt.name}
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
            {itt.email}
            </Text>
          </Group>
          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={10} className={classes.icon} />
            <Text fz="xs" c="dimmed">
            {itt.body}
            </Text>
          </Group>

        
        </div>
      </Group>
    </div>
    );
    })}
</div>
);
};

export default Comments;
