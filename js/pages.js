window.onload = function() {
    const table = document.getElementById('table');
    if (table) {
        const rows = table.querySelectorAll('tbody tr');
        // sellect row and numbers each row
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            //makes the row clickable and links each row to data-page-number
            row.onclick = function() {
                const pageId = row.getAttribute('data-page-number');
                if (pageId) {
                    window.location.href = "pages" + pageId + ".html";
                }
            };
        }
    }

    // Pages1
    const title1 = document.getElementById('title1');
    if (title1) {
        title1.value = "Home";
        document.getElementById('meta-title1').value = "Home | Seed of Hope";
        document.getElementById('meta-description1').value = "Home Page of Seed of Hope";
        document.getElementById('meta-keywords1').value = "Donate, Support, Orphanage, Children, Education, Healthcare, Food, Housing, Empowerment, Care, Charity, Donation";
        document.getElementById('url1').value = "index.html";
        document.getElementById('page_content1').value = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../style.css">
        <title>Home</title>
    </head>
    <body>
        <header>
            <div class="header">
                <div class="logo">
                    <h1><a href="index.html">Seed of Hope</a></h1>
                </div>
                <nav class="main-nav">
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="programs.html">Programs</a>
                    <a href="get_involved.html">Get Involved</a>
                    <a href="contact.html">Contact</a>
                    <a href="awareness.html">Awareness</a>
                </nav>
            </div>
        </header>
        <div class="container">
            <img src="../images/hero_img.jpg" alt="Hero Image" class="hero-img">
            <h1 align="center">Seed of Hope Organization</h1>
            <p class="home-p">
                Welcome to Seed of Hope Organization. 
                We are a non-profit organization dedicated to supporting orphanages 
                and giving children a brighter future through love
                , care, and education.
            </p>
        </div>
        <table class="home-table">
            <tr>
                <td>
                    <h2>about us</h2>
                    <p>Seed of Hope helps build a better future for children in need. by providing support and resources to orphanages and children in need. </p>
                    <a href="about.html" class="btn">About Us</a>
                </td>
                <td>
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide support and resources to orphanages and children in need, and to raise awareness about the importance of supporting children in need.</p>
                    <a href="mission.html" class="btn">Mission</a>
                </td>
                <td>
                    <h2>Our Vision</h2>
                    <p>Our vision is to create a world where every child has access to the resources they need to live a happy and healthy life.</p>
                    <a href="vision.html" class="btn">vision</a>
                </td>
            </tr>
        </table>
        <table class="home-table">
            <tr>
                <td>
                    <h2>News & Updates</h2>
                    <p>Stay updated with our organization's recent projects, community events, and success stories.</p>
                    <a href="news.html" class="btn">News & Updates</a>
                </td>
                <td>
                    <h2>Blog</h2>
                    <p>Read stories, reflections, and updates from our volunteers and community programs.</p>
                    <a href="blog.html" class="btn">Blog</a>
                </td>
            </tr>
        </table>
        <table class="home-table">
            <tr>
                <td>
                    <h2>Upcoming Events</h2>
                    <p>Discover upcoming events, workshops, and community gatherings hosted by our organization.</p>
                    <a href="event.html" class="btn">Upcoming Events</a>
                </td>
            </tr>

        </table>
        <footer>
            <div class="footer">
                <p>
                    Phone: +20 123 123 1231 | 
                    Email: info@seedofhope.com <br>
                    <a href="team.html">Our Team</a> |
                    <a href="FAQ.html">FAQ</a>
                    <div class="socials">
                        <a href="https://www.facebook.com"><img src="../images/widget-facebook.png"></a> |
                        <a href="https://www.instagram.com"><img src="../images/instagram_widget.jpeg"></a> |
                        <a href="https://www.twitter.com"><img src="../images/twitter_widget.jpg"></a>
                    </div>
                    <div>
                        <a href="comming_soon.html">Comming Soon</a>
                    </div>
                    2025 Seed of Hope
                </p>
            </div>
        </footer>
    </body>
</html>`;
    }

    // Pages2
    const title2 = document.getElementById('title2');
    if (title2) {
        title2.value = "About Us";
        document.getElementById('meta-title2').value = "About Us | Seed of Hope";
        document.getElementById('meta-description2').value = "About Us Page of Seed of Hope";
        document.getElementById('meta-keywords2').value = "Donate, Support, Orphanage, Children, Education, Healthcare, Food, Housing, Empowerment, Care, Charity, Donation";
        document.getElementById('url2').value = "about.html";
        document.getElementById('page_content2').value = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>About us</title>
</head>

<body>
    <header>
        <div class="header">
            <div class="logo">
                <h1><a href="index.html">Seed of Hope</a></h1>
            </div>
            <nav class="main-nav">
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="programs.html">Programs</a>
                <a href="get_involved.html">Get Involved</a>
                <a href="contact.html">Contact</a>
                <a href="awareness.html">Awareness</a>
            </nav>
        </div>
    </header>
    <div class="container">
        <h1>About Us</h1>
        <p>Seed of Hope is a non-profit organization dedicated to supporting and empowering communities. Our mission is to create a better future for all by providing education, healthcare, food, housing, and empowerment programs. We believe that every individual
            deserves access to basic needs and opportunities to improve their lives.</p>
    </div>
    <footer>
        <div class="footer">
            <p>
                Phone: +20 123 123 1231 | Email: info@seedofhope.com <br>
                <a href="team.html">Our Team</a> |
                <a href="FAQ.html">FAQ</a>
                <div class="socials">
                    <a href="https://www.facebook.com"><img src="images/widget-facebook.png"></a> |
                    <a href="https://www.instagram.com"><img src="images/instagram_widget.jpeg"></a> |
                    <a href="https://www.twitter.com"><img src="images/twitter_widget.jpg"></a>
                </div>
                © 2025 Seed of Hope
            </p>
        </div>
    </footer>
</body>

</html>`;
    }

    // Pages3
    const title3 = document.getElementById('title3');
    if (title3) {
        title3.value = "About Us";
        document.getElementById('meta-title3').value = "Contact Us | Seed of Hope";
        document.getElementById('meta-description3').value = "Contact Us Page of Seed of Hope";
        document.getElementById('meta-keywords3').value = "Donate, Support, Orphanage, Children, Education, Healthcare, Food, Housing, Empowerment, Care, Charity, Donation";
        document.getElementById('url3').value = "contact.html";
        document.getElementById('page_content3').value = `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Contact Page</title>
</head>

<body>
    <header>
        <div class="header">
            <div class="logo">
                <h1><a href="index.html">Seed of Hope</a></h1>
            </div>
            <nav class="main-nav">
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="programs.html">Programs</a>
                <a href="get_involved.html">Get Involved</a>
                <a href="contact.html">Contact</a>
                <a href="awareness.html">Awareness</a>
            </nav>
        </div>
    </header>
    <div class="container">
        <h1>Contact Us</h1>
        <form method="post" action="thank_you.html">
            <table class="form-table">
                <tr>
                    <td>
                        <label for="Name">Name:</label>
                    </td>
                    <td>
                        <input type="text" id="Name" name="Name" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Email">Email:</label>
                    </td>
                    <td>
                        <input type="email" id="Email" name="Email" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Phone_Number">Phone Number:</label>
                    </td>
                    <td>
                        <input type="text" id="Phone_Number" name="Phone_Number" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Inquiry_Type">Inquiry Type:</label>
                    </td>
                    <td>
                        <select id="Inquiry_Type" name="Inquiry_Type">
                                <option value="general" selected>General</option>
                                <option value="support">Support</option>
                                <option value="feedback">Feedback</option>
                            </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Subject">Subject:</label>
                    </td>
                    <td>
                        <input type="text" id="Subject" name="Subject" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Message">Message:</label>
                    </td>
                    <td>
                        <textarea id="Message" name="Message" rows="4" cols="30" required></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Attachment">Attachment:</label>
                    </td>
                    <td>
                        <input type="file" id="Attachment" name="Attachment">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input class="btn" type="submit" value="Submit">
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <footer>
        <div class="footer">
            <p>
                Phone: +20 123 123 1231 | Email: info@seedofhope.com <br>
                <a href="team.html">Our Team</a> |
                <a href="FAQ.html">FAQ</a>
                <div class="socials">
                    <a href="https://www.facebook.com"><img src="../images/widget-facebook.png"></a> |
                    <a href="https://www.instagram.com"><img src="../images/instagram_widget.jpeg"></a> |
                    <a href="https://www.twitter.com"><img src="../images/twitter_widget.jpg"></a>
                </div>
                © 2025 Seed of Hope
            </p>
        </div>
    </footer>
</body>`;
    }
};

function pagesBack() {
    window.location.href = "pages.html";
}