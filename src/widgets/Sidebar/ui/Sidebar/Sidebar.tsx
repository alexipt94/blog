import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps)  => {
   
    const [collapsed, setCollapsed] = useState(false);

    const  onToggle = ()  => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]:collapsed}, [className])}>
            <button onClick={onToggle}>sasa</button>
            <div className={cls.switchers}><ThemeSwitcher/></div>
        </div>
 );
}