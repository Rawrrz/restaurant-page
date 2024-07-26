// Define the data model for the home page

function Home()
{
    const get_home_title = () =>
    {
        return "Dine N Dash";
    };

    const get_home_description = () => {
        return {
            Quote: "DineNDash is the best place to get high quality meals and rest.",
            Author: "Robert Dash"
        };
    };

    const get_home_hours = () =>
    {
        return ["Sunday: 8am - 8pm", 
            "Monday: 6am - 6pm",
            "Tuesday: 6am - 6pm",
            "Wednesday: 6am - 6pm",
            "Thursday: 6am - 10pm",
            "Friday: 6am - 10pm",
            "Saturday: 8am - 10pm"
        ];
    }

    const get_home_location = () =>
    {
        return "321 Dine Drive, Dashing, TX";
    }

    return {get_home_title, get_home_description, get_home_hours, get_home_location};
};

function HomeRender()
{
    const home = Home();

    const render = () =>
    {
        // Content div
        const content = document.getElementById("content");
        // Clear the div
        content.textContent = "";

        // Home Description
        const description = document.createElement("h2");
        description.innerText = home.get_home_description().Quote;

        content.appendChild(description);

    }

    return {render};
}

export { HomeRender };