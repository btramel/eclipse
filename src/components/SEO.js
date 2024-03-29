import Head from 'next/head'
import logo from '/public/siding.jpg'
const SEO = ({ site }) => {
  const {
    title = "Eclipse Construction | Minnesota's Premier Exterior Restoration Company",
    description = "Minnesota's most reliable storm restoration contractors.",
    url = 'https://www.eclipseconstructionmn.com',
    image = logo,
    author = 'Brad Tramel',
    favicon = '/favicon.ico',
  } = site

  return (
    <Head>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='author' content={author} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:secure_url' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='627' />
      <meta property='og:image:type' content='image/jpg' />

      <link rel='shortcut icon' href={favicon} />
    </Head>
  )
}

export default SEO
