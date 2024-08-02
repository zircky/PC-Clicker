'use client'

import { InitialsAvatar } from "@twa-dev/mark42";
import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
 

export default function LayoutBase({children}: {children: React.ReactNode}) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            WebApp.ready
            document.body.style.backgroundColor = WebApp.colorScheme === 'dark' ? '#1c1c1c' : '#fff';
            
        }

    }, []);
    return (
        <section>
            <InitialsAvatar entityId={1} entityName="e"/>
            {children}
        </section>
    );
}