import Head from "next/head";

const HeadPortfolio = ( { title }) => {
    return ( 
        <>
            <Head>
                <title>{ title }</title>
                <meta name="keywords" content="portfolio"/>
                <link rel="icon" href="/portfolio.ico" />
            </Head>
      </>
     );
}
 
export default HeadPortfolio;