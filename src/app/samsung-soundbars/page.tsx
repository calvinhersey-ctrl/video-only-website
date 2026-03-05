import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: 'Samsung TV Sound Systems',
  description:
    'Compare Samsung HWC450, HWB550F, HWS700D, HWQ600F, HWQ800F, HWQ900F, and HWQ990F soundbars.',
};

export default function SamsungSoundbarsPage() {
  return (
    <ComparisonTable
      title="Samsung TV Sound Systems"
      subtitle="Compare Samsung HWC450, HWB550F, HWS700D, HWQ600F, HWQ800F, HWQ900F, and HWQ990F soundbars"
      columns={[
        { key: 'HWC450', label: 'HWC450' },
        { key: 'HWB550F', label: 'HWB550F' },
        { key: 'HWS700D', label: 'HWS700D' },
        { key: 'HWQ600F', label: 'HWQ600F' },
        { key: 'HWQ800F', label: 'HWQ800F', badge: 'value' },
        { key: 'HWQ900F', label: 'HWQ900F' },
        { key: 'HWQ990F', label: 'HWQ990F', badge: 'premium' },
      ]}
      sections={[
        {
          title: 'Specifications',
          rows: [
            {
              label: 'Soundbar Width',
              values: {
                HWC450: '34"',
                HWB550F: '34"',
                HWS700D: 'Slim 35"',
                HWQ600F: '41"',
                HWQ800F: '44"',
                HWQ900F: '48"',
                HWQ990F: '48"',
              },
            },
            {
              label: 'Left Channel',
              values: {
                HWC450: 'YES',
                HWB550F: 'YES',
                HWS700D: 'YES',
                HWQ600F: 'YES',
                HWQ800F: 'YES',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'Right Channel',
              values: {
                HWC450: 'YES',
                HWB550F: 'YES',
                HWS700D: 'YES',
                HWQ600F: 'YES',
                HWQ800F: 'YES',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'Center Channel',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: 'YES',
                HWQ600F: 'YES',
                HWQ800F: 'YES',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'Tweeters',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: '—',
                HWQ600F: '—',
                HWQ800F: 'YES',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'Atmos Channel',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: '—',
                HWQ600F: 'YES',
                HWQ800F: 'YES',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'Surround Channel',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: '—',
                HWQ600F: '—',
                HWQ800F: '—',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'Rear Speakers',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: '—',
                HWQ600F: '—',
                HWQ800F: '—',
                HWQ900F: '—',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'Powered Subwoofer',
              values: {
                HWC450: '5"',
                HWB550F: '6"',
                HWS700D: '6"',
                HWQ600F: '6"',
                HWQ800F: '6" + passive radiator',
                HWQ900F: '8" + 8"',
                HWQ990F: '8" + 8"',
              },
            },
            {
              label: 'TV Symphony',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: 'YES',
                HWQ600F: 'YES',
                HWQ800F: 'YES',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'WiFi with Music Apps',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: 'YES',
                HWQ600F: '—',
                HWQ800F: 'YES',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'Voice Amplifier',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: '—',
                HWQ600F: '—',
                HWQ800F: 'YES',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
            {
              label: 'HDMI Inputs',
              values: {
                HWC450: '—',
                HWB550F: '1',
                HWS700D: '1',
                HWQ600F: '1',
                HWQ800F: '1',
                HWQ900F: '2',
                HWQ990F: '2',
              },
            },
            {
              label: 'Version 2.1',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: '—',
                HWQ600F: '—',
                HWQ800F: '—',
                HWQ900F: 'YES',
                HWQ990F: 'YES',
              },
            },
          ],
        },
        {
          title: 'Pricing',
          rows: [
            {
              label: 'Suggested Retail',
              values: {
                HWC450: '$199',
                HWB550F: '$229',
                HWS700D: '$399',
                HWQ600F: '$449',
                HWQ800F: '$749',
                HWQ900F: '$1199',
                HWQ990F: '$1599',
              },
            },
            {
              label: 'With Samsung TV',
              values: {
                HWC450: '—',
                HWB550F: '—',
                HWS700D: '—',
                HWQ600F: '—',
                HWQ800F: '$649',
                HWQ900F: '$999',
                HWQ990F: '$1399',
              },
            },
          ],
        },
      ]}
    />
  );
}
