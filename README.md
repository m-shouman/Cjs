# **Cjs**
Cjs is a small library for JavaScript that provides some missing features of OOP in JavaScript. Till now it has only overloading feature but it is planned to add another features.

### Table of Contents
1. Why Cjs.
2. Installation.
3. Get Started.
4. Recommandations.

#### 1. Why Cjs:
- It's a lightweight library.
- Isolates your functions in another scope.
- Provieds a overloading style to your code.
- Little restrictions of function naming.

#### 2. Installation:
You can get Cjs using 3 different ways:
- Git: clone & build this repository.
- Bower: `$ bower install c-js --save`.
- npm:  `$ npm install c-js`.

after downloading Cjs, add it to your index.htm file `<script src='{yourpath}/cjs/cjs-min.js'></script>`

#### 3. Get Started:
When you add **Cjs** to your index.htm, **Cjs** will add **C** property to **window** object which enables you to use **Cjs** features.
 ***Note:*** if window object has already **C** property, **Cjs** can't add its **C** object so you should follow this:
 `window.cjsConfig.reInit({anyNameYouWant});`
 **C** object has only one function with name **Function** which allow you to register or call your function with diffrent overloading. See this example:
  
    C.Function('greet',[],'void',function(){
        console.log('Hello Cjs');
    })
    .Function('greet',['string'],'void',function(name){
        console.log('Hello ' + name);
    })
    .Function('greet',['string','string'],'void',function(greetWord,name){
        console.log(greetWord + " " + name);
    });
    
What have we done just now? we have registered our function 'greet' in three diffrent overloadings. let's continue and call this function:

    C.Function('greet'); or C.Function('greet',[]); ===> 'Hello Cjs'
    C.Function('greet',['World']); ===> 'Hello World'
    C.Function('greet',['Hi','John']); ===> 'Hi John'

As we see Cjs can detect the overload you want at from your parameters type!!

#### 4. Recommandations:
I recommend you to use Cjs first for fun because it is not completed as framework or you can use it in a small project. Creating a standalone file for Cjs function will be more elegant to be used to register your functions and call them in everywhere. 
    
