const loadTool = async (searchText) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/ai/tool/${searchText}`);
    const data = await res.json();
    const tools = data.data.tools;
    displayTool(tools);
}


const displayTool = tools => {

    const toolContainer = document.getElementById('tool-container');

    tools.forEach(tool => {
        const toolCard = document.createElement("div");
        toolCard.classList = `card bg-gray-300 p-4 mt-10 shadow-xl`;
        toolCard.innerHTML = `
       <figure>
                    <img
                            src="${tool.image}"
                            alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${tool.name}</h2>
                    <div>
                    <h6 class="font-extrabold">Features</h6>
                    <ol class="list-decimal ml-5">
                    <li>Natural language processing</li>
                    <li>Contextual understanding</li>
                    <li>Text generation</li>
                    </ol>
                    </div>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">See More</button>
                    </div>
                </div>
       `;
        toolContainer.appendChild(toolCard);

    })
}

const handleSearch = () => {
 const searchField = document.getElementById('search-field');
 const searchText = searchField.value;
 console.log(searchText);


}

// loadTool();