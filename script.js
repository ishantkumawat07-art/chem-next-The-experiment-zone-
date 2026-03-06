// Ensure no JavaScript runs before the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // ===== Periodic Table Search =====
  var searchInput = document.getElementById("searchInput");
  var searchBtn = document.getElementById("searchBtn");
  var resultPara = document.getElementById("result");
});
  // Simple element data (easy to extend)
  var elements = {
    hydrogen: { name: "Hydrogen", symbol: "H", atomicNumber: 1 },
    helium: { name: "Helium", symbol: "He", atomicNumber: 2 },
    lithium: { name: "Lithium", symbol: "Li", atomicNumber: 3 },
    beryllium: { name: "Beryllium", symbol: "Be", atomicNumber: 4 },
    boron: { name: "Boron", symbol: "B", atomicNumber: 5 },
    carbon: { name: "Carbon", symbol: "C", atomicNumber: 6 },
    nitrogen: { name: "Nitrogen", symbol: "N", atomicNumber: 7 },
    oxygen: { name: "Oxygen", symbol: "O", atomicNumber: 8 },
    fluorine: { name: "Fluorine", symbol: "F", atomicNumber: 9 },
    neon: { name: "Neon", symbol: "Ne", atomicNumber: 10 },
    sodium: { name: "Sodium", symbol: "Na", atomicNumber: 11 },
    magnesium: { name: "Magnesium", symbol: "Mg", atomicNumber: 12 },
    aluminium: { name: "Aluminium", symbol: "Al", atomicNumber: 13 },
    silicon: { name: "Silicon", symbol: "Si", atomicNumber: 14 },
    phosphorus: { name: "Phosphorus", symbol: "P", atomicNumber: 15 },
    sulfur: { name: "Sulfur", symbol: "S", atomicNumber: 16 },
    chlorine: { name: "Chlorine", symbol: "Cl", atomicNumber: 17 },
    argon: { name: "Argon", symbol: "Ar", atomicNumber: 18 }
  };

  function searchElement() {
    var rawInput = searchInput.value.trim();

    if (rawInput === "") {
      resultPara.textContent = "Please type an element name.";
      return;
    }
    searchBtn.addEventListener("click",
      searchElement);
    };

    var key = rawInput.toLowerCase();
    var element = elements[key];

    if (element) {
      resultPara.textContent =
        element.name +
        " (" +
        element.symbol +
        ") - Atomic Number: " +
        element.atomicNumber;
    } else {
      resultPara.textContent =
        "Element not found in this demo. Try names like hydrogen, oxygen, carbon.";
    }
  

  // Use addEventListener (no inline onclick)
  searchBtn.addEventListener("click", searchElement);

  // Optional: allow Enter key to trigger search
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchElement();
    }
  });

  // ===== Reaction Simulation =====
  var chemical1Select = document.getElementById("chemical1");
  var chemical2Select = document.getElementById("chemical2");
  var mixBtn = document.getElementById("mixBtn");
  var reactionResult = document.getElementById("reactionResult");

  function simulateReaction() {
    var chem1 = chemical1Select.value;
    var chem2 = chemical2Select.value;

    if (!chem1 || !chem2) {
      reactionResult.textContent = "Please select both chemicals.";
      return;
    }

    
    // HCl + NaOH
    if (
    (chem1 === "HCl" && chem2 === "NaOH") ||
    (chem1 === "NaOH" && chem2 === "HCl")
) {
      reactionResult.textContent =
        "Neutralization Reaction: Salt + Water are formed.";
      return;
    }
     // Na + Water
 if (
    (chem1 === "Water" && chem2 === "Sodium") ||
    (chem1 === "Sodium" && chem2 === "Water")
) {
    window.location.href ="reaction.html";
    return;
} 

    // Default case
    reactionResult.textContent = "No visible reaction.";
}

  mixBtn.addEventListener("click", simulateReaction);
