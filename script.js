const accordion = document.querySelector('[data-js="accordion"]')
accordion.addEventListener('click', e =>{
    const accordionHeaderId = e.target.dataset.accordionHeader
    
    const clickedAccordionHeader = 
        document.querySelector(`[data-accordion-header="${accordionHeaderId}"]`)

    const accordionItemToBeOpened = 
        document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)
    const accordionHeaderToBeClosed = Array
        .from(document.querySelectorAll('[data-js="accordion-header"]'))
        .filter(accordionHeader => accordionHeader !== clickedAccordionHeader)
        .find(accordionHeader => accordionHeader.classList.contains('active'))

        if(accordionHeaderToBeClosed){

           const accordionHeaderId =  accordionHeaderToBeClosed.dataset.accordionHeader
           const accordionBodyToBeClosed = document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)

           accordionHeaderToBeClosed.classList.remove('active')
           accordionBodyToBeClosed.classList.remove('active')
            
        }

    clickedAccordionHeader.classList.toggle('active')
    accordionItemToBeOpened.classList.toggle('active')
})