export default function makeContactRow(contact){
    const html = /*html*/`                
    <tr> 
        <td>${contact._id}</td> 
        <td>${contact.isActive ? 'Yes' : 'No'}</td>  
        <td>${contact.balance}</td>
        <td>
            <img src="${contact.picture}">
        </td>
        <td>${contact.age} yo</td>
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td>${contact.company}</td>
        <td>${contact.email}</td>
        <td>${contact.favoriteFruit}</td>
    </tr>`
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}



const contactTable = document.getElementById('table-body-list');

export function loadContacts(contacts) {
    clearRows();
    contacts.forEach(contact => {
        const dom = makeContactRow(contact);
        contactTable.appendChild(dom);
    });
}

function clearRows(){
    while(contactTable.children.length > 0){
        contactTable.lastElementChild.remove();
    }
}