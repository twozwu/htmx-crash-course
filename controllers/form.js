
import xss from 'xss';

// Handle POST request for email validation
// app.post('/contact/email', (req, res) => {
export const validation = (req, res) => {
    const submittedEmail = req.body.email;
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    const isValid = {
        message: 'That email is valid',
        class: 'text-green-700',
    };

    const isInvalid = {
        message: 'Please enter a valid email address',
        class: 'text-red-700',
    };

    if (!emailRegex.test(submittedEmail)) {
        return res.send(
            `
        <div class="mb-4" hx-target="this" hx-swap="outerHTML">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
          >Email Address</label
        >
        <input
          name="email"
          hx-post="/contact/email"
          class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          type="email"
          id="email"
          value="${submittedEmail}"
          required
        />
        <div class="${isInvalid.class}">${isInvalid.message}</div>
      </div>
        `
        );
    } else {
        return res.send(
            `
        <div class="mb-4" hx-target="this" hx-swap="outerHTML">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
          >Email Address</label
        >
        <input
          name="email"
          hx-post="/contact/email"
          class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          type="email"
          id="email"
          value="${submittedEmail}"
          required
        />
        <div class="${isValid.class}">${isValid.message}</div>
      </div>
        `
        );
    }
};

// Handle GET request for profile edit
//   app.get('/profile/:id/edit', (req, res) => {
export const getProfile = (req, res) => {
    // You can send an HTML form for editing here
    res.send(`
    <div
    class="container mx-auto py-8 max-w-lg"
    hx-target="this"
    hx-swap="outerHTML"
  >
  <form hx-put="/profile/1" hx-target="this" hx-swap="outerHTML">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="mb-4">
          <label for="name" class="text-lg font-semibold">Name</label>
          <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400" value="John Doe">
        </div>
        <div class="mb-4">
          <label for="bio" class="text-lg font-semibold">Bio</label>
          <textarea id="bio" name="bio" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400" rows="6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum vestibulum elit, ac facilisis ipsum eleifend sed. Duis tincidunt augue nec neque cursus, nec aliquet purus tempor.</textarea>
        </div>
        <div class="mt-6">
        <button type="submit" class="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-600">Save Changes</button>
        <button type="button" hx-get="/profile.html" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg ml-2 hover:bg-gray-400">Cancel</button>
      </div>
      </div>
    </form>
  </div>
    `);
};

// Handle PUT request for editing
// app.put('/profile/:id', (req, res) => {
export const updateProfile = (req, res) => {
    const name = xss(req.body.name);
    const bio = xss(req.body.bio);

    // Send the updated profile back
    res.send(`
    <div
    class="container mx-auto py-8 max-w-lg"
    hx-target="this"
    hx-swap="outerHTML"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-4">${name}</h1>
      <p class="text-gray-700">
        ${bio}
      </p>
  
      <button
        hx-get="/profile/1/edit"
        class="bg-indigo-700 text-white font-bold w-full py-2 px-4 rounded-lg mt-4 hover:bg-indigo-600"
      >
        Click To Edit
      </button>
    </div>
  </div>
    `);
};