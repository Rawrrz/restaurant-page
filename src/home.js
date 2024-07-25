// Define the data model for the home page

function Home()
{
    const get_home_title = () =>
    {
        return "Dine N Dash";
    };

    const get_home_description = () => {
        return {
            Quote: "DineNDash is the best place to get high quality meals and rest",
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

};