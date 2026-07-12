import { WaitlistProvider } from '@/context/WaitlistContext';
import WaitlistPage from '@/components/waitlist/WaitlistPage';

export default function Page() {
  return (
    <WaitlistProvider>
      <WaitlistPage />
    </WaitlistProvider>
  );
}