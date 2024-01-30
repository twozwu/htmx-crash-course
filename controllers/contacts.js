
export const contacts = (req, res) => {

  // 寫法一：帶外設定為true時，會取代同id的內容
  // <tr id="contacts-table" hx-swap-oob="true">
  //   <td>Joe Smith</td>
  //   <td>joe@smith.com</td>
  // </tr>

  // 寫法二：帶外設定為beforeend時，會在同id的內容之前插入
  res.send(`
    <div id="alert" hx-swap-oob="afterend">
        Saved!
    </div>
    <tr hx-swap-oob="beforeend:#contacts-table">
        <td>Joe Smith</td>
        <td>joe@smith.com</td>
    </tr>
    <form hx-post="/contacts">
      <label>
        Name
            <input name="name" type="text">  
      </label>
      <label>
        Email
            <input name="email" type="email">  
      </label>
      <button type="submit">Add</button>
    </form>
    `)
}