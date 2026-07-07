# 🛠️ FormForge Troubleshooting & D1 Free Tier Guide (2026 Updates)

This guide helps you resolve deployment errors and understand the 2026 Cloudflare Workers + D1 Free Tier limitations honestly.

---

## 📉 Cloudflare Free Tier Boundaries (Honest Limits)

FormForge is designed to run 100% within Cloudflare's standard Free Tier. Here is what you need to know:

| Resource Parameter | Free Tier Limit | FormForge Impact |
| :--- | :--- | :--- |
| **D1 Storage Space** | 📀 10 GB Total | Can store up to ~10,000,000 text submissions safely. |
| **D1 Database Reads** | ⚡ 5 Million / Day | Standard usage consumes < 1,000 reads per day. |
| **D1 Database Writes** | ⚡ 100,000 / Day | Can accept up to 100,000 form submissions daily. |
| **Worker Size Limit** | 📦 1 MB (Compressed) | Our Hono engine bundle size is only ~150KB (Never hits limits). |

---

## 🛠️ Common Errors & Resolution

### 1. Error: `D1_NOT_CONFIGURED` (Database connection offline)
- **Symptom**: Custom API request returns 503 database errors on first register.
- **Resolution**:
  Cloudflare automated deployment dashboard bindings are missing. Go to **Workers & Pages Dashboard** -> select your project -> **Settings** -> **Bindings** -> **D1 database** -> click **Add Binding** -> Set variable name to **`DB`** and target database name to your created database.

### 2. Error: `Wrangler config parsing SDK conflicts`
- **Symptom**: Deploy button fails immediately with warnings.
- **Resolution**:
  Ensure your `wrangler.toml` file does not contain nested configuration elements like custom asset binds or future compatibility dates. Use the stable minimal TOML configuration model.

---

## 💻 Local Emulation Setup

If you want to run local development on your machine, launch the dev server bypassing Cloudflare edge locks:
```bash
# 1. Install dependencies
bun install

# 2. Compile assets in watch mode
bun run dev
```
