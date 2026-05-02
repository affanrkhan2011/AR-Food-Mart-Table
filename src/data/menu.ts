export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
};

export const MENU_CATEGORIES = [
  'Main Course',
  'Snacks',
  'Chai'
];

export const MENU_ITEMS: MenuItem[] = [
  // Main Course
  { id: 'mc1', name: 'Chicken Biryani', description: 'Flavorful basmati rice cooked with tender chicken and aromatic spices.', price: 14.99, category: 'Main Course' },
  { id: 'mc2', name: 'Beef Seekh Kabab Roll', description: 'Spiced minced beef grilled on skewers and wrapped in a fresh paratha.', price: 11.99, category: 'Main Course' },
  { id: 'mc3', name: 'Butter Chicken with Naan', description: 'Creamy tomato-based butter chicken served with fresh tandoori naan.', price: 15.99, category: 'Main Course' },
  { id: 'mc4', name: 'Vegetable Pulao', description: 'Fragrant rice cooked with a variety of fresh seasonal vegetables.', price: 10.99, category: 'Main Course' },

  // Snacks
  { id: 'sn1', name: 'Vegetable Samosas', description: 'Crispy pastry filled with spiced potatoes and peas.', price: 5.99, category: 'Snacks' },
  { id: 'sn2', name: 'Chicken Pakoras', description: 'Spiced chicken fritters deep-fried to perfection.', price: 7.99, category: 'Snacks' },
  { id: 'sn3', name: 'Aloo Tikki', description: 'Crispy potato patties flavored with herbs and spices.', price: 4.99, category: 'Snacks' },
  { id: 'sn4', name: 'Masala Fries', description: 'Classic fries tossed in our signature masala spice blend.', price: 4.99, category: 'Snacks' },

  // Chai
  { id: 'ch1', name: 'Karak Chai', description: 'Strong, milky tea brewed with a special blend of spices.', price: 2.99, category: 'Chai' },
  { id: 'ch2', name: 'Cardamom (Elaichi) Chai', description: 'Traditional tea infused with the fragrant essence of cardamom.', price: 3.49, category: 'Chai' },
  { id: 'ch3', name: 'Masala Chai', description: 'A warming blend of tea, milk, and traditional Indian spices.', price: 3.49, category: 'Chai' },
  { id: 'ch4', name: 'Kashmiri Pink Tea', description: 'Unique pink tea brewed with green tea leaves, milk, and nuts.', price: 4.49, category: 'Chai' }
];
