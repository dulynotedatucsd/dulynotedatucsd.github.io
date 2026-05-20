# Duly Site

Hugo site for Duly Noted at UC San Diego.

The site is built with Hugo and deployed to GitHub Pages by GitHub Actions whenever changes are pushed to `main`.

## Stack

- Hugo `0.161.1` extended
- Dart Sass
- GitHub Actions
- GitHub Pages

The Hugo version should match `.github/workflows/deploy.yml` so local builds match CI.

## Repository Layout

```text
.
├── .github/workflows/deploy.yml      # GitHub Actions deploy workflow
├── archetypes/                       # Default Hugo content templates
├── assets/
│   ├── images/                       # Images processed by Hugo
│   │   ├── group_photos/
│   │   ├── icca/
│   │   ├── icons/
│   │   ├── logos/
│   │   ├── members/
│   │   ├── music/
│   │   └── photoshoot/
│   └── sass/                         # Site styles
├── content/
│   ├── _index.html                   # Homepage content
│   └── about.html                    # About page content
├── data/
│   ├── auditions/                    # Audition steps and FAQ
│   ├── carousels/                    # Carousel data
│   └── members/                      # Current, executive, and alumni data
├── layouts/
│   ├── pages/                        # Base page templates
│   ├── partials/                     # Reusable layout pieces
│   ├── shortcodes/                   # Shortcodes used in content pages
│   └── robots.txt
├── static/                           # Files served as-is
├── hugo.toml                         # Site config and global params
└── README.md
```

## Local Development

Install Hugo extended and Dart Sass, then run:

```bash
hugo server
```

This starts a local preview server with live reload.

To run the same production build command used by GitHub Actions:

```bash
hugo --minify
```

Run this before pushing larger updates, especially changes involving data files, images, layouts, or Sass.

## Deployment

Deployment is automatic:

1. Push changes to `main`.
2. GitHub Actions builds the site with `hugo --minify`.
3. The generated `public/` output is published to GitHub Pages.

There is no manual deploy step.

Do not edit generated output directly. Make changes in the source files on `main`, then push.

## Where Do I Change X?

| Update | File or folder |
| --- | --- |
| Site-wide settings, social links, academic year, copyright year, audition status banner | `hugo.toml` under `[params]` |
| Audition signup link | `hugo.toml` under `[params.auditions]` |
| Current members | `data/members/current.yaml` |
| Executive board | `data/members/executive.yaml` |
| Alumni | `data/members/alumni.yaml` |
| ICCA carousel | `data/carousels/iccas.yaml` and `assets/images/icca/` |
| Music carousel | `data/carousels/music.yaml` and `assets/images/music/` |
| Photoshoot carousel | `data/carousels/photoshoot.yaml` and `assets/images/photoshoot/` |
| Audition steps | `data/auditions/steps.yaml` |
| Audition FAQ | `data/auditions/faq.yaml` |
| Homepage copy | `content/_index.html` |
| About page copy | `content/about.html` |
| Page layout and markup | `layouts/partials/` and `layouts/shortcodes/` |
| Styles | `assets/sass/` |
| Hugo-processed images | `assets/images/` |
| Static files served as-is | `static/` |

## Editing Pages Directly

The main editable pages live in `content/`:

- `content/_index.html` controls the homepage content.
- `content/about.html` controls the about page content.

These files can contain normal HTML plus Hugo shortcodes. Shortcodes look like this:

```go-html-template
{{< members/current >}}
{{< carousels/music >}}
{{< auditions/faq >}}
```

Use `content/` when changing page copy, moving existing sections around, or adding/removing sections that already have shortcodes.

Use `data/` when changing the content inside an existing section, such as members, carousel items, audition steps, or FAQ entries.

Use `layouts/partials/` or `layouts/shortcodes/` when changing how a section is rendered. For example, if the member cards need different markup, edit the member partials instead of duplicating that markup in `content/`.

Use `assets/sass/` when changing visual styles.

## Common Updates

### Update the Audition Banner

Edit `hugo.toml`:

```toml
[params.auditions]
    status = "CLOSED UNTIL FALL 2026"
    calendly_url = "https://calendly.com/dulynotedatucsd/fall25-auditions"
```

If `calendly_url` is set, the word `Calendly` in the audition steps becomes a link. If `calendly_url` is empty or removed, `Calendly` renders as normal text.

### Add a Current Member

Add the image to `assets/images/members/current/`, then add an entry to `data/members/current.yaml`:

```yaml
- name: "Jane Doe"
  voice: "Alto"
  major: "Cognitive Science"
  minor: "Music"
  path: Jane_Doe.png
```

`minor` is optional. If `path` is not included, a placeholder image will be used.

### Add an Executive Board Member

Executive board images use files from `assets/images/members/current/`.

```yaml
- name: Jane Doe
  role: President
  path: Jane_Doe.png
```

If `path` is not included, a placeholder image will be used.

### Add an Alumni

Alumni images use files from `assets/images/members/alumni/[year]/`. Every year,
make sure to create a new directory.

```yaml
- name: "Jane Doe"
  voice: "Alto"
  path: "Jane_Doe.png"
```

### Add a Music Video

Add the thumbnail image to `assets/images/music/`, then add an entry to `data/carousels/music.yaml`:

```yaml
- title: "Spring Concert 2026"
  image: "spring-concert-2026.jpg"
  url: "https://www.youtube.com/watch?v=..."
```

### Add Carousel Photos

Add images to the matching folder in `assets/images/`, then list them in the carousel data file.

Example from `data/carousels/photoshoot.yaml`:

```yaml
photographers: Photographer Name
directory: "photoshoot"
images:
  - path: "sop-1.webp"
  - path: "alto-1.webp"
```

The `directory` value is relative to `assets/images/`.

## Image Conventions

Member and carousel data files reference image filenames directly, so filenames must match exactly.

- Current member photos live in `assets/images/members/current/`.
- Alumni photos live in `assets/images/members/alumni/<year>/`.
- Music thumbnails live in `assets/images/music/`.
- ICCA carousel photos live in `assets/images/icca/`.
- Photoshoot carousel photos live in `assets/images/photoshoot/`.
- A fallback member image exists at `assets/images/members/default.png`.

Use simple filenames with no spaces. Keep capitalization consistent. GitHub Actions runs on Linux, where filenames are case-sensitive.

## YAML Notes

Most site content is stored in YAML files under `data/`.

- Keep indentation consistent.
- Quote values that contain colons, apostrophes, ampersands, or unusual punctuation.
- Use `>` for longer paragraphs.
- If the site fails to build after a content update, check for malformed YAML or a missing image first.

Some YAML content includes Hugo shortcodes, such as:

```yaml
answer: >
  Message us on Instagram {{< socials/instagram >}} or email {{< socials/email >}}.
```

These shortcodes are rendered by the layouts. Do not remove the braces unless you mean to replace the shortcode.

## Yearly Turnover Checklist

At the start of each new school year:

- Update `academic_year` in `hugo.toml`.
- Update `copyright_year` in `hugo.toml`.
- Update `params.auditions.status` in `hugo.toml`.
- Move graduating members from `data/members/current.yaml` into `data/members/alumni.yaml`.
- Move graduating member photos from `assets/images/members/current/` to the matching alumni year folder under `assets/images/members/alumni/`.
- Update `data/members/current.yaml` with the new roster.
- Update `data/members/executive.yaml` with the new board.
- Swap or update group photos and carousel photos as needed.
- Update audition steps, FAQ, and location notes in `data/auditions/`.
- Update the Calendly signup link in `hugo.toml`.
- Run `hugo --minify` before pushing.

## Build Artifacts

These files and folders are generated and should not be hand-edited:

- `public/`
- `resources/_gen/`
- `.hugo_build.lock`
- `hugo_stats.json`

If generated files appear locally, they can usually be ignored. Source changes should happen in `content/`, `data/`, `layouts/`, `assets/`, `static/`, or `hugo.toml`.

## Troubleshooting

### The GitHub Action Failed

Check the action log for the first Hugo error. Common causes:

- Missing image referenced by a YAML file.
- Filename capitalization mismatch.
- Invalid YAML indentation or quoting.
- Local Hugo version does not match CI.
- Hugo extended or Dart Sass is missing locally.

### The Site Looks Different Locally

Make sure you are using Hugo `0.161.1` extended and have Dart Sass installed. Then run:

```bash
hugo --minify
```

### The Live Site Broke

Push a fix to `main`, or revert the commit that introduced the problem. Do not edit the generated deployed output directly.

## Credits

Original site design by Camille Manalo. Development by Cedric-James David, Alexander Kourjanski, and Allison Wang.
