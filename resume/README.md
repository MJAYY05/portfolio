# Thanakorn Resume

Files:

- `thanakorn-resume.html` — English version. Single-column layout with grey section bars (based on `newexam.png`). Includes CompTIA Security+ (Oct 2026) and the updated Umbra XDR bullets.
- `thanakorn-resume-th.html` — Thai version with the same layout and content as the English version (uses the Sarabun font from Google Fonts, falls back to Leelawadee UI / Tahoma offline).
- `newexam.png` — layout reference
- `thanakorn-profile-new.jpg` — current shared profile photo
- `thanakorn-profile.jpg` — previous photo, kept for reference

Open either HTML file in Chrome or Edge. Use **Print → Save as PDF** with:

- Paper size: A4
- Margins: None
- Scale: 100%
- Background graphics: On
- Headers and footers: Off

Before sending the resume:

1. Confirm the official English degree name with Bangkok University (currently "Bachelor of Science in Computer Science").
2. Add an expected graduation date if known.
3. If applying for penetration testing, change the role and final summary phrase to `Penetration Testing / Offensive Security` and move the CRTA/CTF evidence higher.
4. If asked for references separately (some applications request them), keep contact details for an advisor or supervisor ready to send — get their permission first.

The page fits exactly one A4 sheet.

## Changing the photo

Place the replacement photo in this folder, then change the `src` in both HTML files:

```html
<img src="your-photo.jpg" alt="Thanakorn Jamnongprakhon" />
```

The layout is designed as a single A4 page. Avoid adding long paragraphs; replace existing bullets if more content is needed.
