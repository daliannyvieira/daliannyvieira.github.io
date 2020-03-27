import React from "react"
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from "../components/layout"
import SEO from '../components/seo';
import pluralizeReadingTime from "../constants/pluralize-reading-time";

export default ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { previous, next } = pageContext;
  const publicUrl = `https://daliannyvieira.github.io/blog${post.fields.slug}`;

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title}`}
        description={post.frontmatter.description || post.excerpt}
        keywords={post.frontmatter.keywords}
      />
      <div className="blog-post">
        <h1 style={{ margin: 0 }}>
          {post.frontmatter.published ? '' : 'DRAFT: '}
          {post.frontmatter.title}
        </h1>
        <small title={post.frontmatter.longDate}>
          {post.frontmatter.shortDate} &middot;{' '}
          {pluralizeReadingTime(post.timeToRead)}
        </small>
        <div style={{ marginTop: `1rem` }}>
          <Image
            fluid={post.frontmatter.cover.childImageSharp.fluid}
            alt={post.frontmatter.coverAuthor}
          />
        </div>
        <small>
          Photo by{' '}
          <a href={post.frontmatter.coverOriginalUrl}>
            {post.frontmatter.coverAuthor}
          </a>{' '}
        </small>
        <div
          style={{
            margin: `1rem 0`,
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <small>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={`https://twitter.com/search?q=${publicUrl}`}
          >
            Discuss on Twitter
          </a>{' '}
          &middot;{' '}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={`https://github.com/daliannyvieira/blog/tree/master/content/blog${
              post.fields.slug
            }`}
          >
            Edit this post on GitHub
          </a>
        </small>
        <hr/>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        shortDate: date(formatString: "MMMM DD, YYYY")
        longDate: date(formatString: "MMMM DD, YYYY, h:mm:ss a")
        description
        categories
        cover {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverAuthor
        coverOriginalUrl
        keywords
        published
      }
    }
  }
`;