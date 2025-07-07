<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DCB – Design Create Build</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-800 font-sans">

  <!-- Hero Section -->
  <header class="bg-gray-900 text-white py-16">
    <div class="container mx-auto text-center">
      <img src="logo.png" alt="DCB Logo" class="mx-auto mb-6 w-[700px]">
    </div>
  </header>

  <!-- About Section -->
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6">About Us</h2>
      <p class="text-lg leading-relaxed">
        DCB is a full-service construction company offering residential building, remodeling, demolition, and land preparation. We focus on quality, transparency, and customer satisfaction.
      </p>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-12">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Residential Construction</h3>
          <p>From foundation to finish, we build your dream home.</p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Remodeling</h3>
          <p>Interior and exterior upgrades tailored to your needs.</p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Demolition</h3>
          <p>Safe and efficient removal of old structures.</p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Land Preparation</h3>
          <p>Grading, clearing, and prepping your site the right way.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Work</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <!-- Replace these with your image filenames -->
        <img src="IMG_1.jpg" alt="Project 1" class="rounded-lg shadow" />
        <img src="IMG_2.jpg" alt="Project 2" class="rounded-lg shadow" />
        <img src="IMG_3.jpg" alt="Project 3" class="rounded-lg shadow" />
        <!-- Add more <img> as needed -->
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="py-12">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form class="max-w-xl mx-auto space-y-4" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" class="w-full p-3 border border-gray-300 rounded" required />
        <input type="email" name="email" placeholder="Email" class="w-full p-3 border border-gray-300 rounded" required />
        <textarea name="message" placeholder="Your message..." class="w-full p-3 border border-gray-300 rounded" rows="4" required></textarea>
        <button type="submit" class="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Quote Section -->
  <section class="py-12 bg-blue-50">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Request a Quote</h2>
      <form class="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Project Type" class="w-full p-3 border border-gray-300 rounded" required />
        <input type="text" placeholder="Location" class="w-full p-3 border border-gray-300 rounded" required />
        <input type="tel" placeholder="Phone Number" class="w-full p-3 border border-gray-300 rounded" required />
        <button type="submit" class="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700">Get Quote</button>
      </form>
    </div>
  </section>

  <!-- Google Map Section -->
  <section class="py-12">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Find Us in Mariposa, CA</h2>
      <div class="w-full h-[450px]">
        <iframe class="w-full h-full rounded-lg shadow" frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.1380063138775!2d-119.96658662426628!3d37.48455372815426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096e16c30c9cd21%3A0x6fc10a426c7e6d77!2sMariposa%2C%20CA%2095338!5e0!3m2!1sen!2sus!4v1720285643556" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-6">
    <div class="container mx-auto px-6 md:px-12 text-center">
      <p>&copy; 2025 DCB – Design Create Build. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
📝 Notes:
Replace "logo.png" and "IMG_1.jpg" etc. with your actual filenames.

Place the images in the same folder as this index.html or adjust the paths







You said:
full website code in readme


ChatGPT said:
Here’s how you can include your full website code inside a README.md file for your GitHub repository.

✅ README.md Example (With Full HTML Code)
Create a file named README.md in your repo and paste the content below:

markdown
Copy
Edit
# DCB Construction Website

This is the full static HTML website for **DCB – Design Create Build**, a construction company serving Mariposa and surrounding areas.

---

## 🔧 How to Use

Just open `index.html` in any browser or drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop) to go live instantly.

---

## 🌐 Live Preview

*(Optional: add your Netlify link here)*  
[https://your-site-name.netlify.app](https://your-site-name.netlify.app)

---

## 📄 Full `index.html`

<details>
  <summary>Click to expand full website code</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DCB – Design Create Build</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-800 font-sans">

  <!-- Hero Section -->
  <header class="bg-gray-900 text-white py-16">
    <div class="container mx-auto text-center">
      <img src="logo.png" alt="DCB Logo" class="mx-auto mb-6 w-[700px]">
    </div>
  </header>

  <!-- About Section -->
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6">About Us</h2>
      <p class="text-lg leading-relaxed">
        DCB is a full-service construction company offering residential building, remodeling, demolition, and land preparation. We focus on quality, transparency, and customer satisfaction.
      </p>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-12">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Residential Construction</h3>
          <p>From foundation to finish, we build your dream home.</p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Remodeling</h3>
          <p>Interior and exterior upgrades tailored to your needs.</p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Demolition</h3>
          <p>Safe and efficient removal of old structures.</p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Land Preparation</h3>
          <p>Grading, clearing, and prepping your site the right way.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Work</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="IMG_1.jpg" alt="Project 1" class="rounded-lg shadow" />
        <img src="IMG_2.jpg" alt="Project 2" class="rounded-lg shadow" />
        <img src="IMG_3.jpg" alt="Project 3" class="rounded-lg shadow" />
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="py-12">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form class="max-w-xl mx-auto space-y-4" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" class="w-full p-3 border border-gray-300 rounded" required />
        <input type="email" name="email" placeholder="Email" class="w-full p-3 border border-gray-300 rounded" required />
        <textarea name="message" placeholder="Your message..." class="w-full p-3 border border-gray-300 rounded" rows="4" required></textarea>
        <button type="submit" class="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Quote Section -->
  <section class="py-12 bg-blue-50">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Request a Quote</h2>
      <form class="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Project Type" class="w-full p-3 border border-gray-300 rounded" required />
        <input type="text" placeholder="Location" class="w-full p-3 border border-gray-300 rounded" required />
        <input type="tel" placeholder="Phone Number" class="w-full p-3 border border-gray-300 rounded" required />
        <button type="submit" class="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700">Get Quote</button>
      </form>
    </div>
  </section>

  <!-- Google Map Section -->
  <section class="py-12">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Find Us in Mariposa, CA</h2>
      <div class="w-full h-[450px]">
        <iframe class="w-full h-full rounded-lg shadow" frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.1380063138775!2d-119.96658662426628!3d37.48455372815426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096e16c30c9cd21%3A0x6fc10a426c7e6d77!2sMariposa%2C%20CA%2095338!5e0!3m2!1sen!2sus!4v1720285643556" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-6">
    <div class="container mx-auto px-6 md:px-12 text-center">
      <p>&copy; 2025 DCB – Design Create Build. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
