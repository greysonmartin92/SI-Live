// Add new posts to the top of this list!
const posts = [
    {
        title: "Midterm Review Session Guidelines",
        date: "Week of Oct 14",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
        content: `Hello Team! 

As we approach midterms, please ensure your review session schedules are finalized in the system by Wednesday at 5:00 PM. 

Key Reminders:
• Submit your attendance within 24 hours.
• Reach out on the dashboard if you need coverage.`
    },
    {
        title: "Welcome to the Fall Semester",
        date: "Week of Aug 25",
        content: `Welcome back everyone! 

Please make sure you have completed your mandatory training modules before your first session. Check the Training Docs tab for the updated PDF guides.`
    }
];

const feedContainer = document.getElementById('newsletter-feed');

if (feedContainer) {
    let htmlOutput = '';

    posts.forEach(post => {
        const mediaTag = post.imageUrl ? `<img src="${post.imageUrl}" alt="Announcement Media" class="announcement-media">` : '';

        htmlOutput += `
        <section class="announcement-banner">
            <div class="announcement-header">
                <h3>${post.title}</h3>
                <span class="announcement-date">${post.date}</span>
            </div>
            ${mediaTag}
            <div class="announcement-body">${post.content}</div>

        </section>
        `;
    });

    feedContainer.innerHTML = htmlOutput;
}
