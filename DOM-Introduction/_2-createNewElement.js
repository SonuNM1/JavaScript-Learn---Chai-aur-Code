
const parent = document.querySelectorAll('.parent');

console.log(parent);

parent.forEach(parentElement => {
    const children = parentElement.children;
    console.log(children);

    // for (let i = 0; i < children.length; i++) {
    //     console.log(children[i].innerHTML);
    // }

    parent.children[1].style.color = "orange"

    console.log(parent.firstElementChild)
    console.log(parent.lastElementChild)

    const dayOne = document.querySelector('.day')
    console.log(dayOne)

    console.log(dayOne.parentElement)
    console.log(dayOne.nextElementSibling)

    console.log('nodes: ', dayOne.childNodes)

});
