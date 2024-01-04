const base_url = "http://localhost:8080"

const formId = document.getElementById("id")
const formLicensePlate = document.getElementById("license plate")
const formRepairDate = document.getElementById("repair date")
const formName = document.getElementById("name")
const formPrice = document.getElementById("price")
const formStatusDamaged = document.getElementById("status damaged")
const formRepairStatus = document.getElementById("repair status")
const form = document.getElementById("Accessory form")
const tbody = document.getElementById("accessories")
const loading = document.getElementById("loading")

form.addEventListener("submit", async function(e)
{
    e.preventDefault();
    await update();
    findAll()
    this.reset()
})

findAll();

async function findAll()
{
    showLoading();
    const response = await fetch(`${base_url}/api/v1/accessories`, 
    {
        method: "GET",
        headers: 
        {
            "Content-Type": "application/json"
        }
    })
    const body = await response.json()
    console.log(body);
    showAllAccessories(body.content);
    hideLoading();
}

async function showAllAccessories(accessories)
{
    tbody.innerHTML = "";
    for(const accessory of accessories)
    {
        const row = tbody.insertRow();

        const id = document.createTextNode(accessory.id);
        row.insertCell().appendChild(id);

        const licensePlate = document.createTextNode(accessory.licensePlate);
        row.insertCell().appendChild(licensePlate)

        const repairDate = accessory.repairDate;
        row.insertCell().innerText = repairDate;

        const name = accessory.name;
        row.insertCell().innerText = name;

        row.insertCell().innerText = accessory.price;

        row.insertCell().innerText = accessory.statusDamaged;

        row.insertCell().innerText = accessory.repairStatus;

        const btn = document.createElement("button")
        btn.innerText = "🖊️Edit"
        btn.addEventListener("click", function()
        {
            formId.value = accessory.id
            formLicensePlate.value = accessory.licensePlate
            formRepairDate.value = accessory.repairDate
            formName.value = accessory.name
            formPrice.value = accessory.price
            formStatusDamaged.value = accessory.statusDamaged
            formRepairStatus.value = accessory.repairStatus
        })
        const btndl = document.createElement("button")
        btndl.innerText = "❌Delete"
        btndl.addEventListener("click", async function()
        {
            const confirmed = confirm("Do you want to delete this accessory?")
            if(confirmed)
            {
                showLoading();
                await deleteById(accessory.id);
                tbody.removeChild(row);
                hideLoading();
            }
        })
        row.insertCell().append(btn, btndl)
    }
}

async function update()
{
    const response = await fetch(`${base_url}/api/v1/cars`, 
    {
        method: "PUT",
        headers: 
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
        {
            licensePlate: formLicensePlate.value, 
            repairDate: formRepairDate.value,
            customerName: formName.value,
            catalogs: formCatalog.value,
            carMaker: formCarMaker.value
        })
    })
    const body = await response.json();
    console.log(body);
}

async function deleteById(id)
{
    const response = await fetch(`${base_url}/api/v1/accessories/${id}`, 
    {
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json"
        }
    })
}

function showLoading()
{
    loading.style.display = "flex"
}

function hideLoading()
{
    setTimeout(function()
    {
        loading.style.display = "none"
    }, Math.random() * 2000);
}