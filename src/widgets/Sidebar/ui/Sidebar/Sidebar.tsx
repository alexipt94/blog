import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (

        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },

                [className],
            )}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>Switch</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {' '}
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
