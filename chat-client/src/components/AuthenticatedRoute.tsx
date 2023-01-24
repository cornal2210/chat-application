import React, { FC } from "react";
import { useLocation } from "react-router-dom";

export const AuthenticatedRoute: FC<React.PropsWithChildren> = ({children}) => {
    const location = useLocation()
}