import React from 'react';
import SEO from "../components/seo"
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import pluralizeReadingTime from "../constants/pluralize-reading-time";

const Posts = ({ posts }) => {
  return (
    <div className='posts-list'>
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

      {posts.map(({ node }) => {
        const title = node.frontmatter.title;
        const imageAuthor = node.frontmatter.coverAuthor;
        const { fluid } = node.frontmatter.cover.childImageSharp;

        return (
          <div
            key={node.fields.slug}
            className="blog-post-preview"
          >
            <h2
              style={{
                marginBottom: 0,
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h2>
            <small title={node.frontmatter.longDate}>
              {node.frontmatter.shortDate} &middot;{' '}
              {pluralizeReadingTime(node.timeToRead)}
            </small>
            <Image
              style={{
                height: `20vh`
              }}
              fluid={fluid}
              alt={imageAuthor}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
            <Link className={`squiggly`} to={node.fields.slug}>
              Leia mais
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default Posts;