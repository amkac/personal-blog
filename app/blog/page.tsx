import React from 'react';
import { posts } from '#content';
import PostItem from '@/components/post-item';
import { sortPosts } from '@/lib/utils';
import QueryPagination from '@/components/query-pagination';
import { Metadata } from 'next';

const POSTS_PER_PAGE = 5;

export const metadata: Metadata = {
  title: 'Amkac blog',
  description: 'Amkac Tech blog ',
};

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );
  const totalePages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">My toughts !</p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  description={description}
                  title={title}
                  date={date}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see yet</p>
      )}
      <QueryPagination totalPages={totalePages} className="justify-end mt-4" />
    </div>
  );
};

export default BlogPage;
