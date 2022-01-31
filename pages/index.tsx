import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interfaces';


function Home({ menu }: HomeProps): JSX.Element {

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
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
            
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}