React Native Camera Project
===========================

Hello everyone!

To initiate the project, begin by running the 'npm install' command in your terminal. Following that, you'll need to set up a virtual device such as 'Android Studio or XCode.' All the necessary instructions can be found at React Native Environment Setup.

However, you might encounter an issue with the react-native-camera package due to the removal of some hooks from React. To address this, locate ./node_modules/react-native-camera/src/RNCamera.js and remove 'ViewPropTypes' from the import statement. Then, add a new line:

(javascript)

import { ViewPropTypes } from 'deprecated-react-native-prop-types';


Finally, you can run the project on your virtual device or physical phone.

In the 'navigation' folder, you'll find 'MainContainer.tsx,' which is responsible for the bottom navigator and navigation. Inside the 'screens' folder, 'HomeScreen.tsx' handles sending an HTTP request to the main server to initiate the Python script (though it's not yet complete). 'AddUser.tsx' is responsible for capturing a photo, encoding it to base64, and posting it with the new user's name and photo count using fetch.

Please note that the project is not yet completed. If you have any questions or encounter issues while running the project, feel free to contact me.
