import React from 'react';
import '../style.css';
import App from './_app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout'

function Home(){
    return
<div>
{/*<Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>*/}
   <Layout>



    <App />

    </Layout>
    </div>
}

export default Home;