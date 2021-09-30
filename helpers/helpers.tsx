import BookIcon from './icon/book.svg';
import CourseIcon from './icon/course.svg';
import ServiceIcon from './icon/service.svg';
import ProductIcon from './icon/product.svg';
import { FirstLevelMenuItem } from '../interface/menu.interface';
import { TopLevelCategory } from '../interface/top-page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { name: 'Курсы', route: 'courses', icon: <CourseIcon />, id: TopLevelCategory.Courses },
    { name: 'Сервисы', route: 'services', icon: <ServiceIcon />, id: TopLevelCategory.Services },
    { name: 'Книги', route: 'books', icon: <BookIcon />, id: TopLevelCategory.Books },
    { name: 'Продукты', route: 'products', icon: <ProductIcon />, id: TopLevelCategory.Products }
]

export function format(num: number): string {
    return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

export function declOfNumber(num: number, titles: [string, string, string]): string {

    const cases: number[] = [2, 0, 1, 1, 1, 2];
    return ` ${titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]]}`;
}

