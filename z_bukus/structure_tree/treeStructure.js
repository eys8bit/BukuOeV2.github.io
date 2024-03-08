// Data JSON sebagai contoh
const jsonData = {
  name: "Ketua suku",
  href: "../link_web/link_web.html",
  imgSrc: "hemm.png",
  imgAlt: "Ketua suku",
  children: [
    {
      name: "Grand Child",
      href: "../blender/blender.html",
      imgSrc: "hemm.png",
      imgAlt: "Grand Child",
      children: [
        {
          name: "Great Grand Child",
          href: "a.html",
          imgSrc: "hemm.png",
          imgAlt: "Great Grand Child",
          children: [
            { name: "Great Grand Child3" },
            {
              name: "tambah",
              href: "index.html",
              imgSrc: "hemm.png",
              imgAlt: "kaga",
              children: [
                { name: "Great Grand Child" },
                { name: "Great Grand Child" },
                { name: "Great Grand Child" },
              ],
            },
          ],
        },
        { name: "Great Grand Child" },
      ],
    },
    {
      name: "Grand Child",
      href: "index.html",
      imgSrc: "hemm.png",
      imgAlt: "kaga",
      children: [
        { name: "Great Grand Child" },
        { name: "Great Grand Child" },
        {
          name: "Great Grand Child",
          children: [
            { name: "Great Grand Child" },
            { name: "Great Grand Child" },
            {
              name: "Great Grand Child",
              children: [
                { name: "Great Grand Child" },
                { name: "Great Grand Child" },
                {
                  name: "Great Grand Child",
                  children: [
                    { name: "Great Grand Child" },
                    { name: "Great Grand Child" },
                    {
                      name: "Great Grand Child",
                      children: [
                        { name: "Great Grand Child" },
                        { name: "Great Grand Child" },
                        {
                          name: "Great Grand Child",
                          children: [
                            { name: "Great Grand Child" },
                            { name: "Great Grand Child" },
                            { name: "Great Grand Child" },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Fungsi untuk membuat struktur pohon dari data JSON
function buildTree(parentElement, data) {
  const ul = document.createElement("ul");
  data.forEach((item, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href || "#"; // Jika 'href' tidak tersedia dalam objek JSON, maka defaultnya akan menjadi '#'

    const img = document.createElement("img");
    img.src = item.imgSrc || "hemm.png"; // Jika 'imgSrc' tidak tersedia dalam objek JSON, maka defaultnya akan menjadi 'hemm.png'
    img.alt = item.imgAlt || "";
    const span = document.createElement("span");
    span.textContent = item.name;

    a.appendChild(img);
    a.appendChild(span);
    li.appendChild(a);

    if (item.children) {
      buildTree(li, item.children);
    }
    ul.appendChild(li);
  });
  parentElement.appendChild(ul);
}

// Panggil fungsi untuk membuat struktur pohon dari data JSON
const treeContainer = document.getElementById("treeContainer");
buildTree(treeContainer, [jsonData]);
