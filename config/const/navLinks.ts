export const categories = [
  {
    id: 'pets',
    name: 'Pets',
    subcategories: [
      { id: 'all-pets', name: 'All Pets', href: '/pets' },
      { id: 'dogs', name: 'Dogs', href: '/pets/dogs' },
      { id: 'cats', name: 'Cats', href: '/pets/cats' },
      { id: 'birds', name: 'Birds', href: '/pets/birds' },
      { id: 'fish', name: 'Fish', href: '/pets/fish' },
      { id: 'rabbits', name: 'Rabbits', href: '/pets/rabbits' },
      { id: 'other-pets', name: 'Other Pets', href: '/pets/other' },
    ]
  },
  {
    id: 'pet-food',
    name: 'Pet Foods',
    subcategories: [
      { id: 'dog-food', name: 'Dog Food', href: '/food/dog' },
      { id: 'cat-food', name: 'Cat Food', href: '/food/cat' },
      { id: 'bird-food', name: 'Bird Food', href: '/food/bird' },
      { id: 'fish-food', name: 'Fish Food', href: '/food/fish' },
      { id: 'treats', name: 'Treats/Medicines', href: '/food/treats' },
    ]
  },
  {
    id: 'pet-toys',
    name: 'Pet Toys',
    subcategories: [
      { id: 'dog-toys', name: 'Dog Toys', href: '/toys/dog' },
      { id: 'cat-toys', name: 'Cat Toys', href: '/toys/cat' },
      { id: 'bird-toys', name: 'Bird Toys', href: '/toys/bird' },
      { id: 'fish-toys', name: 'Fish Toys', href: '/toys/fish' },
    ]
  },
  {
    id: 'services',
    name: 'Services',
    subcategories: [
      { id: 'consultants', name: 'Consultants', href: '/services/consultants' },
      { id: 'breeding', name: 'Breeding', href: '/services/breeding' },
      { id: 'training', name: 'Training', href: '/services/training' },
      { id: 'grooming', name: 'Grooming', href: '/services/grooming' },
    ]
  },
];

export const featuredLinks = [
  {
    title: 'Special Deals',
    items: [
      { name: 'Daily Deals', href: '/deals/daily' },
      { name: 'Clearance', href: '/deals/clearance' },
      { name: 'Bundle Offers', href: '/deals/bundles' },
    ]
  },
  {
    title: 'Top Ranked',
    items: [
      { name: 'Best Sellers', href: '/ranked/best-sellers' },
      { name: 'Top Rated', href: '/ranked/top-rated' },
      { name: 'Most Popular', href: '/ranked/popular' },
    ]
  },
  {
    title: 'New Arrivals',
    items: [
      { name: 'Latest Products', href: '/new/latest' },
      { name: 'Upcoming Releases', href: '/new/upcoming' },
      { name: 'Seasonal Items', href: '/new/seasonal' },
    ]
  }
];
