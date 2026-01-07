create table if not exists public._habla_migrations_probe (
  id bigserial primary key,
  created_at timestamptz not null default now()
);
