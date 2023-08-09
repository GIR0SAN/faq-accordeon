const accordion = document.querySelector('[data-js="accordion"]')
accordion.addEventListener('click', e =>{
    const accordionHeaderId = e.target.dataset.accordionHeader
    
    const clickedAccordionHeader = document.querySelector(`[data-accordion-header="${accordionHeaderId}"]`)

    const accordionItemToBeOpened = document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)

    clickedAccordionHeader.classList.toggle('active')
    accordionItemToBeOpened.classList.toggle('active')

})