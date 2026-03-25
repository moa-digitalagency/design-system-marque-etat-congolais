tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        /* Typographie principale — Charte Graphique RDC */
        'cooper': ['"Cooper Hewitt"', 'Inter', 'sans-serif'],
        /* Typographie de complément */
        'garamond': ['Garamond', '"EB Garamond"', 'Georgia', 'serif'],
        /* Mentions d'autorité */
        'great-vibes': ['"Great Vibes"', 'Allura', 'cursive'],
        /* Fallback UI */
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        /* Couleurs principales (Tricolore du Drapeau) */
        'rdc-bleu':   '#0095C9',
        'rdc-jaune':  '#FFF24B',
        'rdc-rouge':  '#DB3832',
        /* Couleurs complémentaires */
        'rdc-bleu-fonce': '#17418A',
        'rdc-bleu-ciel':  '#0F89CB',
        'rdc-vert':       '#65B32E',
        'rdc-orange':     '#D44816',
        'rdc-or':         '#9F6E26',
        'rdc-sarcelle':   '#405D64',
        'rdc-pourpre':    '#9C0055',
        'rdc-noir':       '#323230',
        /* Tokens dynamiques */
        primary: 'var(--primary)',
        'primary-to': 'var(--primary-to)',
      }
    }
  }
}
