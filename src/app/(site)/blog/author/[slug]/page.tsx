import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
// Sanity removed - blog functionality disabled
// import { getPostsByAuthor } from "@/sanity/sanity-utils";
const getPostsByAuthor = async (slug: string) => [];
import { Author } from "@/types/blog";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Author: ${slug} | Blog`,
    description: `Author: ${slug} | Blog`,
  };
}

const AuthorPage = async (props: Props) => {
  const params = await props.params;

  const {
    slug
  } = params;

  const posts = await getPostsByAuthor(slug);

  return (
    <>
      <Breadcrumb pageTitle={slug} />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <p className="text-white/80">Blog author page - functionality disabled</p>
        </div>
      </section>
    </>
  );
};

export default AuthorPage;
