import React, { useState } from 'react';
import logo from './assets/company-logo.jpg';
import team_photo from './assets/photo-us.jpg';
import photo_2 from './assets/photo-2.jpg';
import photo_9 from './assets/photo-9.jpg';
import photo_11 from './assets/photo-11.jpg';
import photo_catering_1 from './assets/photo-catering-1.jpg';
import photo_catering_2 from './assets/photo-catering-2.jpg';

// Define the available sections/pages
const sections = {
  home: 'Home',
  about: 'About Us',
  menu: 'Menu',
  catering: 'Catering',
  contact: 'Contact Us',
};

// Home Section Component
const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      // Applied window styling to the section itself for full width extension
      className="relative bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-[1.005] mb-12 overflow-hidden"
    >
      <div className="relative z-10 py-16"> {/* Content wrapper with vertical padding */}
        <div className="container mx-auto px-4"> {/* Content container for centering */}
          <h2 className="text-5xl font-extrabold text-center text-gray-700 mb-8 leading-tight">
            <span className="font-extrabold text-blue-500">Chill</span> Out While It <span className="font-extrabold text-orange-500">Heats</span> Up!
          </h2>
            <div>
              <img
              src={photo_2}
              alt="photo_2"
              className="inline-flex w-120 h-120 mr-4 rounded-xl"
              />
              <img
                src={photo_9}
                alt="photo_9"
                className="inline-flex w-120 h-120 mr-4 rounded-xl"
              />
              <img
                src={photo_11}
                alt="photo_11"
                className="inline-flex w-120 h-120 mr-4 rounded-xl"
              />
            </div>
          <p className="text-2xl leading-relaxed pt-12 text-gray-700 text-center max-w-3xl mx-auto">
            Enjoy a wide variety of tasty cold, sweet treats and salty, spicy eats, served up at our store or on the go. 
            Our dedicated team is committed to keeping you cool, heating things up, and meeting your needs.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-blue-100 rounded-lg shadow-md border border-blue-500">
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Family Owned and Operated</h3>
              <p className="text-gray-500">We are based here in the Brazos Valley for over 10 years.</p>
            </div>
            <div className="p-6 bg-orange-100 rounded-lg shadow-md border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">Catering Options</h3>
              <p className="text-gray-500">Our goal is to meet your individual or party needs.</p>
            </div>
            <div className="p-6 bg-blue-100 rounded-lg shadow-md border border-blue-500">
              <h3 className="text-2xl font-bold text-blue-500 mb-3">Ever-expanding Menu</h3>
              <p className="text-gray-500">Visit us often to see what have cooked up this week.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      // Applied window styling to the section itself for full width extension
      className="relative bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-[1.005] mb-12 overflow-hidden"
    >
      <div className="relative z-10 py-16"> {/* Content wrapper with vertical padding */}
        <div className="container mx-auto px-4"> {/* Content container for centering */}
          <h2 className="text-4xl font-bold text-gray-700 mb-6 text-center">Our Story & Mission</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-2xl leading-relaxed text-gray-700 mb-4">
                Founded in 2014, we embarked on a mission to provide the best snow cones in the Bryan/College Station area.
                What started as a small brick and mortart has grown into a catering team of dedicated individuals, driven to meet your needs as a customer.
              </p>
              <p className="text-2xl leading-relaxed text-gray-700">
                Our goal is to ensure that your individual or party needs are met with the utmost care, with convenience in mind.
                We hope to make your visit with us enjoyable every time, and we strive to supply the best catering experience you
                could ask for. Our store is located on HWY 21, and we cater would love to cater your next party or event.
                We hope to see you soon! 
              </p>
            </div>
            <div>
              <img
                src={team_photo}
                alt="Our Team Working"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="mt-10 p-8 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-700 mb-4 text-center">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-100 text-center p-5 rounded-lg shadow-md border border-blue-200">
                <p className="text-xl font-semibold text-blue-500 mb-2">Service-Oriented</p>
                <p className="text-gray-500">Our goal is to meet your customer needs every time.</p>
              </div>
              <div className="bg-orange-100 text-center p-5 rounded-lg shadow-md border border-orange-200">
                <p className="text-xl font-semibold text-orange-700 mb-2">Flebility</p>
                <p className="text-gray-500">We work around your event schedule for convenience.</p>
              </div>
              <div className="bg-blue-100 text-center p-5 rounded-lg shadow-md border border-blue-200">
                <p className="text-xl font-semibold text-blue-700 mb-2">Excellence</p>
                <p className="text-gray-500">We are committed to delivering oustanding quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Menu Section Component
const MenuSection: React.FC = () => {
  return (
    <section
      id="about"
      // Applied window styling to the section itself for full width extension
      className="relative bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-[1.005] mb-12 overflow-hidden"
    >
      <div className="relative z-10 py-16"> {/* Content wrapper with vertical padding */}
        <div className="container mx-auto px-4"> {/* Content container for centering */}
          <h2 className="text-5xl font-bold text-gray-700 mb-6 text-center">Snow Cone and Snack Menu</h2>
          <h2 className="text-3xl font-bold text-gray-700 pt-10 mb-6 text-center">Snow Cone Sizes</h2>
          <div className="text-2xl grid md:grid-cols-3 gap-1 items-center md:place-items-center">
            <div>Small - $3.00</div>
            <div>Medium - $4.00</div>
            <div>Large - $5.00</div>
          </div>
          <div className="text-2xl font-bold grid grid-cols-3 justify-center gap-3 pb-2 pt-10 md:place-items-center">
            <div>Snow Cone Flavors</div>
            <div>Snow Cone Toppings</div>
            <div>Fan Favorite Combos</div>
          </div>
          <div className="grid md:grid-cols-3 gap-1 items-center md:place-items-center">
            <div>Strawberry</div><div>Whipped Cream</div><div>Tiger's Blood</div>
            <div>Cherry</div><div>Sprinkles</div><div>Special 1</div>
            <div>Orange</div><div>Gummy Snacks</div><div>Special 2</div>
            <div>Pineapple</div><div>Pickle Chunks</div><div>Special 3</div>
            <div>Lemon</div><div>Fruit</div><div>Special 4</div>
            <div>Lime</div><div>Chamoy</div><div>Special 5</div>
            <div>Blue Raspberry</div><div>Tajín</div><div>Special 6</div>
            <div>Bubblegum</div><div> </div><div>Special 7</div>
            <div>Coconut</div><div> </div><div>Special 9</div>
          </div>
          <div className="text-2xl font-bold grid grid-cols-2 justify-center gap-3 pb-2 pt-10 md:place-items-center">
            <div>Salty Snacks</div>
            <div>Snack Toppings</div>
          </div>
          <div className="grid md:grid-cols-2 gap-1 items-center md:place-items-center">
            <div>Hot Dogs</div><div>Chili</div>
            <div>Fritos</div><div>Nacho Cheese</div>
            <div>Doritos</div><div>Tajín</div>
            <div>Funnyons</div><div>Pickle Chunks</div>
            <div>Cheetos</div><div>Hot Sauce</div>
            <div>Hot Cheetos</div><div> </div>
            <div>Takis</div><div> </div>
          </div>
          <div className="text-2xl font-bold grid grid-cols-2 justify-center gap-3 pb-2 pt-10 md:place-items-center">
            <div>Thist Quenchers</div>
            <div>Sodas</div>
          </div>
          <div className="grid md:grid-cols-2 gap-1 items-center md:place-items-center">
            <div>Lemonade</div><div>Coke</div>
            <div>Fruit Punch</div><div>Dr. Pepper</div>
            <div>Orange</div><div>Sprite</div>
            <div>Blue Coconut</div><div>Root Beer</div>
            <div>Orange</div><div>Fanta</div>
          </div>
        </div>
      </div>
    </section>      
  );
};

// Catering Section Component
const CateringSection: React.FC = () => {
 return (
    <section
      id="about"
      // Applied window styling to the section itself for full width extension
      className="relative bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-[1.005] mb-12 overflow-hidden"
    >
      <div className="relative z-10 py-16"> {/* Content wrapper with vertical padding */}
        <div className="container mx-auto px-4"> {/* Content container for centering */}
          <h2 className="text-4xl font-bold text-gray-700 mb-6 pb-10 text-center">Catering Information</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={photo_catering_1}
                alt="photo-catering-1"
                className="w-160 h-120 rounded-xl shadow-lg"
              />
              <img
                src={photo_catering_2}
                alt="photo-catering-2"
                className="w-160 h-120 rounded-xl shadow-lg"
              />
            </div>
            <div>
              <p className="text-3xl leading-relaxed text-gray-700 pr-4 mb-4">
                We provide on-site catering, as well as Party Paks to fit your occasion as needed.
              </p>
              <p className="text-3xl leading-relaxed text-gray-700 pr-4 mb-4">
                Our fully stocked trailer is able to meet you at your event with ease, through sun, rain, or snow.
                Our staff memebers are ready to serve you and your guests to make your experience care-free.
              </p>
              <p className="text-3xl leading-relaxed text-gray-700 pr-4 mb-4">
                Our Party Paks are intended for smaller parties; they come with all the essentials you need to host your own snow cone shindig.
                Each pack comes with a tub of shaved ice, 12 oz cups, and assorted syrup flavors to order.
              </p>
              <p className="text-3xl leading-relaxed text-gray-700 pr-4 mb-4">
                See our Contact Us page to reach out for pricing and availability.
                Please contact at minimum a week before your event to ensure we can accommodate your settings and suit your needs adequately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      // Applied window styling to the section itself for full width extension
      className="relative bg-white rounded-2xl shadow-xl border border-blue-100 transform transition-all duration-300 hover:scale-[1.005] overflow-hidden" // Removed mb-12 as it's the last section
    >
      <div className="relative z-10 py-16"> {/* Content wrapper with vertical padding */}
        <div className="container mx-auto px-4"> {/* Content container for centering */}
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center max-w-2xl mx-auto mb-8">
            We're eager to hear from you! Whether you have an upcoming event, a question,
            or just want to say hello, feel free to reach out using the form below or our contact details.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="space-y-6 p-6 bg-blue-50 rounded-xl shadow-inner border border-blue-200">
              <div>
                <label htmlFor="name" className="block text-gray-800 text-base font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 text-base font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 text-base font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 resize-y"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-300">
                Send Message!
              </button>
            </form>

            {/* Contact Info */}
            <div className="bg-orange-400 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center items-start">
              <h3 className="text-3xl font-bold mb-4">Reach Us Directly</h3>
              <p className="text-lg mb-3 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@yourcompany.com" className="hover:underline">fireandicegph@gmail.com</a>
              </p>
              <p className="text-lg mb-3 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                <a href="tel:+11234567890" className="hover:underline">(979) 571-0490</a>
              </p>
              <p className="text-lg flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                2300 E State Hwy 21 #400, Bryan, Texas 77803
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// Main App component
const App: React.FC = () => {
  // State to manage the currently active section
  const [activeSection, setActiveSection] = useState<keyof typeof sections>('home');

  // Function to render the active section component
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'menu':
        return <MenuSection />;
      case 'catering':
        return <CateringSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />; // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col font-sans antialiased text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow-lg p-4 sticky top-0 z-10 border-b border-blue-100">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              alt="Company Logo"
              className="w-120 h-60 mr-4 rounded-xl"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center sm:justify-start sm:gap-8">
            {Object.entries(sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key as keyof typeof sections)}
                className={`
                  text-lg font-bold rounded-lg transition duration-300 ease-in-out
                  ${activeSection === key
                    ? 'bg-orange-500 text-orange-700 shadow-md hover:bg-orange-500 transform hover:scale-105' // Orange active button
                    : 'text-orange-400 hover:text-orange-700 hover:bg-orange-50'} {/* Orange inactive hover */}
                `}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Section - dynamically rendered */}
      <main className="flex-grow">
        {renderSection()}
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-white p-8 mt-12"> {/* Dark blue footer, white text */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fire & Ice Snow Cones. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
