import React from 'react';
import cn from 'classnames';
import style from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import Menu from '../Menu/Menu';
import Search from '../../q-components/Search/Search';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {

    return <div className={cn(className, style.sidebar)} {...props}>
        <Search />
        <Menu />
    </div >
}

export default Sidebar;