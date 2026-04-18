import SingleBlog from '@/components/Blog/SingleBlog';
// Sanity removed - blog functionality disabled
// import { getPosts } from '@/sanity/sanity-utils';
const getPosts = async () => [];

export async function RelatedArticles() {
  const posts = await getPosts();

  return (
    <section>
      <h2 className='mt-25 mb-10 max-w-[579px] text-[34px] leading-[45px] font-semibold text-white'>
        Related Articles
      </h2>

      <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.length === 0 ? (
          <p className='text-white/80'>No articles available</p>
        ) : (
          posts.slice(0, 3).map((blog, i) => (
            <SingleBlog key={i} blog={blog} />
          ))
        )}
      </div>
    </section>
  );
}
