import ExperienceAndExpertise from '@/components/ExperienceAndExpertise';
import Separator from '@/components/global/Separator';
import Hero from '@/components/Hero'
import BaseServices from '@/components/BaseServices';

export default function Home() {
  return (
    <>
      <div className="my-24 mx-auto">
        <Hero />
        <BaseServices />
        <Separator />
        <ExperienceAndExpertise />
      </div>
    </>
  );
}