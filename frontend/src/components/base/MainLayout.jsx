import Head from 'next/head'

const MainLayout = ({
    title,
    description,
    keywords,
    og_type,
    og_title,
    og_description,
    twitter_creator,
    twitter_card,
    twitter_title,
    twitter_description,
 }) => {
  return (
    <>
      <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:type" content={og_type} />
            <meta property="og:title" content={og_title} />
            <meta property="og:description" content={og_description} />
            <meta name="twitter:creator" content={twitter_creator} />
            <meta name="twitter:card" content={twitter_card} />
            <meta name="twitter:title" content={twitter_title} />
            <meta name="twitter:description" content={twitter_description} />
      </Head>
    </>
  )
}

export default MainLayout;