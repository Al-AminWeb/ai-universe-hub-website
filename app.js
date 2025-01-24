const loadTool = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const tools = data.data.tools;
    displayTool(tools);
}


const displayTool = tools =>{

    const toolContainer = document.getElementById('tool-container');

    tools.forEach(tool =>{
       const toolCard = document.createElement("div");
       toolCard.classList = `card bg-gray-300 w-96 shadow-xl`;
       toolCard.innerHTML = `
       <figure>
                    <img
                            src="${tool.image}"
                            alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${tool.name}</h2>
                    <p></p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
       `;
        toolContainer.appendChild(toolCard);

    })

}
loadTool();