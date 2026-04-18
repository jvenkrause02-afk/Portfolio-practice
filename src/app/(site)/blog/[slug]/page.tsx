import Breadcrumb from '@/components/Breadcrumb';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  return {
    title: 'Blog Post',
    description: 'Blog functionality disabled',
  };
}

export default async function BlogDetails(props: Props) {
  return (
    <>
      <Breadcrumb pageTitle='Blog Details' />
      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <p className='text-white/80'>Blog functionality disabled - Sanity integration has been removed</p>
        </div>
      </section>
    </>
  );
}
