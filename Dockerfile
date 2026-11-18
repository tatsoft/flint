# Build Flint from the GitHub source (tatsoft/flint) instead of the npm package.
# Usage: docker build -t flint:tatsoft /path/to/flint-repo
FROM node:22-alpine AS build
WORKDIR /repo
COPY . .
RUN npm ci && npm run build

# ---- runtime: only the compiled output + production deps ----
FROM node:22-alpine
ENV NODE_ENV=production \
    PORT=8787 \
    FLINT_CONFIG=/config/config.json \
    FLINT_LOGS=/config/logs
WORKDIR /app
# server is ESM and expects the client bundle at <repo>/client/dist (../../client/dist)
COPY --from=build /repo/server/dist ./server/dist
COPY --from=build /repo/client/dist ./client/dist
RUN mkdir -p /tmp/prod && cd /tmp/prod \
 && npm init -y >/dev/null 2>&1 \
 && npm install --omit=dev express@^4.19.2 yaml@^2.5.0 \
 && cp -r /tmp/prod/node_modules /app/node_modules
EXPOSE 8787
VOLUME ["/config"]
CMD ["node", "server/dist/index.js"]
