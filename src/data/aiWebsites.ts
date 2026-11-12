// Free (public) prompt previews listed on https://motionsites.ai — captured 12 Nov 2026.
// Only prompts MotionSites offers for free are included. Media is hotlinked from MotionSites; prompt text is NOT copied.
// Credit: https://motionsites.ai

const CF = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/";
const CF2 = "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/";
const R2 = "https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/";
const MS = "https://motionsites.ai";
const MUX = "https://image.mux.com/";

function expand(s: string | null): string | null {
    if (!s) return null;
    if (s.startsWith("c|")) return CF + s.slice(2);
    if (s.startsWith("d|")) return CF2 + s.slice(2);
    if (s.startsWith("r|")) return R2 + s.slice(2);
    if (s.startsWith("m|")) return MS + s.slice(2);
    if (s.startsWith("x|")) return MUX + s.slice(2);
    return s;
}

type Raw = [title: string, category: string, image: string | null, video: string | null];

const RAW: Raw[] = [
    ["Laptop Portfolio", "Portfolio", "c|hf_20261111_030305_aa366bc0-85e3-4f61-82c1-cbf8ae8217a3.png", "r|aaaf/laptop-portfolio.mp4"],
    ["Flower Valley", "3D", "c|hf_20261103_061637_11907771-15ce-494b-81a4-9051861d6ce5.png", "r|aaaf/fernhollow.mp4"],
    ["VHS Archive", "Portfolio", "c|hf_20261105_045553_51e4ba42-a8a4-4702-ad5f-18c0e2a5ba85.png", null],
    ["Video Studio", "Agency", "c|hf_20261110_232427_5e9a291a-5c3e-4f0e-9506-06fedc0020f4.png", "r|aaaf/kolibrie-landing.mp4"],
    ["Solar Fog", "Interactive", "c|hf_20261102_041507_8e9c2d22-8be2-4652-8bbe-1f4556ea463a.png", "r|aaaf/lumen-roof-hero.mp4"],
    ["Clothing Rail", "Ecommerce", "c|hf_20261108_064619_5aab2bf3-3e14-41b3-9421-250f3c9eac47.png", "r|aaaf/clothing-rail-hero.mp4"],
    ["Sphere Gallery", "Portfolio", "c|hf_20261111_011719_6594eb98-1eff-4903-9888-f4617764070d.png", null],
    ["3D Character Studio", "3D", "d|44eba8ce-fc5f-4fb4-bc19-de013c1d7404.png", "r|a/3dcha.mp4"],
    ["Pink Rider", "Portfolio", "c|hf_20261103_172406_33664ba7-35c2-4d19-a351-750a66db968d.png", "r|designs/pink-rider-portfolio.mp4"],
    ["Robot Jellyfish", "3D", "c|hf_20261101_051431_a713620a-5735-45aa-8f81-ae8c9912656f.png", "r|aaaf/medusa-jellyfish-hero.mp4"],
    ["Bookshop", "Portfolio", "c|hf_20261030_004358_8ba84f4d-10fa-48f5-9ef1-306e689e4734.png", null],
    ["Spin Product", "Fashion", "c|hf_20261107_113531_66f5b631-47f4-45da-8094-29dc04544d61.png", "r|aaaf/spin-product-hero.mp4"],
    ["Nature Portfolio", "Photography", "c|hf_20260923_083259_8dc6261a-61b2-473e-b6f8-73171340c69e.png", "r|designs/ethan-vale-portfolio.mp4"],
    ["Agent Hero", "AI", "c|hf_20261027_120903_bcfa3b2a-6dd9-4467-b4eb-26bf46abd0ab.png", "r|aaaf/nova-agent-hero.mp4"],
    ["Meadowbell", "Kids Show", "c|hf_20261020_084719_bdc7ea79-85d0-4149-8c11-7ecfec991eba.png", null],
    ["Mars Trips", "Travel", "c|hf_20261031_031758_5b29151a-a673-47c5-984b-041e73aa2360.png", "r|aaaf/redline-mars-hero.mp4"],
    ["Balloon Drop", "Ecommerce", "c|hf_20261109_030427_0961b20a-ba6b-4094-8ea2-de5916dfa0b3.png", "r|aaaf/balloon-drop-hero-edge.mp4"],
    ["Atrium MTL", "Art", "c|hf_20261005_202716_f5fea476-12eb-4483-ac10-2f631c09bb09.png", "r|designs/Atrium-MTL-Photography-Exhibit.mp4"],
    ["Sakura QR", "3D", "c|hf_20261018_201744_dae60899-742c-4fbf-9ade-a2817fd1a421.png", null],
    ["Veyra Electric", "Automative", "c|hf_20260912_221847_45bc580c-aeb2-40f8-a5ca-bc977261fa53.png", "r|designs/veyra-electric.mp4"],
    ["3D Collectible Hero", "3D Website", "r|hero%20sections/animated%20(24).webp", null],
    ["Intelligence Layer", "Technology", "c|hf_20260811_042402_7cde3e27-e8c9-46aa-b2e6-c93ef1bebe70.png", "r|a/intelligencelayer.mp4"],
    ["Vela Terms Hero", "Crypto", "c|hf_20261025_024602_de413fbc-89a6-48dd-b4c3-b27025b25519.png", null],
    ["Space planet", "3D", "c|hf_20260827_214822_d89eea51-6973-4221-bfdb-85e06b20c25e.png", "r|designs/space_planet_technology.mp4"],
    ["Intelligent Operations", "Agency", "c|hf_20260730_075859_52d1611f-168a-44ed-8222-ba56da2755fa.png", "r|a/preview.mp4"],
    ["Design World", "3D", "c|hf_20260930_010011_68268ffc-ca74-4686-97ce-3f8ddfb1215d.png", "r|designs/design-world-cuboid.mp4"],
    ["LTX Video", "Ecommerce", "c|hf_20260908_190526_3a4e59ec-09ba-4bf3-a488-b0ed2eff2bde.png", null],
    ["Neural Pathway", "Agency", "c|hf_20260912_140639_4f1072b9-57a1-42bf-84bd-17869f8a569a.png", "r|designs/neural-pathway-vidoe.mp4"],
    ["Shipcraft Footer", "Footer", "c|hf_20261023_011245_760ac484-9c7c-483e-b7ca-08029df51803.png", "r|aaaf/shipcraft-footer.mp4"],
    ["Interactive Discovery", "Hero", "r|hero%20sections/animated%20(7).webp", null],
    ["Sun Timeline", "3D", "c|hf_20261031_034355_d64ceda5-bfd7-40d9-a968-ca4eb125e1ad.png", null],
    ["Logistics Freight", "Supply", "c|hf_20261005_202900_192cf690-8e63-436e-b0d0-c0a5789106e1.png", "r|designs/Logistics-Freight.mp4"],
    ["Prosthetics Hero", "Hero", "r|hero%20sections/animated%20(49).webp", null],
    ["Vaultra Hero", "Crypto Hero", "c|hf_20261023_010309_06963eab-9fc1-4dc3-9177-ef8bb13b73f1.png", "r|aaaf/vaultra-hero.mp4"],
    ["Mostar Guide", "Travel", "c|hf_20260730_235046_ab8d2f0d-42b9-4091-8371-cdefe46e898f.png", null],
    ["Gold Standard", "Portfolio", "c|hf_20260930_003115_caff7b78-3b7a-40a7-9fbf-8f0c47af8ce1.png", "r|aaaf/soscale-recording.mp4"],
    ["Nebula Hero", "Space", "c|hf_20260926_223609_320bb8d4-ec13-45df-842a-dce90f2b6293.png", "r|aaaf/orbit-recording.mp4"],
    ["KAIRN", "Ski Gear", "c|hf_20261021_014946_d3c77a92-fd20-4fbd-aeb9-063b4da8009c.png", "r|aaaf/kairn-hero.mp4"],
    ["Intelligent Performance", "SaaS", "c|hf_20260826_215053_565b6d2c-0edd-4629-8a0a-a5303c37e9a3.png", null],
    ["TrustFlow", "Finance", "c|hf_20260728_010206_b46e783a-6863-45fd-a368-cfe279be6998.png", "r|a/trustflowginArea.mp4"],
    ["ADHD Planner", "App", "c|hf_20260715_015343_03370d9a-1518-49af-94a7-19897462cb64.png", "r|a/the%20frisArea.mp4"],
    ["VEX Ventures", "Hero Section", "m|/assets/hero-vex-ventures-preview-BczMFIiw.gif", null],
    ["USD Halo", "Landing Page", "m|/assets/halo-usd-hero-CtMXOklk.gif", null],
    ["DesignPro Academy", "Hero Section", "m|/assets/hero-designpro-preview-D8c5_een.gif", null],
    ["Nival Cyberspace", "Personal", "c|hf_20260914_123926_0b39c6be-4379-40e0-97be-800fc57c3bf6.png", "r|designs/nival-cyberspace-hero.mp4"],
    ["Verra Events Hero", "Community", "c|hf_20261025_014231_5396db47-91ee-4da6-ab2e-e0d8b3705cb6.png", "r|aaaf/verra-events-hero.mp4"],
    ["ConSentinel", "Motion", "c|hf_20260912_140732_18caf45b-d703-4d5d-8f52-c4631c9d3e4f.png", "r|designs/consentinel-hero-section.mp4"],
    ["Asme", "Hero Section", "m|/assets/hero-asme-preview-B_nGDnTP.gif", null],
    ["Keylight", "Authentication", "c|hf_20261020_060411_d45ca6a3-f601-486c-9f38-76c758d007e7.png", "r|aaaf/keylight-signin.mp4"],
    ["Nexora Automation", "SaaS", "m|/assets/hero-nexora-preview-cx5HmUgo.gif", null],
    ["Agent Grove", "SaaS", "c|hf_20260804_141106_c8be3cad-a733-4e6f-825e-c8aba058f74e.png", null],
    ["Datacore Booking", "SaaS", "m|/assets/hero-datacore-booking-preview-B3t9SRK6.gif", null],
    ["Taskly", "Hero Section", "m|/assets/hero-taskly-preview-Dq2MKaI0.gif", null],
    ["Scaling Platform", "SaaS", "c|hf_20260823_072718_54380a25-d4e6-4eec-bc9d-198a0159595d.png", "r|animdevArea.mp4"],
    ["Growth Decisions", "SaaS", "c|hf_20260816_024306_e944b7e6-5f27-4960-8e7c-be1edf8ee0db.png", null],
    ["Anveril", "SaaS", "c|hf_20261005_202402_dcbce315-15da-45e3-9303-d3a409aa34a2.png", "r|designs/Anveril-Future-Computing.mp4"],
    ["Cutora", "Login Page", "c|hf_20261022_044522_4ca45621-6f7f-4cfa-9c26-906c924c59a2.png", "r|aaaf/cutora-hero.mp4"],
    ["Fun 404 Page", "Education Website", "c|hf_20260714_014547_d5d9edba-1894-4305-a283-4835ab060947.png", "c|hf_20260714_015111_b6301eeb-0a2c-4b2d-b9d2-238eaa3c099e.mp4"],
    ["Cyber Layer", "Cybersecurity", "c|hf_20260811_024436_66cd1670-e0cc-42ae-968a-cb451c01ff8c.png", null],
    ["Aurex Finance", "Fintech", "c|hf_20260815_192259_f95cf2db-af6f-4b84-a678-20b074e50872.png", "r|designs/AurexFinance_Financial_Technology.mp4"],
    ["Portal", "Hero Section", "m|/assets/hero-portal-preview-DEscBr2T.gif", null],
    ["Lauberhorn Ridge", "Hiking App", "c|hf_20261022_024937_c6a10e09-7694-4173-8c3c-e162f43f7531.png", "r|aaaf/lauberhorn-hero.mp4"],
    ["Celestial Renewal", "Wellness", "c|hf_20260715_015443_a695a5b2-dfbf-461e-acc6-a3f5e5d87e86.png", null],
    ["Network Hero", "Hero", "r|hero%20sections/animated%20(19).webp", null],
    ["JungleMind", "SaaS", "c|hf_20260901_011928_0d3bbce7-acfd-42b7-a0af-1340eb5113e7.png", "r|designs/jungle-mind-ai-saas.mp4"],
    ["Gridwork Co", "Onboarding", "c|hf_20261022_031347_02fd2acb-77a4-48a5-bf23-0d6180345a29.png", "r|aaaf/gridwork-hero.mp4"],
    ["Sparkform", "Creative", "c|hf_20260807_010505_d6d4aff0-9f6c-46ca-a1c7-c487a0d4e86f.png", null],
    ["Cordex", "Manufacturing", "c|hf_20260909_105028_66cf7ffa-6285-4710-bae5-9302342bf925.png", "r|designs/cordex-cabel.mp4"],
    ["RIVR", "Hero Section", "m|/assets/hero-rivr-preview-DcS3pjx4.gif", null],
    ["Quantum Lucid", "SaaS", "c|hf_20260826_212818_9608c37c-b0d5-4693-85e0-988ec5249c33.png", "r|designs/quantum_lucid_ai_saas.mp4"],
    ["Vision Reveal", "Hero", null, null],
    ["CozyPaws", "Hero", null, "r|prompts%20(i've%20added%20them%20to%20the%20motionsites)/petsArea.mp4"],
    ["Mind-Body Healing", "Medicine", "c|hf_20260716_103110_f5ec790a-0696-4637-a556-a0f3917d92f6.png", "r|a/brainhealthArea.mp4"],
    ["Corvana AI", "Healthcare AI", "c|hf_20261020_091540_0d792fb0-8866-4360-8ea2-56c394a6357a.png", "r|aaaf/corvana-hero.mp4"],
    ["AI Workflow Agents", "SaaS", "c|hf_20260715_014544_2e2e15ee-0037-456c-b0d1-1c174ef0bc27.png", null],
    ["Audio Showcase", "Hero", "r|hero%20sections/animated%20(70).webp", null],
    ["Portal", "Hero", "r|hero%20sections/animated%20(68).webp", null],
    ["IntelligentX", "Hero", "r|hero%20sections/animated%20(61).webp", null],
    ["AI Image Generator UI", "AI", "https://res.cloudinary.com/dsdhxhhqh/image/upload/v1778221760/CleanShot_2026-05-08_at_13.28.55_2x_swwnfd.png", null],
    ["Dot", "Hero Section", "m|/assets/dot-hero-Csf49OgS.gif", null],
    ["Look Circle", "Ecommerce", "c|hf_20261111_034848_928e6733-ce60-48f4-9a65-14dc76a1d74b.png", "r|aaaf/look-circle-hero.mp4"],
    ["Shelf Hero", "Portfolio", "c|hf_20261029_012401_8f947ed0-7b82-47d6-bdcd-b1ce1af0bf5f.png", "r|aaaf/vasari-vhs-hero.mp4"],
    ["Moss Island", "SaaS", "c|hf_20261106_032528_99eb9a00-a553-40b6-8b97-017e918971c6.png", "r|aaaf/mossline-hero.mp4"],
    ["Orvante Agency", "Agency", "c|hf_20261027_053930_87ab1421-7fc4-4597-a7ae-7039d2527f8b.png", "r|aaaf/orvante-agency.mp4"],
    ["Reelmark", "Creator Platform", "c|hf_20261021_033850_f6a98168-2aa6-47b5-8fa8-6d28a9992580.png", "r|aaaf/reelmark-hero-interaction.mp4"],
    ["Facet Glass", "3D", "c|hf_20261026_045953_479b439c-09fa-4701-ba5e-4ff534c67858.png", null],
    ["Fox Couture", "Fashion", "c|hf_20261107_154307_13b28214-7ca8-4b2a-b8aa-a2f84e7cfcec.png", "r|aaaf/fox-couture-hero.mp4"],
    ["Honey Bee", "Creative", "c|hf_20261017_154537_1384fa6d-282d-46e2-8748-a70be1cf681a.png", "r|designs/honey-bee-melli-landing.mp4"],
    ["Freight Scroll Hero", "Logistics", "c|hf_20261023_072356_6829b75c-8dc0-44bf-9593-73f508f599d7.png", "r|aaaf/logistics-freight-hero.mp4"],
    ["Agent Wave", "AI", "c|hf_20260818_075101_ea68beb6-4f5a-4e14-9dd0-6f07c6a8e27c.png", null],
    ["Space Voyage", "Creative", "c|hf_20260914_124045_18663f83-33f3-40f6-821e-40c2a71e41a6.png", "r|designs/space-voyage-video.mp4"],
    ["Halo Prism", "3D", "c|hf_20261102_063750_6a278f8f-7adf-4481-98ab-6bff69c0a02d.png", "r|aaaf/sweifsArea.mp4"],
    ["Beauty Studio", "SaaS", "c|hf_20261111_224816_d82548b4-193a-45aa-ac04-4cfc624b8cc8.png", "r|aaaf/reshoot-landing.mp4"],
    ["Vertex", "Ecommerce", "c|hf_20260912_163540_9f0f8a66-ec5f-46f7-adf8-e094a211d489.png", null],
    ["Norva Staffing Hero", "Staffing", "c|hf_20261024_070342_43f8a181-5900-4333-b96e-d93669f9bd1d.png", "r|aaaf/norva-staffing-hero.mp4"],
    ["Jellyfish Scroll", "Interactive", "c|hf_20261102_053925_7184163c-7d4f-4bc9-94ef-a11bfadb6a35.png", "r|aaaf/driftlab-hero.mp4"],
    ["Zapline", "Trading App", "c|hf_20261023_011714_ad12dc1b-9915-4211-a39f-b4a74977164d.png", "r|aaaf/zapline-cta.mp4"],
    ["Cast and Render", "3D", "c|hf_20260909_105002_99bf0e71-87c0-4103-98d1-c66eac285854.png", null],
    ["Sellix", "Fintech", "c|hf_20260912_140710_1ff16c87-2d44-4a6c-9640-5d22977f61fd.png", "r|designs/sellix-hero-video.mp4"],
    ["Pirate Ship", "Travel", "c|hf_20261031_025631_512127f3-785b-408c-8e69-94cd623aaf0a.png", "r|aaaf/saltwake-pirate-hero.mp4"],
    ["Velorah", "Agency", "m|/assets/hero-velorah-preview-CJNTtbpd.gif", null],
    ["SkyElite Private Jets", "Landing Page", "m|/assets/hero-skyelite-preview-DHaZIgUv.gif", null],
    ["Future Fashion", "Fashion", "c|hf_20261106_084953_1d74b316-6fa3-4558-a532-462e7ae8d559.png", "r|aaaf/orbe-future-mode.mp4"],
    ["Strata AI", "AI Data", "c|hf_20261020_063925_e6d9d4c2-fed4-4e61-9610-78bddd782c4a.png", "r|aaaf/strata-hero.mp4"],
    ["Playful Idea", "Creative Agency", "c|hf_20260908_075426_d8a1ca55-df38-472c-925d-36a9ba5d6226.png", "r|aaaf/stopfollowupArea.mp4"],
    ["Parallex", "Portfolio", "c|hf_20261005_202031_def25644-d566-4ad9-a791-709d8c83911a.png", null],
    ["macOS widget", "SaaS", "d|d4bb17cb-bcf0-490b-8554-17dd50a38de7.png", "r|aaaf/driftbar-footer.mp4"],
    ["Prisma Creative Studio", "Landing Page", "m|/assets/hero-prisma-preview-D4QeI0Bn.gif", null],
    ["Personal Showcase", "Portfolio", "c|hf_20260729_022115_7591fd95-f2b6-495b-bb8c-0491fd4be21b.png", "r|a/showcaseareaArea.mp4"],
    ["Portfolio Cosmic", "Portfolio", "m|/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif", null],
    ["Maya Lind Profile", "Portfolio", "c|hf_20261025_021325_bf31bdd2-0211-41ab-87b0-7072ed918e3b.png", "r|aaaf/maya-lind-profile.mp4"],
    ["Digital Director", "Portfolio", "c|hf_20260727_081359_47fef343-aa4e-43bd-8943-842eb80ef92b.png", "r|a/digitaldirector.mp4"],
    ["No-Code Waitlist", "Waitlist", "x|iY611PYuZ02AKpIzYB4Q1BMpl7W2O3UwqjQm9p01xlmVg/animated.webp?width=640&fps=15", null],
    ["Autumn Fox", "3D", "c|hf_20261017_154322_dd0d6988-9e7e-447d-ba9a-70a76848143d.png", null],
    ["Halftone FAQ", "SaaS", "c|hf_20261103_075712_12a2721b-8989-4660-9a34-bf0707db7779.png", "r|aaaf/solace-faq.mp4"],
    ["Health Portal", "Landing Page", "r|hero%20sections/animated%20(12).webp", null],
    ["Equilibrium", "Hero", "r|hero%20sections/animated%20(93).webp", null],
    ["Rare Gallery", "Curated", "c|hf_20260820_090556_3e2783f6-b579-4d92-9a0d-eb720a6f90b9.png", null],
    ["Cyberpunk Reveal", "Hero", "r|hero%20sections/animated%20(31).webp", null],
    ["Mindora Hero", "Mental Health", "c|hf_20261023_011345_6884a778-4758-4c1e-b8f3-65284e735a53.png", "r|aaaf/mindora-hero.mp4"],
    ["Digital Experiences", "Landing Page", "r|hero%20sections/animated%20(40).webp", null],
    ["Synthora Hero", "AI SaaS", "c|hf_20261023_011054_3f67c6dd-62d6-40ea-91a2-716fd2df639a.png", "r|aaaf/synthora-hero.mp4"],
    ["Cyber Ronin", "Technology", "c|hf_20260831_164359_9fbb6c14-a484-4e0d-9303-986b8965628c.png", "r|designs/cyber_ronin_ai_robotics.mp4"],
    ["Bloom AI", "Hero Section", "m|/assets/hero-bloom-ai-preview-g6RcYLTl.gif", null],
    ["Luminex", "Hero Section", "m|/assets/hero-luminex-preview-CxOP7ce6.gif", null],
    ["Eclipsio", "Portfolio Builder", "c|hf_20261021_010256_549be36d-1885-4456-9188-164c8e15dda3.png", "r|aaaf/eclipsio-hero.mp4"],
    ["Northstar", "Agency", "c|hf_20260826_181950_e071b218-88a0-41e7-91bf-24735ff520a7.png", null],
    ["Vexor CTA", "Fintech", "c|hf_20261023_011732_fbbfada9-145f-4967-be9a-3481e9ef0413.png", "r|aaaf/vexor-cta.mp4"],
    ["Convix Software", "SaaS", "m|/assets/convix-software-hero-B6-tdnN6.gif", null],
    ["Vectrus Energy", "Editorial", "c|hf_20260823_184819_56e1b3c6-fb91-426e-a22f-ba9375448e1f.png", null],
    ["Quantum Core", "Data Intelligence", "c|hf_20260815_191439_307f1c76-0696-4003-9186-fdd50bb30540.png", "r|designs/QuantumCore_Data_Intelligence.mp4"],
    ["Mindloop Landing", "Landing Page", "m|/assets/hero-mindloop-landing-preview-Bqnstohr.gif", null],
    ["DeepThink", "AI Assistant", "c|hf_20260812_064245_32c4f7ee-fcde-4c4f-93fe-d729a1ba7a84.png", null],
    ["nuvo", "Fintech Landing", "c|hf_20261023_011224_d21084b9-2266-41a5-a8bf-dd92d8c6ec0a.png", null],
    ["Orbis NFT", "Landing Page", "m|/assets/hero-orbis-nft-preview-C3wvh77a.gif", null],
    ["Mind AI", "3D", "c|hf_20260912_185102_c835194f-77ee-4c60-9ad1-850716544d36.png", "r|designs/mind-ai-hero-3d.mp4"],
    ["Orbit Flora", "AI", "c|hf_20260813_012454_d8334c3b-0475-40ff-a5e6-483fe41af52d.png", "r|Orbit%20Flora.mp4"],
    ["Data Signal", "Analytics", "c|hf_20260812_015959_62ae1d8c-21a0-4691-b0ca-9ec991f2fe34.png", null],
    ["Neo Museum", "Website", "r|hero%20sections/animated%20(75).webp", null],
    ["Digitwist AI Builder", "SaaS", "m|/assets/hero-digitwist-preview-s2pJetjQ.gif", null],
    ["Neuralyn", "SaaS", "m|/assets/hero-neuralyn-preview-Br4FRDQA.gif", null],
    ["Wander Far", "Travel", "c|hf_20261021_013531_ea67d18d-2855-4d79-874a-ea2870af6710.png", null],
    ["Talent Collective", "Agency", "c|hf_20260807_033531_2c5d9aeb-d97f-4a16-bef0-2bd850206a50.png", "r|a/teamcollectiveasian.mp4"],
    ["AI Trip Planner", "Travel", "c|hf_20260724_023100_bb1ae266-812b-4801-9b5a-dbdff483018c.png", "r|a/where%20willArea.mp4"],
    ["Digital Epoch", "Hero Section", "m|/assets/hero-digital-epoch-preview-B85ezqXO.gif", null],
    ["Wellness Balance", "Hero", "r|hero%20sections/animated%20(11).webp", null],
    ["Wellbeing OS", "Hero", null, "r|prompts%20(i've%20added%20them%20to%20the%20motionsites)/Wellbeing%20OS.mp4"],
    ["Visual Hero", "Hero", "x|i9kUFJpB6GrWoe2UXRZG4lIP02g00LGulS1GTVrMMwZI00/animated.webp?width=640&fps=15", null],
    ["Stillmind", "Hero", null, "r|prompts%20(i've%20added%20them%20to%20the%20motionsites)/endless.mp4"],
    ["Creative Portfolio", "Hero", "r|hero%20sections/animated%20(89).webp", null],
    ["VaultShield", "Hero", "r|hero%20sections/animated%20(64).webp", null],
    ["Cobalt Hour", "Fintech", "c|hf_20260928_023511_68a0c70e-48d5-4176-94c6-b33a05889a49.png", "r|aaaf/nn8CXvsfBgAi1mLXcLvJ0w.mp4"],
    ["Real-Time Alerts", "Sign in", "d|f97e887b-a455-42d1-950c-98cdd971645e.png", "r|falcinsignin.mp4"],
    ["Email Marketing", "Email Marketing", "m|/assets/hero-design-rocket-email-preview-DBed7Yfk.gif", null],
    ["Stellar AI", "Hero Section", "m|/assets/hero-stellar-ai-preview-D3HL6bw1.gif", null],
    ["TrueEarth", "Environmental", "c|hf_20260901_013056_207d5cb7-5135-4cd6-8298-6443ff29a89c.png", "r|designs/ocean-pulse-environment.mp4"],
    ["Nexto 404", "404", "r|hero%20sections/CleanShot_2026-05-15_at_15.46.24_2x_i163nd.png", null],
    ["Duolingo Styleguide", "Hero Section", "m|/assets/hero-duolingo-styleguide-preview-1HTxQ6Tj.gif", null],
    ["Future Machine", "Robotics", "c|hf_20260914_124017_2d2aec28-4462-4cb0-b10b-589223f1c257.png", "r|designs/future-machine-hero.mp4"],
    ["Outfit Carousel", "Ecommerce", "c|hf_20261105_051536_4f458170-47a1-440e-a08c-8ed434394ce8.png", "r|aaaf/try-the-look-hero.mp4"],
    ["Runway Lookbook", "Interactive", "c|hf_20261102_044911_1ad79156-a8dc-475a-8891-8408a9b61320.png", "r|aaaf/vell-lookbook.mp4"],
    ["Virtual Fitting", "Ecommerce", "c|hf_20261105_044353_68703b49-82fd-480a-9809-3a3747e1fe7b.png", "r|aaaf/virtualfit-arc-hero.mp4"],
    ["3D Portfolio", "Portfolio", "c|hf_20260715_020402_14047c8b-e116-4ac5-bc7d-1ab18d18a358.png", "r|uploaded/jackportofplio.mp4"],
    ["Living Portrait", "Portfolio", "c|hf_20261031_044539_b7fde132-8c25-4dda-ab05-4e4be99bf3d3.png", "r|aaaf/living-portrait-hero.mp4"],
    ["Sea Ring", "Portfolio", "c|hf_20261112_000857_2edcf9b8-870d-4405-9189-d25a9304222b.png", "r|aaaf/noa-ellsworth.mp4"],
    ["AXON", "Portfolio", "d|6166d700-54bd-4de5-b095-b4dd3961f891.png", "r|aaaf/axon-hero.mp4"],
    ["Video Ribbon", "Portfolio", "c|hf_20261101_054911_1a9c58cf-98a9-48a6-b438-bd78b9e58839.png", "r|aaaf/vante-ribbon-hero.mp4"],
    ["Paper Craft", "Portfolio", "c|hf_20261112_004640_65f20a09-7005-4ffc-aec1-2c61ca909517.png", "r|aaaf/foldwild-tour-b.mp4"],
    ["Kindred Dot Hands Hero", "Community", "c|hf_20261030_025955_0e0f6319-1754-4921-a2d9-294f12fed9f3.png", "r|aaaf/kindred-dots-hero.mp4"],
    ["Wild Pil", "Travel", "c|hf_20261027_025011_1abf0073-f4d1-4855-ab7b-6bf9838ea04d.png", "r|aaaf/wild-pill-hero.mp4"],
    ["Freight Services Hero", "Logistics", "c|hf_20261023_083805_02383c71-a993-4c36-9e83-d0cf7fe456d1.png", "r|aaaf/freight-services-hero.mp4"],
    ["Crystal Koi", "SaaS", "c|hf_20261105_043938_df38ba60-2853-4e8a-9b50-7ff738498396.png", "r|designs/nectarline-landing.mp4"],
    ["Scanner Comparison", "AI", "c|hf_20261029_020323_253c5d90-03b2-4a21-ac6f-b9816593348d.png", "r|aaaf/distill-comparison.mp4"],
    ["Video Editor", "SaaS", "c|hf_20261110_223913_74dc89fd-5948-4da9-8749-3bcd3f40fd8d.png", "r|aaaf/glaze-motion.mp4"],
    ["AI Runtime", "AI", "c|hf_20260812_054351_d1d948b3-b00a-4bf2-b434-55f373010de8.png", "r|a/circlishdotsArea.mp4"],
    ["Halden AI Teammate Hero", "AI", "c|hf_20261029_074338_31e75bca-e0b2-446e-aeb6-7a14adccf2a3.png", "r|aaaf/halden-port-hero.mp4"],
    ["Petalyx", "Creative", "c|hf_20261022_092440_a7e1d115-27f9-4496-ab60-3033aacc6bba.png", "r|designs/petalyx-nature-landing.mp4"],
    ["Velia", "Editorial", "c|hf_20261022_094633_00b1b3c2-48b3-44f2-a2b0-ac563730c870.png", "r|designs/velia-editorial-landing.mp4"],
    ["Retro-Futurist", "Hero", "r|hero%20sections/animated%20(46).webp", null],
    ["Halora", "Wearables", "c|hf_20261023_010932_c1dd11fb-1d56-4ed1-9691-3773c3e23d70.png", "r|aaaf/halora.mp4"],
    ["Tana Elephant", "Travel", "c|hf_20261026_042055_890e14a7-de0a-4406-a944-30684bcea3f8.png", "r|aaaf/tana-elephant-sections.mp4"],
    ["Lumora Skyranger", "3D Character", "c|hf_20261022_040310_26f386e9-5754-4b1c-ae8e-ba7b7d1b1ad5.png", "r|aaaf/lumora-hero.mp4"],
    ["Oda Hero", "History", "c|hf_20261028_005444_834b0c7d-78d8-4e57-acdd-c1c1d65cd1e0.png", null],
    ["Innovation", "Landing Page", "m|/assets/hero-innovation-preview-BerBJHh1.gif", null],
    ["Phoenix ignis", "3D", "c|hf_20261031_021439_1c85494c-8a6a-4805-b5a3-41a507e92b0e.png", "r|aaaf/dw2kraenArea.mp4"],
    ["Hollowmere Halloween Descent", "Halloween", "c|hf_20261029_031234_14705698-83d5-4b6d-813b-30c17e757537.png", "r|aaaf/hollowmere-halloween.mp4"],
    ["Custom Spaces", "Design", "c|hf_20260727_074308_bfb4e106-62b6-4177-a511-ce8ad80d00d8.png", null],
    ["Peculiar Atelier", "Interactive", "c|hf_20261013_165407_d379fa08-6552-403b-8ef6-31cd2ff093fa.png", "r|designs/peculiar-atelier-hero.mp4"],
    ["Feathers Atlas", "3D", "c|hf_20261004_105730_10a54951-d439-4e1b-9776-2b9e54fdd1b1.png", "r|designs/feathers-atlas-3d.mp4"],
    ["Monolith Hero", "Architecture", "c|hf_20260929_080114_067e2a77-6596-4635-906e-b00a55a20f4a.png", "r|aaaf/ibCJ6vtSfiGj1Pto5Xn3ug.mp4"],
    ["Modern Agency", "Agency", "r|hero%20sections/animated%20(27).webp", null],
    ["PROMPT", "Landing Page", "c|hf_20260715_020312_6a21f245-35e1-47c1-a730-090d3ebd518e.png", "r|fe42Area.mp4"],
    ["Atelier Unit", "Portfolio", "c|hf_20261005_202843_d841a39c-7c83-4860-9e40-429de12212c2.png", "r|designs/Atelier-Unit-Digital-Design.mp4"],
    ["Aethera Studio", "Hero Section", "m|/assets/hero-aethera-preview-DknSlcTa.gif", null],
    ["Contact Cybernetic", "Hero", "r|hero%20sections/animated%20(42).webp", null],
    ["MAREN Hero", "Fashion", "c|hf_20261023_011119_fd02763b-5b3a-4a82-87b2-f69ee200321b.png", "r|aaaf/maren-hero.mp4"],
    ["Email Landing Page", "Landing page", "r|hero%20sections/animated%20(59).webp", null],
    ["Fastshot", "AI", "c|hf_20260826_215009_c2ee8663-5c02-4c13-ad50-e578b76c7fb6.png", "r|designs/fastshot_launchpad_ai_app_buil.mp4"],
    ["Aetheris Voyage", "Hero Section", "m|/assets/hero-aetheris-voyage-preview-BGJn1z4t.gif", null],
    ["Atlas Nav", "Navbar", "c|hf_20260928_184144_d838d2e6-7531-4e1e-8499-7606127942ef.png", "r|designs/atlsa-nav-hero.mp4"],
    ["AI Designer Portfolio", "Landing Page", "m|/assets/hero-vortex-studio-preview-BQyvwopD.gif", null],
    ["MK Consulting", "Legal Studio", "c|hf_20261023_011811_5215ae3e-0cba-491e-bd13-5ee80bc4573b.png", "r|aaaf/mk-consulting-hero.mp4"],
    ["Riverine", "Tech", "c|hf_20261005_201759_8c1d0588-77d9-473f-8e20-5dd58718149a.png", "r|designs/Riverine-Climate-Technology.mp4"],
    ["Bold Studio", "Hero", "r|hero%20sections/animated%20(10).webp", null],
    ["Immersive Ocean", "Hero", "r|hero%20sections/animated%20(14).webp", null],
    ["Neon Logic", "Landing Page", "r|hero%20sections/animated%20(33).webp", null],
    ["Vexel", "SaaS", "c|hf_20261005_202017_dcdfb2ac-a475-4783-ad43-508c7fcd989a.png", "r|designs/Vexel-Conversational-SaaS.mp4"],
    ["Skyprompt", "AI Course", "c|hf_20261020_080536_5b28e2b5-ef9e-464c-9660-bcc910fcbf02.png", "r|aaaf/skyprompt-hero.mp4"],
    ["Heritage Grove", "Footer", "c|hf_20260901_011542_a2260a85-3ed9-4e4a-93d9-8594aaeb8a72.png", "r|designs/heritage-grove-crafts.mp4"],
    ["Subscription Agency", "Hero", null, "r|prompts%20(i've%20added%20them%20to%20the%20motionsites)/agencygradientArea.mp4"],
    ["Halden Stories", "Interactive Map", "c|hf_20261022_231939_9d094dc3-266d-432c-a235-d54e8419769d.png", "r|aaaf/halden-hero.mp4"],
    ["CodeNest Coding Platform", "Landing Page", "m|/assets/hero-codenest-preview-Cgppc2qV.gif", null],
    ["Signal ID", "Technology", "c|hf_20260807_021301_8daf3f52-acef-462d-b14c-0aaca9747f87.png", "r|a/signalIDD.mp4"],
    ["Synth Mode", "Fashion", "d|755a0ca1-974c-431d-a45b-eab83067850d.png", "r|a/synthArea.mp4"],
    ["Creative Studio", "Agency", "r|hero%20sections/animated%20(71).webp", null],
    ["Palomar Labs", "AI", "c|hf_20260820_090400_e50eec87-5836-4826-85bb-ccdf9a7939cd.png", "r|designs/palomar_labs_ai_infrastructure.mp4"],
    ["Securify Data Security", "SaaS", "m|/assets/hero-securify-preview-DQSYrftH.gif", null],
    ["Wayfinder", "Footer", "c|hf_20260928_184118_f9eaacbd-937d-4659-962e-9653b56177cf.png", "r|designs/Wayfinder-hero.mp4"],
    ["Vocari Hero", "AI Hero", "c|hf_20261023_010256_1371acd0-07f2-484d-b2af-6c4930da3fcd.png", "r|aaaf/vocari-hero.mp4"],
    ["Power AI", "Hero Section", "m|/assets/hero-power-ai-preview-BqpSbx41.gif", null],
    ["murmur", "Podcast", "c|hf_20261020_100334_61b3be61-fad0-4f77-b7b7-163dd1255838.png", "r|aaaf/murmur-hero-v2.mp4"],
    ["Vinyl", "Music", "c|hf_20260908_190653_c67f8e91-86d1-44a8-a1e5-4eb0b4a50fc8.png", "r|designs/vinyl-music-record.mp4"],
    ["Wellness Hero", "Hero", "r|hero%20sections/animated%20(32).webp", null],
    ["Planetary Pulse", "Science", "c|hf_20260816_131013_d9bf1472-1ae3-4faf-9da6-f0e1b47c9f07.png", "r|a/liquidbulbwebjl.mp4"],
    ["AI Workflow Hero", "Hero", "r|hero%20sections/animated%20(55).webp", null],
    ["Wanderful Hero", "Travel", "r|hero%20sections/animated%20(78).webp", null],
    ["Tech-Forward", "Hero", null, null],
    ["Transform Data", "Hero Section", "m|/assets/hero-transform-data-preview-Cx5OU29N.gif", null],
    ["Sentinel AI", "Hero Section", "m|/assets/hero-sentinel-ai-preview-BXas7Q1_.gif", null],
    ["RidgeAI", "AI Builder", "c|hf_20261020_071136_c46c126e-fdbb-4a87-b2ec-2e185c8b4542.png", "r|aaaf/ridgeai-hero-v2.mp4"],
    ["Innovation Lab", "Technology", "c|hf_20260718_102913_d13e11c1-91c9-4617-952b-72c446f8838e.png", null],
    ["Build With Us", "Contact us", "r|hero%20sections/animated%20(45).webp", null],
    ["Wellness Devicex", "Health", "c|hf_20260715_015320_22766799-c95d-4a0a-8762-cec99a1a1571.png", "r|a/Wellness%20Device%20.mp4"],
    ["Cybersecurity Hero", "Hero", "r|hero%20sections/animated%20(60).webp", null],
    ["Camper Overnight", "Hero", "c|hf_20261005_202942_c2d2d09d-7c15-4a5b-8d2b-7b1c93cb03f7.png", "r|designs/Camper-Overnight-Camp.mp4"],
    ["Organic Odyssey", "Hero", "r|hero%20sections/animated%20(51).webp", null],
    ["Skybridge 404", "404", "c|hf_20260801_003013_808b8d45-32dd-45db-ac26-4fab86d3a304.png", "r|a/Skybridge%20404Area.mp4"],
    ["Impact Ventures", "Hero", "r|hero%20sections/animated%20(67).webp", null],
    ["SaaS Value", "SaaS", "https://res.cloudinary.com/dsdhxhhqh/image/upload/v1781539562/CleanShot_2026-06-15_at_15.31.34_2x_ckhjmj.png", null],
];

// Order of the "Popular" and "Featured" tabs on motionsites.ai (free prompts only).
const POPULAR: string[] = ["Laptop Portfolio","3D Portfolio","Flower Valley","Virtual Fitting","Orvante Agency","Bookshop","Space Voyage","Living Portrait","Video Ribbon","Freight Services Hero","AXON","Nature Portfolio","Solar Fog","Clothing Rail","Facet Glass","3D Character Studio","Freight Scroll Hero","Scanner Comparison","Wild Pil","Moss Island","Agent Wave","Honey Bee","Meadowbell","Spin Product","Look Circle","Sakura QR","AI Runtime","Pink Rider","Fox Couture","Vertex","Velorah","Kindred Dot Hands Hero","Video Studio","Atrium MTL","3D Collectible Hero","Cast and Render","Innovation","Petalyx","Playful Idea","LTX Video","Agent Hero","Custom Spaces","Space planet","Robot Jellyfish","Retro-Futurist","Mars Trips","Interactive Discovery","Sellix","Halo Prism","Intelligence Layer","Norva Staffing Hero","Peculiar Atelier","PROMPT","Halden AI Teammate Hero","Velia","Balloon Drop","Veyra Electric","Logistics Freight","Oda Hero","Crystal Koi","Immersive Ocean","Jellyfish Scroll","Mostar Guide","Prisma Creative Studio","Pirate Ship","Sphere Gallery","Halora","macOS widget","Video Editor","Vela Terms Hero","Intelligent Operations","Strata AI","Heritage Grove","Asme","Atlas Nav","Aethera Studio","Monolith Hero","Aetheris Voyage","Neural Pathway","Design World","Tana Elephant","Rare Gallery","Lumora Skyranger","Portfolio Cosmic","Parallex","AI Designer Portfolio","Gold Standard","VEX Ventures","No-Code Waitlist","Hollowmere Halloween Descent","Shipcraft Footer","Wayfinder","Digital Experiences","Health Portal","Stillmind","Zapline","Personal Showcase","Feathers Atlas","Vectrus Energy","Fastshot","Contact Cybernetic","Email Landing Page","Agent Grove","Intelligent Performance","Quantum Core","TrustFlow","SkyElite Private Jets","Cyberpunk Reveal","Phoenix ignis","Prosthetics Hero","Nebula Hero","Equilibrium","KAIRN","Maya Lind Profile","Celestial Renewal","Signal ID","Modern Agency","Sun Timeline","Digital Director","Data Signal","ConSentinel","Bloom AI","Securify Data Security","Cyber Ronin","Digital Epoch","Northstar","Orbit Flora","Vexor CTA","murmur","USD Halo","Riverine","Mindora Hero","Bold Studio","Vinyl","Creative Studio","Palomar Labs","CodeNest Coding Platform","nuvo","Vaultra Hero","Neon Logic","DesignPro Academy","Creative Portfolio","Mindloop Landing","ADHD Planner","Autumn Fox","Anveril","Wellbeing OS","Neo Museum","Growth Decisions","Network Hero","Wellness Hero","Halftone FAQ","Atelier Unit","Aurex Finance","MK Consulting","CozyPaws","Synth Mode","Planetary Pulse","Talent Collective","Future Fashion","Digitwist AI Builder","Nival Cyberspace","Halden Stories","Orbis NFT","AI Trip Planner","Shelf Hero","Outfit Carousel","Reelmark","Runway Lookbook","VHS Archive","Neuralyn","Portal"];

const FEATURED: string[] = ["Laptop Portfolio","Look Circle","Virtual Fitting","3D Portfolio","Living Portrait","Sea Ring","AXON","Video Ribbon","Paper Craft","Kindred Dot Hands Hero","Wild Pil","Freight Services Hero","Crystal Koi","Scanner Comparison","Video Editor","AI Runtime","Halden AI Teammate Hero","Petalyx","Velia","Retro-Futurist","Halora","Tana Elephant","Lumora Skyranger","Oda Hero","Innovation","Phoenix ignis","Hollowmere Halloween Descent","Custom Spaces","Peculiar Atelier","Feathers Atlas","Monolith Hero","Modern Agency","PROMPT","Atelier Unit","Aethera Studio","Contact Cybernetic","MAREN Hero","Email Landing Page","Fastshot","Aetheris Voyage","Atlas Nav","AI Designer Portfolio","MK Consulting","Riverine","Bold Studio","Immersive Ocean","Neon Logic","Vexel","Skyprompt","Heritage Grove","Subscription Agency","Halden Stories","CodeNest Coding Platform","Signal ID","Synth Mode","Creative Studio","Palomar Labs","Securify Data Security","Wayfinder","Vocari Hero","Power AI","murmur","Vinyl","Wellness Hero","Planetary Pulse","AI Workflow Hero","Wanderful Hero","Tech-Forward","Transform Data","Sentinel AI","RidgeAI","Innovation Lab","Build With Us","Wellness Devicex","Cybersecurity Hero","Camper Overnight","Organic Odyssey","Skybridge 404","Impact Ventures","SaaS Value","Runway Lookbook","VHS Archive","Video Studio","Solar Fog","Clothing Rail","Sphere Gallery","3D Character Studio","Pink Rider","Robot Jellyfish","Bookshop","Spin Product","Nature Portfolio","Agent Hero","Meadowbell","Mars Trips","Balloon Drop","Atrium MTL","Sakura QR","Veyra Electric","3D Collectible Hero","Intelligence Layer","Vela Terms Hero","Space planet","Intelligent Operations","Design World","LTX Video","Neural Pathway","Shipcraft Footer","Interactive Discovery","Sun Timeline","Logistics Freight","Prosthetics Hero","Vaultra Hero","Mostar Guide","Gold Standard","Nebula Hero","KAIRN","Intelligent Performance","TrustFlow","ADHD Planner","VEX Ventures","USD Halo","DesignPro Academy","Nival Cyberspace","Verra Events Hero","ConSentinel","Asme","Keylight","Nexora Automation","Agent Grove","Datacore Booking","Taskly","Scaling Platform","Growth Decisions","Anveril","Cutora","Fun 404 Page","Cyber Layer","Aurex Finance","Portal","Lauberhorn Ridge","Celestial Renewal","Network Hero","JungleMind","Gridwork Co","Sparkform","Cordex","RIVR","Quantum Lucid","Vision Reveal","CozyPaws","Mind-Body Healing","Corvana AI","AI Workflow Agents","Audio Showcase","Portal","IntelligentX","AI Image Generator UI","Dot","Outfit Carousel","Flower Valley","Shelf Hero","Moss Island","Orvante Agency","Reelmark","Facet Glass","Fox Couture","Honey Bee","Freight Scroll Hero","Agent Wave","Space Voyage","Halo Prism","Beauty Studio","Vertex","Norva Staffing Hero","Jellyfish Scroll","Zapline","Cast and Render","Sellix","Pirate Ship","Velorah","SkyElite Private Jets","Future Fashion","Strata AI","Playful Idea","Parallex","macOS widget","Prisma Creative Studio","Personal Showcase","Portfolio Cosmic","Maya Lind Profile","Digital Director","No-Code Waitlist","Autumn Fox","Halftone FAQ","Health Portal","Equilibrium","Rare Gallery","Cyberpunk Reveal","Mindora Hero","Digital Experiences","Synthora Hero","Cyber Ronin","Bloom AI","Luminex","Eclipsio","Northstar","Vexor CTA","Convix Software","Vectrus Energy","Quantum Core","Mindloop Landing","DeepThink","nuvo","Orbis NFT","Mind AI","Orbit Flora","Data Signal","Neo Museum","Digitwist AI Builder","Neuralyn","Wander Far","Talent Collective","AI Trip Planner","Digital Epoch","Wellness Balance","Wellbeing OS","Visual Hero","Stillmind","Creative Portfolio","VaultShield","Cobalt Hour","Real-Time Alerts","Email Marketing","Stellar AI","TrueEarth","Nexto 404","Duolingo Styleguide","Future Machine"];

export type AiSite = {
    id: string;
    title: string;
    category: string;
    /** Filter chip this card belongs to on the page. */
    tags: string[];
    image: string | null;
    video: string | null;
    /** True when `image` is itself an animation (GIF / animated WebP) */
    animatedImage: boolean;
    url: string;
    recent: number;
    popular: number;
    featured: number;
};

export const SOURCE_URL = "https://motionsites.ai";

export function slugify(t: string) {
    return t
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// motionsites.ai's category chips and the raw category labels that fall under each.
export const FILTERS: { label: string; match: RegExp }[] = [
    { label: "Sections", match: /^(footer|navbar|contact us|onboarding|waitlist|login page|sign in|authentication|faq|404)$/i },
    { label: "Hero", match: /hero/i },
    { label: "Landing Page", match: /landing/i },
    { label: "SaaS", match: /saas/i },
    { label: "3D", match: /^3d/i },
    { label: "Portfolio", match: /portfolio/i },
    { label: "Agency", match: /agency/i },
    { label: "Creative", match: /^creative$/i },
    { label: "AI", match: /^ai\b|healthcare ai|ai /i },
    { label: "Interactive", match: /interactive/i },
    { label: "Travel", match: /travel/i },
    { label: "Dashboard", match: /dashboard|analytics/i },
    { label: "Fashion", match: /fashion/i },
    { label: "Ecommerce", match: /e-?co+mmerce/i },
    { label: "Fintech", match: /fintech|finance|crypto|trading/i },
    { label: "Technology", match: /^tech|technology|cyber|robotics|data intelligence/i },
];

// Rank each title by its n-th occurrence so duplicate titles ("Portal") keep their own position.
function rankMap(order: string[]) {
    const seen: Record<string, number> = {};
    const out = new Map<string, number>();
    order.forEach((t, i) => {
        const n = (seen[t] = (seen[t] ?? 0) + 1);
        out.set(`${t}#${n}`, i);
    });
    return out;
}

const popular = rankMap(POPULAR);
const featured = rankMap(FEATURED);

const seenTitles: Record<string, number> = {};
export const AI_SITES: AiSite[] = RAW.map(([title, category, img, vid], i) => {
    const n = (seenTitles[title] = (seenTitles[title] ?? 0) + 1);
    const image = expand(img);
    const slug = slugify(title) + (n > 1 ? `-${n}` : "");
    return {
        id: slug,
        title,
        category,
        tags: FILTERS.filter((f) => f.match.test(category)).map((f) => f.label),
        image,
        video: expand(vid),
        animatedImage: !!image && /\.(gif|webp)(\?|$)/i.test(image) && !image.includes("images.higgs.ai"),
        url: `${SOURCE_URL}/?prompt=${slug}`,
        recent: i,
        popular: popular.get(`${title}#${n}`) ?? 9999,
        featured: featured.get(`${title}#${n}`) ?? 9999,
    };
});

/** Resized, lightweight thumbnail via MotionSites' own image CDN for static screenshots. */
export function thumb(src: string | null, width = 640): string | null {
    if (!src) return null;
    if (src.includes("cloudfront.net")) return `https://images.higgs.ai/?default=1&output=webp&url=${encodeURIComponent(src)}&w=${width}&q=80`;
    return src;
}
