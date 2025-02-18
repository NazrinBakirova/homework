
// Form aşağıdakı inputlardan ibarət olmalıdır:
// - 👤 Ad və Soyad (minimum 3 hərf)
// - 📅 Yaş (18-65 arası)
// - 💼 Vəzifə
// - ⭐ Təcrübə (illər)
// - 🎯 Bacarıqlar (çoxlu seçim)
// - 📆 İşə başlama tarixi

// ### 🏗️ Constructor Funksionallığı

// - Hər yeni işçi məlumatı Constructor vasitəsilə obyektə çevrilməlidir
// - Hər obyekt unikal ID-yə malik olmalıdır
// - Təcrübə və yaş arasında validasiya olmalıdır
// - İşçinin yaşı təcrübəsindən ən azı 18 yaş çox olmalıdır

// ### 📊 Cədvəl Bölməsi

// Cədvəldə aşağıdakı funksionallıqlar olmalıdır:
// - 📝 Bütün işçilərin siyahısı
// - 🔄 Sütunlara görə sıralama
// - 🔍 Axtarış
// - ✏️ Redaktə
// - 🗑️ Silmə
// - 💾 Məlumatların yadda saxlanması

// ## 🎨 Dizayn Tələbləri

// ### 🖥️ Desktop Görünüşü (min-width: 1024px)
// - Form və cədvəl yan-yana
// - Tam funksionallıq

// ### 📱 Mobil Görünüşü (max-width: 768px)
// - Form və cədvəl alt-alta
// - Scroll edilə bilən cədvəl
// - Responsiv düymələr
document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fields = ["fullName", "age", "position", "experience", "skills", "startDate"];
    const values = {};
    let valid = true;
    
    document.querySelectorAll(".error-message").forEach(el => el.remove());
    
    function showError(input, message) {
        const error = document.createElement("span");
        error.className = "error-message";
        error.style.color = "red";
        error.innerText = message;
        input.insertAdjacentElement("afterend", error);
    }
    
    fields.forEach(field => {
        let input = document.getElementById(field);
        values[field] = field === "skills" ? Array.from(input.selectedOptions).map(opt => opt.value).join(", ") : input.value;
    });
    
    if (values.fullName.length < 3) showError(document.getElementById("fullName"), "Ad və Soyad ən azı 3 simvol olmalıdır!"), valid = false;
    if (values.age < 18 || values.age > 65) showError(document.getElementById("age"), "Yaş 18 ilə 65 arasında olmalıdır!"), valid = false;
    if (values.position.length < 2) showError(document.getElementById("position"), "Vəzifə ən azı 2 simvol olmalıdır!"), valid = false;
    if (values.experience < 0) showError(document.getElementById("experience"), "Təcrübə mənfi ola bilməz!"), valid = false;
    
    if (!valid) return;
    
    const table = document.querySelector("#employeeTable tbody");
    const row = table.insertRow();
    row.innerHTML = `
        <td>${values.fullName}</td>
        <td>${values.age}</td>
        <td>${values.position}</td>
        <td>${values.experience}</td>
        <td>${values.skills}</td>
        <td>${values.startDate}</td>
        <td><button class="edit-btn">Redaktə</button></td>
        <td><button class="delete-btn">Sil</button></td>
    `;
    
    document.getElementById("employeeForm").reset();
    
    row.querySelector(".delete-btn").addEventListener("click", () => row.remove());
    
    row.querySelector(".edit-btn").addEventListener("click", function() {
        row.remove();
        fields.forEach((field, index) => document.getElementById(field).value = row.cells[index].innerText);
    });
});

function sortTable(n) {
    const table = document.getElementById("employeeTable");
    const rows = [...table.rows].slice(1).sort((a, b) => a.cells[n].innerText.localeCompare(b.cells[n].innerText));
    if (table.dataset.sortOrder === "asc") rows.reverse();
    rows.forEach(row => table.appendChild(row));
    table.dataset.sortOrder = table.dataset.sortOrder === "asc" ? "desc" : "asc";
}
