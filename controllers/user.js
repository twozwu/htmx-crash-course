import fetch from 'node-fetch';

// Handle GET request to fetch users
export const users = async (req, res) => {
    // const users = [
    //   { id: 1, name: 'John Doe' },
    //   { id: 2, name: 'Bob Williams' },
    //   { id: 3, name: 'Shannon Jackson' },
    // ];

    setTimeout(async () => {
        const limit = +req.query.limit || 10;

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
        );
        const users = await response.json();

        res.send(`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join('')}
        </ul>
        `);
    }, 2000);
};


const contacts = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Doe', email: 'jane@example.com' },
    { name: 'Alice Smith', email: 'alice@example.com' },
    { name: 'Bob Williams', email: 'bob@example.com' },
    { name: 'Mary Harris', email: 'mary@example.com' },
    { name: 'David Mitchell', email: 'david@example.com' },
];

// Handle POST request for contacts search
export const search = (req, res) => {
    const searchTerm = req.body.search.toLowerCase();

    if (!searchTerm) {
        return res.send('<tr></tr>');
    }

    const searchResults = contacts.filter((contact) => {
        const name = contact.name.toLowerCase();
        const email = contact.email.toLowerCase();

        return name.includes(searchTerm) || email.includes(searchTerm);
    });

    setTimeout(() => {
        const searchResultHtml = searchResults
            .map(
                (contact) => `
        <tr>
          <td><div class="my-4 p-2">${contact.name}</div></td>
          <td><div class="my-4 p-2">${contact.email}</div></td>
        </tr>
      `
            )
            .join('');

        res.send(searchResultHtml);
    }, 1000);
};

// Handle POST request for contacts search from jsonplaceholder
export const searchApi = async (req, res) => {
    const searchTerm = req.body.search.toLowerCase();

    if (!searchTerm) {
        return res.send('<tr></tr>');
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const contacts = await response.json();

    const searchResults = contacts.filter((contact) => {
        const name = contact.name.toLowerCase();
        const email = contact.email.toLowerCase();

        return name.includes(searchTerm) || email.includes(searchTerm);
    });

    setTimeout(() => {
        const searchResultHtml = searchResults
            .map(
                (contact) => `
        <tr>
          <td><div class="my-4 p-2">${contact.name}</div></td>
          <td><div class="my-4 p-2">${contact.email}</div></td>
        </tr>
      `
            )
            .join('');

        res.send(searchResultHtml);
    }, 1000);
};