import { ReactNode } from "react";

export interface INavigationProps {
    children: ReactNode;
    title: string;
    width?: string;
    className?: string;
}