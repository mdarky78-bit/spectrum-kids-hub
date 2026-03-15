/**
 * Spectrum Kids Hub — scripts.js v2
 * Mobile nav · Scenario card toggle · Site search
 */

// ── Mobile Navigation ────────────────────────────────────────────
(function () {
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  if (!burger || !navLinks) return;

  burger.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ── Scenario Card Toggle ─────────────────────────────────────────
function toggleCard(id) {
  var card = document.getElementById(id);
  if (!card) return;
  var open = card.classList.toggle('open');
  var hdr  = card.querySelector('.scenario-card__header');
  if (hdr) hdr.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// ── Site Search ──────────────────────────────────────────────────
// Lightweight keyword-based search across the site's main sections.
// When you install Pagefind (recommended for production), replace this
// entire block with Pagefind's 3-line initialisation.

var SEARCH_INDEX = [
  {
    title: 'Understanding ADHD',
    url: 'understanding.html',
    keywords: 'adhd attention deficit hyperactivity disorder inattention impulsivity executive function morning routine girls boys diagnosis',
    excerpt: 'Plain-English guide to ADHD in children aged 2–10. Early signs, how it presents differently in girls and boys, and what to do first in the UK.'
  },
  {
    title: 'Understanding Autism / ASD',
    url: 'understanding.html',
    keywords: 'autism asd autistic spectrum sensory meltdown routine masking girls boys diagnosis assessment camhs',
    excerpt: 'What autism actually looks like day to day. Early signs by age, gender differences in presentation, and step-by-step NHS pathway guide.'
  },
  {
    title: 'Understanding Sensory Processing Differences',
    url: 'understanding.html',
    keywords: 'sensory processing hypersensitivity hyposensitivity proprioception vestibular interoception clothing socks food texture ot occupational therapy',
    excerpt: 'What sensory processing differences are, early signs to look out for, and how to get a referral to a paediatric occupational therapist.'
  },
  {
    title: 'Real Life: Meltdown in the Supermarket',
    url: 'reallife.html',
    keywords: 'meltdown supermarket sensory overload noise lights shopping calm',
    excerpt: 'What\'s actually happening neurologically — and what to try instead of telling them to calm down.'
  },
  {
    title: 'Real Life: Morning Routine',
    url: 'reallife.html',
    keywords: 'morning routine adhd getting dressed executive function visual checklist',
    excerpt: 'Why mornings take two hours and what actually helps. Visual checklists, working backwards from the leaving time, and what to do the night before.'
  },
  {
    title: 'Real Life: After-School Restraint Collapse',
    url: 'reallife.html',
    keywords: 'after school restraint collapse fine at school falls apart at home masking decompression',
    excerpt: 'Why your child seems fine at school and then falls apart at home — and what a low-demand transition actually looks like.'
  },
  {
    title: 'Real Life: Food Battles',
    url: 'reallife.html',
    keywords: 'food mealtime selective eating texture sensory food chaining arfid dietitian',
    excerpt: 'Extreme food selectivity, sensory-based avoidance, and how to reduce the pressure around mealtimes.'
  },
  {
    title: 'Real Life: Transitions & Leaving',
    url: 'reallife.html',
    keywords: 'transition meltdown leaving park screen time timer warning',
    excerpt: 'Why transitions are so hard and how advance warnings, visual timers, and anchors can help.'
  },
  {
    title: 'Real Life: Friendships',
    url: 'reallife.html',
    keywords: 'friendships social playground friends making keeping SENCO lunch club',
    excerpt: 'When your child wants friends but doesn\'t know how to make them — structured activities, one-to-one playdates, and what school can do.'
  },
  {
    title: 'UK Resources — NHS Pathways',
    url: 'toolkit.html',
    keywords: 'nhs gp camhs referral nice ng87 ng142 right to choose waiting list diagnosis',
    excerpt: 'NHS autism and ADHD pathways explained. NICE guidelines, Right to Choose, waiting lists, and what to say to your GP.'
  },
  {
    title: 'UK Resources — School & SENCO',
    url: 'toolkit.html',
    keywords: 'senco school ehcp send local offer ipsea sendiass support plan',
    excerpt: 'You don\'t need a diagnosis to get school support. EHCP, SEN support plans, IPSEA, and your SENDIASS explained.'
  },
  {
    title: 'UK Resources — Crisis Support',
    url: 'toolkit.html',
    keywords: 'crisis helpline samaritans 116123 youngminds 111 childline papyrus mental health emergency',
    excerpt: 'Samaritans (116 123), YoungMinds Parents Helpline, NHS 111, Childline (0800 1111), and PAPYRUS HOPELINE.'
  },
  {
    title: 'UK Resources — Private Assessment',
    url: 'toolkit.html',
    keywords: 'private assessment adhd autism bps psychologist clinical partners held health right to choose',
    excerpt: 'Private assessment routes, Right to Choose providers, and what to look for in an assessor.'
  },
  {
    title: 'UK Resources — Charities',
    url: 'toolkit.html',
    keywords: 'national autistic society nas adhd uk youngminds contact addiss ambitious about autism autistic girls network',
    excerpt: 'The UK\'s leading charities for families of neurodiverse children — helplines, guides, and local support.'
  },
  {
    title: 'Nourish — Gut Health & Nutrition',
    url: 'nourish.html',
    keywords: 'gut brain axis microbiome omega 3 magnesium iron zinc vitamin d nutrition neurodiverse',
    excerpt: 'What the gut-brain connection actually means, which nutrients matter most, and an honest guide to supplements.'
  },
  {
    title: 'Nourish — Sleep',
    url: 'nourish.html',
    keywords: 'sleep bedtime routine melatonin autistic adhd blue light screen sensory bedding',
    excerpt: 'Sleep difficulties in autistic children and those with ADHD — evidence-based strategies and when to ask your GP about melatonin.'
  },
  {
    title: 'Nourish — Sensory-Friendly Mealtimes',
    url: 'nourish.html',
    keywords: 'mealtime sensory food chaining texture pressure arfid separate plate',
    excerpt: 'How to reduce mealtime stress. Food chaining, separate plates, removing the word \'try\', and when to ask for a dietitian referral.'
  },
  {
    title: 'Nourish — Nutricore Health',
    url: 'nourish.html',
    keywords: 'nutricore health nutritional therapy health coaching neurodiverse personalised',
    excerpt: 'Nutricore Health offers health coaching and nutritional therapy for families navigating neurodiversity.'
  },
  {
    title: 'Community — Peer Support',
    url: 'community.html',
    keywords: 'community peer support lonely parents forum voices rant box',
    excerpt: 'For the part of this journey that doesn\'t fit neatly into a GP referral. Real voices, UK groups, and a space to be honest.'
  },
  {
    title: 'Community — UK Groups & Forums',
    url: 'community.html',
    keywords: 'mumsnet send nas forum reddit adhd parents s4nd autistic girls network facebook group',
    excerpt: 'The most active and well-regarded UK-based online communities for parents of neurodiverse children.'
  },
  {
    title: 'Our Values',
    url: 'community.html',
    keywords: 'values pro diagnosis evidence informed toxic positivity no judgement believe parents',
    excerpt: 'What Spectrum Kids Hub stands for — pro-diagnosis, evidence-informed, and no toxic positivity.'
  }
];

function runSearch() {
  var input   = document.getElementById('siteSearch');
  var results = document.getElementById('searchResults');
  if (!input || !results) return;

  var query = input.value.trim().toLowerCase();
  results.innerHTML = '';

  if (query.length < 2) {
    results.classList.remove('visible');
    return;
  }

  var terms = query.split(/\s+/).filter(Boolean);

  var scored = SEARCH_INDEX.map(function (item) {
    var haystack = (item.title + ' ' + item.keywords + ' ' + item.excerpt).toLowerCase();
    var score = terms.reduce(function (acc, t) {
      return acc + (haystack.includes(t) ? 1 : 0);
    }, 0);
    return { item: item, score: score };
  }).filter(function (r) { return r.score > 0; })
    .sort(function (a, b) { return b.score - a.score })
    .slice(0, 6);

  if (scored.length === 0) {
    results.innerHTML = '<p class="search-no-results">No results for "' + escHtml(input.value) + '" — try a different word.</p>';
  } else {
    scored.forEach(function (r) {
      var div = document.createElement('div');
      div.className = 'search-result-item';
      div.innerHTML =
        '<a href="' + r.item.url + '">' + escHtml(r.item.title) + '</a>' +
        '<p>' + escHtml(r.item.excerpt) + '</p>';
      results.appendChild(div);
    });
  }
  results.classList.add('visible');
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Trigger search on Enter key
document.addEventListener('DOMContentLoaded', function () {
  var inp = document.getElementById('siteSearch');
  if (inp) {
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') runSearch();
    });
    // Close results when clicking outside
    document.addEventListener('click', function (e) {
      var wrap = document.querySelector('.search-wrap');
      if (wrap && !wrap.contains(e.target)) {
        var res = document.getElementById('searchResults');
        if (res) res.classList.remove('visible');
      }
    });
  }
});
