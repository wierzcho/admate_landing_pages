# Admate Freebies Platform - Strategy & Implementation Plan

## Context

Admate.pl (Beata's Meta Ads agency, ~50k PLN/month) needs lead-generation freebies to attract potential clients. We're building two products:

1. **Ads Grader** (MVP, no auth) — Upload ad creative image or paste FB Ad Library link → GPT-4o multimodal analysis with scores & recommendations. Hard email gate (score + top issues visible, full report behind email confirmation). Images only for MVP.
2. **Analytics App** (phase 2, auth required) — Connect Meta ad account → Creative analytics dashboard (Motion-style) + AI chat about ad performance. Streaming responses.

### User Decisions
- **LLM**: OpenAI GPT-4o (multimodal, image analysis)
- **Lead gate**: Hard gate like disign (locked results → email unlock → full report)
- **Media**: Images only for MVP (video in v2)
- **Domains**: `grader.admate.pl` (Ads Grader), `app.admate.pl` (Analytics App), `api.admate.pl` (shared backend API)

---

## Architecture Decision: Single Monorepo

One repo (`admate/`) with a shared FastAPI backend and a single React frontend. Rationale:
- Shared database, models, utilities, UI components
- Ads Grader is a public route (no auth), Analytics is behind auth
- Simpler deployment (one backend, two frontend builds, one DB)
- The grader is a funnel into the full app
- **Domains**: `grader.admate.pl` + `app.admate.pl` (two separate React apps/builds), `api.admate.pl` (shared FastAPI backend)

### Base: fastsaas-v7.0.0-clean boilerplate
- Strip out: Stripe payments, subscriptions, invoices, multi-tenancy, items CRUD
- Keep: auth (email/password + Google OAuth), async SQLAlchemy, JWT, email adapter, UI components, Docker Compose, Makefile, settings
- Add: freebie flow from disign, Meta integration from somate, new ads analysis service

```
admate/
├── app/                              # FastAPI backend (api.admate.pl)
│   ├── main.py                       # App entry, router registration, CORS
│   ├── settings.py                   # Pydantic BaseSettings
│   ├── db.py                         # Async SQLAlchemy (from fastsaas)
│   ├── dependencies.py               # Global DI
│   │
│   ├── api/
│   │   ├── auth/                     # From fastsaas (email/password, Google)
│   │   │   ├── router.py
│   │   │   ├── email_password/
│   │   │   └── google/
│   │   │
│   │   ├── ads_grader/               # Product 1: Public freebie
│   │   │   ├── router.py             # analyze, unlock, confirm endpoints
│   │   │   ├── schemas.py            # Request/response Pydantic models
│   │   │   ├── analysis_service.py   # GPT-4o ad analysis + streaming
│   │   │   ├── ad_library.py         # Facebook Ad Library link parser
│   │   │   └── prompts.py            # LLM prompt templates
│   │   │
│   │   ├── meta_ads/                 # Product 2: Meta integration
│   │   │   ├── router.py             # OAuth, accounts, analytics endpoints
│   │   │   ├── schemas.py
│   │   │   ├── provider.py           # Meta Graph API client (from somate→httpx)
│   │   │   └── service.py            # Business logic
│   │   │
│   │   └── chat/                     # Product 2: AI chat
│   │       ├── router.py             # SSE streaming endpoint
│   │       ├── schemas.py
│   │       └── agent.py              # LangGraph agent with tools
│   │
│   ├── models/
│   │   ├── user.py                   # From fastsaas
│   │   ├── marketing_lead.py         # From disign (unified lead model)
│   │   ├── meta_ad_account.py        # Adapted from somate
│   │   ├── meta_ad_creative.py       # Adapted from somate
│   │   └── chat_session.py           # Chat history
│   │
│   ├── adapters/
│   │   ├── email/                    # From fastsaas (Protocol-based)
│   │   ├── storage/                  # File upload (local → S3)
│   │   └── llm/                      # OpenAI client (Protocol-based)
│   │
│   ├── utils/
│   │   ├── auth.py                   # JWT utilities (from fastsaas)
│   │   ├── current_user.py           # Auth dependency
│   │   └── rate_limit.py             # SlowAPI (from disign)
│   │
│   ├── alembic/                      # Migrations
│   └── tests/
│
├── grader/                           # React frontend (grader.admate.pl)
│   ├── src/
│   │   ├── pages/
│   │   │   └── GraderPage.tsx        # Main grader page
│   │   ├── components/
│   │   │   ├── UploadForm.tsx         # Image upload + Ad Library URL input
│   │   │   ├── AnalysisStream.tsx     # SSE consumer, streaming display
│   │   │   ├── ScoreCard.tsx          # Overall + category scores
│   │   │   ├── CategoryBreakdown.tsx  # Detailed category results
│   │   │   ├── IssuePreview.tsx       # Locked issue preview cards
│   │   │   └── LeadCaptureForm.tsx    # Email unlock form
│   │   ├── services/
│   │   │   └── graderApi.ts           # API client for ads grader
│   │   ├── components/ui/             # Radix + Tailwind (shared)
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── dashboard/                        # React frontend (app.admate.pl)
│   ├── src/
│   │   ├── features/
│   │   │   ├── authentication/        # From fastsaas
│   │   │   ├── analytics/             # Creative analytics dashboard
│   │   │   │   ├── pages/
│   │   │   │   │   └── CreativeAnalyticsPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── CreativeChart.tsx      # Recharts (from somate)
│   │   │   │   │   ├── CreativeTable.tsx      # Data table + thumbnails
│   │   │   │   │   ├── MetricSelector.tsx
│   │   │   │   │   └── DateRangeFilter.tsx
│   │   │   │   └── services/
│   │   │   │       └── analyticsApi.ts
│   │   │   ├── chat/                  # AI chat
│   │   │   │   ├── pages/
│   │   │   │   │   └── ChatPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── ChatMessages.tsx
│   │   │   │   │   ├── ChatInput.tsx
│   │   │   │   │   └── StreamingMessage.tsx
│   │   │   │   └── services/
│   │   │   │       └── chatApi.ts
│   │   │   ├── meta-accounts/         # Meta account connection
│   │   │   ├── settings/              # Account settings
│   │   │   └── home/                  # Dashboard
│   │   ├── shared/                    # Contexts, apiService (from fastsaas)
│   │   ├── components/ui/             # Radix + Tailwind (shared)
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── docker-compose.yml
├── Dockerfile
├── pyproject.toml
├── Makefile
└── .env.example
```

---

## Product 1: Ads Grader (MVP)

### User Flow
```
1. User lands on grader.admate.pl
2. Two input options:
   a) Upload image file (drag & drop or file picker) — JPEG, PNG, WebP
   b) Paste Facebook Ad Library URL
3. Click "Analizuj reklame" (Analyze ad)
4. AI analysis streams in real-time (SSE) — GPT-4o multimodal
5. LOCKED results shown:
   - Overall score (e.g., 72/100) ✅ visible
   - Category scores (Hook, Visual, Copy, CTA, Structure) ✅ visible
   - Summary text ✅ visible
   - Top 2-3 issues preview ✅ visible
   - Detailed recommendations 🔒 locked
   - Specific improvement suggestions 🔒 locked
   - Full breakdown per category 🔒 locked
6. "Odblokuj pelny raport" (Unlock full report) → email form
7. User provides email + optional phone + marketing consent
8. Confirmation email sent → user clicks link → full report unlocked
```

### Analysis Categories (inspired by GoMarble)
| Category | What LLM Evaluates | Score |
|----------|-------------------|-------|
| **Hook** | First 3 seconds / top of image - does it stop the scroll? | 0-100 |
| **Visual** | Color scheme, composition, quality, brand consistency | 0-100 |
| **Copy** | Message clarity, persuasion, tone, grammar | 0-100 |
| **CTA** | Call-to-action clarity, urgency, visibility | 0-100 |
| **Overall Structure** | Ad format best practices, platform optimization | 0-100 |

### Backend Endpoints

```python
# POST /ads-grader/analyze (public, rate-limited, SSE streaming)
# Input: file upload OR ad_library_url
# Output: SSE stream of analysis chunks
# After stream complete: saves MarketingLead with results

# POST /ads-grader/unlock (public)
# Input: { audit_id, email, phone?, marketing_consent }
# Output: { success, message }
# Side effect: sends confirmation email

# POST /ads-grader/confirm (public)
# Input: { token }
# Output: Full results JSON

# GET /ads-grader/report/{audit_id} (public)
# Output: Full results if unlocked, partial otherwise
```

### SSE Streaming Implementation

```python
# FastAPI SSE endpoint
@router.post("/analyze")
async def analyze_ad(file: UploadFile | None, ad_library_url: str | None, ...):
    return StreamingResponse(
        analysis_generator(file_or_url),
        media_type="text/event-stream"
    )

async def analysis_generator(input_data):
    # Step 1: Emit "processing" event
    yield f"data: {json.dumps({'type': 'status', 'message': 'Analyzing...'})}\n\n"

    # Step 2: Call multimodal LLM with streaming
    async for chunk in llm_client.stream(prompt, image=image_data):
        yield f"data: {json.dumps({'type': 'chunk', 'content': chunk})}\n\n"

    # Step 3: Emit final structured result
    yield f"data: {json.dumps({'type': 'result', 'data': structured_result})}\n\n"
```

### LLM Choice: OpenAI GPT-4o (multimodal)
- Native image understanding via Vision API
- Structured JSON output via `response_format` or function calling
- Streaming support via OpenAI API (`stream=True`)
- Already used in disign project (familiar patterns)
- Protocol-based adapter so we can swap to Claude later if needed

### Facebook Ad Library Link Handling
- Parse URL to extract ad ID (format: `facebook.com/ads/library/?id=XXXXX`)
- Use Facebook Ad Library API (public, no auth needed) to get creative media URL
- Download the image, then analyze with GPT-4o
- Fallback: use httpx + BeautifulSoup to extract image from the page, or Playwright screenshot

### File Upload Handling (Images only for MVP)
- Accept: JPEG, PNG, WebP (images only)
- Max size: 10MB
- Storage: local filesystem for MVP behind a Protocol interface (easy S3 swap later)
- Content hash (SHA256) for deduplication/caching

### Database Schema (Ads Grader)

Reuses `MarketingLead` from disign:
```python
class MarketingLead(Base):
    uuid: Mapped[str]           # Primary key
    source: Mapped[str]         # "ads_grader"
    url: Mapped[str | None]     # Ad Library URL if provided
    content_hash: Mapped[str]   # SHA256 of uploaded file
    result_json: Mapped[dict]   # Full analysis results
    email: Mapped[str | None]
    phone: Mapped[str | None]
    marketing_consent: Mapped[bool]
    email_token: Mapped[str | None]
    email_confirmed: Mapped[bool]
    created_at: Mapped[datetime]
```

---

## Product 2: Analytics App (Phase 2)

### Features
1. **Meta Account Connection** — OAuth flow, read-only permissions
2. **Creative Analytics Dashboard** — Motion-style UI with charts + table
3. **AI Chat** — Talk to your ad data with streaming responses

### Meta OAuth Flow (ported from somate → FastAPI/httpx)
```
1. Frontend redirects to Facebook OAuth dialog
   - Permissions: ads_read, read_insights, business_management
   - (Read-only only! No ads_management)
2. Facebook redirects back with authorization code
3. Backend exchanges code → short-lived token → long-lived token
4. Backend fetches available ad accounts
5. User selects which accounts to connect
6. Backend stores encrypted access token + starts data sync
```

### Creative Analytics Dashboard (Motion-style)

Reuses Recharts + table patterns from somate:
- **Bar chart** with ad creative thumbnails on X-axis, metrics on Y-axis
- **Data table** with thumbnail, ad name, and metric columns
- **Metric selector** (Spend, ROAS, CTR, CPC, CPM, Impressions, Thumbstop)
- **Date range filter** (last 7/14/30/90 days, custom)
- **Group by** filter (ad name, campaign, ad set)

### AI Chat (Streaming)

```python
# POST /chat/message (auth required, SSE)
@router.post("/message")
async def chat_message(body: ChatRequest, user: CurrentUserDep, db: AsyncSessionDep):
    return StreamingResponse(
        agent_stream(body.message, user, db),
        media_type="text/event-stream"
    )
```

Agent approach: **LangGraph ReAct agent** with tools:
- `get_account_metrics(date_range)` — fetch account-level KPIs
- `get_campaign_performance(campaign_id?, date_range)` — campaign metrics
- `get_creative_performance(date_range, sort_by)` — creative-level data
- `compare_creatives(creative_ids)` — head-to-head comparison
- `get_recommendations()` — AI-powered optimization suggestions

Why LangGraph over MCP: The user doesn't want to expose MCP servers. LangGraph gives us the agent loop with tools internally, streaming to the frontend via SSE. It's the same ReAct pattern somate already uses.

### Database Schema (Analytics App additions)

```python
class MetaAdAccount(Base):
    id: Mapped[str]               # act_XXXXXX
    user_id: Mapped[str]          # FK to User
    name: Mapped[str]
    access_token: Mapped[str]     # Encrypted long-lived token
    currency: Mapped[str]
    timezone: Mapped[str]
    connected: Mapped[bool]
    last_synced_at: Mapped[datetime | None]

class MetaAdCreative(Base):
    id: Mapped[str]               # Creative ID from Meta
    account_id: Mapped[str]       # FK to MetaAdAccount
    name: Mapped[str]
    thumbnail_url: Mapped[str | None]
    media_type: Mapped[str]       # image | video
    permalink: Mapped[str | None]
    insights: Mapped[dict]        # JSON: spend, reach, impressions, etc.
    updated_at: Mapped[datetime]

class ChatSession(Base):
    id: Mapped[str]
    user_id: Mapped[str]          # FK to User
    messages: Mapped[list[dict]]  # JSON array of messages
    created_at: Mapped[datetime]
    updated_at: Mapped[datetime]
```

---

## Implementation Phases

### Phase 1: Project Setup (scaffold)
1. Copy fastsaas-v7 as base
2. Strip payments, subscriptions, multi-tenancy, items
3. Keep auth, DB, email, UI components, Docker
4. Add MarketingLead model from disign
5. Set up rate limiting from disign
6. Verify everything builds and runs

### Phase 2: Ads Grader Backend
1. Create `app/api/ads_grader/` module
2. Implement file upload endpoint (image/video)
3. Implement LLM adapter (Protocol-based, Claude/OpenAI)
4. Build analysis prompt for ad creative grading
5. Implement SSE streaming endpoint
6. Implement email unlock flow (from disign pattern)
7. Add Ad Library URL parsing (basic - extract media from URL)

### Phase 3: Ads Grader Frontend
1. Create `features/ads-grader/` with upload form
2. Build SSE consumer for streaming analysis
3. Build score display (overall + categories)
4. Build lead capture form (email gate)
5. Style with admate.pl branding
6. Add reCAPTCHA

### Phase 4: Analytics - Meta Integration
1. Port Meta OAuth from somate to FastAPI/httpx
2. Build account connection UI
3. Implement data fetching from Meta Graph API
4. Store creative data with insights

### Phase 5: Analytics - Dashboard
1. Port creative chart component from somate (Recharts)
2. Build data table with thumbnails and metrics
3. Add filters (date range, grouping, metrics)

### Phase 6: Analytics - AI Chat
1. Set up LangGraph agent with Meta data tools
2. Build SSE streaming chat endpoint
3. Build chat UI with streaming message display

---

## Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Monorepo vs separate | Monorepo | Shared DB, models, auth, components |
| Base boilerplate | fastsaas-v7 | Production-grade auth, async, Docker |
| LLM for grading | OpenAI GPT-4o | Multimodal, streaming, structured output, already used in disign |
| Streaming | FastAPI StreamingResponse + SSE | Native, no extra deps, works with EventSource |
| Chat agent | LangGraph ReAct | Internal tool calling, no exposed MCP, streaming |
| Meta OAuth | httpx (ported from somate) | Same flow, async, no Django dependency |
| Charts | Recharts | Already proven in somate, lightweight |
| Data table | Tanstack Table (or ag-grid) | Flexible, good with React, free tier |
| File storage | Local (Protocol for S3 later) | MVP simplicity, easy to swap |
| UI language | Polish | Target market is Polish e-commerce owners |

---

## Deployment Strategy

- **Domains**:
  - `api.admate.pl` → FastAPI backend (single API serving both products)
  - `grader.admate.pl` → Grader React app (static build, Nginx/Caddy)
  - `app.admate.pl` → Dashboard React app (static build, Nginx/Caddy)
- **Infrastructure**: Docker Compose on a VPS (or Railway/Render)
- **Services**: PostgreSQL, Redis (rate limiting), Backend (FastAPI), 2x Frontend (Nginx)
- **SSL**: Caddy reverse proxy with automatic Let's Encrypt
- **CORS**: Backend allows origins: `grader.admate.pl`, `app.admate.pl`

---

## Verification Plan

1. **Ads Grader**: Upload a test image → see streaming analysis → verify scores render → test email unlock flow end-to-end
2. **Analytics**: Connect test Meta ad account → verify data sync → check chart/table render → test chat with streaming
3. **Auth**: Register → login → verify JWT flow → test Google OAuth
4. **Rate limiting**: Hit analyze endpoint >20 times/min → verify 429 response
5. **Run tests**: `uv run pytest` for backend, `npm run build` for frontend type-checking

---

## Critical Source Files to Reuse

| Source | File | What to Reuse |
|--------|------|---------------|
| disign | `app/api/ditor/router.py` | Complete freebie flow: analyze → locked results → email unlock → confirm |
| disign | `app/models/marketing_lead.py` | Unified MarketingLead model (source, content_hash, result_json, email, token) |
| disign | `app/utils/rate_limit.py` | SlowAPI rate limiting setup |
| disign | `app/utils/recaptcha.py` | reCAPTCHA verification |
| fastsaas | `app/db.py` | Async SQLAlchemy session with asyncpg |
| fastsaas | `app/api/auth/` | Full auth system (email/password, Google OAuth, JWT) |
| fastsaas | `app/adapters/email/` | Protocol-based email service (Resend + Fake) |
| fastsaas | `app/utils/auth.py` | JWT creation, password hashing, cookie management |
| fastsaas | `frontend/src/shared/services/apiService.ts` | HTTP client with auto token refresh |
| fastsaas | `frontend/src/components/ui/` | Radix + Tailwind UI components |
| fastsaas | `docker-compose.yml`, `Dockerfile`, `Makefile` | Infrastructure setup |
| somate | `backend/app/meta_ads/business_logic/providers.py` | Meta OAuth flow (code → short → long-lived token) |
| somate | `backend/app/meta_ads/models.py` | MetaAdAccount, MetaAdCreative schemas |
| somate | `frontend/.../AdCreatives/components/Chart/` | Recharts bar chart with ad thumbnails |
| somate | `frontend/.../AdCreatives/components/Table/` | AG Grid data table with thumbnails + metrics |
| somate | `backend/app/ai_mate_chat/mateAgent/agent.py` | LangGraph ReAct agent pattern |

---

## What We Build First

**Phase 1 scope (Ads Grader MVP)**: scaffold from fastsaas-v7 → strip unnecessary modules → add ads_grader API with GPT-4o analysis → add grader frontend → deploy to grader.admate.pl. This is a standalone deliverable before touching auth, Meta integration, or the dashboard.
