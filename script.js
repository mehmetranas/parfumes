// JSON dosyasını yükle ve içeriği render et
fetch('perfumes.json')
    .then(response => response.json())
    .then(perfumes => {
        const container = document.getElementById('perfumes-container');
        perfumes.forEach(perfume => {
            const label = document.createElement('div');
            label.classList.add('label');
            label.innerHTML = `
                <div class="badge">${perfume.date}</div>
                <h1 class="perfume-name">${perfume.name}</h1>
                <div class="icon-text">
                    <span class="icon">🍒</span>
                    <span class="text">Notalar: ${perfume.notes}</span>
                </div>
                <hr>
                <div class="icon-text">
                    <span class="icon">🕰️</span>
                    <span class="text">Zaman: ${perfume.time}</span>
                </div>
                <hr>
                <div class="icon-text">
                    <span class="icon">🎉</span>
                    <span class="text">Etkinlik: ${perfume.occasion}</span>
                </div>
                <hr>
                <div class="icon-text">
                    <span class="icon">🧑‍🤝‍🧑</span>
                    <span class="text">Kimler: ${perfume.users}</span>
                </div>
                <hr>
                <div class="icon-text">
                    <span class="icon">🎂</span>
                    <span class="text">Yaş: ${perfume.age}</span>
                </div>
                <hr>
                <div class="icon-text">
                    <span class="icon">✨</span>
                    <span class="text">Hissi: ${perfume.feeling}</span>
                </div>
            `;
            container.appendChild(label);
        });
    })
    .catch(error => console.error('JSON yüklenirken bir hata oluştu:', error));
