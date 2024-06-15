# JOSAA-Data-Analysis
This project empowers aspiring engineers navigating the Joint Seat Allocation Authority (JoSAA) by providing historical data insights and interactive visualizations.
It aims to efficiently extract relevant data from the JoSAA website, meticulously removing inconsistencies and transforming it into a clean, structured format for analysis.
It also unveils trends and patterns within the data, focusing on institute cutoffs and seat allotment across different programs and years.
The project presents visualizations crafted using a user-friendly frontend framework to enable users to explore historical cutoff and seat allotment trends.
THe project facilitates informed decision-making by allowing users to:
Compare cutoffs between different institutes and programs over time.
Identify trends in seat allotment patterns.


## Tech Stack/Frameworks:
- Frontend: HTML, CSS, JavaScript (templates- home.html,about.html static/data_analysis- home.css, about.css)
* Backend: Django
+ Database: SQLite
- Data Scraping: Selenium, Beautiful Soup (logging_in.py,data_scraping.py)
* Data Cleaning: NumPy, Pandas (data-2016-2023.csv)
+ Data Visualization: Chart.js (static/data_analysis-script.js)

## Command to run the project locally
- download the project directory to your local device 
- download the dataset (2016-2023dataa.zip) from the data_analysis/static/data and save it as 2016-2023dataa.csv in the same location
- python manage.py runserver
- Then run the server locally on port 8000

## Home page
The home page provides a user-friendly interface for students to make informed decisions about their college applications
It provides features to:
- View year-wise cutoffs
- Analyze gender-wise cut-off trends
- Explore round-wise cut-off analysis

- ![Home page](https://github.com/blossomedinautumn/JOSAA_DataAnalysis/blob/main/data_analysis/static/images/home.png)

## View all Institutes
- Upon clicking this option(General Information of engineering colleges in india), a list of all IITs,NITs,IIITs,and other colleges that take part in JOSAA counselling is shown along with their NIRF Rankings(2023), Location their established year and their official website.
- ![Institute wise cutoff list](https://github.com/blossomedinautumn/JOSAA_DataAnalysis/blob/main/data_analysis/static/images/institute-wise.png)
 
## Know Popular Questions
- Our website also answers the most popular questions students have during the counselling process.
- Students can know what their peers are thinking and making informed decisions accordingly
- [Popular questions](data_analysis/static/images/popular.png)

## Analyze year wise cut-off trends
- Yearwise cutoff trends highlight the trends of various programs offered by a particular institute over the years. This helps understand the popularity and perception of programs offered by the institute, and helps us predict the expected cutoff for a given year.
- ![Year wise trends](https://github.com/blossomedinautumn/JOSAA_DataAnalysis/blob/main/data_analysis/static/images/year-wise.png)
  
- Upon selecting the institute, branch and seat category, user will get the detailed year-wise cut-off analysis based on the parameters.

## Roundwise cut-off Analysis
- Round trends highlight the general trend of closing ranks throughout the rounds of the counselling process. This helps understand the likely range of changes to the closing ranks throught the counselling proces.
- Users can get the round wise analysis of any institute by selecting the institute,seat type and branch. 
- Users will get line graphs depicting the roundwise trends for each year at that institute.
- ![roundwise trends](https://github.com/blossomedinautumn/JOSAA_DataAnalysis/blob/main/data_analysis/static/images/round-wise.png)







