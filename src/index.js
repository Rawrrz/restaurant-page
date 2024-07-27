import { HomeRender } from './home'
import { MenuRender } from './menu'
import { ContactRender } from './contact'

const home = HomeRender();
const menu = MenuRender();
const contact = ContactRender();

// Get buttons
const home_btn = document.getElementById("home_btn");
const menu_btn = document.getElementById("menu_btn");
const contact_btn = document.getElementById("contact_btn");

home.render();

home_btn.addEventListener('click', () =>
{
    home.render();
});
menu_btn.addEventListener('click', () =>
{
    menu.render();
});

contact_btn.addEventListener('click', () =>
{
    contact.render();
});
