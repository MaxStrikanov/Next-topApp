import React, { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating } from '../components';


export default function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearence='primary' arrow='right' >Button</Button>
            <Button appearence='ghost' arrow='right' >Button</Button>
            <Ptag size = 'l'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus tempora cupiditate laboriosam quis nihil rerum officiis molestias magnam dicta. Assumenda similique eligendi qui non eaque vero placeat voluptatibus enim animi.</Ptag>
            <Tag size='s' >Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='s' color='green'>Green</Tag>
            <Tag size='s' color='primary'>Primary</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
);
}
