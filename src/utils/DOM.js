export const createDOMElement = (elType, attributes = null, classes = null) => {
    const el = document.createElement(elType);
    if(attributes) {
        for(const attr in attributes) {
            if(attributes.hasOwnProperty(attr)) {
                el.setAttribute(attr, attributes[attr]);
            }
        }
    }
    if(classes) {
        for(const cl of classes) {
            el.classList.add(cl);
        }
    }
    return el;
};
