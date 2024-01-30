const locContainer = document.querySelectorAll('[data-cda-target="bm"]');
if (locContainer) {
    const listLoc = document.querySelectorAll('[data-cda="bm"]');
    locContainer.forEach( locWrapper => {
        const title = locWrapper.previousElementSibling;
        if (listLoc && listLoc.length > 0 && title) {
            title.style.display = 'block';
        }
        listLoc.forEach( el => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = el.innerText; 
            a.setAttribute('href', `#${el.id}`);
            li.append(a)
            locWrapper.appendChild(li);
        });
    });
}
