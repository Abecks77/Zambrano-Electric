import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { AppRoutes } from './AppRoutes';

export { prerenderRoutes } from './AppRoutes';

export interface RenderResult {
  html: string;
  helmet: HelmetServerState | undefined;
}

// Called once per route by prerender.js at build time.
export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );
  return { html, helmet: helmetContext.helmet };
}
