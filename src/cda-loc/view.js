const createListAnchor = (text, link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = text;
    a.setAttribute('href', `#${link}`);
    li.appendChild(a);
    return li;
}

const renderCdaLOC = () => {
    const ulContainer = document.querySelectorAll('[data-cda-target="bm"]');
    if (ulContainer) {
        const headers = document.querySelectorAll('[data-cda="bm"]');
        ulContainer.forEach(ulOutside => {
            const title = ulOutside.previousElementSibling;
            if (headers && headers.length > 0 && title) {
                title.style.display = 'block';
            }

            let parentLi = null;
            headers.forEach((el, index) => {
                const li = createListAnchor(el.innerText, el.id);
                if (el.tagName === 'H3') {
                    if (index <= 0 && !parentLi) {
                        const emptyLi = document.createElement('li');
                        emptyLi.appendChild(document.createElement('ul'));
                        ulOutside.appendChild(emptyLi);
                        parentLi = emptyLi;
                    } else if (index > 0 && !parentLi.querySelector('ul')) {
                        parentLi.appendChild(document.createElement('ul'));
                    }
                    parentLi.querySelector('ul').appendChild(li);
                } else if (el.tagName === 'H2') {
                    ulOutside.appendChild(li);
                    parentLi = li;
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', renderCdaLOC);
