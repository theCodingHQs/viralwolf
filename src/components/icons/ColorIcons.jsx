import React from 'react';

// ---------------------------------------------------------------------------
// COLORFUL VECTOR ICONS (Vibrant, multi-colored, modern vector illustrations)
// ---------------------------------------------------------------------------

// 1. Startup Rocket (Launch-ready, upright symmetrical aerodynamic rocket with vivid fins, glowing porthole, and propulsive exhaust flame)
export function RocketColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Fuselage Ceramic White to Slate */}
        <linearGradient id="upFuselage" x1="20" y1="4" x2="44" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.75" stopColor="#E2E8F0" />
          <stop offset="1" stopColor="#CBD5E1" />
        </linearGradient>

        {/* Nose Cone Crimson */}
        <linearGradient id="upNose" x1="24" y1="4" x2="40" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF334B" />
          <stop offset="1" stopColor="#E11D48" />
        </linearGradient>

        {/* Left Wing Gradient */}
        <linearGradient id="upFinL" x1="10" y1="30" x2="22" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF334B" />
          <stop offset="1" stopColor="#BE123C" />
        </linearGradient>

        {/* Right Wing Gradient */}
        <linearGradient id="upFinR" x1="42" y1="30" x2="54" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF334B" />
          <stop offset="1" stopColor="#BE123C" />
        </linearGradient>

        {/* Propulsive Flame Gradient */}
        <linearGradient id="upFlameOut" x1="24" y1="42" x2="40" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9900" />
          <stop offset="1" stopColor="#FF1E00" />
        </linearGradient>

        <linearGradient id="upFlameIn" x1="28" y1="42" x2="36" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF95B" />
          <stop offset="1" stopColor="#FF9900" />
        </linearGradient>

        {/* Cyan Porthole Glass */}
        <linearGradient id="upPort" x1="26" y1="20" x2="38" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Cosmic Launch Sparkles */}
      <path d="M11 12L12 9L13 12L16 13L13 14L12 17L11 14L8 13L11 12Z" fill="#F59E0B" />
      <path d="M51 12L52 9L53 12L56 13L53 14L52 17L51 14L48 13L51 12Z" fill="#38BDF8" />
      <circle cx="8" cy="28" r="1.5" fill="#F59E0B" opacity="0.6" />
      <circle cx="56" cy="28" r="1.5" fill="#38BDF8" opacity="0.6" />

      {/* Center Thrust Flame */}
      <path d="M26 42C26 52 29 61 32 63C35 61 38 52 38 42Z" fill="url(#upFlameOut)" />
      <path d="M29 42C29 49 30.5 56 32 58C33.5 56 35 49 35 42Z" fill="url(#upFlameIn)" />

      {/* Side Thruster Jets */}
      <path d="M19 42C17 47 15 51 13 54C17 52 19 48 21 43Z" fill="url(#upFlameOut)" />
      <path d="M45 42C47 47 49 51 51 54C47 52 45 48 43 43Z" fill="url(#upFlameOut)" />

      {/* Left Aerodynamic Wing */}
      <path d="M21 28C15 32 10 40 9 46C14 46 19 43 21 40V28Z" fill="url(#upFinL)" />
      <path d="M21 30C16 34 12 40 11 45C14 45 18 43 20 40V30Z" fill="#FF7A8E" opacity="0.6" />

      {/* Right Aerodynamic Wing */}
      <path d="M43 28C49 32 54 40 55 46C50 46 45 43 43 40V28Z" fill="url(#upFinR)" />
      <path d="M43 30C48 34 52 40 53 45C50 45 46 43 44 40V30Z" fill="#FF7A8E" opacity="0.6" />

      {/* Rocket Engine Nozzle Base */}
      <path d="M25 41H39V44C39 45.5 37.5 46.5 36 46.5H28C26.5 46.5 25 45.5 25 44V41Z" fill="#0F172A" />

      {/* Sleek Bullet Fuselage */}
      <path d="M32 4C23 14 21 26 21 42H43C43 26 41 14 32 4Z" fill="url(#upFuselage)" />
      <path d="M32 4C37 14 43 26 43 42H37C37 26 34 14 32 4Z" fill="#94A3B8" opacity="0.3" />

      {/* Crimson Nose Cone */}
      <path d="M32 4C27.5 10 24.5 16 23.5 20H40.5C39.5 16 36.5 10 32 4Z" fill="url(#upNose)" />
      <path d="M32 4C30 9 28 14 27 18H33C33 14 32.5 8 32 4Z" fill="#FFA3B3" opacity="0.75" />

      {/* Central Porthole Window with High-Gloss Blue Glass */}
      <circle cx="32" cy="28" r="7.5" fill="#0F172A" />
      <circle cx="32" cy="28" r="5.5" fill="url(#upPort)" />
      <circle cx="30" cy="26" r="1.8" fill="#FFFFFF" fillOpacity="0.85" />
    </svg>
  );
}

// 2. Small Business Boutique / Store
export function StoreColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="storeRoof" x1="8" y1="12" x2="56" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="storeWall" x1="12" y1="28" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E293B" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      {/* Foundation & Walls */}
      <rect x="14" y="28" width="36" height="26" rx="4" fill="url(#storeWall)" stroke="#334155" strokeWidth="2" />
      {/* Door */}
      <rect x="26" y="38" width="12" height="16" rx="2" fill="#3B82F6" fillOpacity="0.3" stroke="#60A5FA" strokeWidth="1.5" />
      <circle cx="35" cy="46" r="1" fill="#F59E0B" />
      {/* Windows */}
      <rect x="17" y="34" width="7" height="9" rx="1.5" fill="#FDE047" fillOpacity="0.25" stroke="#EAB308" strokeWidth="1" />
      <rect x="40" y="34" width="7" height="9" rx="1.5" fill="#FDE047" fillOpacity="0.25" stroke="#EAB308" strokeWidth="1" />
      {/* Striped Awning */}
      <path d="M8 20L12 12H52L56 20C56 24 53 26 49 26C45 26 42 24 40 26C38 28 35 26 32 26C29 26 26 28 24 26C22 24 19 26 15 26C11 26 8 24 8 20Z" fill="url(#storeRoof)" />
      {/* Red/White Awning Stripes */}
      <path d="M14 12L17 26C18.5 26 20 25.5 21 24.5L19 12H14Z" fill="#EF4444" />
      <path d="M28 12L29 26C30.5 26 32 26 33 26L33 12H28Z" fill="#EF4444" />
      <path d="M42 12L41 24.5C42 25.5 43.5 26 45 26L47 12H42Z" fill="#EF4444" />
      {/* Welcome Sign */}
      <rect x="24" y="29" width="16" height="5" rx="1.5" fill="#EAB308" />
      <circle cx="28" cy="31.5" r="0.8" fill="#1E293B" />
      <circle cx="32" cy="31.5" r="0.8" fill="#1E293B" />
      <circle cx="36" cy="31.5" r="0.8" fill="#1E293B" />
    </svg>
  );
}

// 3. Local Business Map Pin & Geo-Radar
export function MapPinColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pinGrad" x1="16" y1="8" x2="48" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="radarGrad" x1="12" y1="46" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" stopOpacity="0.6" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Ground Target Radar Rings */}
      <ellipse cx="32" cy="52" rx="20" ry="7" fill="url(#radarGrad)" />
      <ellipse cx="32" cy="52" rx="12" ry="4" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="32" cy="52" r="2" fill="#F59E0B" />
      {/* Map Pin Body */}
      <path d="M32 10C22.0589 10 14 18.0589 14 28C14 41 30 51 32 52C34 51 50 41 50 28C50 18.0589 41.9411 10 32 10Z" fill="url(#pinGrad)" />
      <circle cx="32" cy="26" r="8" fill="#FFFFFF" />
      <circle cx="32" cy="26" r="4.5" fill="#EF4444" />
    </svg>
  );
}

// 4. E-commerce Brands Shopping Bag & Tag
export function ShoppingBagColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="bagGrad" x1="14" y1="20" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="tagGrad" x1="36" y1="22" x2="54" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Handles */}
      <path d="M24 24V16C24 11.5817 27.5817 8 32 8C36.4183 8 40 11.5817 40 16V24" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
      {/* Bag Body */}
      <path d="M12 22H52L48 54C47.8 55.5 46.5 56 45 56H19C17.5 56 16.2 55.5 16 54L12 22Z" fill="url(#bagGrad)" />
      {/* Front Fold / Details */}
      <path d="M14 28L32 36L50 28" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      {/* Floating Price Tag */}
      <path d="M38 24L50 36L42 44L30 32L34 24H38Z" fill="url(#tagGrad)" />
      <circle cx="36" cy="28" r="1.5" fill="#1E293B" />
      <path d="M41 33L43 37" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 5. Education & Training Cap & Diploma
export function GraduationCapColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="capGrad" x1="8" y1="24" x2="56" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="bookGrad" x1="16" y1="42" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Open Book Base */}
      <path d="M16 46C22 43 30 44 32 46C34 44 42 43 48 46V54C42 51 34 51 32 53C30 51 22 51 16 54V46Z" fill="url(#bookGrad)" />
      <path d="M32 46V53" stroke="#D1FAE5" strokeWidth="1.5" />
      {/* Cap Skull */}
      <path d="M20 28V36C20 40 25.3726 43 32 43C38.6274 43 44 40 44 36V28L32 33L20 28Z" fill="#1E3A8A" />
      {/* Diamond Cap Board */}
      <path d="M32 12L56 22L32 32L8 22L32 12Z" fill="url(#capGrad)" />
      {/* Golden Button & Tassel */}
      <circle cx="32" cy="22" r="2.5" fill="#F59E0B" />
      <path d="M32 23L48 27V36L45 37V40L48 39L51 40V37L48 36" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 6. Real Estate Modern Architecture Tower
export function BuildingColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="tower1" x1="12" y1="18" x2="34" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="tower2" x1="32" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#B45309" />
        </linearGradient>
      </defs>
      {/* Ground Base */}
      <rect x="8" y="52" width="48" height="4" rx="2" fill="#334155" />
      {/* Blue Office Building */}
      <rect x="14" y="22" width="18" height="30" rx="2" fill="url(#tower1)" />
      {/* Glowing Windows */}
      <rect x="18" y="26" width="3" height="3" rx="0.5" fill="#93C5FD" />
      <rect x="25" y="26" width="3" height="3" rx="0.5" fill="#93C5FD" />
      <rect x="18" y="32" width="3" height="3" rx="0.5" fill="#93C5FD" />
      <rect x="25" y="32" width="3" height="3" rx="0.5" fill="#93C5FD" />
      <rect x="18" y="38" width="3" height="3" rx="0.5" fill="#93C5FD" />
      <rect x="25" y="38" width="3" height="3" rx="0.5" fill="#93C5FD" />
      {/* Gold Luxury Skyscraper */}
      <path d="M30 14L40 8L50 14V52H30V14Z" fill="url(#tower2)" />
      {/* Gold Tower Windows */}
      <rect x="35" y="16" width="4" height="4" rx="0.8" fill="#FEF08A" />
      <rect x="42" y="16" width="4" height="4" rx="0.8" fill="#FEF08A" />
      <rect x="35" y="24" width="4" height="4" rx="0.8" fill="#FEF08A" />
      <rect x="42" y="24" width="4" height="4" rx="0.8" fill="#FEF08A" />
      <rect x="35" y="32" width="4" height="4" rx="0.8" fill="#FEF08A" />
      <rect x="42" y="32" width="4" height="4" rx="0.8" fill="#FEF08A" />
      <rect x="35" y="40" width="4" height="4" rx="0.8" fill="#FEF08A" />
      <rect x="42" y="40" width="4" height="4" rx="0.8" fill="#FEF08A" />
      {/* Spire */}
      <line x1="40" y1="8" x2="40" y2="3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 7. Fitness & Wellness Athletic Dumbbell
export function DumbbellColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gymGrad" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="barGrad" x1="16" y1="32" x2="48" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Steel Grip Bar */}
      <rect x="18" y="29" width="28" height="6" rx="3" fill="url(#barGrad)" />
      {/* Left Weight Plates */}
      <rect x="12" y="22" width="6" height="20" rx="3" fill="url(#gymGrad)" />
      <rect x="7" y="26" width="5" height="12" rx="2.5" fill="#047857" />
      {/* Right Weight Plates */}
      <rect x="46" y="22" width="6" height="20" rx="3" fill="url(#gymGrad)" />
      <rect x="52" y="26" width="5" height="12" rx="2.5" fill="#047857" />
      {/* Energy Sparks */}
      <path d="M32 10L34 16L40 18L35 21L36 27L32 23L28 27L29 21L24 18L30 16L32 10Z" fill="#FACC15" />
    </svg>
  );
}

// 8. Restaurants & Cafes Gourmet Cloche
export function UtensilsColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="plateGrad" x1="8" y1="44" x2="56" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="clocheGrad" x1="16" y1="16" x2="48" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F43F5E" />
          <stop offset="1" stopColor="#BE123C" />
        </linearGradient>
      </defs>
      {/* Serving Platter */}
      <rect x="10" y="44" width="44" height="4" rx="2" fill="url(#plateGrad)" />
      {/* Cloche Dome */}
      <path d="M16 42C16 26.536 23.1634 20 32 20C40.8366 20 48 26.536 48 42H16Z" fill="url(#clocheGrad)" />
      {/* Handle */}
      <circle cx="32" cy="17" r="3" fill="#F59E0B" />
      {/* Delicious Aroma Steam */}
      <path d="M26 12C26 8 28 8 28 4" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 11C32 7 34 7 34 3" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 12C38 8 40 8 40 4" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 9. Professional Services Executive Briefcase
export function BriefcaseColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="caseGrad" x1="10" y1="20" x2="54" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E293B" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="goldTrim" x1="16" y1="20" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Handle */}
      <path d="M24 20V14C24 11.7909 25.7909 10 28 10H36C38.2091 10 40 11.7909 40 14V20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      {/* Briefcase Body */}
      <rect x="10" y="20" width="44" height="32" rx="4" fill="url(#caseGrad)" stroke="#334155" strokeWidth="1.5" />
      {/* Leather Flap */}
      <path d="M10 24L32 36L54 24" stroke="url(#goldTrim)" strokeWidth="2" />
      {/* Gold Latches */}
      <rect x="28" y="32" width="8" height="6" rx="1.5" fill="#F59E0B" />
      <circle cx="32" cy="35" r="1" fill="#0F172A" />
      {/* Growth Chart Badge in Top Right */}
      <circle cx="46" cy="16" r="8" fill="#10B981" />
      <path d="M42 18L45 15L47 17L50 13" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 10. Healthcare & Clinics Medical Stethoscope & Heart
export function HealthcareColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="heartGrad" x1="18" y1="14" x2="46" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4444" />
          <stop offset="1" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="stethGrad" x1="10" y1="20" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      {/* Heart */}
      <path d="M32 18C28 10 16 12 16 22C16 32 32 44 32 44C32 44 48 32 48 22C48 12 36 10 32 18Z" fill="url(#heartGrad)" />
      {/* White Medical Cross */}
      <rect x="30" y="20" width="4" height="12" rx="1" fill="#FFFFFF" />
      <rect x="26" y="24" width="12" height="4" rx="1" fill="#FFFFFF" />
      {/* Stethoscope */}
      <path d="M12 24V34C12 42 18 48 26 48H38C46 48 52 42 52 34V24" stroke="url(#stethGrad)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="12" cy="22" r="2.5" fill="#38BDF8" />
      <circle cx="52" cy="22" r="2.5" fill="#38BDF8" />
      <circle cx="32" cy="54" r="4.5" fill="#F59E0B" />
      <path d="M32 48V51" stroke="url(#stethGrad)" strokeWidth="3" />
    </svg>
  );
}

// 11. Automotive Performance Vehicle
export function AutomotiveColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="carBody" x1="10" y1="24" x2="54" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E11D48" />
          <stop offset="1" stopColor="#9F1239" />
        </linearGradient>
        <linearGradient id="carGlass" x1="20" y1="16" x2="44" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      {/* Car Body */}
      <path d="M12 36L16 26C17 24 19 22 22 22H42C45 22 47 24 48 26L52 36C54 37 55 39 55 42V46H9V42C9 39 10 37 12 36Z" fill="url(#carBody)" />
      {/* Windshield */}
      <path d="M18 26L20 34H44L46 26H18Z" fill="url(#carGlass)" />
      {/* Headlights (Glowing Gold) */}
      <ellipse cx="16" cy="38" rx="4" ry="2.5" fill="#FDE047" />
      <ellipse cx="48" cy="38" rx="4" ry="2.5" fill="#FDE047" />
      {/* Grill */}
      <rect x="24" y="38" width="16" height="6" rx="2" fill="#0F172A" />
      <line x1="26" y1="41" x2="38" y2="41" stroke="#475569" strokeWidth="1" />
      {/* Wheels */}
      <rect x="13" y="44" width="8" height="8" rx="2" fill="#1E293B" />
      <rect x="43" y="44" width="8" height="8" rx="2" fill="#1E293B" />
    </svg>
  );
}

// 12. And Many More... Multi-layered Prism
export function ManyMoreColorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="prism1" x1="16" y1="14" x2="48" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="prism2" x1="10" y1="26" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* Top Diamond */}
      <path d="M32 10L48 22L32 34L16 22L32 10Z" fill="url(#prism1)" />
      {/* Middle Layer */}
      <path d="M16 26L32 38L48 26L52 30L32 44L12 30L16 26Z" fill="#F43F5E" />
      {/* Bottom Diamond Base */}
      <path d="M16 36L32 48L48 36L52 40L32 54L12 40L16 36Z" fill="url(#prism2)" />
      {/* Star Sparks */}
      <circle cx="48" cy="14" r="2" fill="#FDE047" />
      <circle cx="14" cy="46" r="1.5" fill="#38BDF8" />
    </svg>
  );
}


// ---------------------------------------------------------------------------
// 6 CORE SERVICES COLORFUL VECTOR ICONS (Engineered specifically per title)
// ---------------------------------------------------------------------------

// 1. Meta Ads (Infinite loop + conversion target in vibrant Meta gradient)
export function MetaAdsColorServiceIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="metaGrad" x1="6" y1="18" x2="58" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0081FB" />
          <stop offset="0.5" stopColor="#A855F7" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="targetGrad" x1="24" y1="24" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      {/* Outer Glow Circle */}
      <circle cx="32" cy="32" r="28" fill="#0081FB" fillOpacity="0.08" stroke="#0081FB" strokeOpacity="0.2" strokeWidth="1.5" />
      {/* Meta Infinity Wave */}
      <path
        d="M20 22C14 22 10 26 10 32C10 38 14 42 20 42C26 42 30 35 32 32C34 29 38 22 44 22C50 22 54 26 54 32C54 38 50 42 44 42C38 42 34 35 32 32C30 29 26 22 20 22Z"
        stroke="url(#metaGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Growth Target Bullseye */}
      <circle cx="32" cy="32" r="6" fill="#07080B" stroke="url(#targetGrad)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="2.5" fill="#F59E0B" />
    </svg>
  );
}

// 1b. Google Ads (Official Google Ads emblem: Yellow & Blue diagonal pills with Green disc)
export function GoogleAdsColorServiceIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Yellow Diagonal Pill */}
      <path
        d="M5.888 166.405L90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.213L79.916 208.627C70.62 220.907-5.888 185.04 5.888 166.396v.009z"
        fill="#FBBC04"
      />
      {/* Blue Diagonal Pill */}
      <path
        d="M250.084 166.402L165.092 20.906C153.21 1.132 127.62-6.054 106.6 5.625c-21.018 11.679-27.418 36.837-15.536 57.494L176.056 208.633c11.882 19.765 37.473 26.95 58.492 15.272 20.1-11.679 27.418-37.73 15.536-57.486v-.017z"
        fill="#4285F4"
      />
      {/* Green Apex Disc */}
      <ellipse cx="42.664" cy="187.924" rx="42.664" ry="41.604" fill="#34A853" />
    </svg>
  );
}

// 2. Website Development (Multi-device code window with syntax tags and responsive layout)
export function WebDevColorServiceIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="screenGrad" x1="10" y1="12" x2="54" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0EA5E9" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      {/* Browser Screen Frame */}
      <rect x="8" y="12" width="48" height="38" rx="5" fill="#0D1117" stroke="#38BDF8" strokeWidth="2" />
      {/* Window Topbar */}
      <path d="M8 17C8 14.2386 10.2386 12 13 12H51C53.7614 12 56 14.2386 56 17V20H8V17Z" fill="#1F2937" />
      <circle cx="14" cy="16" r="2" fill="#EF4444" />
      <circle cx="20" cy="16" r="2" fill="#F59E0B" />
      <circle cx="26" cy="16" r="2" fill="#10B981" />
      {/* Code Brackets </> */}
      <path d="M22 28L16 34L22 40" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 28L48 34L42 40" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 26L30 42" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
      {/* Stand Base */}
      <path d="M26 50H38V54H26V50Z" fill="#334155" />
      <rect x="20" y="54" width="24" height="2.5" rx="1.2" fill="#64748B" />
    </svg>
  );
}

// 3. Landing Page Development (High-speed mobile funnel + conversion magnet)
export function LandingPageColorServiceIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="lpPage" x1="14" y1="8" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="ctaGrad" x1="20" y1="36" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Mobile Page Canvas */}
      <rect x="14" y="8" width="36" height="48" rx="6" fill="#0B0F19" stroke="#10B981" strokeWidth="2" />
      {/* High-Impact Hero Headline Block */}
      <rect x="20" y="16" width="24" height="5" rx="2.5" fill="#34D399" />
      <rect x="22" y="24" width="20" height="2.5" rx="1.2" fill="#6EE7B7" fillOpacity="0.6" />
      <rect x="25" y="29" width="14" height="2.5" rx="1.2" fill="#6EE7B7" fillOpacity="0.4" />
      {/* High-Converting CTA Button */}
      <rect x="19" y="36" width="26" height="9" rx="4.5" fill="url(#ctaGrad)" />
      <path d="M28 40.5L31 43L36 38" stroke="#07080B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lightning Flash (Speed < 1.2s) */}
      <circle cx="46" cy="14" r="7" fill="#EF4444" />
      <path d="M47 9L43 14H46L45 18L49 13H46L47 9Z" fill="#FEF08A" />
    </svg>
  );
}

// 4. Graphic Design (Creative color palette with vibrant pigments & bezier pen)
export function GraphicDesignColorServiceIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="paletteGrad" x1="10" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EC4899" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {/* Artist Palette */}
      <path
        d="M32 10C18.7452 10 8 20.7452 8 34C8 44.5 16 52 26 52C28 52 29.5 50.5 29.5 48.5C29.5 47.5 29 46.5 28.5 45.5C28 44.5 27.5 43.5 27.5 42C27.5 39.5 29.5 37.5 32 37.5H38C46.8366 37.5 54 30.3366 54 21.5C54 15 44 10 32 10Z"
        fill="#111827"
        stroke="url(#paletteGrad)"
        strokeWidth="2.5"
      />
      {/* Vibrant Color Swatches */}
      <circle cx="20" cy="22" r="4.5" fill="#EF4444" />
      <circle cx="32" cy="18" r="4.5" fill="#F59E0B" />
      <circle cx="43" cy="22" r="4.5" fill="#10B981" />
      <circle cx="44" cy="31" r="4" fill="#3B82F6" />
      <circle cx="22" cy="34" r="4" fill="#8B5CF6" />
      {/* Thumb Hole */}
      <ellipse cx="22" cy="44" rx="3.5" ry="4" fill="#1F2937" stroke="#374151" strokeWidth="1" />
    </svg>
  );
}

// 5. Video Editing (Cinematic film clapperboard + play button & golden soundwaves)
export function VideoEditingColorServiceIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="clapGrad" x1="10" y1="16" x2="54" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F97316" />
          <stop offset="1" stopColor="#DC2626" />
        </linearGradient>
      </defs>
      {/* Clapperboard Body */}
      <rect x="10" y="24" width="44" height="28" rx="4" fill="#0F172A" stroke="url(#clapGrad)" strokeWidth="2" />
      {/* Top Clapper Sticks with Diagonal Stripes */}
      <path d="M10 24L12 16H52L54 24H10Z" fill="#1E293B" />
      <path d="M16 16L12 24H18L22 16H16Z" fill="#F59E0B" />
      <path d="M28 16L24 24H30L34 16H28Z" fill="#F59E0B" />
      <path d="M40 16L36 24H42L46 16H40Z" fill="#F59E0B" />
      {/* Play Button Triangle */}
      <circle cx="32" cy="38" r="9" fill="#EF4444" />
      <polygon points="30,33 37,38 30,43" fill="#FFFFFF" />
      {/* Floating Audio Waveform Bars */}
      <line x1="45" y1="34" x2="45" y2="42" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <line x1="48" y1="31" x2="48" y2="45" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <line x1="51" y1="35" x2="51" y2="41" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 6. Social Media Management (Interconnected vibrant social channels + viral engagement)
export function SocialMediaColorServiceIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="smGrad" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="0.5" stopColor="#EC4899" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* Main Speech Bubble */}
      <path
        d="M10 26C10 17.1634 17.1634 10 26 10H38C46.8366 10 54 17.1634 54 26C54 34.8366 46.8366 42 38 42H24L14 49V41C11.5 37.5 10 32 10 26Z"
        fill="#0F172A"
        stroke="url(#smGrad)"
        strokeWidth="2.5"
      />
      {/* Heart / Engagement Icon inside */}
      <path
        d="M32 30C30.5 24 23 23 23 28C23 33 32 37 32 37C32 37 41 33 41 28C41 23 33.5 24 32 30Z"
        fill="#EC4899"
      />
      {/* Floating Notification / Growth Badge */}
      <circle cx="48" cy="14" r="6" fill="#10B981" />
      <path d="M46 14L47.5 15.5L50.5 12.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Share Connection Nodes */}
      <circle cx="16" cy="18" r="3" fill="#F59E0B" />
      <circle cx="48" cy="42" r="3" fill="#3B82F6" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// BRAND ICONS
// ---------------------------------------------------------------------------

// Official WhatsApp Brand Icon (Vector path matching current text color)
export function WhatsAppIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.72 14.82 12.16 15.87C12.74 16.12 13.19 16.27 13.55 16.38C14.13 16.57 14.66 16.54 15.08 16.48C15.55 16.41 16.51 15.9 16.71 15.33C16.92 14.77 16.92 14.29 16.86 14.19C16.8 14.09 16.63 14.03 16.38 13.9C16.13 13.78 14.9 13.17 14.67 13.09C14.45 13.01 14.28 12.97 14.12 13.22C13.96 13.47 13.49 14.03 13.35 14.19C13.21 14.36 13.06 14.38 12.81 14.25C12.56 14.13 11.77 13.87 10.83 13.03C10.1 12.38 9.61 11.58 9.47 11.33C9.33 11.08 9.45 10.95 9.58 10.83C9.69 10.72 9.83 10.54 9.95 10.4C10.08 10.26 10.12 10.16 10.2 10C10.28 9.84 10.24 9.7 10.18 9.58C10.12 9.46 9.63 8.25 9.43 7.76C9.23 7.29 9.03 7.35 8.88 7.34C8.73 7.33 8.56 7.33 8.53 7.33Z" />
    </svg>
  );
}

// Official WhatsApp Badge (Full color authentic green badge + white phone silhouette)
export function WhatsAppColorIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 3.5C7.34 3.5 3.52 7.32 3.52 12.02C3.52 13.53 3.92 14.99 4.66 16.28L3.45 20.72L8 19.53C9.25 20.21 10.65 20.57 12.04 20.57C16.74 20.57 20.56 16.75 20.56 12.05C20.56 9.77 19.67 7.62 18.06 6.01C16.45 4.39 14.31 3.5 12.04 3.5ZM16.03 14.86C15.86 15.34 15.03 15.78 14.62 15.84C14.26 15.89 13.8 15.92 13.3 15.76C12.99 15.66 12.6 15.53 12.1 15.32C9.99 14.41 8.62 12.3 8.52 12.15C8.41 12.01 7.66 11.01 7.66 9.98C7.66 8.94 8.2 8.44 8.39 8.22C8.58 8.01 8.81 7.96 8.95 7.96C9.09 7.96 9.24 7.96 9.36 7.97C9.49 7.98 9.66 7.93 9.83 8.33C10 8.76 10.42 9.8 10.47 9.9C10.52 10.01 10.56 10.13 10.49 10.27C10.42 10.4 10.38 10.49 10.28 10.61C10.17 10.73 10.06 10.88 9.96 10.98C9.85 11.08 9.74 11.19 9.86 11.4C9.98 11.62 10.4 12.31 11.03 12.87C11.84 13.59 12.52 13.82 12.73 13.93C12.94 14.04 13.07 14.02 13.19 13.88C13.31 13.74 13.71 13.26 13.85 13.04C13.99 12.83 14.14 12.86 14.33 12.93C14.52 13 15.58 13.52 15.8 13.63C16.01 13.74 16.16 13.79 16.21 13.88C16.26 13.96 16.26 14.37 16.03 14.86Z"
        fill="white"
      />
    </svg>
  );
}
