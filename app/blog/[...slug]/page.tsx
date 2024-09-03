import { Post, posts } from '#content';
import MDXContent from '@/components/mdx-content';
import { notFound } from 'next/navigation';
import React from 'react';

import '@/styles/mdx.css';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);
  if (!post || !post.published) {
    notFound();
  }
  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2 text-2xl font-bold">{post.title}</h1>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}

export default PostPage;
