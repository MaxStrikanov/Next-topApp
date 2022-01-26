import React from 'react';
import { Button, Htag, Ptag, Tag } from '../components';


export default function Home(): JSX.Element {
    return (
        < >
            <Htag tag='h1'>Text</Htag>
            <Button appearence='primary' arrow='right'>Button</Button>
            <Button appearence='ghost' arrow='right'>Button</Button>
            <Ptag size = 'l'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus tempora cupiditate laboriosam quis nihil rerum officiis molestias magnam dicta. Assumenda similique eligendi qui non eaque vero placeat voluptatibus enim animi.</Ptag>
            <Tag size='s' >Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='s' color='green'>Red</Tag>
            <Tag size='s' color='primary'>Primary</Tag>
        </>
);
}
