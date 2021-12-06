
(() => {

    const wrapEl = document.querySelector(".wrap");
    let currentCon;

    const deActive = (el) => {
        el.classList.remove('active');
    }

    const onActive = (el) => {
        el.classList.add('active');
        currentCon = el;
    }


    const handleClick = (e) => {
        if (currentCon) {
            deActive(currentCon)
        }
        
        if(e.target.classList.contains('item')) {
            onActive(e.target.parentNode)
        }
    };
    wrapEl.addEventListener('click' , handleClick);
    
    onActive(document.querySelector('.con_1'));
    
})();

