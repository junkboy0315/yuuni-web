import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import jissekiCompare from '../images/jisseki-compare.png';
import jissekiNote from '../images/jisseki-note.png';
import jissekiRebalancer from '../images/jisseki-rebalancer.jpg';
import jissekiTravelrPng from '../images/jisseki-travelr.png';
import jissekiWarikanPng from '../images/jisseki-warikan.png';
import jissekiYuuniJpg from '../images/jisseki-yuuni.jpg';
import { rhythm } from '../utils/typography';

const PerformanceSection = () => {
  const performances = [
    {
      name: 'Portfolio Rebalancer',
      description:
        'ポートフォリオのリバランスを簡単に行えるようにすることで、資産運用を支援するツールです。',
      techStack: [
        { name: 'Vue.js/Vuex', description: 'UI/State管理' },
        { name: 'Nuxt.js', description: 'Vue.jsフレームワーク' },
        { name: 'Bulma', description: 'CSSライブラリ' },
        { name: 'Firebase Auth', description: '認証管理' },
        { name: 'Firebase Firestore', description: 'データベース' },
      ],
      webpageURL: 'http://rebalancer.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/rebalancer',
      imgPath: jissekiRebalancer,
    },
    {
      name: 'Travelr',
      description:
        '古い写真と新しい写真を比較して楽しむ写真投稿サービスです。デモ用に作成したものです。',
      techStack: [
        { name: 'React/Redux', description: 'UI/State管理' },
        { name: 'redux-observable', description: 'reduxミドルウェア' },
        { name: 'material-ui', description: 'UIライブラリ' },
        { name: 'Workbox', description: 'PWA対応' },
        { name: 'jest/enzyme', description: 'テスト' },
        { name: 'Typescript', description: '型付け' },
        { name: 'Firebase', description: '認証管理及びストレージ' },
        { name: 'GraphQL', description: '問い合わせ言語' },
        { name: 'Node.js', description: 'APIサーバ' },
        { name: 'PostgreSQL/PostGIS', description: 'データベース' },
        { name: 'Kubernetes', description: 'コンテナ管理' },
      ],
      webpageURL: 'http://travelr.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/travelr',
      blogPath: '/blog/2018-07-31-デモシステムを作成しました/',
      imgPath: jissekiTravelrPng,
    },
    {
      name: 'react-compare-image',
      description:
        'スライダを使って画像を比較するためのReactコンポーネントです。しばしば海外からのPRがあります。',
      techStack: [{ name: 'React', description: 'UI' }],
      webpageURL: 'https://www.npmjs.com/package/react-compare-image',
      githubURL: 'https://github.com/junkboy0315/react-compare-image',
      imgPath: jissekiCompare,
    },
    {
      name: 'SplitBills',
      description:
        '酔っぱらった状態で納得のいく割勘計算を行うための小道具です。',
      techStack: [
        { name: 'Angular6', description: 'Front-end Framework' },
        { name: 'Netlify', description: 'ホスティング' },
        { name: 'Jasmine', description: 'Unit/E2E Test' },
        { name: 'Protractor', description: 'E2E Test' },
        { name: 'Semaphore', description: 'CI/CD' },
        { name: 'Service Worker', description: 'オフライン対応' },
      ],
      webpageURL: 'https://split.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/splitbills',
      imgPath: jissekiWarikanPng,
    },
    {
      name: 'Yuuniworks Web',
      description: 'Gatsbyを使って作成した、当方の事業広報用Webページです。',
      techStack: [
        { name: 'Gatsby', description: 'Static Site Generator' },
        { name: 'GraphQL', description: 'クエリ言語' },
        {
          name: 'AWS API Gateway',
          description: '問い合わせフォーム用バックエンド',
        },
        { name: 'AWS Lambda', description: '問い合わせフォーム用バックエンド' },
        { name: 'AWS SES', description: '問い合わせフォーム用バックエンド' },
        { name: 'Netlify', description: 'ホスティング、CI/CD' },
        { name: 'Netlify CMS', description: 'CMS' },
        { name: 'Sentry', description: 'クライアントサイドのエラー収集' },
      ],
      webpageURL: 'https://www.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/yuuni-web',
      blogPath: '/blog/2018-04-09-jamstackなwebサイトの作成/',
      imgPath: jissekiYuuniJpg,
    },
    {
      name: 'Yuuniworks Notes',
      description:
        'VuePressで作成したドキュメントサイトです。Algoliaによる全文検索を実装しています。',
      techStack: [
        { name: 'VuePress', description: 'Static Site Generator' },
        { name: 'Algolia DocSearch', description: '高度な全文検索' },
      ],
      webpageURL: 'https://note.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/markdown-notes',
      imgPath: jissekiNote,
    },
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200,
    },
    whiteBox: {
      padding: rhythm(1),
    },
    itemImage: {
      border: '1px solid #aaa',
      objectFit: 'cover',
      height: '160px',
      width: '100%',
    },
    itemTitle: {
      color: '#262626',
      display: 'block',
      fontWeight: 'bold',
      margin: '1rem 0',
      textDecoration: 'none',
    },
    description: {
      fontSize: '0.8rem',
      marginBottom: '0.8rem',
    },
    externalLink: {
      color: '#999',
      fontSize: '0.8rem',
      textDecoration: 'none',
      marginRight: '1rem',
      ':hover': {
        background: '#eee',
      },
    },
    techStackGrid: {
      borderTop: '1px dotted #999',
      display: 'grid',
      fontSize: '0.8rem',
      gridGap: '0.4rem',
      gridTemplateColumns: '1fr 1fr',
      marginTop: '0.8rem',
      paddingTop: '1rem',
      ' > span': {
        cursor: 'default',
      },
      ' > span::before': {
        content: '- ',
      },
    },
  };

  return (
    <SectionContainer id="performance">
      <SectionHeader text="実績" colorNumber="1" />

      {/* グリッド始点 */}
      <div css={styles.grid}>
        {performances.map(performance => (
          <WhiteBox key={performance.name} css={styles.whiteBox}>
            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={performance.imgPath}
                css={styles.itemImage}
                alt={performance.name}
              />
            </a>

            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {performance.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{performance.description}</p>

            {performance.githubURL ? (
              <a
                href={performance.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.externalLink}
              >
                ソースコード
              </a>
            ) : (
              <div style={{ color: 'transparent' }}>_</div>
            )}

            {performance.blogPath && (
              <Link
                to={performance.blogPath}
                target="_blank"
                css={styles.externalLink}
              >
                関連ブログ
              </Link>
            )}

            <ul css={styles.techStackGrid}>
              {performance.techStack.map(tech => (
                <span
                  data-for={tech.name + tech.description}
                  data-tip
                  key={tech.name}
                >
                  {tech.name}
                  <ReactTooltip
                    id={tech.name + tech.description}
                    effect="solid"
                  >
                    {tech.description}
                  </ReactTooltip>
                </span>
              ))}
            </ul>
          </WhiteBox>
        ))}
      </div>
      {/* グリッド終点 */}
    </SectionContainer>
  );
};

export default PerformanceSection;
