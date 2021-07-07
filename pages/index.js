import Head from 'next/head';

/* components */
import CardRounded from '@components/cards/CardRounded';
import CardFlatted from '@components/cards/CardFlatted';

export default function Home() {
  const cardHomeRounded = [
    {
      title: 'Documentation &rarr;',
      description: 'Find in-depth information about Next.js features and API.',
      url: 'https://nextjs.org/docs',
    },
    {
      title: 'Learn &rarr;',
      description: 'Learn about Next.js in an interactive course with quizzes!',
      url: 'https://nextjs.org/learn',
    },
    {
      title: 'Examples &rarr;',
      description: 'Discover and deploy boilerplate example Next.js projects.',
      url: 'https://github.com/vercel/next.js/tree/master/examples',
    },
    {
      title: 'Deploy &rarr;',
      description:
        'Instantly deploy your Next.js site to a public URL with Vercel.',
      url:
        'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    },
    {
      title: 'Community &rarr;',
      description:
        'Involved in community with contribute and Next.js community modules',
      url: 'https://github.com/vercel/next.js/discussions',
    },
    {
      title: 'Source Code &rarr;',
      description: 'Get Next.js open source on GitHub ',
      url: 'https://github.com/vercel/next.js',
    },
  ];
  const cardHomeFlatted = [
    {
      title: 'Documentation &rarr;',
      description: 'Find in-depth information about Next.js features and API.',
      url: 'https://nextjs.org/docs',
      imageUrl: 'https://picsum.photos/300/300',
      published: '20/12/2000',
    },
    {
      title: 'Learn &rarr;',
      description: 'Learn about Next.js in an interactive course with quizzes!',
      url: 'https://nextjs.org/learn',
      imageUrl: 'https://picsum.photos/300/300',
      published: '20/12/2000',
    },
    {
      title: 'Examples &rarr;',
      description: 'Discover and deploy boilerplate example Next.js projects.',
      url: 'https://github.com/vercel/next.js/tree/master/examples',
      imageUrl: 'https://picsum.photos/300/300',
      published: '20/12/2000',
    },
    {
      title: 'Deploy &rarr;',
      description:
        'Instantly deploy your Next.js site to a public URL with Vercel.',
      url:
        'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      imageUrl: 'https://picsum.photos/300/300',
      published: '20/12/2000',
    },
    {
      title: 'Community &rarr;',
      description:
        'Involved in community with contribute and Next.js community modules',
      url: 'https://github.com/vercel/next.js/discussions',
      imageUrl: 'https://picsum.photos/300/300',
      published: '20/12/2000',
    },
    {
      title: 'Source Code &rarr;',
      description: 'Get Next.js open source on GitHub ',
      url: 'https://github.com/vercel/next.js',
      imageUrl: 'https://picsum.photos/300/300',
      published: '20/12/2000',
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-2">
          <h1 className="text-7xl">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p>
            Get started by editing <code className="">pages/index.js</code>
          </p>
        </div>
        <div className="container mx-auto px-4 sm:px-2">
          <CardRounded props={cardHomeRounded} />
          <CardFlatted props={cardHomeFlatted} />
        </div>
      </main>
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="w-28" />
        </a>
      </footer>
    </>
  );
}
