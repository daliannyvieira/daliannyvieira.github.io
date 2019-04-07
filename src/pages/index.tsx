import React from 'react';
import { Link, graphql } from 'gatsby';

import MainBio from '../components/main-bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface BlogIndexProps {
  data: any;
  location: Location;
}

const BlogIndex: React.FunctionComponent<BlogIndexProps> = ({
  data,
  location,
}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[
          `blog`,
          `gatsby`,
          `javascript`,
          `vuejs`,
          `vue`,
          `nodejs`,
          `node`,
          `reactjs`,
          `react`,
          `python`,
          `vainaweb`,
          `dalianny vieira`,
          `teaching`,
          `leadership`,
        ]}
      />
      <MainBio />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
