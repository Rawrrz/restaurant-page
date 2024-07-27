// Define data model for contact page


const contacts = 
[
    {
       name:  "John Smith",
       role: "General Manager",
       number: "(555) 123-4567",
       email: "john.smith@dinendash.com"
    },
    {
       name:  "Emily Davis",
       role: "Head Chef",
       number: "(555) 234-5678",
       email: "emily.davis@dinendash.com"
    },
    {
       name:  "Sarah Johnson",
       role: "Event Coordinator",
       number: "(555) 345-6789",
       email: "sarah.johnson@dinendash.com"
    },
    {
       name:  "Michael Brown",
       role: "Customer Service Manager",
       number: "(555) 456-7890",
       email: "michael.brown@dinendash.com"
    }
];


function Contact()
{

    const get_contacts = () =>
    {
        const contact_list = contacts;
        
        return { contact_list };
    }

    return { get_contacts };
}

function ContactRender()
{
    const contact = Contact();

    const render = () =>
    {
        // Content div
        const content = document.getElementById("content");
        // Clear the div
        content.textContent = "";

        // Tester for getting info
        const description = document.createElement("h2");
        description.innerText = contact.get_contacts().contact_list[0].name;

        content.appendChild(description);

    }

    return { render };
}

export { ContactRender };