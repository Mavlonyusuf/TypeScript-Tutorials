import Product from "./Product";
const form = <HTMLFormElement>document.getElementById("form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  let price: number = +(<HTMLInputElement>(
    document.getElementById("product-price")
  )).value.trim();
  let name: string = (<HTMLInputElement>(
    document.getElementById("product-name")
  )).value.trim();
  const product = new Product(name, price);

  const table = document.getElementById("table");
  table?.insertAdjacentHTML(
    "beforeend",
    `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
              scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ${product.id}
              </th>
              <td class="px-6 py-4">${product.name}</td>
              <td class="px-6 py-4">${product.price}</td>
            </tr>
            `
  );
  form.reset();
});
