"use client"


import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = false,
}: CardWrapperProps) => {
    return(
        <Card className="w-[400px] shadow-none border-none">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                label={backButtonLabel}
                href={backButtonHref}
                />
            </CardFooter>
        </Card>
    );
};
