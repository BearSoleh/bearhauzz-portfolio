"""Generate the two-page, text-based resume used by the portfolio.

Run with the bundled Python runtime (reportlab required).
"""

from pathlib import Path
import argparse
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
)

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--output", type=Path, default=ROOT / "output" / "pdf" / "Afiq Haikal - Resume.pdf")
OUTPUT = parser.parse_args().output.resolve()
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

styles = {
    "name": ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=20, leading=24, spaceAfter=4),
    "target": ParagraphStyle("Target", fontName="Helvetica", fontSize=10.8, leading=14, spaceAfter=7),
    "contact": ParagraphStyle("Contact", fontName="Helvetica", fontSize=9.2, leading=12.6, spaceAfter=2),
    "section": ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=11, leading=14, spaceBefore=12, spaceAfter=7),
    "title": ParagraphStyle("Title", fontName="Helvetica-Bold", fontSize=10.5, leading=13.5, spaceBefore=6, spaceAfter=2),
    "meta": ParagraphStyle("Meta", fontName="Helvetica", fontSize=9.6, leading=12.5, spaceAfter=4),
    "body": ParagraphStyle("Body", fontName="Helvetica", fontSize=10.2, leading=13.7, spaceAfter=4),
    "bullet": ParagraphStyle("Bullet", fontName="Helvetica", fontSize=10.2, leading=13.7,
                             leftIndent=10, firstLineIndent=-10, spaceAfter=4),
}
for style in styles.values():
    style.textColor = colors.HexColor("#202020")
    style.alignment = TA_LEFT

story = []


def para(text, style="body"):
    return Paragraph(text, styles[style])


def section(title):
    story.append(para(title, "section"))


def bullets(items):
    return [para("- " + escape(item), "bullet") for item in items]


def role(title, employer, date, location, items):
    story.append(KeepTogether([
        para(escape(title), "title"),
        para(escape(f"{employer} | {date} | {location}"), "meta"),
        *bullets(items),
    ]))


def project(title, stack, items, url=None):
    content = [para(escape(title), "title"), para(escape(stack), "meta"), *bullets(items)]
    if url:
        content.append(para(f'<link href="{escape(url)}" color="#202020">{escape(url)}</link>', "contact"))
    story.append(KeepTogether(content))


story.extend([
    para("AFIQ HAIKAL BIN MOHD ASRI", "name"),
    para("Target role: Web Developer or Junior Software Developer/Engineer", "target"),
    para('Petaling Jaya, Selangor, Malaysia | +60 12-754 3270 | '
         '<link href="mailto:afiqztremo09@gmail.com" color="#202020">afiqztremo09@gmail.com</link>', "contact"),
    para('Portfolio: <link href="https://bearhauzz-portfolio.vercel.app/" color="#202020">bearhauzz-portfolio.vercel.app</link> | '
         'GitHub: <link href="https://github.com/bearsoleh" color="#202020">github.com/bearsoleh</link>', "contact"),
    para('LinkedIn: <link href="https://www.linkedin.com/in/afiq-haikal-43141531b" color="#202020">linkedin.com/in/afiq-haikal-43141531b</link>', "contact"),
])

section("PROFESSIONAL SUMMARY")
story.append(para(
    "Computer Science graduate and web developer with hands-on experience delivering client websites, "
    "Laravel/MySQL content systems, React interfaces and custom Shopify Liquid storefronts. "
    "Completed inherited projects through launch, resolved production issues and supported Flutter application releases. "
    "Seeking a web developer or junior software developer/engineer role to contribute practical development and debugging experience, "
    "deepen backend skills and grow into full-stack development."
))

section("TECHNICAL SKILLS")
for text in [
    "<b>Backend and databases:</b> PHP, Laravel, MySQL, authentication, role-based workflows, content management systems",
    "<b>Frontend:</b> JavaScript, TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS, responsive web design",
    "<b>Platforms and mobile:</b> Shopify Liquid, WordPress (Elementor, Breakdance), Framer, Wix, Flutter",
    "<b>Tools and delivery:</b> GitHub, Docker, OrbStack, SSH, phpMyAdmin, cPanel, Netlify, VS Code",
    "<b>Quality:</b> Debugging, cross-device testing, functional testing, user acceptance testing, staging and deployment",
    "<b>AI-assisted development:</b> Codex and Claude for code editing, debugging and local testing",
]:
    story.append(para(text))

section("PROFESSIONAL EXPERIENCE")
role("Management Trainee - Web Development (Contract)", "GoViral Lab", "June 2026 - Oct 2026", "Petaling Jaya", [
    "Developed and improved seven client and company websites across Laravel, Shopify, Framer, WordPress and custom code; handled client amendments, responsive QA, staging and deployment.",
    "Built a Laravel and MySQL CMS for MyPATH so the team could create, update and manage job listings and candidate testimonials.",
    "Took over Vastiq Solutions and completed its remaining development within one month; launched the site on its own domain through cPanel. Completed and launched Why Travel & Tours on Framer within two months.",
    "Translated a Framer template design into HTML, CSS, JavaScript and React for the company website.",
    "Built every storefront section for Pferd and Janine with custom Shopify Liquid code and configurable theme settings. Integrated Janine form submissions with a Railway-hosted service that sends email notifications.",
    "Recreated Upstairs locally from its database and public_html files using Docker and OrbStack. Used AI to edit and test code, transferred files through SSH and imported the database through phpMyAdmin.",
])
role("Junior Web Developer", "Construction Professionals Malaysia", "Jan 2026 - May 2026", "Sungai Petani", [
    "Developed and maintained responsive WordPress websites with Breakdance, improving pages, UI, SEO fundamentals and performance.",
    "Recovered compromised WordPress installations by removing injected scripts, restoring clean backups and strengthening security after phishing redirects.",
    "Maintained a Flutter application through UI improvements, bug fixes, functional testing and release support for Android and iOS.",
])
story.append(PageBreak())
section("PROFESSIONAL EXPERIENCE (CONTINUED)")
role("Program Executive - Digital Media", "Mega Jati Academy Sdn Bhd", "May 2025 - Jan 2026", "Shah Alam", [
    "Managed Wix website content for training programmes and corporate events; maintained Flutter application content and supported testing and troubleshooting.",
    "Coordinated programme requirements, registration materials and participant communications.",
])
role("Shopify Web Developer Intern", "Homy Villa (Borneo) Sdn Bhd", "Oct 2024 - Jan 2025", "Kuala Lumpur", [
    "Customised Shopify Plus themes with Liquid, HTML, CSS and JavaScript; maintained Shopify and WordPress storefronts and supported cross-device testing.",
    "Supported product updates, Shopify POS, B2B pricing workflows and e-commerce troubleshooting.",
])

section("SELECTED TECHNICAL PROJECTS")
project("BearHauzz - Personal Portfolio", "Personal project | Next.js, React, TypeScript, Tailwind CSS, Git, GitHub", [
    "Built a responsive portfolio with reusable React components and shared project data for consistent project listings and case studies.",
    "Implemented statically generated project pages, page metadata and responsive images in Next.js, plus keyboard-accessible galleries, focus restoration and reduced-motion support.",
    "Maintained source history with Git and verified production builds.",
], "https://bearhauzz-portfolio.vercel.app/")
project("GoViral Lab - Company Website", "Company project | HTML, CSS, JavaScript, React, Netlify", [
    "Translated a Framer template design into HTML, CSS, JavaScript and React for the company website.",
    "Corrected tablet and mobile layouts, improved readability and added a floating WhatsApp button; deployed on Netlify using the company's own domain.",
], "https://govirallab.com/")
project("Vastiq Solutions - Corporate Website", "Client project | HTML, CSS, JavaScript, cPanel", [
    "Completed an inherited corporate website within one month, covering company information, AI solutions, governance, robotics, projects and events.",
    "Resolved navigation, content and responsive issues through client review; deployed through cPanel on the client's own domain with backups and post-launch checks.",
], "https://www.vastiqsolutions.com/")

section("EDUCATION")
story.append(para("Bachelor of Computer Science (Hons.) - Netcentric Computing", "title"))
story.append(para("Universiti Teknologi MARA (UiTM), Arau Campus | Oct 2021 - Apr 2025", "meta"))
story.append(para(
    "<b>Relevant coursework:</b> Web Development, Database Systems, Computer Networks, "
    "Mobile Application Development and UI/UX Implementation"
))

section("ADDITIONAL INFORMATION")
story.append(para("<b>Languages:</b> Malay - Native | English - Professional working proficiency"))
story.append(para(
    "<b>Leadership:</b> Speaker of UiTM Arau Student Parliament, Student Council Secretariat of UiTM Arau, "
    "Head of Multimedia and Technical of UiTM Arau Student Orientation Committee"
))


def footer(canvas, document):
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#555555"))
    canvas.drawRightString(A4[0] - 44, 25, f"{document.page}")


document = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4,
    rightMargin=44, leftMargin=44, topMargin=36, bottomMargin=40,
    title="Afiq Haikal - Resume",
    author="Afiq Haikal Bin Mohd Asri",
    subject="Professional experience, technical projects and education",
)
document.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
