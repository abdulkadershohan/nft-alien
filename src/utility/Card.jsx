import React from "react";

export default function Card({ children, ...rest }) {
    return (
        <Card
            {...rest}
        >
            {children}
        </Card>
    );
}
