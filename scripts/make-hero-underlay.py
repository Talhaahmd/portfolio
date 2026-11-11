"""Builds the hidden 'augmented' layer for the home hero from the existing portrait.
Run: python3 scripts/make-hero-underlay.py  (needs Pillow). Output: public/assets/imgs/pages/webp-images/hero-underlay.webp"""
import random, math
from PIL import Image, ImageDraw, ImageFilter, ImageChops, ImageOps

SRC = "public/assets/imgs/pages/webp-images/Hero image.webp"
OUT = "public/assets/imgs/pages/webp-images/hero-underlay.webp"
K = 2  # supersample
random.seed(11)

base = Image.open(SRC).convert("RGBA")
W, H = base.size
big = base.resize((W * K, H * K), Image.LANCZOS)
alpha = big.getchannel("A")
lum = ImageOps.autocontrast(big.convert("L"), cutoff=1)

# 1) dark, cool, high-contrast version of the photo
shadow = lum.point(lambda v: int(14 + (v / 255) ** 0.9 * 175))
dark = Image.merge("RGB", (shadow.point(lambda v: int(v * 0.92)), shadow.point(lambda v: int(v * 0.9)), shadow.point(lambda v: int(v * 0.96))))

# 2) carbon-fibre weave texture, mostly on the jacket
weave = Image.new("L", big.size, 0)
wd = ImageDraw.Draw(weave)
step = 6 * K
for y in range(0, big.height, step):
    for x in range(0, big.width, step):
        if ((x // step) + (y // step)) % 2 == 0:
            wd.rectangle((x, y, x + step - 2, y + step // 2), fill=70)
        else:
            wd.rectangle((x, y, x + step // 2, y + step - 2), fill=70)
weave = weave.filter(ImageFilter.GaussianBlur(0.6))
jacket = Image.new("L", big.size, 0)
ImageDraw.Draw(jacket).polygon([(0, 440 * K), (big.width, 400 * K), (big.width, big.height), (0, big.height)], fill=255)
weave = ImageChops.multiply(weave, jacket)
dark = ImageChops.add(dark, Image.merge("RGB", (weave.point(lambda v: v // 3),) * 3))

# 3) glowing edges of the figure (contour + inner detail)
edges = lum.filter(ImageFilter.GaussianBlur(1.2)).filter(ImageFilter.FIND_EDGES)
edges = ImageOps.autocontrast(edges, cutoff=2).point(lambda v: 255 if v > 70 else int(v * 1.2))
edge_glow = edges.filter(ImageFilter.GaussianBlur(2 * K))
orange = (255, 112, 30)

lines = Image.new("L", big.size, 0)
ld = ImageDraw.Draw(lines)

def seam(x, y, n, dx, dy, w=3):
    """a circuit-like trace: axis-aligned and 45-degree segments"""
    pts = [(x, y)]
    for _ in range(n):
        seg = random.randint(14, 46) * K
        mode = random.choice(["h", "v", "d1", "d2"])
        if mode == "h": x += seg * dx
        elif mode == "v": y += seg * dy
        elif mode == "d1": x += seg * dx * 0.7; y += seg * dy * 0.7
        else: x += seg * dx * 0.7; y -= seg * dy * 0.7
        pts.append((x, y))
    ld.line(pts, fill=255, width=w * K, joint="curve")
    for p in pts[1::2]:
        r = 2.2 * K
        ld.ellipse((p[0] - r, p[1] - r, p[0] + r, p[1] + r), fill=255)

# face / neck / shoulders anchor zones (image is 550x850)
zones = [
    ((150, 200, 290, 360), 3),   # face
    ((185, 380, 330, 470), 5),   # neck and throat
    ((90, 470, 450, 760), 12),   # jacket
]
for (x0, y0, x1, y1), count in zones:
    for _ in range(count):
        x = random.randint(x0, x1) * K; y = random.randint(y0, y1) * K
        seam(x, y, random.randint(3, 7), random.choice([-1, 1]), random.choice([-1, 1]))

# a few panel outlines on the neck and collar
for pts in [
    [(190, 372), (236, 352), (300, 362), (326, 420), (300, 462), (232, 470), (196, 430)],
    [(300, 400), (372, 410), (420, 470), (452, 560)],
    [(210, 470), (150, 540), (118, 640)],
    [(205, 236), (250, 224), (286, 262), (276, 318), (236, 336), (206, 300), (205, 236)],
    [(300, 400), (320, 470), (380, 520), (452, 560)],
    [(120, 690), (200, 640), (280, 660), (360, 620)],
]:
    ld.line([(a * K, b * K) for a, b in pts], fill=255, width=2 * K, joint="curve")

# metallic plates on neck, cheek and shoulder
plates = Image.new("L", big.size, 0)
pd = ImageDraw.Draw(plates)
for pts in [
    [(190, 372), (236, 352), (300, 362), (326, 420), (300, 462), (232, 470), (196, 430)],
    [(205, 236), (250, 224), (286, 262), (276, 318), (236, 336), (206, 300)],
    [(300, 400), (372, 410), (420, 470), (452, 560), (380, 520), (320, 470)],
]:
    pd.polygon([(a * K, b * K) for a, b in pts], fill=255)
plates = ImageChops.multiply(plates, alpha)
grad = Image.linear_gradient("L").resize(big.size)
metal = ImageChops.multiply(plates.point(lambda v: v), grad.point(lambda v: 60 + v // 3))
metal_rgb = Image.merge("RGB", (metal.point(lambda v: int(v * 0.78)), metal.point(lambda v: int(v * 0.8)), metal.point(lambda v: int(v * 0.9))))
dark = ImageChops.screen(dark, metal_rgb)

# horizontal scan lines across the whole figure (subtle)
scan = Image.new("L", big.size, 0)
sd = ImageDraw.Draw(scan)
for y in range(0, big.height, 9 * K):
    sd.line((0, y, big.width, y), fill=26, width=1)

glow = ImageChops.add(lines.filter(ImageFilter.GaussianBlur(4 * K)), lines.filter(ImageFilter.GaussianBlur(1.2 * K)))
glow = ImageChops.add(glow, edge_glow.point(lambda v: int(v * 0.18)))
glow = glow.point(lambda v: min(255, int(v * 1.4)))
core = ImageChops.add(lines, edges.point(lambda v: int(v * 0.10)))

def tint(mask, color):
    return Image.merge("RGB", tuple(mask.point(lambda v, c=c: int(v * c / 255)) for c in color))

out = ImageChops.add(dark, tint(glow, orange))
out = ImageChops.add(out, tint(core, (255, 196, 120)))
out = ImageChops.add(out, Image.merge("RGB", (scan,) * 3))
result = out.convert("RGBA")
result.putalpha(alpha)
result = result.resize((W, H), Image.LANCZOS)
result.save(OUT, quality=88, method=6)
print("saved", OUT, result.size)
