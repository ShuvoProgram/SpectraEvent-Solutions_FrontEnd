import HomePage from '@/components/Home/Index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Home`,
  description: 'Best Event Management Website',
};

export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}
