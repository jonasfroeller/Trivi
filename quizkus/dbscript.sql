-- Create Topic table
CREATE TABLE Topic (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
);

-- Create Question table
CREATE TABLE Question (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255) NOT NULL,
    is_multiple_choice BOOLEAN NOT NULL
);

-- Create Answer table
CREATE TABLE Answer (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255) NOT NULL,
    is_correct BOOLEAN NOT NULL,
    question_id BIGINT,
    FOREIGN KEY (question_id) REFERENCES Question(id)
);

-- Create association table between Topic and Question
CREATE TABLE Question_Topic (
    question_id BIGINT,
    topic_id BIGINT,
    FOREIGN KEY (question_id) REFERENCES Question(id),
    FOREIGN KEY (topic_id) REFERENCES Topic(id),
    PRIMARY KEY (question_id, topic_id)
);

-- Create table for storing scores
CREATE TABLE Score (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nickname VARCHAR(100),
    email VARCHAR(100),
    country_of_birth VARCHAR(100),
    age INT,
    points INT,
    date_submitted DATE DEFAULT CURRENT_DATE
);

-- Insert Scores
INSERT INTO Score (nickname, email, country_of_birth, age, points) VALUES ('Stinka', 'stinka@meow.at', 'Austria', 16, 15);
INSERT INTO Score (nickname, email, country_of_birth, age, points) VALUES ('Lilu', 'lilu@whiskas.at', 'Austria', 15, 45);
INSERT INTO Score (nickname, email, country_of_birth, age, points) VALUES ('EinStein', 'onestone@example.com', '', 76, 70);
INSERT INTO Score (nickname, email, country_of_birth, age, points) VALUES ('Leiwandowski', 'robert@wp.pl', 'Poland', 35, 5);
INSERT INTO Score (nickname, email, country_of_birth, age, points) VALUES ('johndoe', 'jd@gmail.com', 'USA', 45, 50);
INSERT INTO Score (nickname, email, country_of_birth, age, points) VALUES ('Voestler', 'nurderskv@blauweiss.at', 'Austria', 74, 30);

-- Insert Topics
INSERT INTO Topic (name) VALUES ('Art');
INSERT INTO Topic (name) VALUES ('Literature');
INSERT INTO Topic (name) VALUES ('Informatics');
INSERT INTO Topic (name) VALUES ('History');
INSERT INTO Topic (name) VALUES ('Geography');

-- Insert Questions (is_multiple_choice = false indicates single choice, true indicates multiple choice)
INSERT INTO Question (text, is_multiple_choice) VALUES ('Who painted the Mona Lisa?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Who wrote "1984"?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('What does CPU stand for?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Who was the first President of the United States?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which country has a white flag with a red circle?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which artist is known for the painting "The Starry Night"?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which playwright wrote "Hamlet"?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('What is the main component of a computers memory?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('In which year did the World War I begin?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which continent is known as the "Dark Continent"?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which of the following are programming languages?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which of the following are famous novels?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which of the following are continents?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which of the following artists were part of the Renaissance?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which of the following countries are part of the European Union?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which of the following are famous historical figures?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which programming languages are primarily used for web development?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Who is known as the "Father of Computers"?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Who composed the music for "The Four Seasons"?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which countries have red in their flags?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Who was the inventor of the telephone?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which works are written by J.R.R. Tolkien?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which cities are capital cities?', true);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which region is widely recognized as the global center for technology and innovation?', false);
INSERT INTO Question (text, is_multiple_choice) VALUES ('Which of the following are ancient wonders of the world?', true);

-- Insert Answers for Single Choice Questions
-- Answers for Question 1
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Leonardo da Vinci', true, 1);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Vincent van Gogh', false, 1);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Pablo Picasso', false, 1);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Claude Monet', false, 1);

-- Answers for Question 2
INSERT INTO Answer (text, is_correct, question_id) VALUES ('George Orwell', true, 2);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Aldous Huxley', false, 2);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('J.K. Rowling', false, 2);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Ernest Hemingway', false, 2);

-- Answers for Question 3
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Central Processing Unit', true, 3);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Computer Processing Unit', false, 3);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Central Power Unit', false, 3);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Control Processing Unit', false, 3);

-- Answers for Question 4
INSERT INTO Answer (text, is_correct, question_id) VALUES ('George Washington', true, 4);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Thomas Jefferson', false, 4);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('John Adams', false, 4);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('James Madison', false, 4);

-- Answers for Question 5
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Japan', true, 5);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('China', false, 5);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('South Korea', false, 5);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Thailand', false, 5);

-- Answers for Question 6
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Vincent van Gogh', true, 6);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Leonardo da Vinci', false, 6);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Pablo Picasso', false, 6);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Salvador Dalí', false, 6);

-- Answers for Question 7
INSERT INTO Answer (text, is_correct, question_id) VALUES ('William Shakespeare', true, 7);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Christopher Marlowe', false, 7);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Ben Jonson', false, 7);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('John Milton', false, 7);

-- Answers for Question 8
INSERT INTO Answer (text, is_correct, question_id) VALUES ('RAM', true, 8);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('ROM', false, 8);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Hard Disk', false, 8);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Processor', false, 8);

-- Answers for Question 9
INSERT INTO Answer (text, is_correct, question_id) VALUES ('1914', true, 9);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('1918', false, 9);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('1939', false, 9);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('1945', false, 9);

-- Answers for Question 10
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Africa', true, 10);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Asia', false, 10);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('South America', false, 10);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Australia', false, 10);

-- Insert Answers for Multiple Choice Questions
-- Answers for Question 11
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Java', true, 11);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Python', true, 11);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('HTML', false, 11);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('JavaScript', true, 11);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('CSS', false, 11);

-- Answers for Question 12
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Moby Dick', true, 12);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('The Great Gatsby', true, 12);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('To Kill a Mockingbird', true, 12);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('National Geographic', false, 12);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Scientific American', false, 12);

-- Answers for Question 13
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Africa', true, 13);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Asia', true, 13);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Europe', true, 13);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Arctic', false, 13);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Antarctica', true, 13);

-- Answers for Question 14
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Leonardo da Vinci', true, 14);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Michelangelo', true, 14);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Raphael', true, 14);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Claude Monet', false, 14);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Vincent van Gogh', false, 14);

-- Answers for Question 15
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Germany', true, 15);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('France', true, 15);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Spain', true, 15);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Norway', false, 15);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Switzerland', false, 15);

-- Answers for Question 16
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Napoleon Bonaparte', true, 16);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Albert Einstein', true, 16);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Winston Churchill', true, 16);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Mark Zuckerberg', false, 16);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Steve Jobs', false, 16);

-- Answers for Question 17
INSERT INTO Answer (text, is_correct, question_id) VALUES ('JavaScript', true, 17);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Python', true, 17);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('C++', false, 17);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('PHP', true, 17);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Java', false, 17);

-- Answers for Question 18
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Charles Babbage', true, 18);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Alan Turing', false, 18);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Bill Gates', false, 18);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Steve Jobs', false, 18);

-- Answers for Question 19
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Antonio Vivaldi', true, 19);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Johann Sebastian Bach', false, 19);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Ludwig van Beethoven', false, 19);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Wolfgang Amadeus Mozart', false, 19);

-- Answers for Question 20
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Japan', true, 20);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('China', true, 20);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('South Korea', true, 20);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Germany', false, 20);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Brazil', false, 20);

-- Answers for Question 21
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Alexander Graham Bell', true, 21);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Thomas Edison', false, 21);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Nikola Tesla', false, 21);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Guglielmo Marconi', false, 21);

-- Answers for Question 22
INSERT INTO Answer (text, is_correct, question_id) VALUES ('The Hobbit', true, 22);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('The Lord of the Rings', true, 22);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Harry Potter', false, 22);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('The Silmarillion', true, 22);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Percy Jackson', false, 22);

-- Answers for Question 23
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Paris', true, 23);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('London', true, 23);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('New York', false, 23);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Tokyo', true, 23);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Sydney', false, 23);

-- Answers for Question 24
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Silicon Valley', true, 24);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Copper Hills', false, 24);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Iron Shores', false, 24);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Aluminium Fields', false, 24);

-- Answers for Question 25
INSERT INTO Answer (text, is_correct, question_id) VALUES ('The Great Pyramid of Giza', true, 25);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Hanging Gardens of Babylon', true, 25);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Colossus of Rhodes', true, 25);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Eiffel Tower', false, 25);
INSERT INTO Answer (text, is_correct, question_id) VALUES ('Statue of Liberty', false, 25);

-- Associate Questions with Topics
INSERT INTO Question_Topic (question_id, topic_id) VALUES (1, 1);  -- Art
INSERT INTO Question_Topic (question_id, topic_id) VALUES (2, 2);  -- Literature
INSERT INTO Question_Topic (question_id, topic_id) VALUES (3, 3);  -- Informatics
INSERT INTO Question_Topic (question_id, topic_id) VALUES (4, 4);  -- History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (5, 5);  -- Geography
INSERT INTO Question_Topic (question_id, topic_id) VALUES (6, 1);  -- Art
INSERT INTO Question_Topic (question_id, topic_id) VALUES (7, 2);  -- Literature
INSERT INTO Question_Topic (question_id, topic_id) VALUES (8, 3);  -- Informatics
INSERT INTO Question_Topic (question_id, topic_id) VALUES (9, 4);  -- History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (10, 5); -- Geography
INSERT INTO Question_Topic (question_id, topic_id) VALUES (11, 3);  -- Informatics
INSERT INTO Question_Topic (question_id, topic_id) VALUES (12, 2);  -- Literature
INSERT INTO Question_Topic (question_id, topic_id) VALUES (13, 5);  -- Geography
INSERT INTO Question_Topic (question_id, topic_id) VALUES (14, 1);  -- Art
INSERT INTO Question_Topic (question_id, topic_id) VALUES (15, 5);  -- Geography
INSERT INTO Question_Topic (question_id, topic_id) VALUES (14, 4);  -- Art and History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (15, 4);  -- Geography and History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (16, 4);  -- History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (16, 3);  -- History and Informatics
INSERT INTO Question_Topic (question_id, topic_id) VALUES (17, 3);  -- Informatics
INSERT INTO Question_Topic (question_id, topic_id) VALUES (17, 2);  -- Informatics and Literature
INSERT INTO Question_Topic (question_id, topic_id) VALUES (18, 3);  -- Informatics
INSERT INTO Question_Topic (question_id, topic_id) VALUES (19, 1);  -- Art
INSERT INTO Question_Topic (question_id, topic_id) VALUES (19, 4);  -- Art and History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (20, 5);  -- Geography
INSERT INTO Question_Topic (question_id, topic_id) VALUES (21, 4);  -- History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (22, 2);  -- Literature
INSERT INTO Question_Topic (question_id, topic_id) VALUES (22, 4);  -- Literature and History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (23, 5);  -- Geography
INSERT INTO Question_Topic (question_id, topic_id) VALUES (24, 3);  -- Informatics
INSERT INTO Question_Topic (question_id, topic_id) VALUES (24, 5);  -- Informatics and Geography
INSERT INTO Question_Topic (question_id, topic_id) VALUES (25, 4);  -- History
INSERT INTO Question_Topic (question_id, topic_id) VALUES (25, 5);  -- History and Geography
