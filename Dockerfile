FROM denoland/deno:1.28.3

COPY . .
RUN deno cache service.ts

CMD ["run", "-A", "service.ts"]