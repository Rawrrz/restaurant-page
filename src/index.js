import { HomeRender } from './home'
import { MenuRender } from './menu'

const home = HomeRender();
const menu = MenuRender();

// Get buttons
const home_btn = document.getElementById("home_btn");
const menu_btn = document.getElementById("menu_btn");

home.render();

home_btn.addEventListener('click', () =>
{
    home.render();
});
menu_btn.addEventListener('click', () =>
{
    menu.render();
});
