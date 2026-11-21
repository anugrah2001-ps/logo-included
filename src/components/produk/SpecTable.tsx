import type { ReactNode } from "react";

export function SpecTable({ title, rows }: { title: string; rows: [string, ReactNode][] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="bg-midnight px-6 py-4 text-sm font-semibold text-midnight-foreground">{title}</div>
      <table className="w-full text-sm">
        <tbody className="divide-y divide-border">
          {rows.map(([k, v]) => (
            <tr key={k} className="align-top">
              <th scope="row" className="w-44 bg-muted/50 px-6 py-4 text-left font-medium text-muted-foreground">
                {k}
              </th>
              <td className="px-6 py-4 font-medium text-foreground">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Rate({ children }: { children: ReactNode }) {
  return <span className="text-lg font-extrabold text-gold">{children}</span>;
}
