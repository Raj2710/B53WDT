<!-- IMPLEMENTING FORMIK FOR FORM VALIDATION -->
1. npm install formik --save  to add formik to react package
2. npm install yup --save to get some predefined validation 
3. You can use <Formik/> component or useFormik Hook
4. create a object formik using useFormik
5. provide the initial values
6. provide the onSubmit function
7. construct validationSchema using Yup
8. Write the handleChange and handleBlur, id, name, value for each inputs
9. Write a conditional rendered div element to notify the error using formik error handlers.
10. Check all the error handlers in form and subit once everything is good.
11. while editing set  enableReinitialize:true to reinitalise form