import styles from './Menu.module.css';
import cn from 'classnames';
import {format} from 'date-fns';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem } from '../../interfaces/menu.interfaces';
import CoursesIcon from './icon/courses.svg';
import ServisesIcon from './icon/services.svg';
import BooksIcon from './icon/books.svg';
import ProductsIcon from './icon/product.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses }, 
    { route: 'services', name: 'Сервисы', icon: <ServisesIcon />, id: TopLevelCategory.Services }, 
    { route: 'books', name: 'Книга', icon: <BooksIcon />, id: TopLevelCategory.Books}, 
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }, 
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    return (
        <div>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </div>
    );
};

export default Menu;