import Hero from '@/components/Hero';
import AnimatedNavLink from '@/components/ui/AnimatedNavLink';

export default function AboutUsPage() {
  return (
    <>
      <div className="my-24" />
      <Hero />
      <div className="mt-24 mb-24">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <div className="my-24">
          <AnimatedNavLink
            link={'/our-process'}
            text={'Our Process'}
          />
        </div>
      </div>
    </>
  );
}