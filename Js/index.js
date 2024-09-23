
// Show sections
function showSection(id) {
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}

document.getElementById("btn-donation").addEventListener("click", function () {
    showSection("donation-section");
});

document.getElementById("btn-history").addEventListener("click", function () {
    showSection("history-section");
});

// Show active tab
function showActiveTab(id) {
    document.getElementById("btn-donation").classList.remove("bg-lime-400");
    document.getElementById("btn-history").classList.remove("bg-lime-400");
    document.getElementById("btn-donation").classList.remove("border-2");
    document.getElementById("btn-history").classList.remove("border-2");

    document.getElementById(id).classList.add("bg-lime-400");
}

document.getElementById("btn-donation").addEventListener("click", function () {
    showActiveTab("btn-donation");
    document.getElementById("btn-history").classList.add("border-2");
});

document.getElementById("btn-history").addEventListener("click", function () {
    showActiveTab("btn-history");
    document.getElementById("btn-donation").classList.add("border-2");
});

// Getting inputs
function getInputNumberById(id) {
    const value = document.getElementById(id).value;
    const number = parseFloat(value);

    if (isNaN(number) || number <= 0) {
        alert("Invalid input!");
        return null;
    }

    return number;
}

function getTextNumberById(id) {
    const innerText = document.getElementById(id).innerText;
    const number = parseFloat(innerText);
    return number;
}

// Donation button operations
function donationClickOperation(id1, id2, id3, id4) {
    document.getElementById(id1).addEventListener("click", function () {
        const donationAmount = getInputNumberById(id2);

        if (donationAmount === null) {
            return;
        }

        const previousAmount = getTextNumberById(id3);
        const totalDonation = donationAmount + previousAmount;
        const mainBalance = getTextNumberById("main-balance");
        const updateBalance = mainBalance - donationAmount;

        if (updateBalance <= 0) {
            alert("You don't have sufficient balance!");
            return;
        }

        document.getElementById(id3).innerText = totalDonation.toFixed(2);
        document.getElementById("main-balance").innerText = updateBalance.toFixed(2);

        document.getElementById("no-history").classList.add("hidden");

        const currentDate = new Date().toLocaleString();
        const newDiv = document.createElement("div");
        const text = document.getElementById(id4).innerText;

        newDiv.innerHTML = `
        <div class="p-4 border-2 rounded-lg">
        <p class="font-bold">${donationAmount} taka donated for ${text}</p>
        <p class="text-gray-500">Date: ${currentDate}</p>
        </div>
        `
        document.getElementById("history-section").appendChild(newDiv);

        document.getElementById("dialog").classList.remove('hidden');
        document.getElementById("close-dialog").addEventListener('click', function () {
            document.getElementById('dialog').classList.add('hidden');
        });
    });
}

donationClickOperation("btn-donation-1", "input-donation-1", "card-balance-1", "donation-1-text");
donationClickOperation("btn-donation-2", "input-donation-2", "card-balance-2", "donation-2-text");
donationClickOperation("btn-donation-3", "input-donation-3", "card-balance-3", "donation-3-text");