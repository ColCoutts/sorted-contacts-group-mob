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

    return html;
}

export function loadContacts(contacts) {
    console.log(contacts);
}
