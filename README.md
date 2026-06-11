# Spandan Kapadia Portfolio

Production-ready React/Vite portfolio styled with a British Racing Green visual identity.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Vercel

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The production output is generated in `dist`.

## Deployment On Vercel

### 1. Push To GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your GitHub account and repository name.

### 2. Connect Repository To Vercel

1. Go to https://vercel.com.
2. Sign in with GitHub.
3. Select `Add New...` then `Project`.
4. Import the GitHub repository.
5. Confirm the framework preset is `Vite`.
6. Use these settings:

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### 3. Deploy The Site

1. Click `Deploy`.
2. Wait for the production build to finish.
3. Open the generated Vercel URL to verify the live portfolio.

### 4. Configure A Custom Domain Later

1. Open the project in Vercel.
2. Go to `Settings` then `Domains`.
3. Add your domain, for example `spandankapadia.com`.
4. Follow Vercel's DNS instructions.
5. If your domain is managed elsewhere, add the DNS records Vercel provides.
6. Wait for DNS verification and SSL provisioning to complete.

## Verification Checklist

Before deployment, verify:

- Dark mode toggle works.
- Contact dropdown opens and includes email, phone, and response time.
- Email link opens `mailto:spandan.kapadia@gmail.com`.
- Phone link opens `tel:+15674696307`.
- GitHub link opens `https://github.com/spandankapadia`.
- LeetCode link opens `https://leetcode.com/u/spandan_kapadia/`.
- Transcript link opens/downloads the University of Toledo transcript.
- Resume button downloads `public/assets/Spandan_Kapadia_Resume_v6_TranscriptLinked.pdf`.

## Notes

- The resume is stored as a relative project asset at `public/assets/Spandan_Kapadia_Resume_v6_TranscriptLinked.pdf`.
- Vercel deploys every push to the `main` branch automatically after the project is connected.
