import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TV & Audio Deals',
  description: 'Weekly deals on TVs, soundbars, speakers, receivers, monitors, and accessories at Video Only.',
};

function DealCard({ name, price, details, save }: { name: string; price: string; details?: string; save?: string }) {
  return (
    <div className="deal-card flex flex-col">
      <h3 className="font-bold text-text-primary">{name}</h3>
      {details && <p className="text-sm text-text-secondary mt-1">{details}</p>}
      <div className="mt-auto pt-3 flex items-center gap-2">
        <span className="text-xl font-black text-brand-red">{price}</span>
        {save && <span className="save-badge">SAVE {save}</span>}
      </div>
    </div>
  );
}

function PriceRow({ model, prices, badge }: { model: string; prices: { size: string; price: string }[]; badge?: string }) {
  return (
    <div className="deal-card">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="font-bold text-text-primary">{model}</h3>
        {badge === 'trade-in' && <span className="trade-in-badge">LESS TRADE-IN DOLLARS</span>}
      </div>
      <div className="flex flex-wrap gap-3">
        {prices.map((p) => (
          <div key={p.size} className="bg-gray-50 rounded-lg px-3 py-2 text-center min-w-[80px]">
            <div className="text-xs text-text-muted">{p.size}</div>
            <div className="font-bold text-brand-red">{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="text-2xl font-black mt-12 mb-6 pt-4 border-t border-surface-light scroll-mt-24">
      {children}
    </h2>
  );
}

export default function DealsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black mb-2">TV &amp; Audio Deals</h1>
        <p className="text-text-secondary text-lg">This week&apos;s specials — rock bottom prices on top brands</p>
      </div>

      {/* Trade-In Banner */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-xl p-6 md:p-8 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Holiday Trade-In Special</h2>
        <p className="text-white/80 text-lg">Get cash off your new TV when you trade in your old one. Check in store for details.</p>
      </div>

      {/* Quick Nav */}
      <nav className="flex flex-wrap gap-2 mb-8" aria-label="Deal categories">
        {['Small TVs', 'TV Deals', 'Soundbars', 'Sonos', 'Speakers', 'JBL', 'Receivers', 'Monitors', 'Accessories', 'Wall Mounts'].map((cat) => (
          <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium px-3 py-1.5 rounded-full border border-surface-light text-text-secondary hover:border-brand-blue hover:text-brand-blue transition-colors">
            {cat}
          </a>
        ))}
      </nav>

      {/* Small TVs */}
      <SectionHeading id="small-tvs">Small TVs</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DealCard name="TCL 32S350G" price="$119" details='32" LED, 1080p, Google Smart TV, Voice Remote' save="$30" />
        <DealCard name="Samsung UN32F6000F" price="$129" details='32" LED, 1080p, Tizen Smart TV, Bluetooth' save="$50" />
        <DealCard name="Samsung UN40F6000F" price="$149" details='40" LED, 1080p, Tizen Smart TV, Bluetooth' save="$50" />
      </div>

      {/* TV Deals */}
      <SectionHeading id="tv-deals">TV Deals</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PriceRow model="Samsung U8000F" prices={[{size:'43"',price:'$229'},{size:'50"',price:'$269'},{size:'55"',price:'$349'},{size:'65"',price:'$429'}]} />
        <PriceRow model="Samsung Q7F" prices={[{size:'43"',price:'$349'},{size:'50"',price:'$379'},{size:'55"',price:'$399'},{size:'65"',price:'$469'}]} />
        <PriceRow model="Samsung Frame" prices={[{size:'43"',price:'$699'},{size:'50"',price:'$799'},{size:'55"',price:'$899'},{size:'65"',price:'$1199'}]} />
        <PriceRow model="Samsung S90F OLED" prices={[{size:'55"',price:'$1099'},{size:'65"',price:'$1399'},{size:'77"',price:'$1999'},{size:'83"',price:'$2999'}]} badge="trade-in" />
        <PriceRow model="Samsung S95F OLED" prices={[{size:'55"',price:'$1999'},{size:'65"',price:'$2499'},{size:'77"',price:'$3499'},{size:'83"',price:'$5299'}]} badge="trade-in" />
        <PriceRow model="LG QNED82" prices={[{size:'43"',price:'$379'},{size:'50"',price:'$399'},{size:'55"',price:'$449'},{size:'65"',price:'$549'}]} />
        <PriceRow model="LG OLED C Series" prices={[{size:'55"',price:'$1099'},{size:'65"',price:'$1399'},{size:'77"',price:'$2299'},{size:'83"',price:'$2999'}]} badge="trade-in" />
        <PriceRow model="LG OLED G Series" prices={[{size:'55"',price:'$1799'},{size:'65"',price:'$2499'},{size:'77"',price:'$3499'},{size:'83"',price:'$5299'}]} badge="trade-in" />
        <PriceRow model="TCL 651 Series" prices={[{size:'43"',price:'$219'},{size:'55"',price:'$279'},{size:'65"',price:'$379'},{size:'75"',price:'$519'},{size:'85"',price:'$849'}]} />
        <PriceRow model="TCL QM6K" prices={[{size:'55"',price:'$449'},{size:'65"',price:'$529'},{size:'75"',price:'$799'}]} />
        <PriceRow model="TCL QM7K" prices={[{size:'55"',price:'$699'},{size:'65"',price:'$999'},{size:'75"',price:'$1299'},{size:'98"',price:'$2499'}]} />
        <PriceRow model="TCL QM8K" prices={[{size:'65"',price:'$1299'},{size:'75"',price:'$1999'},{size:'85"',price:'$2199'},{size:'98"',price:'$3999'}]} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <DealCard name='Hisense 65A7N — 65" 4K UHD' price="$299" details="Google Smart TV" save="$150" />
        <DealCard name='TCL 98" 4K UHD' price="$1399" details="120Hz, Quantum Dot Color, Google Smart TV" save="$600" />
      </div>

      {/* Samsung Soundbar Deals */}
      <SectionHeading id="soundbars">Samsung Soundbar Deals</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DealCard name="120 Watt Soundbar" price="$49" save="$80" />
        <DealCard name="Samsung Q6310" price="$179" details="350W 3.1 System, Wireless Sub" save="$70" />
        <DealCard name="Samsung HWS700D" price="$399" details="3.1 Soundbar, Wireless Sub, WiFi, Bluetooth, HDMI eARC" save="$150" />
        <DealCard name="Samsung HWQ800F" price="$649" details="400W 5.1.2 Atmos, 8&quot; Wireless Sub, Symphony Mode" />
      </div>

      {/* Sonos */}
      <SectionHeading id="sonos">Sonos</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DealCard name="Sonos Roam" price="$179" details="Portable, WiFi/BT, IP67, 10hr Battery" />
        <DealCard name="Sonos Era 100" price="$219" details="Wireless Streaming Speaker" save="$30" />
        <DealCard name="Sonos Era 300" price="$479" details="Spatial Audio Speaker" />
        <DealCard name="Sonos Move2" price="$499" details="Portable, 24hr Battery, Alexa/Google" />
        <DealCard name="Sonos Beam" price="$499" details="TV Soundbar, HDMI/Optical, Alexa" />
        <DealCard name="Sonos Sub G4B" price="$899" details="Wireless Subwoofer" />
        <DealCard name="Sonos Arc G2" price="$1099" details="Atmos, 11 Speakers" />
        <DealCard name="Bose TV Soundbar" price="$999" details="5.0.2 Atmos, 9 Speakers, BT, WiFi" />
      </div>

      {/* Speakers */}
      <SectionHeading id="speakers">Speakers</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DealCard name='Klipsch In-Ceiling' price="$49" details='1" Tweeter, 6.5" Woofer' save="$20" />
        <DealCard name='Klipsch In-Ceiling' price="$49/ea" details='1" Tweeter, 6" Woofer' />
        <DealCard name='Klipsch In-Ceiling' price="$179/ea" details='1" Tweeter, 8" Woofer' />
        <DealCard name='Polk Shelf Speaker' price="$74/ea" details='1" Dome Tweeter, 5.25" Woofer' />
        <DealCard name='Klipsch Shelf Speaker' price="$119/ea" details='Horn Loaded 1" Dome Tweeter, 5.25" Spun Copper Woofer' />
        <DealCard name='Klipsch Floor Speaker' price="$169/ea" details='Dual 6.5" Woofers' />
        <DealCard name='Klipsch Center Speaker R30C' price="$279" details='Quad 3.5" Woofers' />
        <DealCard name='Klipsch Floor Speaker' price="$329/ea" details='Dual 6.5" Woofers, Horn Design' />
        <DealCard name='Klipsch Floor Speaker' price="$399/ea" details='Dual 8" Woofers, Front Port' />
        <DealCard name='Polk Floor Speaker' price="$169/ea" details='Dual 6.5" Woofers' />
      </div>

      {/* JBL */}
      <SectionHeading id="jbl">JBL Wireless Speakers</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <DealCard name="JBL Clip 3" price="$59" />
        <DealCard name="JBL Wireless Speaker" price="$89" details="Speakerphone" />
        <DealCard name="JBL Wireless Speaker" price="$159" details="BT 5.1, 20hr Battery" />
        <DealCard name="JBL Clip 5" price="$299" details="8 speakers, BT 5.3, 24hr battery" />
      </div>

      {/* Receivers */}
      <SectionHeading id="receivers">Receivers</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DealCard name="Yamaha 180W Stereo Receiver" price="$199" details="BT, 5 Inputs" save="$50" />
        <DealCard name="Sony STRDH590" price="$429" details="450W 5.2 Channel Dolby Surround" />
        <DealCard name="Yamaha 200W Stereo Receiver" price="$179" details="AM/FM, 4 Inputs" save="$20" />
        <DealCard name="Denon 350W 5ch Surround" price="$339" details="BT, WiFi" save="$30" />
        <DealCard name="Yamaha 700W 7.2 Dolby Atmos" price="$579" details="WiFi, BT" />
        <DealCard name="Denon 560W 7ch Dolby Atmos" price="$719" details="Dual Band WiFi" />
        <DealCard name="Yamaha 700W 7.2 Dolby Atmos" price="$799" details="Room Correction, Phono" />
      </div>

      {/* Monitors */}
      <SectionHeading id="monitors">Monitors</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DealCard name='27" Monitor' price="$119" details="1080p IPS, 100Hz" save="$30" />
        <DealCard name='34" Monitor' price="$229" details="3440x1440, 100Hz" save="$100" />
        <DealCard name='49" Monitor' price="$779" details="Curved Dual QHD, 144Hz, 1ms" save="$220" />
      </div>

      {/* Accessories */}
      <SectionHeading id="accessories">Accessories</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <DealCard name="Wireless TV Headphones" price="$34" details="BT 5.3, 57hr battery" save="$5" />
        <DealCard name="Sony Blu-Ray Player BDPS1700U" price="$94" />
        <DealCard name="JBL Wireless Speaker T520BT" price="$299" save="$250" />
        <DealCard name="Swiveling TV Base" price="$99" save="$30" />
      </div>

      {/* Wall Mounts */}
      <SectionHeading id="wall-mounts">Wall Mounts</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DealCard name='Tilting Mount (50-75" TVs)' price="$29" details="120 lbs capacity" save="$20" />
        <DealCard name='Full Motion Mount (50-75" TVs)' price="$59" details='14" extension' save="$40" />
        <DealCard name='Tilting Mount (50-85" TVs)' price="$99" details="150 lbs capacity" save="$50" />
        <DealCard name='Full Motion Mount (50-85" TVs)' price="$99" details='25" extension' save="$60" />
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-lg mb-3">Sanus Wall Mounts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="deal-card"><p className="font-medium">32-65&quot; Flat Mount</p><p className="text-sm text-text-muted mt-1">See in store for pricing</p></div>
          <div className="deal-card"><p className="font-medium">48-85&quot; Flat Mount</p><p className="text-sm text-text-muted mt-1">See in store for pricing</p></div>
          <div className="deal-card"><p className="font-medium">32-85&quot; Full Motion Arm</p><p className="text-sm text-text-muted mt-1">See in store for pricing</p></div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-white rounded-xl p-8 border border-surface-light shadow-sm">
        <h2 className="text-2xl font-black mb-3">Ready to See These Deals in Person?</h2>
        <p className="text-text-secondary mb-6">Visit one of our 16 showrooms across Washington, Oregon, and California</p>
        <Link href="/locations/washington" className="cta-button text-lg">
          Find a Store Near You
        </Link>
      </div>
    </div>
  );
}
