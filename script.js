document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("taxForm");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const grossIncome = parseFloat(document.getElementById("grossIncome").value);
        const extraIncome = parseFloat(document.getElementById("extraIncome").value);
        const deductions = parseFloat(document.getElementById("deductions").value);

        if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
            alert("Please enter valid numbers in all income fields.");
            return;
        }

        const taxableIncome = grossIncome + extraIncome - deductions;
        let tax = 0;

        if (taxableIncome > 800000) {
            const age = document.getElementById("age").value;
            switch (age) {
                case "<40":
                    tax = 0.3 * (taxableIncome - 800000);
                    break;
                case "≥40 &lt;60":
                    tax = 0.4 * (taxableIncome - 800000);
                    break;
                case "≥60":
                    tax = 0.1 * (taxableIncome - 800000);
                    break;
            }
        }

        const totalIncomeAfterTax = taxableIncome - tax;

        document.getElementById("finalTax").innerText = `Tax to be paid: ₹ ${tax.toFixed(2)}`;
        document.getElementById("totalIncomeAfterTax").innerText = `Total Income after Tax: ₹ ${totalIncomeAfterTax.toFixed(2)}`;
        modal.style.display = "block";
    });

    form.addEventListener("input", function(event) {
        const input = event.target;
        const errorIcon = input.nextElementSibling;
        if (input.type === "text" && isNaN(input.value)) {
            errorIcon.style.display = "inline-block";
            showTooltip(errorIcon);
        } else {
            errorIcon.style.display = "none";
        }
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function showTooltip(icon) {
        const tooltip = document.createElement("span");
        tooltip.className = "tooltip";
        tooltip.innerText = "Please enter a number.";

        icon.parentElement.appendChild(tooltip);

        icon.addEventListener("mouseover", function() {
            tooltip.style.opacity = "1";
            tooltip.style.visibility = "visible";
        });

        icon.addEventListener("mouseout", function() {
            tooltip.style.opacity = "0";
            tooltip.style.visibility = "hidden";
        });
    }
});
