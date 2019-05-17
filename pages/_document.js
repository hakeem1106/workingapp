import App from 'next/app';
import React from 'react';
//import Head from 'next/head';
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDoc extends Document{
    render(){
        return(
            <html>
            <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <body>
    {/*<App />*/}
    <Main/>
    <NextScript/>

    </body>
            </html>
        )
    }
}