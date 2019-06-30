import * as React from 'react';
import Head from 'next/head';

import normalize from 'modern-normalize';

export default function IndexPage() {
  return (
    <div className="root">
      <Head>
        <title>Is Dan Ticktum Still in Super Formula?</title>
        <link rel="canonical" href="https://is-dan-ticktum-still-in-super-formula.netlify.com/" />
        <meta property="og:title" content="Is Dan Ticktum Still in Super Formula?" />
        <meta name="description" content="https://www.youtube.com/watch?v=JP_OD2M1exw" />
        <meta name="twitter:description" content="https://www.youtube.com/watch?v=JP_OD2M1exw" />
        <meta name="og:description" content="https://www.youtube.com/watch?v=JP_OD2M1exw" />
        <meta name="twitter:image" content="https://is-dan-ticktum-still-in-super-formula.netlify.com/static/images/og-image.jpg" />
        <meta property="og:image" content="https://is-dan-ticktum-still-in-super-formula.netlify.com/static/images/og-image.jpg" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
      </Head>
      <div className="inner">
        <h1>No!</h1>
        <p>
          <a
            href="https://www.motorsport.com/super-formula/news/red-bull-drops-junior-ticktum/4483618/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Red Bull drops Ticktum from junior programme – Motorsport.com
          </a>
        </p>
      </div>
      <style jsx global>
        {normalize}
      </style>
      <style jsx global>{`
        html,
        body,
        #__next {
          width: 100%;
          height: 100%;
          min-height: 100%;
        }
      `}</style>
      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          min-height: 100%;
          padding: 24px;
        }

        .inner {
          text-align: center;
        }

        h1 {
          margin: 0;
          font-size: 48px;
          line-height: 54px;
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 72px;
            line-height: 80px;
          }

          p {
            font-size: 18px;
          }
        }

        @media (min-width: 1280px) {
          h1 {
            font-size: 96px;
            line-height: 104px;
          }

          p {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
