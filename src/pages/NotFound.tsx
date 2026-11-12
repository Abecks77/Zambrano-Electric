import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CallButton } from '../components/ui/CallButton';

export const NotFound = () => (
  <div className="flex-1 flex items-center justify-center py-24 px-4">
    <Helmet>
      <title>Page Not Found | Zambrano Electric</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="text-center max-w-xl">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Page <span className="text-race-red">Not Found</span></h1>
      <p className="text-gray-400 mb-8">That page doesn’t exist. Head back to the <Link to="/" className="underline text-white">homepage</Link>, or call us and we’ll help directly.</p>
      <CallButton />
    </div>
  </div>
);
