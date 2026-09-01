#!/usr/bin/env python3
"""Replace lucide-react with local architectural icons."""
from pathlib import Path
import re

ROOT = Path("/home/sascha/dev/site_flatplan")

MAP = {
    "ArrowRight": "IconArrow",
    "Check": "IconCheck",
    "Rotate3d": "IconFacade",
    "Orbit": "IconOrbit",
    "Layers": "IconLayers",
    "SunMedium": "IconSun",
    "Users": "IconLeads",
    "Workflow": "IconCrm",
    "BarChart3": "IconChart",
    "ShieldCheck": "IconShield",
    "FileText": "IconExpose",
    "QrCode": "IconQr",
    "Globe2": "IconGlobe",
    "Languages": "IconGlobe",
    "Bot": "IconBot",
    "Database": "IconDatabase",
    "Award": "IconAward",
    "Star": "IconStar",
    "Mail": "IconMail",
    "MapPin": "IconPin",
    "Phone": "IconPhone",
    "CalendarCheck": "IconCalendar",
    "Clock3": "IconClock",
    "CalendarDays": "IconCalendar",
    "CalendarClock": "IconCalendar",
    "Building2": "IconBuilding",
    "Home": "IconHouse",
    "Briefcase": "IconQuartier",
    "BookOpen": "IconBook",
    "HelpCircle": "IconHelp",
    "Library": "IconBook",
    "Sparkles": "IconSun",
    "Handshake": "IconLeads",
    "KanbanSquare": "IconLayers",
    "BellRing": "IconLeads",
    "ListChecks": "IconCheck",
    "Timer": "IconClock",
    "TimerReset": "IconClock",
    "MailCheck": "IconMail",
    "Filter": "IconPlan",
    "Link2": "IconCrm",
    "Rocket": "IconNorth",
    "Boxes": "IconPlan",
    "SlidersHorizontal": "IconSun",
    "Heart": "IconLeads",
    "Smartphone": "IconPhone",
    "Monitor": "IconGlobe",
    "Compass": "IconNorth",
    "Presentation": "IconExpose",
    "Upload": "IconArrow",
    "MousePointerClick": "IconPlan",
    "Film": "IconOrbit",
    "Landmark": "IconBuilding",
    "HardHat": "IconBuilding",
    "FileSpreadsheet": "IconExpose",
    "FileDown": "IconExpose",
    "CheckCircle2": "IconCheck",
    "Loader2": "IconLoader",
    "Send": "IconSend",
    "Quote": "IconExpose",
    "Code2": "IconCode",
    "Palette": "IconPalette",
    "LayoutGrid": "IconPlan",
    "Menu": "IconMenu",
    "X": "IconClose",
    "ChevronDown": "IconChevron",
}

skip = {
    ROOT / "src/app/page.tsx",
    ROOT / "src/app/features/page.tsx",
    ROOT / "src/app/preise/page.tsx",
    ROOT / "src/app/referenzen/page.tsx",
    ROOT / "src/app/kontakt/page.tsx",
    ROOT / "src/app/blog/page.tsx",
    ROOT / "src/app/faq/page.tsx",
    ROOT / "src/app/ueber-uns/page.tsx",
    ROOT / "src/components/BlogArticle.tsx",
    ROOT / "src/components/LeadForm.tsx",
    ROOT / "src/components/layout/Header.tsx",
    ROOT / "src/components/layout/Footer.tsx",
    ROOT / "src/components/ui/CtaBand.tsx",
}

for path in (ROOT / "src").rglob("*.tsx"):
    text = path.read_text()
    if "lucide-react" not in text:
        continue
    # Collect lucide names
    m = re.search(r'import\s*\{([^}]+)\}\s*from\s*"lucide-react"', text)
    if not m:
        print("NO MATCH", path)
        continue
    names = [n.strip() for n in m.group(1).replace("\n", " ").split(",") if n.strip()]
    mapped = []
    for n in names:
        if n not in MAP:
            print("UNMAPPED", n, "in", path)
            continue
        mapped.append(MAP[n])
    mapped = sorted(set(mapped))
    new_import = "import { " + ", ".join(mapped) + ' } from "@/components/icons";'
    text = text[: m.start()] + new_import + text[m.end() :]
    # Replace usages (longest names first)
    for old in sorted(MAP, key=len, reverse=True):
        text = re.sub(rf"\b{old}\b", MAP[old], text)
    # Don't double-replace IconIcon
    text = text.replace("IconIcon", "Icon")
    path.write_text(text)
    print("updated", path.relative_to(ROOT))
