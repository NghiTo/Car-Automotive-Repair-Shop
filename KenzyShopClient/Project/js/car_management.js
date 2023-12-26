const base_url = "https://655b1c01ab37729791a89024.mockapi.io"

const formID = document.getElementById("id")
const formLicensePlate = document.getElementById("license plate")
const formRepairDate = document.getElementById("repair date")
const formName = document.getElementById("name")
const formCatalog = document.getElementById("catalog")
const formCarMaker = document.getElementById("car maker")
const form = document.getElementById("car update form")
const tbody = document.getElementById("cars")
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
    const response = await fetch(`${base_url}/api/v1/Cars`, 
    {
        method: "GET",
        headers: 
        {
            "Content-Type": "application/json"
        }
    })
    const body = await response.json()
    console.log(body);
    showAllCars(body);
    hideLoading();
}

async function showAllCars(cars)
{
    tbody.innerHTML = "";
    for(const car of cars)
    {
        const row = tbody.insertRow();
        const licensePlate = document.createTextNode(car.licensePlate);
        row.insertCell().appendChild(licensePlate)
        const repairDate = car.repairDate;
        row.insertCell().innerText = repairDate;
        const customerName = car.customerName;
        row.insertCell().innerText = customerName;
        const catalog = car.catalog;
        row.insertCell().innerText = catalog;
        const carMaker = car.carMaker;
        row.insertCell().innerText = carMaker;
        const btn = document.createElement("button")
        btn.innerText = "🖊️Edit"
        btn.addEventListener("click", function()
        {
            formID.value = car.id
            formLicensePlate.value = car.licensePlate
            formRepairDate.value = car.repairDate
            formName.value = car.customerName
            formCatalog.value = car.catalog
            formCarMaker.value = car.carMaker
        })
        const btndl = document.createElement("button")
        btndl.innerText = "❌Delete"
        btndl.addEventListener("click", async function()
        {
            const confirmed = confirm("Do you want to delete this car?")
            if(confirmed)
            {
                showLoading();
                await deleteById(car.id);
                tbody.removeChild(row);
                hideLoading();
            }
        })
        row.insertCell().append(btn, btndl)
    }
}

async function update()
{
    const id = formID.value
    const response = await fetch(`${base_url}/api/v1/Cars/${id}`, {
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
            catalog: formCatalog.value,
            carMaker: formCarMaker.value
        })
    })
    const body = await response.json();
    console.log(body);
}

async function deleteById(id)
{
    const response = await fetch(`${base_url}/api/v1/Cars/${id}`, 
    {
        method: "DELETE",
        headers: 
        {
            "Content-Type": "application/json"
        }
    })
    const body = await response.json()
    console.log(body);
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