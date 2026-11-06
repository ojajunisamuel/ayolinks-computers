import { ServiceItem, ProductItem, GalleryPhoto } from '../types';

export const BUSINESS_INFO = {
  name: 'AYOLINKS COMPUTER',
  tagline: 'Your Trusted Technology Partner in The Gambia',
  location: 'Opposite Qcell Building, Kairaba Avenue, The Gambia',
  shortAddress: 'Kairaba Avenue, The Gambia',
  phone1: '+220 777 6040',
  phone2: '+220 377 6040',
  phone1Raw: '2207776040',
  phone2Raw: '2203776040',
  whatsappUrl: 'https://wa.me/2207776040?text=Hello%20AYOLINKS%20COMPUTER%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20products.',
  email: 'info@ayolinkscomputer.gm',
  hours: 'Monday – Saturday: 9:00 AM – 8:00 PM (Emergency Support on Call)',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.927163351233!2d-16.685419!3d13.447815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29c0a6b720ab3%3A0x6b825cfeb05e806c!2sKairaba%20Ave%2C%20Serekunda%2C%20The%20Gambia!5e0!3m2!1sen!2sgm!4v1700000000000!5m2!1sen!2sgm',
  mapDirectionsUrl: 'https://maps.google.com/?q=Kairaba+Avenue+Opposite+Qcell+Building+The+Gambia'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'computer-sales',
    title: 'Computer Sales',
    category: 'Hardware Sales',
    shortDesc: 'Desktop computers, brand new and certified refurbished laptops, all-in-one PCs, and computing devices tailored for work, school, and gaming.',
    detailedDesc: 'We supply high-performance laptops and desktops from world-leading brands including HP, Dell, Lenovo, Apple MacBook, and Asus. Every machine is rigorously inspected, pre-configured with licensed software, and backed by a comprehensive warranty.',
    features: [
      'Top brands: HP, Dell, Lenovo, Apple, Acer & ASUS',
      'Both Brand New and Certified Clean Refurbished units',
      'Full hardware testing, battery cycle check & warranty',
      'Pre-installed with essential software and OS activation',
      'Flexible business bulk orders & corporate discounts'
    ],
    turnaroundTime: 'Available In-Store for Immediate Pickup',
    estimatedPrice: 'From D12,500 GMD',
    iconName: 'Laptop',
    badge: 'Popular'
  },
  {
    id: 'computer-repairs',
    title: 'Computer Repairs',
    category: 'Technical Support',
    shortDesc: 'Professional troubleshooting, chip-level motherboard repair, liquid spill recovery, screen replacements, and thermal maintenance.',
    detailedDesc: 'Our certified technicians diagnose and resolve complex hardware and software faults. From unresponsive motherboards and burnt power rails to blue screen errors and overheating, we restore your machine using precision equipment.',
    features: [
      'Chip-level motherboard micro-soldering & diagnostics',
      'Original screen & keyboard replacement on all models',
      'Liquid damage inspection & ultrasonic cleaning',
      'Overheating fix, fan replacement & premium thermal repasting',
      'Operating system re-installation & virus removal'
    ],
    turnaroundTime: 'Same Day to 24 Hours',
    estimatedPrice: 'Diagnostics D500 · Repairs from D1,200 GMD',
    iconName: 'Wrench',
    badge: 'Certified'
  },
  {
    id: 'computer-upgrading',
    title: 'Computer Upgrading',
    category: 'Performance',
    shortDesc: 'RAM expansions, ultra-fast NVMe/SATA SSD upgrades, processor tuning, and graphics enhancements to make your computer 10x faster.',
    detailedDesc: 'Do not throw away your slow laptop or desktop. An upgrade to a high-speed Solid State Drive (SSD) and doubled RAM delivers instant boot times and effortless multitasking at a fraction of the cost of a new computer.',
    features: [
      'High-speed NVMe M.2 & SATA III SSD installations (256GB - 2TB)',
      'DDR3, DDR4, and DDR5 RAM expansions up to 64GB',
      'Seamless data cloning – keep all your files, apps & passwords',
      'Thermal efficiency upgrade with Arctic/Thermal Grizzly paste',
      'Dedicated GPU and power supply unit (PSU) upgrades for PCs'
    ],
    turnaroundTime: 'Express 1 – 3 Hours',
    estimatedPrice: 'From D1,500 GMD (Parts + Labor)',
    iconName: 'Cpu',
    badge: 'Speed Boost'
  },
  {
    id: 'laptop-bios-unlocking',
    title: 'Laptop & MacBook BIOS/Firmware Unlocking',
    category: 'Security & Firmware',
    shortDesc: 'Specialized EFI lock removal, BIOS supervisor password reset, MDM profile bypass, and firmware reprogramming for laptops and MacBooks.',
    detailedDesc: 'Locked out of your BIOS or MacBook EFI? We utilize hardware EEPROM programmers and advanced software tools to safely clear supervisor passwords and restore complete administrative control without damaging your motherboard.',
    features: [
      'MacBook EFI lock & firmware pin clearing (Intel & T2 models)',
      'Dell, HP, Lenovo ThinkPad BIOS supervisor password removal',
      'Corrupted BIOS chip re-flashing & microcode recovery',
      'Safe, non-destructive hardware programming techniques',
      '100% permanent unlock with verified boot testing'
    ],
    turnaroundTime: 'Same Day (2 – 6 Hours)',
    estimatedPrice: 'From D2,500 GMD',
    iconName: 'ShieldAlert',
    badge: 'Specialized'
  },
  {
    id: 'icloud-unlocking',
    title: 'iCloud Unlocking Services',
    category: 'Apple Unlocking',
    shortDesc: 'Legitimate device reactivation and activation lock assistance for iPhones, iPads, and Apple watches for verified owners.',
    detailedDesc: 'Forgot your Apple ID credentials after a reset? We provide professional activation lock assistance and hardware checkups for supported iOS devices, helping customers regain access to their personal devices safely and legally.',
    features: [
      'Clean IMEI verification and status check',
      'Fast turnaround for eligible iOS and iPadOS devices',
      'Permanent iCloud activation lock solutions',
      'Network carrier compatibility verification',
      'Expert guidance and confidential handling'
    ],
    turnaroundTime: '1 – 3 Business Days',
    estimatedPrice: 'Quote on Device IMEI Check',
    iconName: 'LockOpen',
    badge: 'Expert'
  },
  {
    id: 'phone-sales-unlocking',
    title: 'Phone Sales & Unlocking Services',
    category: 'Mobile Devices',
    shortDesc: 'Factory network unlocks for all global carriers (AT&T, T-Mobile, Vodafone, etc.) plus sales of certified smartphones.',
    detailedDesc: 'Use your overseas smartphone on any local network in The Gambia (Qcell, Africell, Gamcel, Comium). We unlock Samsung, iPhone, Google Pixel, and other Android devices permanently, plus retail premium smartphones.',
    features: [
      'Network SIM unlocks for phones brought from USA, Europe & UK',
      'Samsung regional lock, FRP lock, and pattern unlock',
      'Certified pre-owned iPhones and Samsung Galaxy phones for sale',
      'Screen replacements, charging port fixes & battery swaps',
      'Data transfer and backup between Android and iOS'
    ],
    turnaroundTime: 'Instant to 24 Hours',
    estimatedPrice: 'From D1,000 GMD',
    iconName: 'Smartphone',
    badge: 'Global Unlocks'
  },
  {
    id: 'laptop-accessories',
    title: 'Laptop Accessories & Parts',
    category: 'Spare Parts',
    shortDesc: 'High-grade replacement laptop screens (IPS/FHD), keyboards, original chargers, long-lasting batteries, and protective gear.',
    detailedDesc: 'We stock a comprehensive inventory of genuine replacement parts for all laptop brands. Avoid counterfeit chargers and poor-quality screens that risk damaging your hardware. We test and fit all parts in-store.',
    features: [
      'Original OEM laptop chargers (HP Blue Pin, Dell Round/Oval, Type-C 65W/100W)',
      '11.6" to 17.3" LED/IPS replacement screens in stock',
      'Original internal and external replacement keyboards',
      'High-capacity replacement batteries with 6+ month warranty',
      'Cooling pads, protective sleeves, and ergonomic laptop stands'
    ],
    turnaroundTime: 'Instant Fitting in 15 Minutes',
    estimatedPrice: 'From D800 GMD',
    iconName: 'HardDrive',
    badge: 'In Stock'
  },
  {
    id: 'router-sales',
    title: 'Router Sales & Networking',
    category: 'Internet Solutions',
    shortDesc: 'High-speed 4G/5G LTE CPE broadband desktop routers, portable pocket Wi-Fi MiFi devices, switches, and high-gain antennas.',
    detailedDesc: 'Experience uninterrupted internet at home or in your business. We provide unlocked high-gain 4G/5G CPE routers that work with all Gambian SIM cards (Qcell, Africell, etc.), pocket Wi-Fi hotspots, and business mesh networking gear.',
    features: [
      '4G & 5G LTE CPE Desktop Routers with dual external SMA antennas',
      'Portable Pocket Wi-Fi (MiFi) with long-lasting rechargeable batteries',
      'Universal SIM unlocked – plug & play with Qcell, Africell & Gamcel',
      'High-speed Gigabit Ethernet cables, switches & Wi-Fi extenders',
      'Home and small-office Wi-Fi configuration and setup support'
    ],
    turnaroundTime: 'Ready In-Store / Configured Free',
    estimatedPrice: 'From D2,200 GMD',
    iconName: 'Wifi',
    badge: 'High Speed'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Dell Latitude 7420 Ultrabook',
    category: 'laptops',
    categoryLabel: 'Business Laptops',
    priceGMD: 24500,
    condition: 'Certified Refurbished',
    shortDesc: 'Premium lightweight business laptop with Intel Core i7 11th Gen, thunderbolt 4, and durable carbon fiber chassis.',
    specs: ['Intel Core i7-1185G7', '16GB DDR4 RAM', '512GB NVMe SSD', '14.0" FHD IPS Anti-Glare', 'Backlit Keyboard & Fingerprint'],
    image: '/src/assets/images/computer_products_display_1793985643753.jpg',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-2',
    name: 'HP EliteBook 840 G8',
    category: 'laptops',
    categoryLabel: 'Business Laptops',
    priceGMD: 26000,
    condition: 'Certified Refurbished',
    shortDesc: 'Sleek aluminum executive laptop engineered for demanding office workflows, video conferencing, and portability.',
    specs: ['Intel Core i5-1145G7', '16GB RAM', '256GB / 512GB NVMe SSD', 'Bang & Olufsen Premium Audio', 'Full-Day Battery Life'],
    image: '/src/assets/images/hero_tech_setup_1793985642581.jpg',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-3',
    name: 'Custom Gaming & Creator Desktop Tower',
    category: 'desktops',
    categoryLabel: 'Desktop Computers',
    priceGMD: 48000,
    condition: 'Brand New',
    shortDesc: 'High-performance desktop PC built with tempered glass, liquid cooling, and dedicated GeForce graphics for gaming and 3D rendering.',
    specs: ['Intel Core i7 12th Gen / Ryzen 7', '32GB DDR4 3200MHz', '1TB NVMe Gen4 SSD', 'NVIDIA GeForce RTX 3060 12GB', '750W 80+ Gold PSU'],
    image: '/src/assets/images/computer_products_display_1793985643753.jpg',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-4',
    name: 'Lenovo ThinkCentre M720 Tiny Desktop',
    category: 'desktops',
    categoryLabel: 'Desktop Computers',
    priceGMD: 16500,
    condition: 'Certified Refurbished',
    shortDesc: 'Ultra-compact micro desktop computer ideal for offices, shops, point-of-sale systems, and home desks.',
    specs: ['Intel Core i5 8th/9th Gen', '16GB DDR4 RAM', '256GB NVMe SSD', 'Dual DisplayPort & HDMI', 'Whisper Quiet Operation'],
    image: '/src/assets/images/computer_products_display_1793985643753.jpg',
    inStock: true
  },
  {
    id: 'prod-5',
    name: 'Samsung Odyssey 27" Curved Gaming Monitor',
    category: 'monitors',
    categoryLabel: 'Computer Monitors',
    priceGMD: 18500,
    condition: 'Brand New',
    shortDesc: 'Immersive 1000R curved display with 165Hz refresh rate and 1ms response time for competitive gaming and wide desktop multitasking.',
    specs: ['27-inch WQHD / FHD Curved', '165Hz Refresh Rate & 1ms', 'AMD FreeSync Premium', 'HDMI, DisplayPort, Audio Out', 'Eye Saver Mode'],
    image: '/src/assets/images/hero_tech_setup_1793985642581.jpg',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-6',
    name: 'Dell 24" Ultra-Slim Borderless IPS Monitor',
    category: 'monitors',
    categoryLabel: 'Computer Monitors',
    priceGMD: 9800,
    condition: 'Brand New',
    shortDesc: 'Crystal-clear Full HD monitor with 3-sided micro-edge bezels, vivid color accuracy, and low blue light technology.',
    specs: ['24-inch Full HD 1080p IPS', '75Hz Refresh with ComfortView', 'HDMI & VGA Inputs', 'VESA Mountable', 'Tilt-Adjustable Stand'],
    image: '/src/assets/images/computer_products_display_1793985643753.jpg',
    inStock: true
  },
  {
    id: 'prod-7',
    name: '4G/5G LTE CPE High-Gain Wireless Router',
    category: 'networking',
    categoryLabel: 'Networking Equipment',
    priceGMD: 4500,
    condition: 'Brand New',
    shortDesc: 'Unlocked heavy-duty wireless broadband router with 4 external antennas and gigabit LAN ports for homes and offices in The Gambia.',
    specs: ['Unlocked for Qcell, Africell, Gamcel', '300Mbps Wi-Fi Coverage (up to 32 users)', '4x High-Gain Omni Antennas', '4x Gigabit RJ45 Ethernet Ports', 'Backup Battery Support Option'],
    image: '/src/assets/images/networking_routers_wifi_1793985644720.jpg',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-8',
    name: 'Universal 4G LTE Pocket Wi-Fi MiFi Hotspot',
    category: 'networking',
    categoryLabel: 'Networking Equipment',
    priceGMD: 2400,
    condition: 'Brand New',
    shortDesc: 'Pocket-sized portable Wi-Fi hotspot with intelligent color LCD display and 3000mAh battery providing up to 8 hours of mobile internet.',
    specs: ['Works with all Gambian SIM cards', 'Supports 10 connected devices', '150Mbps Download speed', '3000mAh Rechargeable Battery', 'Type-C Fast Charging'],
    image: '/src/assets/images/networking_routers_wifi_1793985644720.jpg',
    inStock: true
  },
  {
    id: 'prod-9',
    name: 'OEM Replacement Laptop Batteries (HP / Dell / Lenovo / Apple)',
    category: 'accessories',
    categoryLabel: 'Laptop Accessories',
    priceGMD: 2200,
    condition: 'OEM Original',
    shortDesc: 'Grade-A cell replacement batteries for all major laptop series. Guaranteed capacity and built-in surge protection.',
    specs: ['Available for 100+ laptop models', 'Premium Li-ion grade-A cells', 'Overcharge & temperature protection', '6-Month Direct Replacement Warranty', 'Free testing & installation in store'],
    image: '/src/assets/images/laptop_repair_bench_1793985642721.jpg',
    inStock: true
  },
  {
    id: 'prod-10',
    name: 'Original Laptop IPS Replacement Displays (14.0" / 15.6")',
    category: 'accessories',
    categoryLabel: 'Laptop Accessories',
    priceGMD: 4200,
    condition: 'Brand New',
    shortDesc: 'Crisp Full HD replacement screens with standard 30-pin and 40-pin connectors. Clean installation completed in 30 minutes.',
    specs: ['1080p FHD Anti-Glare IPS panel', '30-pin & 40-pin eDP interfaces', 'Zero dead pixels guaranteed', 'Slim borderless fit', 'Complimentary fitting on purchase'],
    image: '/src/assets/images/firmware_unlocking_diagnostics_1793985644600.jpg',
    inStock: true
  },
  {
    id: 'prod-11',
    name: 'Samsung 980 NVMe M.2 1TB Solid State Drive',
    category: 'components',
    categoryLabel: 'Computer Components',
    priceGMD: 5500,
    condition: 'Brand New',
    shortDesc: 'Supercharge your laptop or desktop speed with read speeds up to 3,500 MB/s. Boot Windows in under 7 seconds.',
    specs: ['PCIe 3.0 x4 NVMe 1.4', 'Up to 3,500 MB/s read, 3,000 MB/s write', 'Dynamic Thermal Guard cooling', '5-Year Manufacturer Warranty', 'Free Windows data cloning included'],
    image: '/src/assets/images/computer_products_display_1793985643753.jpg',
    inStock: true
  },
  {
    id: 'prod-12',
    name: 'RGB Mechanical Gaming Keyboard & Precision Mouse Combo',
    category: 'accessories',
    categoryLabel: 'Computer Accessories',
    priceGMD: 2800,
    condition: 'Brand New',
    shortDesc: 'Tactile mechanical switches with customizable RGB lighting and 6400 DPI optical ergonomic gaming mouse.',
    specs: ['Blue/Red mechanical key switches', 'Full anti-ghosting 104 keys', '6-level DPI on-the-fly switch', 'Braided tangle-free USB cable', 'Metal reinforced top plate'],
    image: '/src/assets/images/hero_tech_setup_1793985642581.jpg',
    inStock: true
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'High-Performance Dual-Monitor Creative Workstation',
    category: 'setups',
    categoryLabel: 'Computer Setups',
    description: 'Custom client setup configured with dual borderless displays, mechanical keyboard, and gaming rig.',
    image: '/src/assets/images/hero_tech_setup_1793985642581.jpg'
  },
  {
    id: 'gal-2',
    title: 'Precision Motherboard Micro-Soldering & Diagnostics',
    category: 'repairs',
    categoryLabel: 'Laptop Repairs',
    description: 'Chip-level motherboard repair on laptop power circuitry using anti-static precision tools.',
    image: '/src/assets/images/laptop_repair_bench_1793985642721.jpg'
  },
  {
    id: 'gal-3',
    title: 'AYOLINKS Showroom – Laptops, Desktops & Displays',
    category: 'desktops',
    categoryLabel: 'Desktop Computers',
    description: 'Showroom display showcasing gaming towers, business ultrabooks, and high-refresh monitors.',
    image: '/src/assets/images/computer_products_display_1793985643753.jpg'
  },
  {
    id: 'gal-4',
    title: '4G & 5G High-Gain Broadband Routers & MiFi Units',
    category: 'networking',
    categoryLabel: 'Networking Equipment',
    description: 'Testing and configuring unlocked 4G/5G CPE routers and portable pocket Wi-Fi devices.',
    image: '/src/assets/images/networking_routers_wifi_1793985644720.jpg'
  },
  {
    id: 'gal-5',
    title: 'BIOS Firmware Programming & System Diagnostics Lab',
    category: 'activities',
    categoryLabel: 'Technical Repair Activities',
    description: 'Diagnostic workstation performing deep system diagnostics, firmware reset, and testing.',
    image: '/src/assets/images/firmware_unlocking_diagnostics_1793985644600.jpg'
  },
  {
    id: 'gal-6',
    title: 'Genuine Laptop Parts, Keyboards & High-Grade Batteries',
    category: 'accessories',
    categoryLabel: 'Computer Accessories',
    description: 'Stock of original replacement screens, keyboards, and internal components ready for installation.',
    image: '/src/assets/images/computer_products_display_1793985643753.jpg'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Professional Technical Expertise',
    desc: 'Our certified hardware engineers possess years of hands-on experience in chip-level diagnostics, micro-soldering, and complex firmware unlocking.',
    icon: 'Award'
  },
  {
    title: 'Affordable & Transparent Prices',
    desc: 'Fair, upfront pricing with no hidden surprises. Free initial diagnostic assessment and genuine parts backed by warranty.',
    icon: 'DollarSign'
  },
  {
    title: 'Quality Products Guaranteed',
    desc: 'Every desktop, laptop, charger, and accessory is thoroughly stress-tested before handover. We source strictly from trusted manufacturers.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Reliable Customer Support',
    desc: 'Friendly after-sales support via phone, WhatsApp, and in-person at our Kairaba Avenue service centre. We stand firmly behind every repair.',
    icon: 'Headphones'
  },
  {
    title: 'Fast & Efficient Repairs',
    desc: 'We understand you cannot afford downtime. Most upgrades, screen changes, and standard repairs are completed within 1 to 24 hours.',
    icon: 'Zap'
  },
  {
    title: 'Convenient Pickup & Delivery',
    desc: 'Busy schedule? We offer safe, reliable pickup and return delivery for computers and hardware across the Greater Banjul and Kairaba area.',
    icon: 'Truck'
  }
];
