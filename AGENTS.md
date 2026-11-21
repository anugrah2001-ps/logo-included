<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- Savings product numbers, deposit interest/tax math and form URLs live in `src/lib/simpanan.ts` (tested in `simpanan.test.ts`); UI imports from there so specs stay in one place.
- Navbar and Footer are mounted once in `src/routes/__root.tsx`; each nav item is its own route (`/`, `/profil`, `/produk`, `/ekosistem`), and `/produk` selects its tab via the optional `tab` search param.
- Motion lives in `src/styles.css` (keyframes + `animate-*`, `reveal`, `card-lift` utilities, with a `prefers-reduced-motion` override) and in small helpers under `src/components/site/` (`Reveal`, `CountUp`/`AnimatedNumber`, `Tilt`, `HeroBackdrop`, `OrbitVisual`); reuse these instead of adding an animation library, keeping the bundle small and effects consistent.
