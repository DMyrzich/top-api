import React from 'react';
import cn from 'classnames';
import style from './Skills.module.css';
import { SkillsProps } from './Skills.props';
import H from '../H/H';
import Tags from '../Tag/Tag';

const Skills = ({ tags, tagsTitle }: SkillsProps): JSX.Element => {

    return (<div className={style.wrapper_tags}>
        <H h="h2">{tagsTitle}</H>
        {
            tags.map((el, idx) => {
                return <Tags className={style.tags} key={idx} size="s" color="primary">{el}</Tags>
            })
        }
    </div >)
}

export default Skills;