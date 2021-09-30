import React, { useState } from 'react';
import cn from 'classnames';
import style from './Search.module.css';
import { SearchProps } from './Search.props';
import Input from '../Input/Input';
import Button from '../Button/Button';
import SearchIcon from './Search.svg';
import { useRouter } from 'next/router';

const Search = ({ className, ...props }: SearchProps): JSX.Element => {

    const [search, SetSearch] = useState<string>('');
    const router = useRouter();

    const goTo = () => {
        router.push({
            pathname: '/search/',
            query: { q: search },

        });
    }

    const KeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            goTo();
        }
    }

    const validFunction = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <form onSubmit={validFunction} className={cn(className, style.search)} {...props} role="search">
        <Input
            tabIndex={0}
            className={style.input}
            value={search}
            placeholder="Поиск..."
            onKeyDown={(e) => KeyDown(e)}
            onChange={(e) => SetSearch(e.target.value)}
        />
        <Button
            onClick={goTo}
            className={style.mutton}
            aria-label="Искать по сайту"
            appearance={'primary'} >
            <SearchIcon />
        </Button>
    </form >
}

export default Search;