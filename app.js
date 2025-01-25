let allTools = []; // Store all tools globally

const loadTool = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    allTools = data.data.tools; // Save all tools
    displayTool(allTools, false); // Show only 6 tools at first
}

const displayTool = (tools, showAll) => {
    const toolContainer = document.getElementById('tool-container');
    toolContainer.innerHTML = ""; // Clear old tools

    const showAllContainer = document.getElementById('show-all-container');

    if (!showAll && tools.length > 6) {
        showAllContainer.classList.remove('hidden');
        tools = tools.slice(0, 6); // Show only 6 tools initially
    } else {
        showAllContainer.classList.add('hidden'); // Hide button if all tools are shown
    }

    tools.forEach(tool => {
        const toolCard = document.createElement("div");
        toolCard.classList = `card bg-gray-300 p-4 mt-10 shadow-xl`;
        toolCard.innerHTML = `
            <figure>
                <img src="${tool.image}" alt="${tool.name}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${tool.name}</h2>
                <div>
                    <h6 class="font-extrabold">Features</h6>
                    <ol class="list-decimal ml-5">
                        ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ol>
                </div>
                <div class="card-actions justify-center">
                    <button onclick="handleShowDetails('${tool.id}');" class="btn btn-primary" >See More</button>
                </div>
            </div>
        `;
        toolContainer.appendChild(toolCard);
    });
};

const handleShowDetails = async (id) => {
console.log(id);

//load single tool data
   const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
   const data = await res.json();
   console.log(data);
    showToolDetails(data.data)
}

const showToolDetails = (tool) =>{
    const toolName = document.getElementById('tool-name');
    toolName.innerText = tool.tool_name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `

     <div class="grid grid-cols-2 gap-4 items-center">
    <!-- Left Side: Image -->
    <div>
        <img src="${tool.image_link[0]}" alt="Image" class="w-full h-64 object-cover rounded-lg">
    </div>

    <!-- Right Side: Text Content -->
    <div>
        <h1 class="text-2xl font-bold text-gray-800">Integrations</h1>
        <p>1. ${tool.integrations?.[0] || "No data available"}</p>
        <p>2. ${tool.integrations?.[1] || "No data available"}</p>
        <p>3. ${tool.integrations?.[2] || "No data available"}</p>
    </div>
</div>
     
    `


    show_detail_modal.showModal();

}


// "Show All" button functionality
document.getElementById('show-all-btn').addEventListener('click', () => {
    displayTool(allTools, true); // Show all tools when button is clicked
});

loadTool(); // Load tools when page loads
