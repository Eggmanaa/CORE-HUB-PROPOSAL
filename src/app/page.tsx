import Hero from '@/components/Hero';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import StrategicImperative from '@/components/StrategicImperative';
import LearningTracks from '@/components/LearningTracks';
import FacilityZones from '@/components/FacilityZones';
import Budget from '@/components/Budget';
import CareerOutcomes from '@/components/CareerOutcomes';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <Hero />
      <ExecutiveSummary />
      <StrategicImperative />
      <LearningTracks />
      <FacilityZones />
      <CareerOutcomes />
      <Budget />
      <CallToAction />
    </main>
  );
}
