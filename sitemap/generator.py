import math
import os
from datetime import date
from urllib.parse import quote
from xml.sax.saxutils import escape

BASE_URL = "https://kwiktionary.vercel.app"
ENTRY_URL_PREFIX = f"{BASE_URL}/en/"
OUTPUT_DIR = "../public/sitemaps"
ENTRIES_PER_SITEMAP = 45000  # 50,000 is the max limit for a single sitemap file
CHANGE_FREQ = "monthly"
ENTRY_PRIORITY = "0.5"
STATIC_PAGES = {
    "/": {"priority": "1.0", "changefreq": "monthly"},
}

print("Loading entries...")
with open("terms.txt", "r", encoding="utf-8") as f:
    entries = [line.strip() for line in f if line.strip()]
print(f"Loaded {len(entries)} entries.")


def generate_sitemaps(entries):
    """Generates individual sitemaps and a sitemap index."""
    print(f"Output directory: {OUTPUT_DIR}")
    try:
        os.makedirs(OUTPUT_DIR, exist_ok=True)
    except PermissionError:
        print(f"ERROR: No permission to create directory {OUTPUT_DIR}")
        return
    except Exception as e:
        print(f"ERROR: Failed to create directory: {e}")
        return

    sitemap_files = []
    today_date = date.today().isoformat()

    # 1. Generate Static Sitemap
    if STATIC_PAGES:
        static_sitemap_filename = "sitemap-static.xml"
        static_sitemap_path = os.path.join(OUTPUT_DIR, static_sitemap_filename)
        print(f"Generating {static_sitemap_path}...")
        with open(static_sitemap_path, "w", encoding="utf-8") as f:
            f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
            f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
            for path, meta in STATIC_PAGES.items():
                f.write("  <url>\n")
                f.write(f"    <loc>{escape(BASE_URL + path)}</loc>\n")
                f.write(f"    <lastmod>{today_date}</lastmod>\n")
                f.write(
                    f'    <changefreq>{meta.get("changefreq", "monthly")}</changefreq>\n'
                )
                f.write(f'    <priority>{meta.get("priority", "0.8")}</priority>\n')
                f.write("  </url>\n")
            f.write("</urlset>\n")
        sitemap_files.append(static_sitemap_filename)
        print(f"Finished {static_sitemap_filename}")

    # 2. Generate Sitemaps for Entries (Chunking)
    num_entry_sitemaps = math.ceil(len(entries) / ENTRIES_PER_SITEMAP)
    print(f"Need to generate {num_entry_sitemaps} sitemap files for entries...")

    for i in range(num_entry_sitemaps):
        start_index = i * ENTRIES_PER_SITEMAP
        end_index = start_index + ENTRIES_PER_SITEMAP
        chunk = entries[start_index:end_index]

        sitemap_filename = f"sitemap-entries-{i+1}.xml"
        sitemap_path = os.path.join(OUTPUT_DIR, sitemap_filename)
        print(f"Generating {sitemap_path} ({len(chunk)} entries)...")

        with open(sitemap_path, "w", encoding="utf-8") as f:
            f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
            f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')

            for entry_slug in chunk:
                if entry_slug.startswith('"') and entry_slug.endswith('"'):
                    entry_slug = entry_slug[1:-1]
                entry_url = escape(ENTRY_URL_PREFIX + quote(entry_slug))

                f.write("  <url>\n")
                f.write(f"    <loc>{entry_url}</loc>\n")
                # f.write(f"    <lastmod>{today_date}</lastmod>\n")
                f.write(f"    <changefreq>{CHANGE_FREQ}</changefreq>\n")
                f.write(f"    <priority>{ENTRY_PRIORITY}</priority>\n")
                f.write("  </url>\n")

            f.write("</urlset>\n")

        sitemap_files.append(sitemap_filename)
        print(f"Finished {sitemap_filename}")

    # 3. Generate Sitemap Index File
    index_filename = "sitemap.xml"
    index_path = os.path.join("../app/", index_filename)
    print(f"Generating sitemap index file: {index_path}...")

    with open(index_path, "w", encoding="utf-8") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')

        for sitemap_file in sitemap_files:
            sitemap_url = f"{BASE_URL}/sitemaps/{sitemap_file}"

            f.write("  <sitemap>\n")
            f.write(f"    <loc>{escape(sitemap_url)}</loc>\n")
            f.write(
                f"    <lastmod>{today_date}</lastmod>\n"
            )  # Sitemap file's lastmod is today
            f.write("  </sitemap>\n")

        f.write("</sitemapindex>\n")
    print(f"Finished {index_filename}")
    print("\nSitemap generation complete!")
    print(
        f"Upload the contents of the '{OUTPUT_DIR}' directory to your web server's root."
    )
    print(f"Make sure your robots.txt points to: {BASE_URL}/{index_filename}")


if __name__ == "__main__":
    generate_sitemaps(entries)
