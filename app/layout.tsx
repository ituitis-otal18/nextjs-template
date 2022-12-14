'use client';

import './output.css';
import { darkTheme, lightTheme } from './theme/themes';

import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    //const theme = prefersDarkMode ? darkTheme : lightTheme;

    return (
        <html lang="en">
            <head>
                <title>Create Next App</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <ThemeProvider theme={darkTheme}>
                <body id="__next">
                    <CssBaseline />
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}
