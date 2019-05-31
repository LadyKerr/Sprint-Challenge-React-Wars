# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a javascript library that aims to solve the complex data is managed in an application. 
It is a component library built by Facebook that makes creating UI much more enjoyable and simple
for the developer. ReactJS uses functional components and class components to hold data. A class component
can be used to hold state (data) which can be passed to other parts of the application as props (properties).


1.  What does it mean to _think_ in react?

To think in react means to think in compartments (components). 
It means to break down a project/app into its smaller components in order to better aggregate the data needed.


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A classful/state component is one that ia able to hold/source/keep data on it. We are then able to change this data with the setState method to pass data around in other parts of the application. A functional component is one that can accept state through props, hold state and can accept a callback fundtion in setState.

1.  Describe state.

State needs to be kept on the constructor function and is mutable via the setState() method. It is an object that
can be referenced with the `this` keyword and can be passed around to the rest of the application. It is essentially
the house that keeps all the data that is needed.

1.  Describe props.

Props is an object with properties on it. An attribute needs to be added to the JSX custom element in order to pass
said object property to props. Props are immutable.