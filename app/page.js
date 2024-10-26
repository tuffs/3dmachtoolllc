import ExperienceAndExpertise from '@/components/ExperienceAndExpertise';
import Hero from '@/components/Hero'
import BaseServices from '@/components/BaseServices';

export default function Home() {
  return (
    <>
      <div className="my-24 mx-auto">
        <Hero />
        <BaseServices />
        <ExperienceAndExpertise />
      </div>
    </>
  );
}