import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employment',
  description: 'Join Video Only — sales positions available in Washington, Oregon, and California.',
};

export default function EmploymentPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-black mb-8">Employment</h1>

      <div className="bg-white rounded-xl p-8 border border-surface-light shadow-sm">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">Sales Positions</h2>
        <p className="text-text-secondary leading-relaxed mb-2">
          Available in <span className="text-text-primary font-semibold">Washington</span>, <span className="text-text-primary font-semibold">Oregon</span>, and <span className="text-text-primary font-semibold">California</span>.
        </p>
        <p className="text-text-secondary leading-relaxed mb-6">
          Video Only is looking for quality sales associates to join our team.
        </p>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-text-muted mb-1">Send your resume to:</p>
          <a
            href="mailto:hiring@videoonly.com"
            className="text-brand-blue hover:text-brand-dark transition-colors font-bold text-lg"
          >
            hiring@videoonly.com
          </a>
        </div>
      </div>
    </div>
  );
}
