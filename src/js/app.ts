const inViewport = (elem: string): void => {
    const allElements: HTMLCollectionOf<Element> = document.getElementsByTagName(elem);
    const windowHeight: number = window.innerHeight;

    const elems = (): void => {
        for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
            const viewportOffset: DOMRect = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
            const top: number = viewportOffset.top;  //  get the offset top
            if (top < windowHeight) {  //  if the top offset is less than the window height
                (allElements[i] as HTMLElement).classList.add('revealed');  //  add the class
            } else {
                (allElements[i] as HTMLElement).classList.remove('revealed');  //  remove the class
            }
        }
    }

    elems();
    window.addEventListener('scroll', elems);
}

inViewport('section');  //  run the function on all section elements