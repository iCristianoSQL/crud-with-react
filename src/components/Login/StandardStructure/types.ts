import { ReactNode } from "react";

export interface LoginLayoutProps {
    children: ReactNode
    handleSubmit?: () => void;
}