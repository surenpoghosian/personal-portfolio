import React from 'react';

import PageLayout from '../layouts/PageLayout';
import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import Post from '../elements/Post';
import SEO, { ogTypeArticle, titleModeSuffix } from '../shared/SEO';

type PostScreenProps = {
  post: PostTemplateQuery;
  children: React.ReactNode;
};

const PostScreen = (props: PostScreenProps): React.ReactElement => {
  const { post, children } = props;

  return (
    <PageLayout>
      <SEO
        title={post.mdx?.frontmatter?.title || ''}
        titleMode={titleModeSuffix}
        description={post.mdx?.frontmatter?.summary || ''}
        image={post.mdx?.frontmatter?.cover?.childImageSharp?.gatsbyImageData?.images?.fallback?.src || ''}
        type={ogTypeArticle}
      />
      <Post post={post}>{children}</Post>
    </PageLayout>
  );
};

export default PostScreen;
