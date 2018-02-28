# RepoBrowser

The RepoBrowser is a utility to browser an organization's repositories and to view the commits

- It uses Ext JS 6 UI framework from http://www.sencha.com to create the UI interfaces.
- There is no server code currently existing as the data is fetched from the public REST APIs of GitHub.

# Steps to Run the Application:

1. Deploy the file RepoBrowser.war lying under RepoBrowser/export directory inside a web server.
2. Hit the URL - http://<server-name>:<port>/RepoBrowser/ExtRepoApp/index.html
3. A page showing Netflix' public repositories will appear.
4. The top header bar allows to change the organization and view the repositories of a different organization. Enter the    organization's "github login id" to search it. For example - for GitHub it is just "github". Press Enter Key and it should reload the repositories grid with those that belong to the organization requested.
5. The repository data is sorted based on Number of Forks in a descending order. The UI grid supports sorting the data on the client side through other Grid columns. However, it is a local sorting (sort happening on data that is currently being shown in the grid) and it is not supporting remote sorting because GitHub API does not support sorting the organization's repositories in their List Repositories for Organization API.  
6. The last column in the repositories grid is a link to a page that shows Recent Commits on the master branch of that repository. On navigating the link, the next page should show the Commits data. The commits data is sorted remotely by the GitHub's API on the field  "Last Updated" in a descending order.
7. It does not require any build steps in order to be able to deploy and run the application as is. For making any changes, the JS and HTML can be modified without building. However the CSS is currently contained in .scss files which makes it a requirement to compile them to .css and thus use a tool like Sencha CMD to generate the .css files. However this is necessary only if any changes are needed in the stylesheet.

# Features:

1. Shows an Organization's GitHub brief profile information - Starts with Netflix as the default (1st page)
2. Displays the list of few repositories of the selected organization (not all of them because the paging is not yet enabled)
3. Allows sorting the repositories data on different columns - the default sort is Number of Forks (client-side only) (descending)
4. Shows the list of Commits made on the master branch for a particular repository.
5. Allows sorting the commits data on different columns - default sort is Last Updated
6. Shows an error message if there is a problem retrieving data from GitHub API
7. On the repositories page, it expands the grid row by clicking on + sign to view more details.
8. The code is organized in to MVVM (Model View ViewModel) architecture as recommeded by Sencha to support two way data bindings, separation of concerns, inheritance of data between parent and child screens, automatic instantiations and destructions of classes associated with the view with view's lifecycle. 

# Limitations (not an exhaustive list)

1. Does not support back and forward buttons to navigate between repositories and commits screens.
2. Does not support pagination to access the entire data.
3. Does not perform remote sorting.
4. Does not display commits for a different branch other than master.
5. Lacks automated test cases.
6. The build currently (.war) is not a production build because it does not include JS minification optimizations supported by Ext JS out of the box and needs the "ext" folder in the "WebContent" directory to function. This "ext" folder is a framework folder required only during development and not required for production use. Hence currently the size of .war file is pretty high (around 33 MB) which should come down very significantly once the minification is in place.
7. It is not a responsive design, although with Ext JS, writing dedicated UI is the suggested approach because it provides dedicated library of UI components optimized for mobile devices and also allows to re-use data related (model and stores) code to be shared between desktop and mobile apps. Also the code for history, URL management, routing can be shared between desktop and mobile apps.

# Manual Tests

1. The organization's github profile data must appear correctly.
2. The organization's repositories data must appear correctly.
3. The commits data of the selected repository must appear correctly.
4. Proper error messages should be displayed if there is any problem fetching the data or for any other problems in the UI app with meaningful error messages to the end user.
5. The application must be easy and intuitive to use.
6. The application must have an acceptable/excellent response time.
7. If some of the fields are not having values from the server, then it should show proper default values / blank space and must not show values like "null", neither should the UI break because of the unavailabiltiy of parts of data.
8. The heavy framework files must be cacheable on the browser to not load it every time.
9. The un-necessary nesting of components must be avoided which can reduce performance.
