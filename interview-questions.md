# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer: A collection of key/value pairs. It works simmilar to an array, but in hash the key is the one pointing to the value in the array like an index is pointing to an element in an array.

  Researched answer: 
  An enumerable data structure where you can store data by using a unique key value pairings. Instead of using number index like an array, hash uses associative pairing like in a dictionary. In a dictionary we look up a word and we will find its meaning. In a hash, use the unique key to find the value paired to it. A hash can have as its value any object in ruby including strings, arrays, integers & Floats, etc.
  

2. What is a gem? 
 
  Your answer: 
  A library that contains a specific functionality. May include files of data needed to do that function.

  Researched answer:
 A library (collection) of codes that works on a specific function or task. Examples of a gems includes rspec, Ruby on Rails, etc. Gems makes coding in ruby easier and faster because you do not have to write the code from scratch. You just find the one applicable as solution to your problem and you can download the gem. There are gems for almost any task. Gems work on ruby designed for a specific platform based on a computers CPU, operating system and version.



3. What is Ruby on Rails? 

  Your answer: An application for the back end side of software developtment for using ruby language.

  Researched answer: 
  Ruby on Rails also known as rails is an open source, web application framework. It is a software library or a gem built using the Ruby programming language. Rails is a model-view-controller(MVC) framework that provides default structures for databs, a web service, and web pages. A lot of websites are built with Ruby on Rails among them are familiar names like Github, Netflix, Airbnb, Shopify to name a few. We are using a rails application daily in GitHub as most of what we do in the cohort are in GitHub.



4. What is a relational database? Are there other kinds of databases?

  Your answer: An organized collection of data. Usually using tables with rows and collumns.

  Researched answer:
  A collection of data items organized as a set of tables with columns and rows.
  These data items have pre-defined relationship between them. The columns hold actual value of an attribute and usually of the same data type. The rows are related values of one object or entity. Each row have a primary key, a unique identifier that points to that specific row. Almost like an index in an array but refers to the whole row not just one field in that row. All these data in the table are accessible in different ways without changing or reorganizing the database tables.

  There are othe kinds of databases and there are also different categories of databases. One of the common categories of databases will be based on the structure of data like relational(as mentioned above) and non relational(where data are stored as files). Databases can also be categorized based on the location, some examples of them are Centralized, Distributed, Cloud, Network, and Personal.
    


5. What are primary keys? Why are they important?

  Your answer: 
  Primary keys are the unique keys that identifies a row(horizontal fields) in a table. You may compare it to an index in an array or a key in a key value pair. The main difference is the primary keys point not just to one data but to all the data on fields of that particular row. They are the main tool in accessing data in a particular row.

  Researched answer: 
In a relational database each table use primary keys, a unique identifier that point to each row of the table. The primary key has a column or combination of column that contains a keyword or key characters unique to that row(can also be referred to a record). The Primary keys are used to compare and establish relationship between individual row(record). Without the Primary key, a row or record can not be uniquely identified and will defeat the purpose of having a relational database.And also because of this,Primary keys can not contain null values. A foreign key will also be relying on the Primary keys to establish relationship to other tables in the database.

It is recommended that in choosing a primary key: to make it short; use numbers when possible; keep it simple; and never change the Primary Key after it was assigned.

## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: A route that provides mapping from HTTPverbs  to controller CRUD actions.

2. JSON: JavaScript Object Notation a language independent data file format. Uses text easily readable to humans. Mainly used for storing and transmitting data objects that has large data like arrays and value pairs. 

3. ERB: ERB stands for Embedded RuBy. A feature of Ruby that allows the generation of any kind of text from templates.

4. Params: A Parameter. A kind of variable used to pass information between funcionsor procedure.

5. API: Stands for Application Programming Interface. A software that allows two applications to communicate to each other. Among the most commonly used API's are: Facebook., Google maps., Twitter.,etc.
