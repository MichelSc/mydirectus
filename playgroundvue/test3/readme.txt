Create a project

install the vue cli globally
cmd:  npm install -g @vue/cli

check the installation
cmd: vue --version

create a project
cmd: vue create <project-name>
interactively, select the vue version (2 or 3)

Install the dependencies
cmd: npm install vue-chartjs chart.js --save

Test the project
Start the server
cmd: npm run serve
Open the browser
url: http://localhost:8080/


General note: the npm installed executable are not in the path, but in AppData/Roaming/npm. So on windows, we need to prefix the executable with this path.
