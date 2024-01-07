const autocompleteData = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis",  "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan",
 "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"];


const inputField = document.getElementById("myInput");
const autocompleteList = document.getElementById("autocomplete-list");


inputField.addEventListener("input", function() {
    const inputValue = this.value.toLowerCase();

    if (inputValue.trim() !== "" ) {
        const matchingSuggestions = autocompleteData.filter(item => item.toLowerCase().startsWith(inputValue));
        displaySuggestions(matchingSuggestions);
    } else {
        autocompleteList.innerHTML = "";
    }
});

function displaySuggestions(suggestions) {
    autocompleteList.innerHTML = "";

    suggestions.forEach(function(suggestion) {
        const listItem = document.createElement("li");
        listItem.textContent = suggestion;
        listItem.addEventListener("click", function() {
            inputField.value = suggestion;
            autocompleteList.innerHTML = "";
        });
        autocompleteList.appendChild(listItem);
    });
}

document.addEventListener("click", function(event) {
    if (event.target !== inputField && event.target !== autocompleteList) {
        autocompleteList.innerHTML = "";
    }
});
