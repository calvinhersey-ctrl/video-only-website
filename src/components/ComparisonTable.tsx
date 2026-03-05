'use client';

import { useState, useMemo } from 'react';

export interface ColumnDef {
  key: string;
  label: string;
  badge?: 'value' | 'picture' | 'gaming' | 'premium' | 'sound';
}

export interface TableSection {
  title: string;
  headerColor?: string;
  rows: { label: string; values: Record<string, string> }[];
}

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  columns: ColumnDef[];
  sections: TableSection[];
  priceSection?: {
    sizeLabel?: string;
    rows: { size: string; prices: Record<string, string> }[];
    footnote?: string;
  };
  brandColor?: string;
}

function ScoreBar({ score }: { score: number }) {
  const color =
    score >= 95 ? 'bg-green-400' :
    score >= 85 ? 'bg-green-500' :
    score >= 75 ? 'bg-yellow-400' :
    score >= 65 ? 'bg-orange-400' :
    'bg-red-400';

  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2 bg-surface-light rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <span className="font-bold text-sm">{score}</span>
    </div>
  );
}

function CellValue({ value, isScore }: { value: string; isScore: boolean }) {
  if (value === '—' || value === '') {
    return <span className="text-text-muted">—</span>;
  }
  if (isScore && !isNaN(Number(value))) {
    return <ScoreBar score={Number(value)} />;
  }
  if (value === 'YES') {
    return (
      <span className="inline-flex items-center text-green-600">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
      </span>
    );
  }
  return <span>{value}</span>;
}

const badgeLabels: Record<string, string> = {
  value: 'Best Value',
  picture: 'Best Value',
  gaming: 'Best for Gaming',
  premium: 'Premium',
  sound: 'Best Sound',
};

export default function ComparisonTable({ title, subtitle, columns, sections, priceSection, brandColor = 'brand-yellow' }: ComparisonTableProps) {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);

  const visibleColumns = useMemo(() => {
    if (!compareMode || selectedModels.length === 0) return columns;
    return columns.filter((c) => selectedModels.includes(c.key));
  }, [columns, selectedModels, compareMode]);

  const toggleModel = (key: string) => {
    setSelectedModels((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : prev.length < 3 ? [...prev, key] : prev
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-black mb-2">{title}</h1>
        {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          onClick={() => { setCompareMode(!compareMode); if (compareMode) setSelectedModels([]); }}
          className={`text-sm font-semibold px-4 py-2 rounded-lg border transition-colors ${
            compareMode ? 'border-brand-yellow text-brand-yellow bg-brand-yellow/10' : 'border-surface-light text-text-secondary hover:border-text-muted'
          }`}
        >
          {compareMode ? 'Exit Compare' : 'Compare Models'}
        </button>
        {compareMode && (
          <div className="flex flex-wrap gap-2">
            {columns.map((col) => (
              <button
                key={col.key}
                onClick={() => toggleModel(col.key)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                  selectedModels.includes(col.key)
                    ? 'border-brand-yellow bg-brand-yellow/20 text-brand-yellow'
                    : 'border-surface-light text-text-muted hover:border-text-muted'
                }`}
              >
                {col.label}
              </button>
            ))}
            <span className="text-xs text-text-muted self-center">Select up to 3</span>
          </div>
        )}
      </div>

      <div className="comparison-table-wrapper rounded-xl border border-surface-light/50 overflow-hidden">
        <table className="comparison-table" role="table">
          <caption className="sr-only">{title} comparison</caption>
          <thead>
            <tr>
              <th scope="col" className="feature-label !z-20">Feature</th>
              {visibleColumns.map((col) => (
                <th key={col.key} scope="col" className="text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">{col.label}</span>
                    {col.badge && (
                      <span className={`badge badge-${col.badge}`}>{badgeLabels[col.badge]}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          {sections.map((section, si) => (
            <tbody key={si}>
              {section.title && (
                <tr>
                  <td
                    colSpan={visibleColumns.length + 1}
                    className={`!py-2 !px-4 font-bold text-sm uppercase tracking-wider ${
                      section.headerColor || 'bg-brand-red text-white'
                    }`}
                  >
                    {section.title}
                  </td>
                </tr>
              )}
              {section.rows.map((row, ri) => (
                <tr key={ri}>
                  <td className="feature-label">{row.label}</td>
                  {visibleColumns.map((col) => (
                    <td key={col.key} className="text-center">
                      <CellValue
                        value={row.values[col.key] || '—'}
                        isScore={row.label.toLowerCase() === 'performance'}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>

      {priceSection && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Screen Sizes &amp; Suggested Retail Prices</h2>
          <div className="comparison-table-wrapper rounded-xl border border-surface-light/50 overflow-hidden">
            <table className="comparison-table" role="table">
              <caption className="sr-only">Prices by screen size</caption>
              <thead>
                <tr>
                  <th scope="col" className="feature-label !z-20">
                    {priceSection.sizeLabel || 'Size'}
                  </th>
                  {visibleColumns.map((col) => (
                    <th key={col.key} scope="col" className="text-center font-bold">{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {priceSection.rows.map((row, ri) => (
                  <tr key={ri}>
                    <td className="feature-label font-bold">{row.size}</td>
                    {visibleColumns.map((col) => {
                      const price = row.prices[col.key] || '—';
                      const hasAsterisk = price.includes('*');
                      const hasTradeIn = price.toUpperCase().includes('TRADE');
                      return (
                        <td key={col.key} className="text-center">
                          {price === '—' ? (
                            <span className="text-text-muted">—</span>
                          ) : (
                            <span className="font-bold text-brand-red">
                              {price.replace('*', '')}
                              {hasAsterisk && <sup className="text-text-muted ml-0.5">*</sup>}
                              {hasTradeIn && <span className="trade-in-badge ml-1 text-[10px]">TRADE-IN</span>}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {priceSection.footnote && (
            <p className="mt-3 text-sm text-text-muted italic">* {priceSection.footnote}</p>
          )}
        </div>
      )}
    </section>
  );
}
